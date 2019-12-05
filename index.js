// This functions checks if the values in the username and password are null or not
//and sends the boolean value accordingly. Additionaly it checks if password is less than 5 or not.
function validity(){
  var user= document.getElementById('uname');
  var pword= document.getElementById('pcode');

  if (user.value.trim() == ""){
    alert("You should provide a username");
    document.getElementById('luser').style.visibility="visible";
    return false;
  }
  else if (pword.value.trim() == ""){
    alert("You should provide a password")
    document.getElementById('lpass').style.visibility="visible";
    return false;
  }
  else if(pword.value.trim().length<5){
    alert("Password is too short");
    return false;
  }
  else {
    true;
  }
}
