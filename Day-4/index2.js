//Palindrome
/*let string="malayalam";
let pal=string.split('');
pal.reverse();
let ans=pal.join();
if(string==pal)
console.log(true);
else
console.log(false);
*/
//for in loop
/*let obj2={
    a:1,
    b:2,
    c:3,
}
for(let key in obj2){
    console.log(key,obj2[key]);
}*/
//array object (for in loop)
/*let obj3=[1,2,3,4,5];
for(let key in obj3){
    console.log(key,obj3[key]);
}
*/
//(for of loop)
/*
let obj3=[1,2,3,4,5];
for(let key of obj3){
    console.log(key);
}
*/

// array callback function -->for each

/*
--let name=["arun","sudha","dhatch","keerthi"]
let num_arr=[1,2,3,4,5,6,7,8];
//num_arr.forEach((ele)=>{
// console.log(ele);
//})

//map()
//let arr1=name.map(ele=>console.log(ele.repeat(3)));

//filter()
let ans_filter=num_arr.filter(ele=>{
    return ele%2;
})
console.log(ans_filter);
*/
//--Task
let names_obj=[
    {
        name:"dhatch",
        dob:2002
    },
    {
        name:"sudha",
        dob:2003
    },
    {
        name:"arun",
        dob:2004
    },
    {
        name:"keerthi",
        dob:2004
    }
];

let namesAbove2002 = names_obj.filter(ele => ele.dob > 2002).map(ele => ele.name);
console.log(namesAbove2002);
//shallow copy
const array=[1,2,3,4,5];
//array[3]=500;
//console.log(array);

/*const arr1=[1,2,3,4,5];
const arr2=arr1;
arr1[2]=300;
console.log(arr2);
*/


/*const arr1=[1,2,3,4,5];
const arr2=[...arr1];
arr2[2]=300;
arr1[3]=200
console.log(arr2);
*/

/*const obj_cp={
    name:"rose",
    number:"5",
    name:"jasmine"
};
console.log(obj_cp);
*/
let emp_obj=[
    {
        name:"ram",
        age:25,
        salary:30000
    },
    {
        name:"janu",
        age:27,
        salary:25000
    },
    {
        name:"jaya",
        age:28,
        salary:23000
        
    },
    {
        name:"rahul",
        age:28,
        salary:28000
        
    },
    {
        name:"raja",
        age:30,
        salary:21000
        
    }
];
let empAbove = emp_obj.filter(obj => obj.salary>25000).map(obj => {
    return {name:obj.name,age:obj.age};
    });
console.log(empAbove);
//De-structuring-->unpacking the elements
/*let arr_nums=[10,20,30,40,50];
let[a1,a2,a3,a4,a5]=arr_nums;
console.log(a1,a2,a3,a4,a5);
*/
/*let arr_nums=[10,20,30,40,50,60,70,80];//in destructuring spread operator is called as rest operator
let[a1,a2,a3,a4,...a5]=arr_nums;
console.log(a5);*/
/*
let arr_nums=[10,20,30,40,50,60,70,80,90,100];
let[a1,a2, ,a3,a4,...a5]=arr_nums;
console.log(a1,a2,a3,a4,a5);
*/

//--Destructuring object elements
/*let obj2={
    clg_name:"dhatch",
    year:2024,
    city:"cbe",
    depart:"cse",
    lpa:"50lpa"
};
//let {clg_name,year,city,...rest}=obj2;
//console.log(clg_name,year,city,rest);

let{clg_name:college,year,city,...rest}=obj2; //rename
console.log(college,year,city,rest);
*/

let obj2={
    clg_name:"dhatch",
    year:2024,
    city:"cbe",
    depart:"cse",
    lpa:"50lpa",
    color:"blue"
};
let{clg_name:college,year,city,color="green"}=obj2;
console.log(college,year,city,color);

//setTimeout(()=>console.log('Hi dhatchu'),3000)
//setInterval(()=>console.log('Hi dhatchu'),3000)

//Promise
//State=pending,resolve,reject

fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => console.log(json))
      

const promisex=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('resolved')
    },4000)
 })
 promisex
 .then((value)=>console.log(value))
 .catch(()=>console.log('error'))

 const apicall=async()=>{
    const promise_from_api= await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data=await promise_from_api.json();
    console.log(data);
 }
 apicall();