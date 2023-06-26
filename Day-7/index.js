const personalpackage=require('./personalpackage.json');
//const key1='address',key2='pin-code';
//const keys=['name','address']
/*const keys=Object.keys(personalpackage)
for(let i=0;i<keys.length;i++){
    //const key=keys[i];
    console.log(personalpackage[keys[i]])
    //console.log(personalpackage[key]);
}*/
//console.log(personalpackage[key1][key2]);
function data(pkey){
let ckey=Object.keys(pkey)
for(let i=0;i<ckey.length;i++){
    if(typeof(pkey[ckey[i]])=='object'){
        data(pkey[ckey[i]]);
    }
    else{
        console.log(ckey[i]+'='+pkey[ckey[i]])
      } 
     }
    
}
data(personalpackage)

