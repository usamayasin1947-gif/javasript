function getdata() {

    var n = document.getElementById("f-name")
    var u = document.getElementById("u-name")
    var e = document.getElementById("email")
    var p = document.getElementById("passwrd")
    var rp = document.getElementById("rpasswrd")
    var mb = document.getElementById("MOB")
    var sq = document.getElementById("sec-ques")

    document.write(n.value + "<br>" + u.value + "<br>" + e.value + "<br>" + p.value + "<br>" + rp.value + "<br>" + mb.value + "<br>" + sq.value)


}

function readmore() {

    var expandedParagraph = " <h1> Items Details </h1>"
    var expandedParagraph2 = "<p> <b> Product - Type </b>:Mobile</p> <b> Product - Price; </b> 60000 PKR</p>    <b> Product - Model: </b>Iphone6s plus</p> <b> Sim - type: </b>Dual</p> <b> Quality: </b>High"
    document.getElementById("slowLoris").innerHTML = expandedParagraph + "<img src=\"mb1.jpg\" >" + expandedParagraph2;
}

function del() {
    document.getElementById("row").remove();
}

////////

var table = document.getElementById("myTable");

for (var i = 1; i < 3; i++) {
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var index = +prompt("Enter the index-no:")
    var name = prompt("Enter the name:")
    var clas = +prompt("Enter the class:")
    cell1.innerHTML = index;
    cell2.innerHTML = name;
    cell3.innerHTML = clas;
}