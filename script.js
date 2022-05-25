let username = document.getElementById("username");
let password = document.getElementById("password");
let sub = document.getElementById("sub");
let flag =1;
function validateFrom(){
   if(username.value == ""){
       document.getElementById("userError").innerHTML= "user name is empty";
       flag = 0;
   }else if(username.value.length <3){
       document.getElementById("userError").innerHTML = "user name required 3 min char";
       flag = 0;
   }else{
       document.getElementById("userError").innerHTML = "";
       flag = 1;
    }
   if(password.value == ""){
    document.getElementById("passError").innerHTML= "password is empty";
    flag=0;
}else{
    document.getElementById("passError").innerHTML = "";
    flag=1;
}

if(flag){
    return true;    
}else{
    return false;
}
}