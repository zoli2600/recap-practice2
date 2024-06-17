let variable = "valami"
const constantVariable = "konstans valami"

variable = "új valami"



// primitívek

let variable1 = 10
let variable2 = "te"

//adatstruktúrák
/*let array = ["one","two","three"]
let obj = {
    key1: "value"
    key2: 10
}*/



/*function myFunc(){
    console.log("Hello world")
}
console.log("first")
myFunc()
console.log("second")

function greetings(name){
    if (name === "Lajos") {
    console.log("Szia Lajos!") // NEM VISSZATÉRÉSI ÉRTÉK
}   else{
    console.log(`Hello ${name}!`)
}   
}
greetings("Zoli")
greetings("Lajos")

const result = greetings("Lajos")
console.log(result)

function betterGreetings(name){
    if (name === "Lajos") {
        console.log("Szia Lajos!") // NEM VISSZATÉRÉSI ÉRTÉK
        return "Szia Lajos" //VISSZATÉRÉSI ÉRTÉK
    }   else{
        console.log(`Hello ${name}!`)
    }   

}
betterGreetings()
betterGreetings("Zoli")
betterGreetings("Lajos")*/

/*const arrowFunc = (name) => {
    console.log(`hello ${name}, i am an arrow function`) // nem vté
    return "return value" // Visszat.é.
}

console.log(arrowFunc("pista"))*/

const array = ["two", 13, false, null, NaN, ["element1", "element2"], { key:"value"}]

console.log(array)
console.log(array[0])
console.log(array[array.length - 1])

const obj = {
    key: "value",
    key2: 10,
    key3: true,
    key4: ["elem1","elem2"],
    key5: { nestedKey: "valami"},
    "key-6": "kismacska"
}
console.log(obj["key"])
console.log(obj.key)

console.log(obj["key-6"])