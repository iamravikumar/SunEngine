import { copyToClipboard, date } from "quasar";
import { scroll } from "quasar";
const { getScrollTarget, setScrollPosition } = scroll;

export default function prepareParagraphs() {
    if (this.headersPrepared) return;

    const textEl = this.$el.getElementsByClassName("material__text")[0];
    const headers = textEl.querySelectorAll("h1,h2,h3,h4,h5,h6");

    const router = this.$router;
    const successNotify = this.$successNotify.bind(this);
    const tl = this.$tl.bind(this);
    const allNames = {};
    for (const header of headers) {
        if (header.classList.contains("no-anchor")) continue;
        const link = document.createElement("a");
        link.classList.add("header-anchor");
        link.classList.add("link");
        let id = encodeURIComponent(header.innerText);
        while (allNames[id]) id = id + "1";
        allNames[id] = true;
        header.id = id;
        link.href = window.location.href.split("#")[0] + "#" + id;
        link.addEventListener("click", function(e) {
            e.preventDefault();
            copyToClipboard(link.href)
                .then(() => successNotify(tl("linkCopied")))
                .catch(() => router.replace(link.href));
            return false;
        });
        link.innerText = "#";
        header.appendChild(link);
    }

    this.headersPrepared = true;

    if (this.$route.hash) {
        const el = document.getElementById(this.$route.hash.substring(1));
        setScrollPosition(getScrollTarget(el), el.offsetTop, 300);
    }
}
