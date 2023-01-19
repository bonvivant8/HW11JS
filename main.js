const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

//const result= characters.slice(0,16);
//console.log(result.length)

//function generateKey(length,str)
// {
   //return arr.slice(0,length)

//}
//const key=generateKey(5, characters)
//console.log(key)
//console.log(key.length)

const generateKey=(length,str)=>str.slice(0,length);

const key=generateKey(16, characters);

console.log(key)
console.log(key.length)