let weeklyExpenses = 0;
let monthlyExpenses = 0;
let annualExpenses = 0;

// Your Code Here
//for (i = 0; i < weeklyExpenseQuestions.length; i++) {
//  let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]));
//  weeklyExpenses = weeklyExpenses + answer;
//}
//for (i = 0; i < monthlyExpenseQuestions.length; i++) {
//  let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]));
//  monthlyExpenses = monthlyExpenses + answer;
//}
//for (i = 0; i < annualExpenseQuestions.length; i++) {
//  let answer = parseFloat(window.prompt(annualExpenseQuestions[i]));
//  annualExpenses = annualExpenses + answer;
//}

let i = 0;
let j = 0;
let k = 0;

while (i < weeklyExpenseQuestions.length) {
  let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]));
  weeklyExpenses = weeklyExpenses + answer;
  i++;
}
while (j < monthlyExpenseQuestions.length) {
  let answer = parseFloat(window.prompt(monthlyExpenseQuestions[j]));
  monthlyExpenses = monthlyExpenses + answer;
  j++;
}
while (k < annualExpenseQuestions.length) {
  let answer = parseFloat(window.prompt(annualExpenseQuestions[k]));
  annualExpenses = annualExpenses + answer;
  k++;
}
