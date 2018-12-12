for (let i = 1; i <= 20; i++) {
    console.log(i);
}

for (let i = 0; i <= 200; i+= 2) {
        console.log(i);
}
const catNoises = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', '...why does the red dot always get away...'];
for (let i = 0; i < 20; i++) {
    console.log("Love me, pet me! HSSSSS!");
    if (i % 2 ===0) {
        let random = Math.round(Math.random() * 2);
        // console.log(random);
        console.log(catNoises[random]);
    }
}

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 & i % 5 === 0) {
        console.log("FizzBuzz");
    }  else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

shahzad[0] = "Gameboy";
daniel[1] += 1;
ryan[2] = "Gotham City";
reuben.splice(2, 1, "Chicago");
jim.splice(2, 1, "Denver", "Tamarindo","London");
jim.splice(2, 1);
