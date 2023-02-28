
var user = JSON.parse(localStorage.getItem("user"));
if (user === null) user = [];
var pass = JSON.parse(localStorage.getItem("pass"));
if (pass === null) pass = [];

function clickHandler(){
    user = JSON.parse(localStorage.getItem("user"));
    pass = JSON.parse(localStorage.getItem("pass"));
    
    var u = document.getElementById("name");
    var p = document.getElementById("pass");
    var p1 = document.getElementById("pass1");
    var u_text = document.getElementById("text1");
    var p_text = document.getElementById("text2");
    u.style.border= "1px solid black"
    u.style.boxShadow ="none"
    u_text.innerHTML = ""
    p.style.border= "1px solid black"
    p.style.boxShadow ="none"
    p_text.innerHTML = ""
    if ( u.value === "") {
        u.style.border= "1px solid red"
        u.style.boxShadow =" 0 0 2px 2px red"
        u_text.innerHTML = "User bị trống !!!"
        u_text.style.marginBottom = "10px "
        u_text.style.color = "red"
    }
    if (p.value ===""){
        p.style.border= "1px solid red"
        p.style.boxShadow =" 0 0 2px 2px red"
        p_text.innerHTML = "Pass bị trống !!!"
        p_text.style.marginBottom = "10px "
        p_text.style.color = "red"
    }
    if (u.value !== "" &&  p.value !=="") {

        var kt = false;
        localStorage.checklogin = false;
        localStorage.nameuser ="";
        for (var i in user){
            if (user[i] === u.value && pass[i] === p.value){
                kt = true;
                localStorage.nameuser = user[i];
                break;
            }
        }
        if (kt===true){
            document.getElementById("text").innerHTML ="Chúc Mừng " +u.value + " Đã Đăng Nhập Thành Công !!!";
            var logo = document.getElementById("logo_login");
            logo.src = "./assets/img/logo_tobito.png"
            if (typeof(Storage) !== "undefined") {
                if (localStorage.clickcount1) {
                    localStorage.clickcount1 = Number(localStorage.clickcount1)+1;
                } else {
                    localStorage.clickcount1 = 0;
                }
            }
            localStorage.nameuser = u.value;
            localStorage.checklogin = true;
            alert("Đăng Nhập Thành Công!!!");
            // location.replace("http://127.0.0.1:5500/index.html");
            location.replace("./index.html");
        }
        else {
            localStorage.nameuser ="";
            document.getElementById("text").innerHTML = " Đăng Nhập Không Thành Công !!! User hoặc Pass sai.";
            localStorage.checklogin= false;
        }
    }
}

function clickHandler1(){
    var u = document.getElementById("name1");
    var p = document.getElementById("pass0");
    var p1 = document.getElementById("pass1");
    var u_text = document.getElementById("text1");
    var p_text = document.getElementById("text2");
    var p1_text = document.getElementById("text3");
    u.style.border= "1px solid black"
    u.style.boxShadow ="none"
    u_text.innerHTML = ""
    p.style.border= "1px solid black"
    p.style.boxShadow ="none"
    p_text.innerHTML = ""
    p1.style.border= "1px solid black"
    p1.style.boxShadow ="none"
    p1_text.innerHTML = ""
    if ( u.value === "") {
        u.style.border= "1px solid red"
        u.style.boxShadow =" 0 0 2px 2px red"
        u_text.innerHTML = "User bị trống !!!"
        u_text.style.marginBottom = "10px "
        u_text.style.color = "red"
    }
    if (p.value ===""){
        p.style.border= "1px solid red"
        p.style.boxShadow =" 0 0 2px 2px red"
        p_text.innerHTML = "Pass bị trống !!!"
        p_text.style.marginBottom = "10px "
        p_text.style.color = "red"
    }
    if (p1.value ===""){
        p1.style.border= "1px solid red"
        p1.style.boxShadow =" 0 0 2px 2px red"
        p1_text.innerHTML = "Pass bị trống !!!"
        p1_text.style.marginBottom = "10px "
        p1_text.style.color = "red"
    } 
    if (u.value !== "" &&  p.value !=="" && p1.value !=="") {
        if ( p.value === p1.value){
            user.push(document.getElementById("name1").value);
            pass.push(document.getElementById("pass1").value);
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("pass", JSON.stringify(pass));
            document.getElementById("name1").value = "";
            document.getElementById("pass0").value ="";
            document.getElementById("pass1").value = "";
            document.getElementById("text").innerHTML = "Đăng Ký Thành Công !!!";
        }
        else 
            document.getElementById("text").innerHTML = "Đăng Ký Không Thành Công !!! Bạn đã Nhập Pass bị sai !!";

    }
}