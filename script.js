let lodeCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((dataCa) => displayCategories(dataCa.categories));
};
let displayCategories = (categories) => {
  let categoriescContanar = document.getElementById("categories-contanar");
  categoriescContanar.innerHTML = "";
  //   categoriescContanar.innerHTML = "";
  for (let categorie of categories) {
    let btnDiv = document.createElement("div");
    btnDiv.innerHTML = `<button id="btn-Categories${categorie.id}" onclick="lodeByCategories(${categorie.id});addOrRemoveHighLight(${categorie.id}) " class=" btn btn-soft btn-success  w-full mt-4 text-black border-none btn-clicked ">${categorie.category_name}</button>
    `;
    categoriescContanar.appendChild(btnDiv);
  }
};
lodeCategories();

let addOrRemoveHighLight = (id) => {
  let button = document.querySelectorAll(".btn-clicked");
  button.forEach((btn) => btn.classList.remove("highlight"));
  let btn = document.getElementById(`btn-Categories${id}`);
  btn.classList.add("highlight");
};

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
    cardDiv.innerHTML = `<div onclick="lodeDetaile(${plantsByCategorie.id})" class="bg-white shadow-md rounded-lg p-4 mb-6  ">
      <img class="w-full h-48 object-cover rounded-xl" src="${plantsByCategorie.image}" alt="" />
      <h1 class="text-xl font-bold">${plantsByCategorie.name}</h1>
      <p class="">
        ${plantsByCategorie.description} </p>
      <div class="flex justify-between items-center">
        <h1 class=" bg-[#DCFCE7] text-[#15803D] rounded-2xl w-25 text-center ">${plantsByCategorie.category}</h1>
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
    cardDiv.innerHTML = `<div onclick="lodeDetaile(${allPlant.id})"  class="bg-white shadow-md rounded-lg p-4 mb-6  ">
      <img class="w-full h-48 object-cover rounded-xl" src="${allPlant.image}" alt="" />
      <h1 class="text-xl font-bold">${allPlant.name}</h1>
      <p class="">
        ${allPlant.description} </p>
      <div class="flex justify-between items-center">
        <h1 class=" bg-[#DCFCE7] text-[#15803D] rounded-2xl w-25 text-center ">${allPlant.category}</h1>
        <h1>৳${allPlant.price}</h1>
      </div>
    </div>
    `;
    cartContaner.appendChild(cardDiv);
  }
};
lodeDetaile = (id) => {
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then((res) => res.json())
    .then((deatile) => displayDetaile(deatile.plants));
};
displayDetaile = (details) => {
  let modalBox = document.getElementById("modal-box");
  modalBox.innerHTML = ` <div class="bg-white p-6 rounded-2xl shadow-xl">
        <h1 class="text-2xl font-bold text-gray-800 mb-2">${details.name}</h1>
        <img class="w-full h-60 object-cover rounded-xl mb-4 "  src="${details.image}" alt=""  >
        <p><span class="font-bold">Category :</span> <span> ${details.category} </span></p>
        <p ><span class="font-bold">Price :</span> <span>${details.price}</span></p>
        <p> <span class="font-bold">Description :</span> <span>${details.description}</span></p>
    </div>`;
  document.getElementById("my_modal_5").showModal();
};
lodeAllPlants();
