Assignment 4 - Components
===
## a4-components

your hosting link e.g. http://a4-components-matthew7758.glitch.me

I imported snowpack and used it to build a simple react application, then transferred the contents of a2 into the src folder and rewrote file references.
Next I changed the server to use express and serve the build folder, then updated package.json to have proper build and start scripts.
Overall the main thing I needed to change was the index.html to remove all content and put it in the JSX file. Then I added an asynchronous script to load after that loaded scripts.js from the old a2 assignment.
Using React honestly hindered the experience for this particular implementation. If it had been creating a new project it would have been better than trying to convert an old one.
