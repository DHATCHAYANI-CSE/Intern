
 
 import { USER_DATA,addUser,editUser,editMultipleParamInUser,deleteUser} from "./userModules.js";

 addUser({
    id:3,
    name:"pikachu",
    age:30
 })
 //deleteUser(1)
 editUser(1,"name","asd")
 console.log(USER_DATA);
 //console.log(1234);

 //document.body.innerHTML='<div style="color:green">Hello!!!</div>';
 //document.body.style.backgroundColor="lightblue"
 console.log(document.body.children)
 const allchild=document.body.children;

//setTimeout(()=>{ allchild[0].style.color="red";},3000);
//setTimeout(()=>{ allchild[1].style.color="orange";},6000);
//setTimeout(()=>{ allchild[2].style.color="green";},9000);

/*setTimeout(()=>{ allchild[0].style.color="red";
allchild[0].innerText="RED";},3000);
setTimeout(()=>{ allchild[1].style.color="orange";
allchild[1].innerText="ORANGE";},6000);
setTimeout(()=>{ allchild[2].style.color="green";
allchild[2].innerText="GREEN";
},9000);*/
/*
setInterval(()=>{ allchild[0].style.color="red";
},3000);
setInterval(()=>{ allchild[0].style.color="orange";
},6000);
setInterval(()=>{ allchild[0].style.color="green";
},9000);*/



/*let refresh_value=true;
setInterval(()=>{
allchild[0].style.color=(refresh_value?"lightblue":"orange");
refresh_value=!refresh_value;
},2000)*/

const tag=document.getElementsByClassName('cse');
tag[0].innerText="Dhatchu";
console.log(tag);

const id=document.getElementById('unique')
id.innerText="Id based selection";
console.log(id)

/*const button=document.getElementById('login-button');
const UserName=document.getElementById('UserName');
const Password=document.getElementById('Password');
const form=document.getElementById('login');

button.addEventListener('click',(event)=>{
   console.log('click');
})
form.addEventListener('submit',(event)=>{
   event.preventDefault();
   console.log('submit',UserName.value,Password.value);
})*/