let bankAmount = 5000; 
const VAT = 0.17;

const details = ["+200", "-100", "+146", "+167", "-2900"];


const expensesWithVAT = details.map(expense => {
   
    let num = Number(expense);
    
    return num + (num * VAT);
});


expensesWithVAT.forEach(exp => {
    bankAmount += exp;
});


console.log("Bank account standing at the end of the month:", bankAmount);
