// correct answers for all quesions- A taken by default for now
const correctAnswer = ["A","A","A","A","A"]
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log(event, "----");


    let score = 0; // for message of correct answers out of total
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]
    // console.log(userAnswers);

    userAnswers.forEach((answer, index)=>{
        if(answer == correctAnswer[index]){
            // console.log("Correct answer", index);
            score += 1;
        }
    });
    // console.log("Total Corrent answers: ", score);

    scrollTo(0,0); // will scroll to top automatically x-y-axis = 0
    result.classList.remove("hide"); // will remove hide class and who that score box
    result.querySelector("p").textContent = `You scored ${score}/5!`; // will display real time dynamic score 
});