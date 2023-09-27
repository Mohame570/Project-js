var allProducts = document.querySelectorAll(".products");
var div = document.querySelector(".text");
var price = document.querySelector(".totalprice");
var btn = document.querySelector("#btn");
var totalprice = 0;

allProducts.forEach(function (item) {
  item.onclick = function () {
    div.style.display = "block";
    div.innerHTML += "<br>" + item.textContent;

    totalprice += parseInt(item.getAttribute("price"));
    if (div.innerHTML != "") {
      btn.style.display = "block";
      btn.style.margin = "90px";
      btn.style.borderRadius = "20px";
      btn.style.width = "30px";
    }
  };
});

btn.onclick = function () {
  price.style.display = "block";
  price.innerHTML = "Total Price :" + parseInt(totalprice);
};
console.log(totalPrice);
