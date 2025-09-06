let lodeCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((dataCa) => displayCategories(dataCa.categories));
};
let displayCategories = (categories) => {
  let categoriescContanar = document.getElementById("categories-contanar");
  //   categoriescContanar.innerHTML = "";
  for (let categorie of categories) {
    let btnDiv = document.createElement("div");
    btnDiv.innerHTML = `<button onclick="lodeByCategories(${categorie.id})" class=" btn btn-soft btn-primary w-full mt-4 text-black border-none ">${categorie.category_name}</button>
    `;
    categoriescContanar.appendChild(btnDiv);
  }
};
lodeCategories();

let lodeByCategories = (id) => {
  let url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((dataByCa) => displayPlantByCategoies(dataByCa.plants));
};
let displayPlantByCategoies = (plantsByCategories) => {
  let cartContaner = document.getElementById("card-contaner");
  cartContaner.innerHTML = "";
  for (let plantsByCategorie of plantsByCategories) {
    let cardDiv = document.createElement("div");
    cardDiv.innerHTML = `<div class="bg-white shadow-md rounded-lg p-4 mb-6 ">
      <img class="w-full h-48 object-cover rounded-xl" src="${plantsByCategorie.image}" alt="" />
      <h1 class="text-xl font-bold">${plantsByCategorie.name}</h1>
      <p class="">
        ${plantsByCategorie.description} </p>
      <div class="flex justify-between items-center">
        <h1 class=" bg-[#DCFCE7] text-[#15803D] rounded-2xl w-25 te ">${plantsByCategorie.category}</h1>
        <h1>৳${plantsByCategorie.price}</h1>
      </div>
    </div>
    `;
    cartContaner.appendChild(cardDiv);
  }
};

let lodeAllPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((dataAllPlant) => displayAllPlant(dataAllPlant.plants));
};
let displayAllPlant = (allPlants) => {
  let cartContaner = document.getElementById("card-contaner");
  cartContaner.innerHTML = "";
  for (let allPlant of allPlants) {
    let cardDiv = document.createElement("div");
    cardDiv.innerHTML = `<div class="bg-white shadow-md rounded-lg p-4 mb-6 ">
      <img class="w-full h-48 object-cover rounded-xl" src="${allPlant.image}" alt="" />
      <h1 class="text-xl font-bold">${allPlant.name}</h1>
      <p class="">
        ${allPlant.description} </p>
      <div class="flex justify-between items-center">
        <h1 class=" bg-[#DCFCE7] text-[#15803D] rounded-2xl w-25 te ">${allPlant.category}</h1>
        <h1>৳${allPlant.price}</h1>
      </div>
    </div>
    `;
    cartContaner.appendChild(cardDiv);
  }
};
lodeAllPlants();
