player1_name = localStorage.getItem("Player 1 Name");
player2_name = localStorage.getItem("Player 2 Name");
x = " X "

player1_score = 0;
player2_score = 0;

document.getElementById("player_1_name").innerHTML = player1_name + " : ";
document.getElementById("player_2_name").innerHTML = player2_name + " : ";


document.getElementById("player_1_score").innerHTML = " " + player1_score;
document.getElementById("player_2_score").innerHTML = " " + player2_score;

function send() {
 number1 = document.getElementById("number1").value;
 number2 = document.getElementById("number2").value;
 actual_number = parseInt(number1) * parseInt(number2);

 question = "<h4>" + number1  + x + number2 + "</h4>";
 input_box = "<br>Answer : <input type = 'text' id = 'input_check_box'>"; 
 button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>";
 row = question + input_box + button;

 document.getElementById("output").innerHTML = row;
 document.getElementById("number1").innerHTML = "";
 document.getElementById("number2").innerHTML = "";

}
