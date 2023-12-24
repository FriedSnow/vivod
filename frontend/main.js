import { createItem } from "./item.js";
import { getAllitem} from "./requests.js";

(function () {

    let list = document.getElementById('list');
    async function elementsGenerator() {
        const items = await getAllitem();
        for (let item of items) {
            let listItem = createItem(item.name, item.price, item.title, item.img);
            list.append(listItem.item);
        }
    }

    document.addEventListener('DOMContentLoaded', function (e) {
        e.preventDefault();
        elementsGenerator();       
    })
})();