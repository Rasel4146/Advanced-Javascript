//Falsy:
// fasle
// 0
// ""
// undenfined
// null 
// NaN
//Truthy
// "0"
// []
let name  ='false';
if(name || name =='false'){
    console.log('condition is true');
}else{
    console.log("condition is false");
}