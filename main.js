function addUser() {
 player_1_name = document.getElementById("player_name_input1").value;
 player_2_name = document.getElementById("player_name_input2").value;

 localStorage.setItem("Player 1 Name", player_1_name);
 localStorage.setItem("Player 2 Name", player_2_name);

 window.location = "index_2.html";
}