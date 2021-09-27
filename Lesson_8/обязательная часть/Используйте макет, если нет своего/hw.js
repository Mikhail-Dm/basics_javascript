"use strict";

let cartIconWrapCounter = document.querySelector('span.cartIconWrapCounter')
cartIconWrapCounter.style.display = 'none';

let cartTable = document.querySelector('table.cartTable');

let imgCartIcon = document.querySelector('img.cartIcon');
imgCartIcon.addEventListener('click', function () {
    cartTable.classList.toggle('cartTableHidden');
})


let cartTableResult = document.querySelector('.cartTableResult');
let buttonItems = document.getElementsByTagName('button');
let nameItem, priceItem;
let cardTableItem = document.querySelector('.cardTableItem');
let containerResult = new Object(); // {'item': [quantityItem, priceItem, resultPrice]}
let quantityItem, resultPrice, classItem;

for (let i = 0; i < buttonItems.length; i++) {
    buttonItems[i].addEventListener('click', function (event) {
        if (event.target.parentNode.classList.value === 'featuredImgDark') {
            nameItem = event.target.parentNode.parentNode.parentNode.querySelector('.featuredName').innerHTML.trim();
            priceItem = event.target.parentNode.parentNode.parentNode.querySelector('.featuredPrice').innerHTML.trim();
            // переменные выше не обязательно было вставлять, но решил добавить для ясности
            if (Object.keys(containerResult).length == 0) {
                containerResult[nameItem] = [1, priceItem, priceItem];
                cardTableItem.querySelector('tr').classList.add(`cartTableClass_${nameItem}`);
                classItem = document.querySelector(`.cartTableClass_${nameItem}`);
                classItem.querySelector(`.cartTableNameItem`).innerText = nameItem;
                classItem.querySelector(`.cartTableQuantityItem`).innerText = containerResult[nameItem][0];
                classItem.querySelector(`.cartTablePriceItem`).innerText = containerResult[nameItem][1];
                classItem.querySelector(`.cartTableResultPrice`).innerText = containerResult[nameItem][2];
                document.querySelector(`.cartTableResult`).innerText = containerResult[nameItem][2];

            } else if (cardTableItem.querySelector(`.cartTableClass_${nameItem}`)) {

                containerResult[nameItem][0] += 1;
                containerResult[nameItem][2] = parseFloat(containerResult[nameItem][1].match(/\d+/) * containerResult[nameItem][0]).toFixed(2);

                classItem = document.querySelector(`.cartTableClass_${nameItem}`);
                classItem.querySelector(`.cartTableQuantityItem`).innerText = containerResult[nameItem][0];

                classItem.querySelector(`.cartTableResultPrice`).innerText = '$' + parseFloat(Number(classItem.querySelector(`.cartTableResultPrice`).innerText.match(/\d+/)) + Number(containerResult[nameItem][1].match(/\d+/))).toFixed(2);
                cartTableResult.innerText = '$' + parseFloat(Number(cartTableResult.innerText.match(/\d+/)) + Number(containerResult[nameItem][1].match(/\d+/))).toFixed(2);

            } else if (!(cardTableItem.querySelector(`.cartTableClass_${nameItem}`))) {
                containerResult[nameItem] = [1, priceItem, priceItem];
                cardTableItem.insertAdjacentHTML('beforeend', `<tr style="height: 55px;" class="cartTableClass_${nameItem}">
                <td class="cartTableNameItem">${nameItem}</td>
                <td class="cartTableQuantityItem">${containerResult[nameItem][0]}</td>
                <td class="cartTablePriceItem">${containerResult[nameItem][1]}</td>
                <td class="cartTableResultPrice">${containerResult[nameItem][2]}</td>
            </tr>`);
                cartTableResult.innerText = '$' + parseFloat(Number(cartTableResult.innerText.match(/\d+/)) + Number(containerResult[nameItem][1].match(/\d+/))).toFixed(2);
            }
        }
    })
}


// Задание очень интересное и непростое. Спасибо!