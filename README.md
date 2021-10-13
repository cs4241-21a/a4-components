## A4 Components, Lost and Found App
https://a4-federico-galbiati.herokuapp.com

The goal of the project is to store lost & found items in the database, and provide them to the frontend through Node.js. The platform allows only the creator of an item to modify/delete it.
- I used React for the frontend
- The app uses Passport.js with the GitHub authentication strategy to allow any user to log in. Once logged in, it will use the user's email as a unique ID for creating items.
- I used Primer (https://primer.style) as the CSS framework for this project, included with npm. I already had some experience with Bootstrap, and Primer is the framework used by the GitHub team. Therefore, I thought it would be nice to try it out and learn the foundations of GitHub's website UI.

The main change was using React + Primer from npm for the frontend. In terms of backend, the only changes were in some endpoints which were initially using redirects, and had to be converted to be used as API endpoints.

Using React allowed me to write significantly better code. I was able to create reusable components each one with props that allow it to render the necessary fields. For example, instead of having two HTML tables with different handlers, I implemented one component, used it twice, and simply gave it a different array of items and title to display. Similarly, I created one form and based on the props it either allows to edit or create an item. This significantly standardized the workflow trigger->update->refresh. Using React absolutely improved my development experience.