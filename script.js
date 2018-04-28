var questionArray, score, changeQuestion;

//General question object

var Question = function (question,answers,correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

//Question 1
var a1 = [
    'A protein',
    'A nucleic acid',
    'A phospholipid',
    'A carbohydrate'
]
var q1= new Question('What type of molecule is the following structure?',a1,2);

//Question 2
var a2 = [
    'It is made up of two layers of phospholipid polymers.',
    'It is made up of two layers of phospholipid molecules with the tails pointing away from each other.',
    'It is made up of two layers of phospholipid molecules with the tails lying parallel to each other.',
    'It is made up of two layers of phospholipid molecules with the tails interacting with each other.'
]
var q2= new Question('Which of the following is an accurate description of the phospholipid bilayer in cell membranes?',a2,3);

//Question 3
var a3 = [
    'Water and ions are unable to cross the bilayer due to the charges present in the head groups.',
    'Water and ions are unable to cross the bilayer due the hydrophobic tails of the phospholipid molecules.',
    'Water and ions are encouraged to cross the bilayer by interacting with the charges present in the head groups.',
    'The molecules in the bilayer are fluid, and so the cell membrane is porous allowing the passage of ions and water across the cell membrane.'
]
var q3= new Question('Which of the following statements is true regarding the phospholipid bilayer in cell membranes?',a3,1);

//Question 4
var a4 = [
    'Drugs and drug targets generally have similar molecular weights.',
    'Drugs are generally smaller than drug targets.',
    'Drugs are generally larger than drug targets.',
    'There is no general rule regarding the relative size of drugs and their targets.'
]
var q4= new Question('Which of the following statements is true?',a4,1);

//Question 5
var a5 = [
    'The area of a macromolecular target that is occupied by a drug when it binds.',
    'The portion of the drug to which a drug target binds.',
    'The functional groups used by a drug in binding to a drug target.',
    'The bonds involved in binding a drug to its target.'
]
var q5= new Question('What is meant by a binding site?',a5,0);


//Console log
questionArray = [q1,q2,q3,q4,q5];
score = 0;
changeQuestion = true;
(
    function () {
        do{
            if(changeQuestion){
                var question = questionArray[Math.floor(Math.random() * 5)];
                console.log(question.question);
                var answers = question.answers;
                for(var i = 0 ; i < answers.length ; i++){
                    console.log((i+1)+'. '+answers[i]);
                }
            }
            var answer = window.prompt('Enter the answer here (Hint : type only number.]');
            if (answer !== NaN && (answer >= 0 && answer <= 4) && answer !== '') {
                if ((answer - 1) === question.correct) {
                    console.log("Correct answer!");
                    score++;
                    console.log('Your score until now = '+score);
                    console.log('____________________________________');
                    changeQuestion = true;
                } else {
                    console.log("Wrong answer!");
                    console.log('Your score until now = '+score);
                    console.log('____________________________________');
                    changeQuestion = true;
                }
            }else if(answer === 'exit'){
                console.log('____________________________________');
                console.log('Your final score = '+score);
                break;
            } else {
                console.log('Please Enter Valid input.');
                changeQuestion = false;
                continue;
            }
        }while (true)
    }()
)












