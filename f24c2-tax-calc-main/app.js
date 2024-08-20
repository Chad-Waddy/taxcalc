// // You're a JS developer, and you've been asked to build a a tax calculation engine
// // v4 features:
// // - if income greater than 200$, ask them to show proof (ask more questions )
// // and show the proof in addition to their net income display
// // - for everybody else, show just the net income

// // v5: @todo
// // - when the income is greater than $200, do the tax calculation but add a $20 deduction from the gross.

// // v6: dele
// // - if the state is ME or NH make the taxRate 0.05


// const grossIncome = 1000; 
// const maTaxRate = 0.0423;
// const nhTaxRate = 0.05;
// const meTaxRate = 0.05;
// const state = checkState;
//     function checkState() {
//     const selectedState = document.getElementById('states').value;

// //  notes 2 8.14 $this is a variable to take the imput from the html doc and run it through the document selector for imput
// const inputFromHTML = document.querySelector("input");// new
// // $ this is the variable for reading the form imput and putting it into the query selector 
// const formFromHTML = document.querySelector("form"); //new
// // questions about this block ,, " so i understand the "formfromHTML" but what does the event default do.? consol log is to showo the imput from the hmtl value "
//             // gross income form     
// formFromHTML.addEventListener("submit", function(event)) {  
//     event.preventDefault();

//         console.log(inputFromHTML.value)   ;

//         const grossIncomefromHTMLForm = inputFromHTML.value;
// }
    
//     if( grossIncomefromHTMLForm >= 200 ){

//         console.log(`Your gross income is ${grossIncomefromHTMLForm}`);
   
// }   else {
//     // do some stuff
//     const taxDue = grossIncomefromHTMLForm * maTaxRate;
//     const netIncome =  grossIncomefromHTMLForm - taxDue;

//     console.log(netIncome);
// }

// //MA
// if( state === "MA"){
//  //do MA stuff
//     if( grossIncome >= 200 ){

//         console.log(`Your gross income is ${grossIncome}`);

//     } else {
//         // do some stuff
//         const taxDue = grossIncome * ma;
//         const netIncome =  grossIncome - taxDue;

//         console.log(netIncome);
//     };
// };
// // NH 
// if(state === "NH" ){
//    if (grossIncome >= 200) {//do NH stuff
//      taxDue = grossIncome * nhTaxRate;
//     netIncome = (grossIncome - 20) - taxesDue;
    
//     console.log(`ghross Income in NH: ${netIncome}`);
// }else{
//     taxDue = grossIncome * meTaxRate;
   
//     netIncome = grossIncome - taxDue;
//     console.log(`gross Income in NH: ${netIncome}`);
// } // Calculate tax and net income for ME or MA without the $20 deduction
  

// };


// if(state === "ME"){
//     if( grossIncome >= 200 ){
//     // do ME suff;
//     // @TODO: make this work
//     taxDue = grossIncome * meTaxRate;
//     netIncome = (grossIncome - 20) - taxesDue;
    
//     console.log(`gross Income in ME: ${netIncome}`);




//     console.log(`Your gross income is ${grossIncome}`);

// }   else {
//     // do some stuff
//     const taxDue = grossIncome * taxRate;
//     const netIncome =  grossIncome - taxDue;

//     console.log(netIncome);
// } } 

// //----------------------\\
// // worked for the last one 
// //if (grossIncome >= 200) {
// //     // >>>>> do this stuff if condition is true
// //       const userProof = prompt(`Since your gross income is: $${grossIncome} \n What's your income source?`);
// //      const taxRate = 0.0423;
// //     // 3. multiple the gross by the tax rate
// //     const taxesDue = grossIncome * taxRate;
// //     // 4. de. the outcome from the gross
// //     const netIncome = (grossIncome - 20) - taxesDue;
// //     // 5. show the results
// //     console.log(netIncome);
// //     // alert("Your net is now " + netIncome)
    
// //   } else {
// //     //>>>>> do this stuff if condition is false
// //     // 2. get the base tax rate (ma: 4.23% or 0.0423)
// //     const taxRate = 0.0423;
// //     // 3. multiple the gross by the tax rate
// //     const taxesDue = grossIncome * taxRate;
// //     // 4. de. the outcome from the gross
// //     const netIncome = grossIncome- taxesDue;
// //     // 5. show the results
// //     console.log(netIncome);
// //     // alert("Your net is now " + netIncome)
// //   }
  
// }};
 ////////////////////NEW
 // You're a JS developer, and you've been asked to build a a tax calculation engine
// v4 features:
// - if income greater than 200$, ask them to show proof (ask more questions )
// and show the proof in addition to their net income display
// - for everybody else, show just the net income

// v5: @todo
// - when the income is greater than $200, do the tax calculation but add a $20 deduction from the gross.

// v6: dele
// - if the state is ME or NH make the taxRate 0.05
//------------------------------\\
const grossIncome = 1000; // Example gross income value
const maTaxRate = 0.0423;
const nhTaxRate = 0.05;
const meTaxRate = 0.05;

// Selecting state from form input
function checkState() {
    return document.getElementById('states').value;
}

// Select input and form elements from HTML
const inputFromHTML = document.querySelector("input[type='number']"); // Fixed input selector
const formFromHTML = document.querySelector("form");

// Event listener for form submission
formFromHTML.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form from submitting the traditional way

    const grossIncomefromHTMLForm = parseFloat(inputFromHTML.value); // Fixed: Convert input value to a number

    if (grossIncomefromHTMLForm > 200) {
        // Example of asking for proof
        const userProof = prompt(`Your income is $${grossIncomefromHTMLForm}. Please provide proof.`);
        console.log(`Proof provided: ${userProof}`);
        
        // Deduct $20 and calculate net income
        const taxDue = (grossIncomefromHTMLForm - 20) * maTaxRate;
        const netIncome = grossIncomefromHTMLForm - taxDue;
        console.log(`Net Income: ${netIncome}`);
    } else {
        // Calculate tax without the $20 deduction
        const taxDue = grossIncomefromHTMLForm * maTaxRate;
        const netIncome = grossIncomefromHTMLForm - taxDue;
        console.log(`Net Income: ${netIncome}`);
    }
});
//---------------------------------..//
// Tax calculation based on state selection
const state = checkState();

if (state === "MA") {
    if (grossIncome > 200) {
        console.log(`Your gross income is ${grossIncome}`);
    } else {
        const taxDue = grossIncome * maTaxRate;
        const netIncome = grossIncome - taxDue;
        console.log(netIncome);
    }
} else if (state === "NH") {
    if (grossIncome > 200) {
        const taxDue = grossIncome * nhTaxRate;
        const netIncome = (grossIncome - 20) - taxDue;
        console.log(`Gross Income in NH: ${netIncome}`);
    } else {
        const taxDue = grossIncome * nhTaxRate;
        const netIncome = grossIncome - taxDue;
        console.log(`Gross Income in NH: ${netIncome}`);
    }
} else if (state === "ME") {
    if (grossIncome > 200) {
        const taxDue = grossIncome * meTaxRate;
        const netIncome = (grossIncome - 20) - taxDue;
        console.log(`Gross Income in ME: ${netIncome}`);
    } else {
        const taxDue = grossIncome * meTaxRate;
        const netIncome = grossIncome - taxDue;
        console.log(netIncome);
    }
}
