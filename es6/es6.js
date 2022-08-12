const sayName= (name= "Abdel")=>{
    return "Hi, my name is "+ name
}
console.log(sayName("Alvin"))

let cubedNumber= (number= 1)=> number** 3
console.log(cubedNumber(3))

const sayName2= (name2= "Allen")=>{
    // use `${}` to more concisely add js functions inside string values
    let message= `Hello, my name is "${name2}"`
    return message
}
console.log(sayName2("Tamer"))

let alvin= {
    name: "Alvin",
    age: 34,
    hasGlasses: true,
    favAnime: ["Mushoku Tensei"]
}
// object deconstructor
const { name, age, hasGlasses, favAnime } = alvin
console.log(name, age, hasGlasses)

let coordinates= [55, -67, 44]
// array deconstructor
const [lat, long, alt]= coordinates
console.log(lat, long, alt)

// use ... notation to combine arrays and objects
let medidataStudents= ["stut1", "stut2", "stut3", "stut4"]
let mlbStudents= ["stut5", "stut6", "stut7", "stut8"]
let students= [...medidataStudents, ...mlbStudents]
console.log(students)

let allen= {
    name: "Allen",
    age: 22
}
let allen2= {
    hasGlasses: true,
    role: "Professional retard"
}
let allenUpdated= {
    ...allen,
    ...allen2
}
console.log(allenUpdated)

/* let students= [...medidataStudents, ...mlbStudents] */
// use .forEach to iterate through an array and return individual values
students.forEach((student, index)=>{
    console.log(`${student} is at index ${index}`);
})

let numbers= [2, 3, 4, 5]
// use .map to iterate through an array and return another array
let cubedNumbers= numbers.map((number, index)=> number** 3)
console.log(cubedNumbers)

let staff= [
    { name: "Ken", age: 17},
    { name: "Abdel", age: 22},
    { name: "Deyby", age: 19},
    { name: "Danielle", age: 22}
]
// use .filter to pick out values from an array
let youngStaff= staff.filter((person)=> person.age< 20)
console.log(youngStaff)

// use async / await to bypass .then notation
const getStudents= async()=>{
    const proxy = "https://nextjs-cors-anywhere.vercel.app/api?endpoint=";
    const api = "https://mlb-md-firebase-demo.vercel.app/api/students";
    const response= await fetch(proxy+ api)
    const data= await response.json()
    console.log(data)
}
getStudents()