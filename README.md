
# Personal Budget & Expense Tracker

## Project Description

This project is a Personal Budget & Expense Tracker website built using HTML and CSS as part of the PLP Web Development course.

The project started in Week 1 with a basic HTML structure and CSS styling. In Week 2, I improved the website by adding an expense table, an upgraded expense form, multimedia elements, interactive instructions, and advanced CSS selectors.

## Features

### 1. Add Expense Form
- Expense name input field.
- Amount input field.
- Category dropdown with Food, Transport, Rent, Entertainment, and Other.
- Add Expense button.
- The button is not functional yet because JavaScript will be added in a future week.

### 2. Expense Table
- Displays five sample expenses.
- Contains Name, Amount, Category, and Date columns.
- Uses HTML table elements including table, thead, tbody, tr, th, and td.
- Includes alternating row colors and hover effects.

### 3. Multimedia
- A budget-related logo displayed using an HTML image element.
- An embedded YouTube video about budgeting.

### 4. Interactive Instructions
- A collapsible "How to Use This Tracker" section.
- Uses HTML details and summary elements.

### 5. CSS Styling
- Element, class, and ID selectors.
- Descendant selectors.
- Focus effects on input fields.
- Alternating table row colors using nth-child(even).
- Hover effects on table rows and buttons.
- A negation selector using :not().

## Project Files

- index.html - Contains the website structure, form, expense table, image, video, and instructions.
- style.css - Contains the website styling and advanced CSS selectors.
- README.md - Explains the project and its features.

## How to Run

1. Download or clone this repository.
2. Open the project folder in VS Code.
3. Open index.html in a web browser such as Google Chrome.
4. Explore the expense form, sample expense table, instructions, and budgeting video.

## Technologies Used

- HTML5
- CSS3
- Google Chrome Developer Tools

## Future Improvements

In future weeks, I plan to add JavaScript to make the Add Expense button functional, allow users to add and remove expenses, and calculate total expenses and remaining budget.

## Week 3: Visual Identity and CSS Improvements

In Week 3, I improved the visual appearance of my existing Personal Budget & Expense Tracker using CSS. The focus was on creating a consistent, professional, and user-friendly design without changing the HTML structure or adding new functionality.

### 1. Color Palette
- Applied navy blue (`#123b5d`) to headings and table headers.
- Used teal (`#0d9488`) for buttons and interactive elements.
- Applied light grey (`#f1f5f9`) to the page background.
- Used white cards to create a clean and organized layout.

### 2. Typography
- Imported Poppins from Google Fonts for headings.
- Used Inter from Google Fonts for body text, form labels, buttons, and table content.
- Improved readability through consistent font sizes, weights, and spacing.

### 3. Form and Table Styling
- Improved the Add Expense form with rounded input fields, padding, and focus effects.
- Styled the Add Expense button with teal coloring and a hover effect.
- Added a navy blue table header, cell borders, and consistent padding.
- Applied alternating row colors and hover effects to the expense table.

### 4. CSS Box Model
- Used margins and padding to separate and organize page sections.
- Applied borders, rounded corners, and subtle shadows.
- Designed the page heading, Add Expense form, and Expense Table as separate visual cards.

### 5. Responsive Design
- Added CSS media queries to improve the layout on smaller screens.
- Adjusted spacing, heading sizes, and table text for mobile devices.

### Week 3 Outcome
The Budget Tracker now has a more polished and consistent appearance. The project remains an HTML and CSS prototype, with JavaScript functionality planned for future development.

## Week 4: SpendWise Dashboard Shell — CSS Grid & Flexbox

### Project Overview

SpendWise is a responsive personal budget and expense tracking dashboard built using HTML5 and CSS3. This Week 4 update transforms the original Budget Tracker into a modern financial dashboard using CSS Grid, Flexbox, CSS custom properties, and responsive design.

### Dashboard Features

- **Sidebar Navigation:** Provides links to the Dashboard, Add Expense, Expenses, and Budget Tips sections.
- **Dashboard Header:** Displays the application heading, description, and reporting month.
- **Financial Summary:** Shows the monthly budget, total expenses, and remaining budget using sample financial data.
- **Six Spending Category Cards:** Displays financial information for Food, Transport, Rent, Entertainment, Savings, and Utilities.
- **Add Expense Form:** Contains fields for entering an expense name, amount, and category.
- **Expense Table:** Displays five sample transactions with their amounts, categories, and dates.
- **Budgeting Tips:** Includes instructions and an educational budgeting video.

### CSS Techniques Used

**CSS Grid:** Used to create the overall dashboard layout, arrange the financial summary cards, and organize the six spending category cards.

**Flexbox:** Used to arrange the sidebar navigation, align the dashboard header, and organize information inside individual cards.

**CSS Custom Properties:** Defined in the `:root` selector to maintain consistent brand colors, accent colors, background colors, and text colors.

**Responsive Design:** Uses CSS media queries to adapt the dashboard to different screen sizes. Below 768px, the layout changes to a single column. The responsive design was tested using Chrome DevTools with an iPhone 16 screen size.

