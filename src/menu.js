// Here I will develop all menu options functions.

function createMenuPage() {
  const menuDiv = document.createElement('div');
  menuDiv.id = 'menu-div';

  const product1 = document.createElement('img');
  product1.id = 'product-1';
  product1.classList.add('menu-img');
  product1.src = '../src/assets/guillaume-coue-menu-1.png';
  product1.alt = 'PRODUCT 1';
  const product1Info = document.createElement('p');


  const product2 = document.createElement('img');
  product2.id = 'product-2';
  product2.classList.add('menu-img');
  product2.src = '../src/assets/romeo-a-menu-2.png';
  product2.alt = 'PRODUCT 2';

  const product3 = document.createElement('img');
  product3.id = 'product-3';
  product3.classList.add('menu-img');
  product3.src = '../src/assets/kuremo-menu-3.png';
  product3.alt = 'PRODUCT 3';



  menuDiv.append(product1, product2, product3);

  return menuDiv;
}

export function loadMenuPage() {
  const main = document.querySelector('#main');

  main.append(createMenuPage());
}