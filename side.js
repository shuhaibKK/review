const data = [
  {
    id: 1,
    person: "MAHATHMA GANDHI",
    words: '" Our greatest ability as humans is not to change the world, but to change ourselves. "',
    image: "http://t0.gstatic.com/images?q=tbn:ANd9GcQmtTSy61MD1vyCsI1vUD5NJMAvHfeXp9z5TSmJkXzA7qjfZ3PsyG0YziozFc9LC3euZucxXw",
  },
  {
    id: 2,
    person: "RATAN TATA",
    words:'" Take the stones people throw at you and use them to build a monument. "',
    image:  "https://pbs.twimg.com/profile_images/1189494401359208448/AwbXHtpn_400x400.jpg",
  },
  {
    id: 3,
    person: "ELON MUSK",
    words:'" Some people dont like change but you need to embrace change if the alternative is disaster. "',
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTam7dK4a6nCf6yhn8M0RPFBa1yIbNrD_9EUJ3NNEk7-o0KGCIZ",
  },
  {
    id: 4,
    person: "NELSON MANDELA",
    words: '" Education is the most powerful weapon which you can use to change the world. "',
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSyoK5c90Xe_YzsSLzn31yctIxEyBFYcVMeEhdRqJk0_RYb5esY",
  },
  {
    id: 5,
    person: "MOTHER TERESA",
    words: '"Not all of us can do great things. But we can do small things with great love."',
    image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTbKuDR_Z65NfFu2TWEWeQwlP5s1d56Mw-VOgLV83SKls5kfD1j",
  },
  {
    id: 6,
    person: "MUHAMMED ALI",
    words: '"I am the greatest, I said that even before I knew I was."',
    image: "https://cdn.siasat.com/wp-content/uploads/2021/10/Muhammed-Ali.jpg",
  },
  {
    id: 7,
    person: "WANGARI MAATHAI",
    words: '"Until you dig a hole, you plant a tree, you water it and make it survive, you havent done a thing."',
    image: "https://cosmosmagazine.com/wp-content/uploads/2021/03/GettyImages-525237988-small.jpg",
  },
];
const person = document.querySelector(".namedi");
const words = document.querySelector(".word");
const image = document.querySelector(".img");
const decrement = document.querySelector(".side1");
const increment = document.querySelector(".side2");
const button = document.querySelector(".butdiv");

let initial = 0;

window.addEventListener("DOMContentLoaded", () => {
  const tom = data[initial];
  person.textContent = tom.person;
  words.textContent = tom.words;
  image.src = tom.image;
});

function change(number) {
  const tom = data[number];
  person.textContent = tom.person;
  words.textContent = tom.words;
  image.src = tom.image;
}

increment.addEventListener("click", () => {
  initial++;

  if (initial > data.length - 1) {
    initial = 0;
  }
  change(initial);
});

decrement.addEventListener("click", () => {
  initial--;

  if (initial < 0) {
    initial = data.length - 1;
  }

  change(initial);
});

button.addEventListener("click", () => {
  initial = Math.floor(Math.random() * data.length);
  console.log(initial);

  change(initial);
});
