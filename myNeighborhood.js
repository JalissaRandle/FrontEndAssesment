const resturants = ["TJ's Seafood", "Keller's Drive in", "Dog Haus","Pie Tap", "Lazy Dog"]

const random = Math.floor(Math.random() * resturants.length);
// console.log(random, resturants[random]);
let alertMe = function (){
    alert (`You should go eat at ${random, resturants[random]}`)
}

let button = document.getElementById("randomFood")

button.addEventListener('click', alertMe)
// // let alertMe = function () {
// //     if (alert('wow')) {
// //         return resturants[random]
// //     }
// // }
    

