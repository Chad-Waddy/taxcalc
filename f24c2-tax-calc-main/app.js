// You're a JS developer, and you've been asked to build a a tax calculation engine
// v4 features:
// - if income greater than 200$, ask them to show proof (ask more questions )
// and show the proof in addition to their net income display
// - for everybody else, show just the net income

// v5: @todo
// - when the income is greater than $200, do the tax calculation but add a $20 deduction from the gross.

// v6: dele
// - if the state is ME or NH make the taxRate 0.05


const grossIncome = 1000;
const maTaxRate = 0.0423;
const nhTaxRate = 0.05;
const meTaxRate = 0.05;
const state = "ME";

// if( state === "MA"){
//  //do MA stuff
//     if( grossIncome >= 200 ){

//         console.log(`Your gross income is ${grossIncome}`)

//     } else {
//         // do some stuff
//         const taxDue = grossIncome * ma;
//         const netIncome =  grossIncome - taxDue;

//         console.log(netIncome);
//     }
// }

if(state === "NH" ){
   if (grossIncome >= 200) {//do NH stuff
     taxDue = grossIncome * nhTaxRate;
    netIncome = (grossIncome - 20) - taxesDue;
    
    console.log(`ghross Income in NH: ${netIncome}`);
}else{
    taxDue = grossIncome * meTaxRate;
   
    netIncome = grossIncome - taxDue;
    console.log(`gross Income in NH: ${netIncome}`);
} // Calculate tax and net income for ME or MA without the $20 deduction
  

}


if(state === "ME"){
    if( grossIncome >= 200 ){
    // do ME suff;
    // @TODO: make this work
    taxDue = grossIncome * meTaxRate;
    netIncome = (grossIncome - 20) - taxesDue;
    
    console.log(`gross Income in ME: ${netIncome}`);

}


    console.log(`Your gross income is ${grossIncome}`)

} else {
    // do some stuff
    const taxDue = grossIncome * taxRate;
    const netIncome =  grossIncome - taxDue;

    console.log(netIncome);
}



//----------------------\\
// worked for the last one 
//if (grossIncome >= 200) {
//     // >>>>> do this stuff if condition is true
//       const userProof = prompt(`Since your gross income is: $${grossIncome} \n What's your income source?`);
//      const taxRate = 0.0423;
//     // 3. multiple the gross by the tax rate
//     const taxesDue = grossIncome * taxRate;
//     // 4. de. the outcome from the gross
//     const netIncome = (grossIncome - 20) - taxesDue;
//     // 5. show the results
//     console.log(netIncome);
//     // alert("Your net is now " + netIncome)
    
//   } else {
//     //>>>>> do this stuff if condition is false
//     // 2. get the base tax rate (ma: 4.23% or 0.0423)
//     const taxRate = 0.0423;
//     // 3. multiple the gross by the tax rate
//     const taxesDue = grossIncome * taxRate;
//     // 4. de. the outcome from the gross
//     const netIncome = grossIncome- taxesDue;
//     // 5. show the results
//     console.log(netIncome);
//     // alert("Your net is now " + netIncome)
//   }
  

