document.getElementById("khuvuc").innerText = localStorage.area;
function change_kv(i){
    if (i===1) {
        localStorage.area = "TP Hồ Chí Minh";
        document.getElementById("khuvuc").innerText = localStorage.area;
    }
    else if ( i ===2){
        localStorage.area = "Hà Nội";
        document.getElementById("khuvuc").innerText= localStorage.area;
    }
    else if ( i ===3){
        localStorage.area = "TP Đà Nẵng"
        document.getElementById("khuvuc").innerText= localStorage.area;
    }
    else if ( i ===4){
        localStorage.area = "Bình Dương";
        document.getElementById("khuvuc").innerText= localStorage.area;
    }
    else if ( i ===5){
        localStorage.area = "Hải Phòng";
        document.getElementById("khuvuc").innerText= localStorage.area;
    }
}

        var option_memori = document.querySelectorAll(".option_memori a");
        var changeBg_color= document.querySelectorAll(".option_color p");
        var option_color = document.querySelectorAll(".option_color p span");
        for (var i=0; i<option_memori.length; i++){
            option_memori[i].href ="#";
            option_memori[i].addEventListener("click", changBg);
        }

        for (var i=0; i<changeBg_color.length; i++){
            changeBg_color[i].addEventListener("click", changeBgcolor);
        }

        function changBg(event){
            var button = event.target;
            var btn = button.parentElement;
            var change_price = btn.querySelectorAll("span")[0];
            for (var i=0; i<option_memori.length; i++){
                option_memori[i].style.background ="white";
                option_memori[i].style.border = "1px solid rgba(128, 128, 128, 0.274)";
            }
            btn.style.background ="rgba(206, 143, 7, 0.295)";
            btn.style.border=" 1px solid rgb(206, 143, 7)";
            for( var i=0; i<option_color.length; i++){
                option_color[i].innerHTML = change_price.innerText;
            }
        }

        function changeBgcolor(event){
            var button = event.target;
            var btn = button.parentElement;
            for (var i=0; i<changeBg_color.length; i++){
                changeBg_color[i].style.background ="white";
                changeBg_color[i].style.border = "1px solid rgba(128, 128, 128, 0.274)";
            }
            btn.style.background ="rgba(206, 143, 7, 0.295)";
            btn.style.border=" 1px solid rgb(206, 143, 7)";
        }