const myarray = [{name : "CoolUser", age : 18},]

const newarray = myarray.map(myarray => Object.assign(myarray, {school: "Ananda College"}));
console.log(newarray)
