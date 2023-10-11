import firstProductImage from './assets/first-product.png';
import secondProductImage from './assets/second-product.png';
import thirdProductImage from './assets/third-product.png';
import fourthProductImage from './assets/fourth-product.png';

function createMenuPage() {
  // Create a container to append all the products for the menu
  const menuContainer = document.createElement('div');
  menuContainer.id = 'menu-div';

  menuContainer.append(
    createProduct(
      'Samurai Bacon',
      firstProductImage,
      `Introducing our Samurai Bacon Okonomiyaki where savory meets sensational! <br>
      Delight in a harmonious blend of crispy, 
      smoky bacon and the classic Japanese pancake, cooked to perfection.`,
      'Price: 5.70$'
    )
  );

  menuContainer.append(
    createProduct(
      'Fuji sensation',
      secondProductImage,
      `Behold the Fuji Sensation Okonomiyaki, a culinary masterpiece that ascends 
      to new heights of taste and delight! <br>
      This explicit sensation boasts a foundation of tender cabbage and savory pork belly, creating a delectable contrast of textures and flavors.`,
      'Price: 7.50$'
    )
  );

  menuContainer.append(
    createProduct(
      'Ninja way',
      thirdProductImage,
      `Prepare to embark on a culinary adventure like no other with our Ninja Way Okonomiyaki! <br>
      This dish is crafted with crisp shredded carrots and delicate vegetables, providing a delightful harmony of textures and tastes.`,
      'Price: 6.90$'
    )
  );

  menuContainer.append(
    createProduct(
      'Shrimp eruption',
      fourthProductImage,
      `Prepare for a flavor eruption like no other with our Shrimp Eruption Okonomiyaki! <br>
       This extraordinary dish takes the classic Japanese pancake to new heights by featuring a generous eruption of succulent shrimp, 
       creating a delicious symphony of tastes and textures.`,
      'Price: 9.60$'
    )
  );

  return menuContainer;
}

function createProduct(productTitle, productImagePath, description, price) {
  const productCard = document.createElement('div');
  productCard.id = 'product-card';

  const productImage = document.createElement('img');
  productImage.id = 'product-img';
  productImage.src = productImagePath;
  productImage.alt = productTitle;

  const productName = document.createElement('h2');
  productName.id = 'product-title';
  productName.textContent = productTitle;

  const productDescription = document.createElement('p');
  productDescription.id = 'product-description';
  productDescription.innerHTML = description;

  const productPrice = document.createElement('p');
  productPrice.id = 'product-price';
  productPrice.textContent = price;

  productCard.append(productImage);
  productCard.append(productName);
  productCard.append(productDescription);
  productCard.append(productPrice);

  return productCard;
}

export function loadMenuPage() {
  const main = document.querySelector('#main');

  main.append(createMenuPage());
}