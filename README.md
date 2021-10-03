## Short Stack Securities Portfolio

My application is a stock, ETF, or index fund financial portfolio creator and manager. The site gathers information from the user about a security to produce a portfolio
listing and attaches that item to the user's account. Information that the user must enter includes the name of the security, its ticker symbol, the exchange it is traded
on, its percieved risk, its price in dollars, and the amount of shares that the user owns. The site produces a derived field that denotes the total dollar amount that the
user has invested in the security. All of the information that the user enters plus the derived field is used to append a portfolio listing to the page that the user can
edit and remove.

This application was refectored from my a3 submission to use React components for the portfolio listing display and updating. To start, a basic React project was created
using Babel to compile and Snowpack to bundle by following the instructions at createapp.dev. The App and Item components were used to organize between the bulk of the
application, including add, remove, and edit requests, and items of the table. The only functional difference between this refactor and my original a3 submission is that
the input feilds use placeholder text instead of clearing the value inside each input on focus. This slight difference in the functionality of the inputs is only present
because it was easier to implement with React.

React improved the development experience by condensing code and removing the need for cumbersome implementation related to updating data. Although the file containing the
react components (app.jsx) is long, there is no need for a scripts javascript file and the main html file is now very short. For example, in my original a3 submission, there
was a function update() that created a new row and populated it, which was messy and cumbersome. With React components, there is no need to manually update the page since
the components are reactive which means they automatically change based on their state. However, I personally find writing html in a javascript file to be awkward, so I will
most likely stick to frameworks like Vue in the future.
