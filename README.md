Assignment 4 - Components
===
Ivan Martinovic

## XXXL Gym Membership Managment Page
---
This web page is supposed to be a web page for managing gym memberships of a gym I used to go to back home in Bosnia (the gym doesn't have any official website, except for a facebook page: https://m.facebook.com/profile.php?id=100057309077774&refsrc=deprecated&_rdr

Hosting Link: https://a4-ivan-martinovic.herokuapp.com/

I've built upon a2. I've updated the server to use Express. Then I've updated the client side to use React. At first React was fun to use, since it allowed me to only edit 1 file for both my Javacsript and HTML. However, as time went onwards I've encountered many strange issues. Worst of which were that once I've finished the conversion, certain rules from the CSS styling sheet were not applied to elements, which took 2 office hours to fix. The other nightmare was trying to set onClick functions, to functions outside the defined class. Initially I was going to have 3 classes, 1 Form class, 1 Row class and 1 App class. But this difficulty of calling member functions from different classes made me drop the Form class entirely. Finally, the Row class had functions which were supposed to change the onClick funcitonality of my "primary" and "secondary" form button. This turned out to be a nightmare as well, and I ended up changing the logic of the callback functions. There was also the issue of debugging... the console printouts would point to App.js instead of App.jsx. So then I would have to have both files open, and I would sometimes accidentally edit the .js file instead of the .jsx file, which was frustrating. All said and done, I'd say the new technology hindered the development experience mostly because of my inexperience :(  

