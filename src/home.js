// Here I will create the functions of  'home page'.

 function createHomePage() {
  const homePageDiv = document.createElement('div');
  homePageDiv.id = 'home-page-div';

  const homeParagraph = document.createElement('p');
  homeParagraph.id = 'home-paragraph';
  homeParagraph.innerHTML = `
  The art of crafting mouthwatering okonomiyaki has 
  been our passion and tradition since 1900. 
  With over a century of dedicated service, 
  we take immense pride in our commitment to delivering 
  not only the finest flavors but also the warmest hospitality to our 
  cherished customers. <br><br>
  
  For generations, our family-owned establishment has 
  perfected the delicate balance of savory and sweet, crispy and tender, 
  that defines the essence of okonomiyaki. Every dish we create is 
  a labor of love, passed down through the years, preserving the authenticity 
  and time-honored techniques that have made us a beloved culinary destination.
  `

  homePageDiv.append(homeParagraph);
  main.append(homePageDiv);
  
  return homePageDiv;
}

export function loadHomePage() {

  main.appendChild(createHomePage());
}
