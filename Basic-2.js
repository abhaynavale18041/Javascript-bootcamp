const Myobj={
    "name":"Alice",
    "age":25,
    "isStudent":true,
    "hobbies":["reading","coding"],
    "address":{
        "city":"New York",
        "zipcode":"10001"
    }
}
console.log(`Name:${Myobj.name}`);
console.log(`first hobby: ${Myobj.hobbies[0]}`)
console.log(`zipcode:${Myobj.address.zipcode}`);
let arr=[]
for(i=0;i<=100;i++){
    arr.push(i)
}
console.log(arr);
let arr1=[]
for(i=0;i<=100;i++){
    arr1.push(i*3)
    

}
console.log(arr1);
let arr2=[]
for (let i = 0; i < arr1.length; i++){
    if (i%5==0){
        arr2.push(i)

    }
}
console.log(arr2)
let sum = 0;
for (let i=0; i< arr2.length;i++){
    sum+=arr2[i];
    

}
console.log(sum)
