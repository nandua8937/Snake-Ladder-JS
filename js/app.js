for (var i = 1; i <= 100; i++) {
	document.getElementById(i).innerHTML = i;
}

var dice = ['<img src="png/d1.png" alt="dice">', '<img src="png/d2.png" alt="dice">', '<img src="png/d3.png" alt="dice">', '<img src="png/d4.png" alt="dice">', '<img src="png/d5.png" alt="dice">', '<img src="png/d6.png" alt="dice">'];

var myturn = 0;
var pf = 0;
var ps = 0;

function play() {
	var random_no = Math.floor(Math.random() * 6);
	document.getElementById("dice").innerHTML = dice[random_no];
	if (myturn == 0) {
	    document.getElementById('snakeMsg').innerHTML="player1 turn !!";		
		document.getElementById('snakeMsg').style.color="#000000"
		document.getElementById('snakeMsg').style.backgroundColor = "#fff";
		if (pf > 0) {
			if (100 - pf < random_no + 1) {
				myturn = 1;
				return;
			} else {
				document.getElementById((pf).toString()).innerHTML = pf;
				document.getElementById((pf).toString()).style.color = "#000";
			}
		}
		document.getElementById((pf + random_no + 1).toString()).innerHTML = "<i class='material-icons'>directions_run</i>";
		document.getElementById((pf + random_no + 1).toString()).style.color = "#04060a";
		if ((pf + random_no + 1) == 100) {
			setTimeout(() => {
				alert("player1 is winner !!");
				window.location.reload();
			}, 800);

		}
		pf = pf + random_no + 1;

		pf = snake(pf, "#04060a", pf);
		pf = ladder(pf, "#04060a", pf);
		myturn = 1;

	} else if (myturn == 1) {
		document.getElementById('snakeMsg').innerHTML="player2 turn !!";		
		document.getElementById('snakeMsg').style.color="#000000"
		document.getElementById('snakeMsg').style.backgroundColor = "#fff";
		if (ps > 0) {
			if (100 - ps < random_no + 1) {
				myturn = 0;
				return;
			} else {
				document.getElementById((ps).toString()).innerHTML = ps;
				document.getElementById((ps).toString()).style.color = "#000";
			}
		}
		document.getElementById((ps + random_no + 1).toString()).innerHTML = "<i class='material-icons'>directions_run</i>";
		document.getElementById((ps + random_no + 1).toString()).style.color = "#ff0d00";
		if ((ps + random_no + 1) == 100) {
			setTimeout(() => {
				alert("player2 is winner !!");
				window.location.reload();
			}, 800);

		}
		ps = ps + random_no + 1;
		ps = snake(ps, "#ff0d00", ps);
		ps = ladder(ps, "#ff0d00", ps);
		myturn = 0;
	}
}




//snake function

function snake(no, colorg, pp) {
	if (no == 21) {
		document.getElementById("21").innerHTML = 21;
		document.getElementById("21").style.color = "#000";
		alert("Sorry.. You are Swallowed by the snake Better luck next time");		
		document.getElementById("6").innerHTML = "<i class='material-icons'>directions_run</i>";
		document.getElementById("6").style.color = colorg;
		return 6;

	} else if (no == 67) {
		document.getElementById("67").innerHTML = 67;
		document.getElementById("67").style.color = "#000";
		alert("Sorry.. You are Swallowed by the snake Better luck next time");	
		document.getElementById("37").innerHTML = "<i class='material-icons'>directions_run</i>";
		document.getElementById("37").style.color = colorg;
		return 37;
	} else if (no == 80) {
		document.getElementById("80").innerHTML = 80;
		document.getElementById("80").style.color = "#000";
		alert("Sorry.. You are Swallowed by the snake Better luck next time");	
		document.getElementById("26").innerHTML = "<i class='material-icons'>directions_run</i>";
		document.getElementById("26").style.color = colorg;
		return 26;
	} else if (no == 98) {
		document.getElementById("98").innerHTML = 98;
		document.getElementById("98").style.color = "#000";
		alert("Sorry.. You are Swallowed by the snake Better luck next time");	
		document.getElementById("43").innerHTML = "<i class='material-icons'>directions_run</i>";
		document.getElementById("43").style.color = colorg;
		return 43;
	} else if (no == 93) {
		document.getElementById("93").innerHTML = 93;
		document.getElementById("93").style.color = "#000";
		alert("Sorry.. You are Swallowed by the snake Better luck next time");	
		document.getElementById("31").innerHTML = "<i class='material-icons'>directions_run</i>";
		document.getElementById("31").style.color = colorg;
		return 31;
	} else if (no == 89) {
		document.getElementById("89").innerHTML = 89;
		document.getElementById("89").style.color = "#000";
		alert("Sorry.. You are Swallowed by the snake  Better luck next time");	
		document.getElementById("13").innerHTML = "<i class='material-icons'>directions_run</i>";
		document.getElementById("13").style.color = colorg;
		return 13;
	} else {
		return pp;
	}

}

//ladder function

function ladder(no, colorg, pp) {
	if (no == 17) {
                
		document.getElementById("17").innerHTML = 17;
		document.getElementById("17").style.color = "#000";
		alert("Hurray!! You climbed the Ladder");		
		document.getElementById("39").innerHTML = "<i class='material-icons'>directions_run</i>";
		document.getElementById("39").style.color = colorg;
		return 39;
	} else if (no == 59) {
		document.getElementById("59").innerHTML = 59;
		document.getElementById("59").style.color = "#000";
		alert("Hurray!! You climbed the Ladder");
		document.getElementById("78").innerHTML = "<i class='material-icons'>directions_run</i>";
		document.getElementById("78").style.color = colorg;
		return 78;
	} else if (no == 46) {
		document.getElementById("46").innerHTML = 46;
		document.getElementById("46").style.color = "#000";
		alert("Hurray!! You climbed the Ladder");
		document.getElementById("75").innerHTML = "<i class='material-icons'>directions_run</i>";
		document.getElementById("75").style.color = colorg;
		return 75;
	} else if (no == 9) {
		document.getElementById("9").innerHTML = 9;
		document.getElementById("9").style.color = "#000";
		alert("Hurray!! You climbed the Ladder");
		document.getElementById("52").innerHTML = "<i class='material-icons'>directions_run</i>";
		document.getElementById("52").style.color = colorg;
		return 52;
	} else if (no == 69) {
		document.getElementById("69").innerHTML = 69;
		document.getElementById("69").style.color = "#000";
		alert("Hurray!! You climbed the Ladder");
		document.getElementById("91").innerHTML = "<i class='material-icons'>directions_run</i>";
		document.getElementById("91").style.color = colorg;
		return 91;
	} else {
		return pp;
	}
}