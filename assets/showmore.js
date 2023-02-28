var kt = [false, false];
function showmore(i){
    if (kt[i-1] == false){
        document.getElementById("showmore"+i).style.display = "block";
        kt[i-1] = true;
        document.getElementById("bv_more"+i).innerHTML = "Ẩn "
    }
    else {
        document.getElementById("showmore"+i).style.display = "none";
        kt[i-1] = false;
        document.getElementById("bv_more"+i).innerHTML = "Xem thêm"
    }
}