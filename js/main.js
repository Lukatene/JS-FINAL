const sr = ScrollReveal({
  distance: "90px",
  duration: 3000,
});

sr.reveal(`.home__data`, { origin: "top", delay: 400 });
sr.reveal(`.home__img`, { origin: "bottom", delay: 600 });
sr.reveal(`.home__footer`, { origin: "bottom", delay: 800 });






fetch("https://lukatene.github.io/JS-FINAL/shop.json", {
  method: "GET",
})
  .then((data) => data.json())
  .then((data) => {
    let parent = document.querySelector(".parent");
    data.map((item) => {
      let html = `<div class="children">
     <h1 class="name">${item.name}</h1>
     
     <img class="shop_image" src="${item.url}" alt="img" />
     <p class="age">${item.age}</p>
   </div>`;
      parent.innerHTML += html;
    });
  });
