
 // SpendWise - Week 6 JavaScript Foundation

 // 1. Store application data using variables
 const appName = "SpendWise";
 const currency = "KES";

 // 2. Collect user input
 const budgetInput = prompt("Enter your monthly budget in KES:");
 const foodInput = prompt("Enter your food expenses in KES:");
 const transportInput = prompt("Enter your transport expenses in KES:");
 const rentInput = prompt("Enter your rent expenses in KES:");

 // 3. Convert user input from strings to numbers
 const monthlyBudget = Number(budgetInput);
 const foodExpense = Number(foodInput);
 const transportExpense = Number(transportInput);
 const rentExpense = Number(rentInput);

 // 4. Reusable function to calculate total expenses
 function calculateTotalExpenses(food, transport, rent) {
     return food + transport + rent;
 }

 // 5. Reusable function to calculate remaining balance
 function calculateRemainingBalance(budget, expenses) {
     return budget - expenses;
 }

 // 6. Perform calculations
 const totalExpenses = calculateTotalExpenses(
     foodExpense,
     transportExpense,
     rentExpense
 );

 const remainingBalance = calculateRemainingBalance(
     monthlyBudget,
     totalExpenses
 );

 // 7. Display results in the browser console
 console.log("===== " + appName + " Budget Summary =====");
 console.log("Monthly Budget: " + currency, monthlyBudget);
 console.log("Food Expenses: " + currency, foodExpense);
 console.log("Transport Expenses: " + currency, transportExpense);
 console.log("Rent Expenses: " + currency, rentExpense);
 console.log("Total Expenses: " + currency, totalExpenses);
 console.log("Remaining Balance: " + currency, remainingBalance);
