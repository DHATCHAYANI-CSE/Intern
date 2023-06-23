export const USER_DATA=[
    {
        id:1,
        name:"janu",
        age:20,
        email:"abc@gmail.com"
    }
];
//CRUD

export const addUser=(new_user)=>{
    USER_DATA.push(new_user);
}

/*const addUser=USER_DATA.map(object=>{
   return{...object,id:2,name:"ram",age:20,email:"bcd@gmail.com"};
   console.log(USER_DATA);
});*/

export const editUser=(id,key,value)=>{
const user_index=USER_DATA.findIndex((user)=>user.id==id);
if(user_index!=-1){
    USER_DATA[user_index][key]=value;
}
}

export const editMultipleParamInUser=(id=1,updateValue={
    name:"raja",
    age:35,
})=>{
    const user_index=USER_DATA.findIndex((user)=>user.id==id);
    if(user_index!=-1){
    USER_DATA[user_index]={
        ...USER_DATA[user_index],
        ...updateValue
}
}
}
export const deleteUser=(id)=>{
    const user_index=USER_DATA.findIndex((user)=>user.id==id);
    if(user_index!=-1){
        USER_DATA.splice(user_index,1);
    }
}

