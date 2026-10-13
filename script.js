
 // SpendWise - Interactive Budget Tracker

// 1. Monthly budget
const monthlyBudget = 50000;

// 2. Store multiple expenses in an array
let expenses = [
    { name: "Groceries", amount: 2500, category: "Food", date: "2026-10-01" },
    { name: "Bus Fare", amount: 300, category: "Transport", date: "2026-10-02" },
    { name: "House Rent", amount: 15000, category: "Rent", date: "2026-10-03" },
    { name: "Movie Ticket", amount: 800, category: "Entertainment", date: "2026-10-04" },
    { name: "Internet Bundle", amount: 1000, category: "Utilities", date: "2026-10-05" }
];

// 3. Format numbers as Kenyan shillings
function formatMoney(amount) {
    return "KES " + amount.toLocaleString("en-KE", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });
}

// 4. Calculate expenses using a loop
function calculateTotalExpenses() {
    let total = 0;

    for (let expense of expenses) {
        total += expense.amount;
    }

    return total;
}

// 5. Calculate remaining budget
function calculateRemainingBalance() {
    return monthlyBudget - calculateTotalExpenses();
}

// 6. Make decisions using conditional statements
function checkBudgetStatus() {
    const remaining = calculateRemainingBalance();

    if (remaining < 0) {
        return "Warning: You have exceeded your monthly budget!";
    } else if (remaining === 0) {
        return "You have used your entire monthly budget.";
    } else {
        return "Good job! You are within your monthly budget.";
    }
}

// 7. Update dashboard totals using the DOM
function updateDashboard() {
    document.getElementById("total-budget").textContent =
        formatMoney(monthlyBudget);

    document.getElementById("total-expenses").textContent =
        formatMoney(calculateTotalExpenses());

    document.getElementById("remaining-budget").textContent =
        formatMoney(calculateRemainingBalance());

    document.getElementById("budget-status").textContent =
        checkBudgetStatus();

    updateCategories();
    displayExpenses();
}

// 8. Update category totals and percentages
function updateCategories() {
    const categories = [
        "Food",
        "Transport",
        "Rent",
        "Entertainment",
        "Utilities"
    ];

    const totalExpenses = calculateTotalExpenses();

    for (let category of categories) {
        let categoryTotal = 0;

        for (let expense of expenses) {
            if (expense.category === category) {
                categoryTotal += expense.amount;
            }
        }

        const categoryId = category.toLowerCase();

        document.getElementById(
            "category-" + categoryId
        ).textContent = formatMoney(categoryTotal);

        const percentage = totalExpenses > 0
            ? (categoryTotal / totalExpenses) * 100
            : 0;

        document.getElementById(
            "percent-" + categoryId
        ).textContent = percentage.toFixed(1) + "%";
    }
}

// 9. Display expenses dynamically in the table
function displayExpenses() {
    const tableBody = document.getElementById(
        "expense-table-body"
    );

    tableBody.innerHTML = "";

    for (let expense of expenses) {
        const row = document.createElement("tr");

        const values = [
            expense.name,
            formatMoney(expense.amount),
            expense.category,
            expense.date
        ];

        for (let value of values) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    }
}

// 10. Handle user interaction with an event listener
const expenseForm = document.getElementById("expense-form");

expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById(
        "expense-name"
    ).value.trim();

    const amount = Number(document.getElementById(
        "expense-amount"
    ).value);

    const category = document.getElementById(
        "expense-category"
    ).value;

    // Validate user input
    if (!name || !Number.isFinite(amount) || amount <= 0 || !category) {
        alert("Please enter a valid expense name, amount, and category.");
        return;
    }

    // Create a new expense record
    const newExpense = {
        name: name,
        amount: amount,
        category: category,
        date: new Date().toLocaleDateString("en-CA")
    };

    // Add the expense to the array
    expenses.push(newExpense);

    // Update the webpage
    updateDashboard();

    // Clear the form
    expenseForm.reset();
});

// 11. Display the initial dashboard
updateDashboard();
