//no. 1
console.log('Nomor 1')
const celcius = 60
const fahren = (celcius * 9 / 5) + 32

console.log(`${celcius} celcius sama dengan ${fahren} fahrenheit.`)


//no. 2
// const num = 27
//     if (num % 2 === 0) {
//         console.log (`The ${num} is Even Number`)
//     } else {
//         console.log (`The ${num} is Odd Number`)
//     }

// no. 3
// const n = 31
// let divider = 0 //1

// for (let i = 0; i <= n; i++) {
//     if(n % i === 0) {
//         divider++
//     }
// }

// console.log(divider === 2 ? "Prime" : "Not Prime")


// no. 4
// const n = 5
// let result = 0

// for (let i = 0; i <= n; i++) {
//     console.log(i)
//     result += i
// } //kalau kali, berarti *=

// console.log(result)

// No. 5

// const n = 4
// let result = 1

// for (let i = n; i > 0; i--) {
//     console.log(i)
//     result *= i
// }

// console.log(result)

// No. 6
// angka fibonacci 0 1 1 2 3 5 8 13 21 34

let n = 10
let a = 0
let b = 1
let NextNumber = 0
// angka fibonacci pasti diawali dengan 0 dan 1

for (let i = 1; i <= n; i++) {
    NextNumber = a + b
    b = a
    a = NextNumber
console.log(a)

}

