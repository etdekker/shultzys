"use strict";

var beer = document.getElementById("beer");
var test = document.getElementById("test");
var main = document.getElementById("page");
var row = document.createElement("div");
row.className = "row";

for (var i = 0; i < beerlist.length; i++) {
	var item = document.createElement("li");
	var a = document.createElement("a");
	var linkText = document.createTextNode(beerlist[i].name);
	a.appendChild(linkText);
	a.title = beerlist[i].name;
	a.href = beerlist[i].link;
	item.appendChild(a);
	beer.appendChild(item);


	var col = document.createElement("div");
	col.className = "item col-lg-3 col-md-3 col-sm-3 col-xs-3";
	col.setAttribute('onclick', "window.open('" + beerlist[i].link + "');")
	var thumb = document.createElement("div");
	thumb.className = "thumbnail";
	var image = document.createElement("img");
	image.setAttribute('src', "img/" + beerlist[i].img);
	var p = document.createElement("p");
	var node = document.createTextNode(beerlist[i].name);
	p.appendChild(node);
	thumb.appendChild(image);
	col.appendChild(thumb);
	col.appendChild(p);
	row.appendChild(col);

	if((i - 3) % 4 == 0){
		main.appendChild(row);
		var newRow = document.createElement("div");
		newRow.className = "row";
		row = newRow;
	}
};
function list(){
	document.getElementById("page").style.display = "none";
	document.getElementById("list").style.display = "none";
	document.getElementById("grid").style.display = "block";
	document.getElementById("beer").style.display = "block";
}
function grid(){
	document.getElementById("page").style.display = "block";
	document.getElementById("list").style.display = "block";
	document.getElementById("grid").style.display = "none";
	document.getElementById("beer").style.display = "none";
}

