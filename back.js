/* javascript file */

(function() {
  const myQuestions = [
    {
      question: "Which feature of OOP indicates code reusability?",
      answers: {
        a: "Encapsulation",
        b: "Inheritance",
        c: "Abstraction",
        d: "Polymorphism"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following is not feature of pure OOP?",
      answers: {
        a: "Classes must be used",
        b: "Inheritance",
        c: "Data may/may not be declared using object",
        d: "Functions Overloading"
      },
      correctAnswer: "c"
    },
    {
      question: "Which among the following doesn’t come under OOP concept?",
      answers: {
        a: "Platform independent",
        b: "Data binding",
        c: "Message passing",
        d: "Data hiding"
      },
      correctAnswer: "a"
    },
    {
      question: "Which feature may be violated if we don’t use classes in a program?",
      answers: {
        a: "Inheritance can’t be implemented",
        b: "Object must be used is violated",
        c: "Encapsulation only is violated",
        d: "Basically all the features of OOP gets violated"
      },
      correctAnswer: "d"
    },
    {
      question: "How many basic features of OOP are required for a programming language to be purely OOP",
      answers: {
        a: "7",
        b: "6",
        c: "3",
        d: "4"
      },
      correctAnswer: "a"
    },
    {
      question: "The feature by which one object can interact with another object is:",
      answers: {
        a: "Data transfer",
        b: "Data Binding",
        c: "Message Passing",
        d: "Message reading"
      },
      correctAnswer: "c"
    },
    {
      question: " ___________ underlines the feature of Polymorphism in a class.",
      answers: {
        a: "Nested class",
        b: "Enclosing class",
        c: "Inline function",
        d: "Virtual Function"
      },
      correctAnswer: "d"
    },
    {
      question: "Abstraction gives higher degree of ________",
      answers: {
        a: "Class usage",
        b: "Program complexity",
        c: "Idealized interface",
        d: "Unstable interface"
      },
      correctAnswer: "c"
    },
    {
      question: "Object is ________ abstraction",
      answers: {
        a: "Object",
        b: "Logical",
        c: "Real",
        d: "Hypothetical"
      },
      correctAnswer: "c"
    },
    {
      question: "Class is _________ abstraction",
      answers: {
        a: "Object",
        b: "Logical",
        c: "Real",
        d: "Hypothetical"
      },
      correctAnswer: "b"
    },
    {
      question: "Which among doesn’t illustrates polymorphism?",
      answers: {
        a: "Function overloading",
        b: "Function overriding",
        c: "Operator overloading",
        d: "Virtual function"
      },
      correctAnswer: "b"
    },
    {
      question: "Which feature in OOP is used to allocate additional function to a predefined operator in any language?",
      answers: {
        a: "Function overloading",
        b: "Function overriding",
        c: "Operator overloading",
        d: "Virtual function"
      },
      correctAnswer: "c"
    },
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
