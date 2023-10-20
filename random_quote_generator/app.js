const quotes = [
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
];

let quoteBtn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

quoteBtn.addEventListener("click", function () {
  let randomNum = Math.floor(Math.random() * quotes.length);
  console.log(randomNum);
  quote.innerHTML = quotes[randomNum].quote;
  person.innerHTML = quotes[randomNum].author;
});
