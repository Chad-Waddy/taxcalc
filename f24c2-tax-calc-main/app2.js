// //First, complete the “Before you start” section

// 1 Implement the following features in your JavaScript file:
// 2 Create variables to store the user’s income and the calculated tax. *
// 3 Use control structures (if/else statements) to determine the tax rate based on income brackets.*
// 4 Implement a function that calculates the tax based on the input income.
// 5 Use DOM manipulation to update the page with the calculated tax amount.
// Solve the problem in bits, creating branches and committing frequently, andpushing your work to GitHub
// Deploy your project to render (this should happen with commits you do to GitHub)
// When you have it working, submit the following on Moodle
// Your public GitHub link (the link to your code)
// Your public render link (the link to your app)
// Note: For simplicity, you can use the following tax brackets for Massachusetts:

// 5% for income up to $50,000
// 5.5% for income between $50,001 and $100,000
// 6% for income above $100,000
// Remember to use only the concepts covered in Weeks 1–2, focusing on basic JavaScript syntax, variables, operators, and control structures. Use TailwindCSS for styling your application.


// 5% for income up to $50,000
// 5.5% for income between $50,001 and $100,000
// 6% for income above $100,000
const low = .05;
const mid = .055;
const high = .06;

const grossIncome = 30000
const taxesDue = 200

let i = grossIncome
if (i >= 50000) {
    taxDue = grossIncome * low;
    netIncome = grossIncome - taxesDue;
 // display net income 
 console.log(`Taxable debt/return: ${netIncome}`);
}

if (i >= 50000 && i <= 100000) {
    taxDue = grossIncome * mid;
    netIncome = grossIncome - taxesDue;
    console.log(`Taxable debt/return: ${netIncome}`);
}

if (i <=  100000) {
    taxDue = grossIncome * high;
    netIncome = grossIncome - taxesDue;
    console.log(`Taxable debt/return: ${netIncome}`);

}