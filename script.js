const PASSWORD = "1234";

function login(){
let p = document.getElementById("pass").value;

if(p === PASSWORD){
document.getElementById("lock").style.display="none";
document.getElementById("app").style.display="block";
}
else{
alert("Wrong password ♡");
}
}
