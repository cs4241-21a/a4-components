---
## A4-Components -- WPI Student Preferences -- Andrew Kerekon

Link to Glitch: https://a4-andrew-kerekon.glitch.me/

My project is a survey for current WPI students to input their favorite dorms, dining halls, and spots on campus to compare with other current students. In switching over from A3-->A4, I transitioned my responses and edit pages entirely to React components, with 9 components in all (two forms, four tables, two pages, and the main app), but I struggled with getting these new forms to work with Glitch/Heroku and upon deployment it appears my add, edit, and delete functionality has broken, although users are stil able to log in and view all of their current survey inputs as well as view inputs from other users (but not edit/delete them). Please let me know if my Glitch page does not load and I'll do my best to show a few local screenshots!

In all honestly, React hindered the development experience more than it helped. Throughout the project, even though HTML was generated "on the fly" within my JSX files, I found that React's format messed with input forms and server code, and overall made life more challenging than a pure HTML/CSS/Express/Node approach. I found myself constantly having to create new components that were previously simple HTML elements, as well as having to rework my environment to take advantage of state and props. However, I do see some upside to React's approach since I feel that it will scale much better than a pure HTML/Express server by virture of being able to generate HTML anywhere, even embedded with JavaScript.   
