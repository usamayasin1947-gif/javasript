//////1////
///////2//////


/////////3/////////
function del() {

    document.getElementById("row0").remove()



}
////4///////
function oldimage() {
    document.getElementById("img1").src = "download.jpg";
}

function newimage() {


    document.getElementById("img1").src = "car2.jpg";
}

////////5////////
var count = 0

function increase() {

    count += 1;
    alert("counter increase value is =" + count)

}

function decrease() {
    count -= 1
    alert("counter decrease value is =" +
        count)

}