function btnClicked(){
    console.log("klikkasit painiketta");
    alert("Painiketta painettiin");
}

function login(){
console.log("login klikattu");
let fname=document.getElementById("en").value;
let lname=document.getElementById("sn").value; 
console.log(fname+lname);
let infoData=fname+" "+lname;
document.getElementById("loginInfo").innerHTML=fname+" "+lname;



}