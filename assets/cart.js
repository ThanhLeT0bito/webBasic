
resettotal();

var quantilyInputs = document.querySelectorAll(".quantily input")
for (var i = 0; i < quantilyInputs.length; i++) {
    var input = quantilyInputs[i];
    input.addEventListener("change", quantilychanged);
}
function quantilychanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    resettotal();
}
var remove_cart = document.getElementsByClassName("remove");
for (var i = 0; i < remove_cart.length; i++) {
    remove_cart[i].onclick = function () {
        var remove_items = this.parentElement;
        remove_items.remove();
        resettotal();
    }
}

function resettotal() {
    var total = 0;
    var quantilys = 0;
    var price_cart = document.querySelectorAll(".price_cart span");
    var quantily = document.querySelectorAll(".quantily input");
    for (var i = 0; i < price_cart.length; i++) {
        var text_price = price_cart[i].innerHTML.replace("đ", "");
        text_price = text_price.replace(".", "");
        text_price = text_price.replace(".", "");
        total = (parseFloat(text_price) * quantily[i].value) + parseFloat(total);
        quantilys += parseFloat(quantily[i].value);
        quantilys = parseFloat(quantilys);
        text_price = "";
    }
    document.getElementById("sum_cart").innerHTML = quantilys;
    if (total !== 0) {
        document.getElementById("total").innerHTML = total + " đ";
        document.getElementById("total0").style.display = "";
        document.getElementsByClassName("btn_thanh_toan")[0].style.display="block";
        document.getElementById("insert_items").style.height ="70%";
    }
    else {
        document.getElementById("insert_items").style.height ="0px";
        document.getElementById("total").innerHTML = "Bạn chưa thêm sản phẩm vào giỏ hàng.";
        document.getElementById("total0").style.display = "none";
        document.getElementsByClassName("btn_thanh_toan")[0].style.display="none";
    }

}

var addcart = document.querySelectorAll(".btn_buy button");
for (var i = 0; i < addcart.length; i++) {
    if (i % 2 === 1){
        var buton = addcart[i];
        buton.addEventListener('click', addToCartClicked);
    }
}

function addToCartClicked(event) {
    var buton = event.target;
    var box = buton.parentElement.parentElement;
    var img = document.createElement("img");
    img = box.querySelectorAll('.box_img a img')[0];
    var name_sp = box.querySelectorAll('.name_sp span')[0].innerText;

    var name_cart = document.querySelectorAll(".name_cart span");
    for (var i=0; i<name_cart.length; i++){
        if (name_cart[i].innerText === name_sp){
            alert("Sản phẩm đã có trong giỏ hàng.");
            return;
        }
    }

    var price_sp = box.querySelectorAll('.price span')[0].innerText;
    var insert_cart = document.getElementById("insert_items");
    insert_cart.insertAdjacentHTML('afterbegin',
        `<div class="items_cart"> 
               <div class="img_cart">
                    <img src="${img.src}" alt="">
               </div>
               <div class="name_cart">
                    <span>${name_sp}</span>
                </div>
                <div class="quantily">
                    <input type="number" value="1">
                </div>
                <div class="price_cart">
                    <span>${price_sp}</span>
                </div>
                <div class="remove">
                    <span>&#215;</span>
                </div>
          </div> `);

    resettotal();

    // remove 
    for (var j = 0; j < remove_cart.length; j++) {
        remove_cart[j].onclick = function () {
            var remove_items = this.parentElement;
            remove_items.remove();
            resettotal();
        }
    }
    var quantilyInputs = document.querySelectorAll(".quantily input")
    for (var i = 0; i < quantilyInputs.length; i++) {
        var input = quantilyInputs[i];
        input.addEventListener("change", quantilychanged);
    }
}