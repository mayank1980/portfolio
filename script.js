

// window.onload = function() {
//   window.scrollTo(0, document.body.scrollHeight);}



// dynamic card creattion

const cardData = [
  {
      image: 'download.jpg',
      title: 'NEWS WEBSITE',
      description: 'THIS IS THE NEW WEBSITE  CREATED <br>BY USING THE CONTEXT API',
      link: 'https://youtu.be/kq19ZFnmze8?si=gEBibO6IJNY07eMV'
  },
  {
      image: "images.jpg",
      title: 'MYNTRA APP CLONE',
      description:'THIS IS THE CLONE APPLICATION OF THE MYNTRA APP USING CONTEXT API',
      link: 'https://youtu.be/kq19ZFnmze8?si=gEBibO6IJNY07eMV'
  },
  {
      image: 'download.png',
      title:'LIVE WEATHER WEBSITE',
      description: 'THIS IS THE LIVE WEATHER STATUS SHOWING APP USING CONTEXT API',
      link: 'https://youtu.be/kq19ZFnmze8?si=gEBibO6IJNY07eMV'
  }
,
  {
    image: 'project.png',
    title: 'ONLINE FOOD ORDER WEBSITE',
    description: 'THIS IS THE ONLINE FOOD OREDER APP USED TO ORDER THE FOOD.',
    link: 'https://youtu.be/kq19ZFnmze8?si=gEBibO6IJNY07eMV'
}
,

{
  image: 'logo.jpg',
  title: 'RESTURANT WEBSITE',
  description:`THIS IS THE RESTURANT's WEBSITE TO ORDER FOOD ONLINE`,
  link: 'https://youtu.be/kq19ZFnmze8?si=gEBibO6IJNY07eMV'
}
];



const postContainer=document.querySelector(".card-container");

const postMethods=()=>{
  cardData.map((postData)=>{
  const postElement=document.createElement("div");
  postElement.classList.add("card");
  postElement.innerHTML=`<img src=${postData.image} alt="Card Image" class="card-image">
          <h2 class="card-title">${postData.title}</h2>
          <p class="card-description">${postData.description}</p><br>
          <a href="${postData.link}" class="card-link">${postData.link}</a>


  `;

  postContainer.appendChild(postElement);
  })
}


postMethods();




// work function


// document.getElementById('button').onclick = function work() {
//   // Create a new <ul> element
//   let ul = document.createElement('ul');

//   // Create and append <li> elements to the <ul>
//   let items = ['Item 1', 'Item 2', 'Item 3'];
//   for (let i = 0; i < items.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = items[i]; // or use li.innerText = items[i];
//       ul.appendChild(li);

//   }
//   console.log(ul);

//   // Append the <ul> to the #listContainer div
//   document.getElementById('listContainer').appendChild(ul);
// };





function work() {
  var click = document.getElementById("list-items");
  if (click.style.display === "grid") {
     click.style.display = "none";
  } else {
     click.style.display = "grid";
  }
}




document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById('hoverButton');
  const hoverDiv = document.getElementById('hoverDiv');

  // Show the div when mouse is over the button
  button.addEventListener('mouseover', function() {
      hoverDiv.style.display = 'block';
  });

  // Hide the div when mouse leaves the button
  button.addEventListener('mouseout', function() {
      hoverDiv.style.display = 'none';
  });
});



window.onload = function() {
  window.scrollTo(0, 0);}