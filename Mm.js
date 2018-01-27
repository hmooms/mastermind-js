var butt = document.getElementsByTagName('button');
var list = document.getElementsByTagName('ul');
var rows = document.getElementsByClassName('row');
var red  = document.getElementsByClassName('red');
var yell = document.getElementsByClassName('yellow');
var grn  = document.getElementsByClassName('green');
var blue = document.getElementsByClassName('blue');
var pink = document.getElementsByClassName('pink');
var grey = document.getElementsByClassName('grey'); 
var color = ["red", "yellow", "green", "blue", "pink", "grey"];
var turn = 0;
var n1 = document.getElementsByClassName('1');
var n2 = document.getElementsByClassName('2');
var n3 = document.getElementsByClassName('3');
var	n4 = document.getElementsByClassName('4');
var g = document.getElementsByClassName('g');
var x = 0;
var c = document.getElementsByClassName('c');
var jk1 = Math.floor(Math.random() * color.length);
var jk2 = Math.floor(Math.random() * color.length);
var jk3 = Math.floor(Math.random() * color.length);
var jk4 = Math.floor(Math.random() * color.length);
var guesscode = [];
var godcode = [jk1, jk2, jk3, jk4];
var cover = document.getElementById('cover');
var art = document.getElementsByTagName('article');
var h1 = document.getElementsByTagName('h1');

for(i = 0; i < 4; i++){
	butt[i].style.backgroundColor = "black";
}

n1[12].style.backgroundColor = color[jk1];
n2[12].style.backgroundColor = color[jk2];
n3[12].style.backgroundColor = color[jk3];
n4[12].style.backgroundColor = color[jk4];

function show(i)
{
	list[i].style.display = "inline";
}

function chooseRed(a)
{
	list[a].style.display = "none";
	butt[a].style.backgroundColor = "red";
	guesscode.splice(a, 1, 0);
}

function chooseYell(a)
{
	list[a].style.display = "none";
	butt[a].style.backgroundColor = "yellow";
	guesscode.splice(a, 1, 1);
}

function chooseGrn(a)
{
	list[a].style.display = "none";
	butt[a].style.backgroundColor = "green";
	guesscode.splice(a, 1, 2);
}

function chooseBlue(a)
{
	list[a].style.display = "none";
	butt[a].style.backgroundColor = "blue";
	guesscode.splice(a, 1, 3);
}

function choosePink(a)
{
	list[a].style.display = "none";
	butt[a].style.backgroundColor = "pink";
	guesscode.splice(a, 1, 4);
}

function chooseGrey(a)
{
	list[a].style.display = "none";
	butt[a].style.backgroundColor = "grey";
	guesscode.splice(a, 1, 5);
}

function enter()
{
	console.log("enter "+butt[0].style.backgroundColor);
	console.log(guesscode);
	console.log(godcode);
	for(var i = 0; i < 4; i++){
		if (butt[i].style.backgroundColor == "black") {
		window.alert("kies 4 kleuren alstublieft.");
		return;
		}
	}
	for(var i = 0; i < 4; i++){
		if (butt[i].style.backgroundColor != "black") {
			n1[turn].style.backgroundColor = butt[0].style.backgroundColor;
			n2[turn].style.backgroundColor = butt[1].style.backgroundColor;
			n3[turn].style.backgroundColor = butt[2].style.backgroundColor;
			n4[turn].style.backgroundColor = butt[3].style.backgroundColor;
			for(i = 0; i < 4; i++){
				butt[i].style.backgroundColor = "black";
			}
			turn++;
			x += 4;
		}
	}
	check();
}

function check(){
	
	var godcode = [jk1, jk2, jk3, jk4]
	var j = x - 4;
	var f = x - 4;
	var T = 0;

	for(var i = 0; i < 4;){
		if (guesscode[i] == godcode[i]) {
			g[j].style.backgroundColor = "red";
			delete godcode[i];
			guesscode.splice (i, 1, "used");
			console.log(godcode);
			j++;
			T++;
		}
		i++;
	}
	for(var i = 0; i < 4;){
		for(var a = 0; a < godcode.length;){
			if (guesscode[i] == godcode[a]){
				c[f].style.backgroundColor = "white";
				delete godcode[a];
				guesscode.splice (i, 1, "used");
				console.log(godcode);
				f++;
				a = 4;
			}
			a++;
		}
		i++;
	}
	if (T == 4) {
		cover.style.animation = "complete 1s forwards";
		art[0].style.animation = "end 2s forwards";
		for(var i = 0; i < 5;){
			butt[i].style.display = "none";
			i++;
		}
		butt[5].style.display = "inline";
	}
	else if (turn == 12 && T != 4) {
		h1[16].innerHTML = "U heeft verloren!";
		art[0].style.animation = "end 2s forwards";
		cover.style.animation = "complete 1s forwards";
		for(var i = 0; i < 5;){
			butt[i].style.display = "none";
			i++;
		}
		butt[5].style.display = "inline";
	}
	console.log(turn);
}