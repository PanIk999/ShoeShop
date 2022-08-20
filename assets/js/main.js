const data = [
  {
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    name: "Air",
    brand: "Nike",
    price: "120.00 $",
    sizes: ["37", "38", "39"],
  },
  {
    img: "https://images.unsplash.com/photo-1584735174965-48c48d7edfde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    name: "Dunk High Pro",
    brand: "Nike",
    price: "150.00 $",
    sizes: ["37", "38", "39", "40", "42"],
  },
  {
    img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80",
    name: "Old Skool",
    brand: "Vans",
    price: "50.00 $",
    sizes: ["37"],
  },
  {
    img: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80",
    name: "Summer Party",
    brand: "Nike",
    price: "100.00 $",
    sizes: ["42", "43", "44", "45", "46"],
  },
  {
    img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    name: "Retro",
    brand: "Adidas",
    price: "149.00 $",
    sizes: ["39", "40"],
  },
  {
    img: "https://images.unsplash.com/photo-1528701800487-ba01fea498c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "Fancy Doc",
    brand: "Crocs",
    price: "79.00 $",
    sizes: ["37", "38", "39", "40", "41", "42"],
  },
  {
    img: "https://images.unsplash.com/photo-1541597455068-49e3562bdfa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Classic",
    brand: "Reebok",
    price: "99.00 $",
    sizes: ["43", "44", "45", "46"],
  },
  {
    img: "https://images.unsplash.com/photo-1628429437853-40ec8ebe3386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    name: "Jungle",
    brand: "New Balance",
    price: "110.00 $",
    sizes: ["39", "40", "41", "42"],
  },
  {
    img: "https://images.unsplash.com/photo-1604163546180-039a1781c0d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    name: "Essentials",
    brand: "Errant",
    price: "120.00 $",
    sizes: ["41", "42", "43", "44", "45", "46"],
  },
  {
    img: "https://images.unsplash.com/photo-1571216332002-282dce467b32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Très chic",
    brand: "Nike",
    price: "150.00 $",
    sizes: ["45", "46"],
  },
  {
    img: "https://images.unsplash.com/photo-1542601600647-3a722a90a76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80",
    name: "Plastic Revolution",
    brand: "Adidas",
    price: "180.00 $",
    sizes: ["37", "38", "39", "40"],
  },
  {
    img: "https://images.unsplash.com/photo-1644001992668-3b9ed080533a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Sporty",
    brand: "Asics",
    price: "90.00 $",
    sizes: ["41", "42", "43", "44"],
  },
];

const newContainer = document.querySelector("#new");

// const overlay = document.createElement("div");
// overlay.style.backgroundColor = "red";
// overlay.style.objectFit = "cover";
// overlay.style.zIndex = 2;
// overlay.style.opacity = 0.369;

const accept = document.getElementById("accept");
const reject = document.getElementById("reject");
let nav = document.getElementById("1");
let nav2 = document.getElementById("2");
if (document.cookie == "") {
  nav.style.display = "none";
}
if (document.cookie !== "") {
  document.body.style.backgroundColor = "transparent";
  document.body.style.opacity = 999;
  nav2.style.display = "none";
}
accept.addEventListener("click", function () {
  document.cookie = `username=SamCookie; Max-Age=1000000000; path=/`;
  location.reload();
});
reject.addEventListener("click", function () {
  document.cookie = `username=; Max-Age=-1; path=/`;
  location.reload();
});

const items = document.getElementById("items");

for (let i = 0; i < data.length; i++) {
  const picContainer = document.createElement("div");
  picContainer.setAttribute("class", "shoeBox");
  const image = document.createElement("img");
  const addShoe = document.createElement("div");
  const name = document.createElement("P");
  const add = document.createElement("button");
  const brand = document.createElement("P");
  const price = document.createElement("P");
  const sizes = document.createElement("P");
  image.setAttribute("class", "shoeImage");
  addShoe.setAttribute("id", "addShoe");
  name.setAttribute("class", "shoeDetail");
  add.setAttribute("class", "add");
  add.innerText = "+";
  name.setAttribute("id", "shoeName");
  brand.setAttribute("class", "shoeDetail");
  brand.setAttribute("id", "shoeBrand");
  price.setAttribute("class", "shoeDetail");
  price.setAttribute("id", "shoePrice");
  sizes.setAttribute("class", "shoeDetail");
  sizes.setAttribute("id", "shoeSize");
  picContainer.appendChild(image);
  picContainer.appendChild(addShoe);
  addShoe.appendChild(price);
  addShoe.appendChild(add);
  picContainer.appendChild(brand);
  picContainer.appendChild(name);
  picContainer.appendChild(sizes);

  image.src = data[i].img;
  name.innerText = data[i].name;
  brand.innerText = data[i].brand;
  price.innerText = data[i].price;
  sizes.innerText = data[i].sizes;
  document.querySelector("#new").appendChild(picContainer);
  let buttonList = document.querySelectorAll(".add");
  let button = Array.from(buttonList);

  let counter = 0;
  for (let j = 0; j < button.length; j++) {
    button[j].addEventListener("click", function () {
      counter++;
      items.innerHTML = counter;
      // if(button[j].innerHTML == data[i].answer){
      //   this.style.backgroundColor = "green";
      // }
    });
  }
}
