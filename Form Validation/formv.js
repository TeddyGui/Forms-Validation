// var pass = document.getElementById("pwd")
// var regexpass = /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/m ;
// var name=document.getElementById("lname");

// function sendbutton(){

//     // if (regexpass.test(pass.value)) {

//     //     alert("pass");
//     // }
// if(name.value===""){
//     alert("name invalid")
// }
// }
document.getElementById("sendbutton").addEventListener("click",function(e){
    console.log(e)
    e.preventDefault()

    var name=document.getElementById("lname");
    var adrs=document.getElementById("Adress");
    var eml=document.getElementById("E-mail");
    var psw=document.getElementById("pwd")
    var regexpass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm ; 
    var regexemail= /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/ ;
  
    if(!name.value || !adrs.value){
         alert("Warning there is no transaction in progress")
        }
 
       else if(!regexemail.test(eml.value)) {
           alert("Warnings!!!!")
   
}
      else if(!regexpass.test(psw.value)) {
         alert("Warning") }
 

})