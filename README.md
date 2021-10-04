Assignment 4 - Components
===

## Car Registry

Glitch Link: http://a4-evan-llewellyn.glitch.me

This app allows users to register their car online by filling out a form with relavent information about their car, which then populates the table and updates the server. They can also delete rows from the table if they made a mistake or no longer own that car. For this project, I converted my A2 assignment to use React. I think that this new technology vastly improved the development experience. I didn't have to think about grabbing variables from the DOM since they were being saved in the props of the child component. I also like how you can dynamically update the table with the map function on the array that is saved in the App state.

P.S. The way deletion works is that it takes the plate number of the car in the row selected and finds that in the array of data and deletes it (via filter). It's possible for there to be multiple cars with the same plate number, and currently they will all be deleted when the user tries to delete one of them. It was originally intended that plate number would be unique across all cars in the registry, but I didn't get around to implementing it.