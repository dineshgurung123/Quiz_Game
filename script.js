const questions = [
   // Cricket and WWE Questions
   {
       question: "Who is the highest run-scorer in international cricket?",
       answers: [
           { text: "Sachin Tendulkar", correct: true },
           { text: "Ricky Ponting", correct: false },
           { text: "Virat Kohli", correct: false },
           { text: "Brian Lara", correct: false }
       ]
   },
   {
       question: "Which country won the first Cricket World Cup?",
       answers: [
           { text: "Australia", correct: false },
           { text: "West Indies", correct: true },
           { text: "India", correct: false },
           { text: "England", correct: false }
       ]
   },
   {
       question: "Who is known as 'The Wall' in Indian cricket?",
       answers: [
           { text: "Rahul Dravid", correct: true },
           { text: "Sachin Tendulkar", correct: false },
           { text: "Virender Sehwag", correct: false },
           { text: "VVS Laxman", correct: false }
       ]
   },
   {
       question: "Which country is associated with the 'Black Caps' in cricket?",
       answers: [
           { text: "New Zealand", correct: true },
           { text: "South Africa", correct: false },
           { text: "West Indies", correct: false },
           { text: "Sri Lanka", correct: false }
       ]
   },
   {
       question: "Who was the first cricketer to score a double century in ODI cricket?",
       answers: [
           { text: "Sachin Tendulkar", correct: true },
           { text: "Rohit Sharma", correct: false },
           { text: "Chris Gayle", correct: false },
           { text: "Virender Sehwag", correct: false }
       ]
   },
   {
       question: "Which cricketer is known as 'Captain Cool'?",
       answers: [
           { text: "MS Dhoni", correct: true },
           { text: "Ricky Ponting", correct: false },
           { text: "Eoin Morgan", correct: false },
           { text: "Kane Williamson", correct: false }
       ]
   },
   {
       question: "Which Nepalese cricketer made his IPL debut in 2018?",
       answers: [
           { text: "Sandeep Lamichhane", correct: true },
           { text: "Paras Khadka", correct: false },
           { text: "Sompal Kami", correct: false },
           { text: "Sharad Vesawkar", correct: false }
       ]
   },
   {
       question: "Which cricket stadium is located in Nepal?",
       answers: [
           { text: "Tribhuvan University International Cricket Ground", correct: true },
           { text: "Lords", correct: false },
           { text: "Eden Gardens", correct: false },
           { text: "MCG", correct: false }
       ]
   },
   {
       question: "Who won the ICC Cricket World Cup in 2019?",
       answers: [
           { text: "England", correct: true },
           { text: "New Zealand", correct: false },
           { text: "India", correct: false },
           { text: "Australia", correct: false }
       ]
   },
   {
       question: "Who holds the record for the fastest century in ODI cricket?",
       answers: [
           { text: "AB de Villiers", correct: true },
           { text: "Virat Kohli", correct: false },
           { text: "Chris Gayle", correct: false },
           { text: "Shahid Afridi", correct: false }
       ]
   },
   {
       question: "Which WWE wrestler is known as 'The Phenomenal One'?",
       answers: [
           { text: "AJ Styles", correct: true },
           { text: "John Cena", correct: false },
           { text: "Randy Orton", correct: false },
           { text: "Triple H", correct: false }
       ]
   },
   {
       question: "Which WWE superstar is known for the phrase 'You Can't See Me'?",
       answers: [
           { text: "John Cena", correct: true },
           { text: "The Rock", correct: false },
           { text: "Stone Cold Steve Austin", correct: false },
           { text: "Roman Reigns", correct: false }
       ]
   },
   {
       question: "Who has the most centuries in Test cricket?",
       answers: [
           { text: "Sachin Tendulkar", correct: true },
           { text: "Ricky Ponting", correct: false },
           { text: "Jacques Kallis", correct: false },
           { text: "Steve Waugh", correct: false }
       ]
   },
   {
       question: "Which cricket team is known as 'Men in Blue'?",
       answers: [
           { text: "India", correct: true },
           { text: "Sri Lanka", correct: false },
           { text: "England", correct: false },
           { text: "Australia", correct: false }
       ]
   },
   {
       question: "Which cricketer has taken the most wickets in Test cricket?",
       answers: [
           { text: "Muttiah Muralitharan", correct: true },
           { text: "Shane Warne", correct: false },
           { text: "Anil Kumble", correct: false },
           { text: "James Anderson", correct: false }
       ]
   },
   // Marvel Questions
   {
       question: "Who is the leader of the Avengers?",
       answers: [
           { text: "Iron Man", correct: false },
           { text: "Captain America", correct: true },
           { text: "Thor", correct: false },
           { text: "Hulk", correct: false }
       ]
   },
   {
       question: "Which Marvel superhero has a shield made of vibranium?",
       answers: [
           { text: "Black Panther", correct: false },
           { text: "Captain America", correct: true },
           { text: "Iron Man", correct: false },
           { text: "Hawkeye", correct: false }
       ]
   },
   {
       question: "Who is the villain in Avengers: Infinity War?",
       answers: [
           { text: "Thanos", correct: true },
           { text: "Loki", correct: false },
           { text: "Ultron", correct: false },
           { text: "Red Skull", correct: false }
       ]
   },
   {
       question: "What is the name of Thor's hammer?",
       answers: [
           { text: "Mjolnir", correct: true },
           { text: "Stormbreaker", correct: false },
           { text: "Gungnir", correct: false },
           { text: "Nidavellir", correct: false }
       ]
   },
   {
       question: "Which Marvel character is a master of magic?",
       answers: [
           { text: "Doctor Strange", correct: true },
           { text: "Wolverine", correct: false },
           { text: "Spider-Man", correct: false },
           { text: "Black Widow", correct: false }
       ]
   },
   {
       question: "Who is the king of Wakanda?",
       answers: [
           { text: "T'Challa", correct: true },
           { text: "Killmonger", correct: false },
           { text: "M'Baku", correct: false },
           { text: "Shuri", correct: false }
       ]
   },
   {
       question: "What is Spider-Man's real name?",
       answers: [
           { text: "Peter Parker", correct: true },
           { text: "Tony Stark", correct: false },
           { text: "Bruce Banner", correct: false },
           { text: "Steve Rogers", correct: false }
       ]
   },
   {
       question: "Which Marvel superhero is from Asgard?",
       answers: [
           { text: "Thor", correct: true },
           { text: "Hulk", correct: false },
           { text: "Iron Man", correct: false },
           { text: "Black Widow", correct: false }
       ]
   },
   {
       question: "Who is the Winter Soldier?",
       answers: [
           { text: "Bucky Barnes", correct: true },
           { text: "Steve Rogers", correct: false },
           { text: "Sam Wilson", correct: false },
           { text: "Clint Barton", correct: false }
       ]
   },
   {
       question: "Which Marvel character is a billionaire genius?",
       answers: [
           { text: "Tony Stark", correct: true },
           { text: "Bruce Wayne", correct: false },
           { text: "Peter Parker", correct: false },
           { text: "Stephen Strange", correct: false }
       ]
   },
   {
       question: "Who is the Scarlet Witch?",
       answers: [
           { text: "Wanda Maximoff", correct: true },
           { text: "Natasha Romanoff", correct: false },
           { text: "Pepper Potts", correct: false },
           { text: "Jane Foster", correct: false }
       ]
   }
]


