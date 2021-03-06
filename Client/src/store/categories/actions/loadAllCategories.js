import { consoleInit } from "utils";

export default function(context, data) {
	return request(Api.Categories.GetAllCategoriesAndAccesses, {
		skipLock: data?.skipLock
	}).then(response => {
		console.info(
			"%cLoadAllCategories",
			consoleInit,
			config.Dev.LogInitExtended ? response.data : ""
		);
		context.commit("prepareAllCategories", response.data);
	});
}
