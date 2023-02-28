document.getElementById("login_out").style.display = "none";
        function change(){
        if (typeof(Storage) !== "undefined")
            if (localStorage.clickcount1 > 0){
                var logo = document.getElementById("logo_login");
                logo.src = "./assets/img/logo_tobito.png"   
                // localStorage.clickcount1=0;
                document.getElementById("login_out").style.display = "block";
                document.getElementById("login_on").style.display = "none";
            }
        }
        window.onload = change();
        function showDN(){
            document.getElementById("login_on").style.display = "block";
            var logo = document.getElementById("logo_login");
                logo.src = "./assets/img/login_icon_full.png" 
                localStorage.clickcount1 =0;
                window.location.reload(true);
        }