let currentIndex = 0;
let score =0;


const  quesionElements = document.getElementById("question");
const answerButtonsElements = document.getElementById("answer-btn");


function showQuestion() {
   //get the current question


   const currentQuestion = questions[currentIndex];

   quesionElements.innerText = currentQuestion.question;

 answerButtonsElements.innerHTML = " ";
     
   
     currentQuestion.answers.forEach(answer =>{

       const button =  document.createElement("button");

       button.innerHTML = answer.text;

       button.classList.add("btn");

      
       button.addEventListener("click", ()=>{

         selectAnswer(button, answer);
       })


       
       answerButtonsElements.appendChild(button);

     });


}

function selectAnswer(button, answer) {

//disable all the buttons after clicked


Array.from(answerButtonsElements.children).forEach(btn =>{

btn.disabled =true;

});

if(answer.correct){

   
   button.style.backgroundColor = "green";
   score++;


}
else{
   button.style.backgroundColor = "red";
   
   
   quesionElements.innerHTML = "Game over ! Your Score is "+ score;
   return;
}


setTimeout(()=>{

currentIndex++;
if(currentIndex <questions.length){
   showQuestion();
}
else{

quesionElements.innerHTML = " Score is "+ score;

currentIndex = 0;

}


},1000);
}
showQuestion();