**Card Micro-interactions:** The category cards use hover and keyboard-focus effects with `transform` and `box-shadow`. The transitions last 200 milliseconds, meeting the assignment requirement of 250 milliseconds or less.

**Dark Theme:** Includes an optional dark theme using `@media (prefers-color-scheme: dark)` and CSS variable overrides.

### Technologies Used

- HTML5
- CSS3
- CSS Grid
- CSS Flexbox
- CSS Media Queries
- CSS Custom Properties
- Google Fonts

### Project Files

- `index.html` — Contains the dashboard structure, sidebar navigation, financial summary, six category cards, expense form, expense table, and budgeting video.
- `style.css` — Contains the dashboard styling, CSS Grid and Flexbox layouts, responsive design, card animations, and color themes.
- `README.md` — Provides project documentation, features, technologies, and development progress.

### Testing

The dashboard was tested in Google Chrome.

- Desktop layout displays the sidebar, header, and financial cards.
- Mobile responsiveness was verified using Chrome DevTools with an iPhone 16 screen size of 393px.
- Financial cards stack vertically on smaller screens.
- Card hover animations were tested successfully.

### Important Note

This project is currently a static dashboard prototype developed for PLP Web Development Week 4. All financial information is sample data. The Add Expense button is not yet functional. Interactive features will be introduced in future development stages.

### Conclusion

The Week 4 update establishes a clean, responsive, and visually organized foundation for the SpendWise personal finance dashboard. It demonstrates practical use of CSS Grid, Flexbox, CSS variables, responsive layouts, and micro-interactions.

## Week 6: JavaScript Foundation for SpendWise

### Project Overview

SpendWise is a personal budget and expense tracking dashboard built using HTML5, CSS3, and JavaScript. This Week 6 update introduces JavaScript functionality that allows users to enter financial information, calculate expenses, and determine their remaining budget.

### JavaScript Concepts Implemented

**1. Variables and Data Types**

The application uses JavaScript variables to store budgeting information, including the monthly budget, food expenses, transport expenses, and rent expenses.

The `const` keyword is used to declare variables. Strings store text information, while numbers store financial amounts for calculations.

**2. Collecting User Input**

The application uses the JavaScript `prompt()` function to collect information directly from users.

Users are asked to enter:
- Monthly budget
- Food expenses
- Transport expenses
- Rent expenses

The information is stored in variables for further processing.

**3. Converting User Input**

JavaScript's `Number()` function converts the values entered through prompts from strings into numbers.

This ensures the application can perform mathematical calculations correctly.

**4. Budget Calculations**

The application calculates total expenses by adding food, transport, and rent expenses.

Total Expenses = Food Expenses + Transport Expenses + Rent Expenses

It then calculates the remaining budget by subtracting total expenses from the monthly budget.

Remaining Balance = Monthly Budget - Total Expenses

**5. Reusable Functions**

The application includes two reusable JavaScript functions:

- `calculateTotalExpenses()` — Calculates the total amount spent across expense categories.
- `calculateRemainingBalance()` — Calculates the amount of money remaining after deducting expenses from the monthly budget.

These functions help organize the application code and make calculations easier to reuse.

**6. Displaying Results**

The application uses `console.log()` to display clearly labeled financial information in the browser's Developer Tools Console.

The displayed results include the monthly budget, individual expenses, total expenses, and remaining balance.

### Example Budget Calculation

The application was tested using the following sample values:

| Budget Information | Amount |
|---|---|
| Monthly Budget | KES 50,000 |
| Food Expenses | KES 2,500 |
| Transport Expenses | KES 300 |
| Rent Expenses | KES 15,000 |
| Total Expenses | KES 17,800 |
| Remaining Balance | KES 32,200 |

### Technologies Used

- HTML5
- CSS3
- JavaScript
- CSS Grid
- CSS Flexbox
- CSS Media Queries
- Google Fonts

### Project Files

- `index.html` — Contains the SpendWise Dashboard structure and links the JavaScript file.
- `style.css` — Provides the dashboard styling, responsive layout, colors, and animations.
- `script.js` — Stores application data, collects user input, performs calculations, and displays results.
- `README.md` — Documents the project features, technologies, and development progress.

### Testing

The application was tested successfully in Google Chrome.

- The JavaScript file loaded successfully.
- Four input prompts appeared correctly.
- User inputs were converted into numbers.
- Total expenses were calculated correctly.
- The remaining balance was calculated correctly.
- Results were displayed clearly in the Chrome Developer Tools Console.

### Important Note

This Week 6 implementation focuses on JavaScript fundamentals. The dashboard currently displays sample financial information, while JavaScript calculations appear in the browser console.

The Add Expense button is not yet functional. Additional interactive features will be implemented in future project updates.

### Conclusion

The Week 6 update introduces the JavaScript foundation of SpendWise by demonstrating variables, data types, user input, mathematical calculations, reusable functions, and console output. These features prepare the application for future interactive budget tracking functionality.
