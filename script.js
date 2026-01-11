let cartData = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
  cartData.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cartData));
  alert("Added to cart 🛒");
}

function loadCart(){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let html="";
  let total=0;

  cart.forEach(i=>{
    html+=`<p>${i.name} - ₹${i.price}</p>`;
    total+=Number(i.price);
  });

  document.getElementById("cart").innerHTML =
    html + `<h3>Total: ₹${total}</h3>`;
}

function orderWhatsApp(){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let msg="UrbanWear Order:%0A";

  cart.forEach(i=>{
    msg+=`${i.name} - ₹${i.price}%0A`;
  });

  window.open(
    "https://wa.me/916375263557?text="+msg
  );
}