import axios from 'axios'
import Lock from 'js-lock'

import {store as store} from 'sun'
import {router} from 'sun'
import {app} from 'sun'
import {removeTokens, setTokens, getTokens} from 'sun'
import {routeCheckAccess} from 'sun'
import {consoleTokens, consoleUserLogout, consoleRequestStart, consoleRequestUrl} from 'sun'


const lock = new Lock("request-lock");


const apiAxios = axios.create({baseURL: config.API, withCredentials: process.env.DEV});


apiAxios.interceptors.response.use(async rez => {
  await checkTokens(rez);
  return rez;
}, async rez => {
  console.error(rez.response);
  await checkTokens(rez.response);
  throw rez;
});


export default async function(url, body, sendAsJson = false, skipLock = false) {

  if(body.sendAsJson) {
    sendAsJson = body.sendAsJson;
    delete body.sendAsJson;
  }

  if(body.skipLock) {
    skipLock = body.skipLock;
    delete body.skipLock;
  }

  if (config.Log.Requests)
    console.log(`%cRequest%c${url}`, consoleRequestStart, consoleRequestUrl, body);

  const headers = {};

  const tokens = getTokens();

  if (skipLock) {
    if (checkLocalTokensExpire())
      headers['LongToken1'] = tokens.longToken;

    return makeRequest();
  }

  return lock.lock(() => {
      if (checkLocalTokensExpire()) {
        headers['LongToken1'] = tokens.longToken;
        return makeRequest();
      }
    }
  ).then(x => x ? x : makeRequest());


  function checkLocalTokensExpire() {

    if (!tokens)
      return false;

    const nowDate = new Date(new Date().toUTCString());
    const exp = tokens.shortTokenExpiration;

    //console.log("now - exp", nowDate, exp);

    const rez = exp < nowDate;

    if (rez)
      console.log('%cTokens expire', consoleTokens);

    return rez;
  }

  function makeRequest() {

    if (tokens)
      headers['Authorization'] = `Bearer ${tokens.shortToken}`;

    if (body) {
      if ((typeof body === 'object')) {
        if (body instanceof FormData) {

        } else if (sendAsJson === false) {
          body = ConvertObjectToFormData(body);
        } else {
          headers['Content-Type'] = 'application/json';
          body = JSON.stringify(body);
        }
      } else
        headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    return apiAxios.post(url, body,
      {
        headers: headers,
      });

  }
}


function ConvertObjectToFormData(obj) {
  const formData = new FormData();

  for (const key in obj)
    if (obj.hasOwnProperty(key))
      formData.append(key, obj[key]);

  return formData;
}

async function checkTokens(rez) {

  const tokensHeader = rez.headers.tokens;

  if (tokensHeader) {

    if (tokensHeader === 'expire') {

      removeTokens();
      console.info('%cLogout', consoleUserLogout);

      store.commit('clearAllUserRelatedData');
      await store.dispatch('loadAllCategories', {skipLock: true});
      await store.dispatch('loadAllMenuItems', {skipLock: true});
      await store.dispatch('setAllRoutes');

      routeCheckAccess(router.currentRoute);
      router.push(router.currentRoute);
      app.rerender();
      return;

    } else {

      const newTokens = JSON.parse(tokensHeader);

      newTokens.shortTokenExpiration = new Date(newTokens.shortTokenExpiration);

      setTokens(newTokens);

      console.info('%cTokens refreshed', consoleTokens);
    }
  }

  return rez;
}
