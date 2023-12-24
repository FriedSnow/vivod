export function createItem(name, price, title, img){
    let item = document.createElement('div');
    let image = document.createElement('img');
    let divBody = document.createElement('div');
    let h5 = document.createElement('h5');
    let ptitle = document.createElement('p');
    let pPrice = document.createElement('p');

// STYLE
    item.classList.add('card', 'm-3');
    item.style.width = "22rem";
    item.style.float = "left";

    image.classList.add('card-img-top');
    image.src = img;

    divBody.classList.add('card-body');

    h5.classList.add('card-title');
    h5.textContent = name;

    ptitle.classList.add('car-text');
    ptitle.innerText = title;

    pPrice.innerText = price;

    divBody.append(h5, ptitle, pPrice);
    item.append(image, divBody);
    return {item}
}

