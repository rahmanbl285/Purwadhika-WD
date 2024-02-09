let age = 15

if (age >= 17) {
    console.log("You can now create an ID Card")
} else {
    console.log("You are not old enough to create an ID Card")
}



let grade = "A" // kapital atau tidaknya dapat berpengaruh ke hasil

if (grade === "A") {
    console.log("Excellent Result!")
} else if (grade === "B") {
    console.log("Great Result!")
} else if (grade === "C") {
    console.log("Average Result!")
} else {
    console.log("Good Result!") //gradenya selain A dan B
}


// let date = new Date()
// let day = date.getDay()
// console.log(day) // 0 = minggu, 1 = senin, dst ; 0 = Januari, dst

let date = new Date() // buat ganti tanggalnya
let day = date.getDay()
console.log(day)

if (day === 0) {
    console.log("Minggu")
} else if (day === 1) {
    console.log("Senin")
} else if (day === 2)  {
    console.log("Selasa")
} else if (day === 3) {
    console.log("Rabu")
} else if (day === 4) {
    console.log("Kamis")
} else if (day === 5) {
    console.log("Jumat")
} else if (day === 6) {
    console.log("Sabtu")
}


// SWITCH CASE
// hanya bisa = saja. enggak bisa > <

switch (day) {
    case 0:
        console.log("Minggu")
        break;
    case 1:
        console.log("Senin")
        break;
    case 2:
        console.log("Selasa")
        break;
    case 3:
        console.log("Rabu")
        break;
    case 4:
        console.log("Kamis")
        break;
    case 5:
        console.log("Jumat")
        break;
    case 6:
        console.log("Sabtu")
        break;
}


// LOGICAL OPERATORS
// hanya bisa digunakan di if else

let car = "BMW"
let car2 = "Toyota"

if (car === "BMW" && car2 === "Toyota") {
    console.log("This Car Is Awesome!")
}

// ! = ngebalikin

let str = "Javascript"

if (!(str === "Javascript")) {
    console.log("Javascript")
} else {
    console.log("not Javascript")
}



// ternary operator untuk mempersingkat codingan. (dua kondisi)

console.log(str === "Javascript" ? "Javascript" : "not Javascript")

