//first we initiate the function and in the parameters we put the variables for the values so the user can pass them
function calculateMortgagePayment(Principal, YearlyInterestRate, Years) {
    //The user passes in their payments years as written in their mortgage we convert it to months so we can use it on the formula
    let NumberOfPayments = Years * 12

    //The user will provide their yearly interest rate in percentage we divide by 100 to convert to decimels and then by 12 to make it monthly
    let MonthlyInterest = (YearlyInterestRate / 100) / 12

    //We finally use the formula here and return our calculation
    return (Principal * MonthlyInterest * (Math.pow(1 + MonthlyInterest, NumberOfPayments))) / (Math.pow(1 + MonthlyInterest, NumberOfPayments) - 1)
}
//We pass the values to test the function and we use a method chaining with .toFixed to round the decimels to dollars.cents
let MonthlyPayment = calculateMortgagePayment(300000, 5, 30).toFixed(2);

//We output our result on the console with Console.log
console.log(`you are going to pay $${MonthlyPayment} a month`)
