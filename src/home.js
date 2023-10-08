 function createHomePage() {
  const homePageDiv = document.createElement('div');
  homePageDiv.id = 'home-page-div';

  const restaurantName = document.createElement('h1');
  restaurantName.id = 'restaurant-name';
  restaurantName.innerHTML = `Welcome to Okonomi Flavors<br>
                              <span id="restaurant-type">Traditional Japanese Restaurant</span>`;

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
  and time-honored techniques that have made us a beloved culinary destination.`;

  const workScheduleDiv = document.createElement('div');
  workScheduleDiv.id = 'work-schedule-div';
  
  const hoursTitle = document.createElement('h2');
  hoursTitle.id = 'hours-h2';
  hoursTitle.textContent = 'Working Hours';

  const hoursMonday = document.createElement('p');
  hoursMonday.classList.add('hours');
  hoursMonday.textContent = 'Monday: 10:00 - 21:00';
  const hoursTuesday = document.createElement('p');
  hoursTuesday.classList.add('hours');
  hoursTuesday.textContent = 'Tuesday: 10:00 - 21:00';
  const hoursWednesday = document.createElement('p');
  hoursWednesday.classList.add('hours');
  hoursWednesday.textContent = 'Wednesday: 10:00 - 21:00';
  const hoursThursday = document.createElement('p');
  hoursThursday.classList.add('hours');
  hoursThursday.textContent = 'Thursday: 10:00 - 21:00';
  const hoursFriday = document.createElement('p');
  hoursFriday.classList.add('hours');
  hoursFriday.textContent = 'Friday: 10:00 - 21:00';
  const hoursSaturday = document.createElement('p');
  hoursSaturday.classList.add('hours');
  hoursSaturday.textContent = 'Saturday: 10:00 - 18:00';

  workScheduleDiv.append(hoursTitle, hoursMonday, hoursTuesday, hoursWednesday,  
                         hoursThursday, hoursFriday, hoursSaturday);
  homePageDiv.append(restaurantName, homeParagraph, workScheduleDiv);
  
  return homePageDiv;
}

export function loadHomePage() {
const main = document.querySelector('#main');

main.append(createHomePage());
}
