# Assignment 4 - Matthew Spofford

<https://cs4241-a4-MatthewSpofford.herokuapp.com>

For this project, I reworked my A3 implementation to use React. This involved using Snowpack to compile and deploy the code.
I felt that by using React, this definitely made it clearer how the code was structured and was a lot cleaner compared
to my plain JavaScript implementation. However, due to some of the weird quirks of React that I just wasn't familiar with
since I have never used the framework before, this did impair the development experience.

One such quirk was for some reason whenever a user presses "Edit" while the editor is already open, the input values do not change
even though it still correctly updates the "prop" information. This may cause situations where you may attempt to edit one assignment,
and then change your mind and press "New Homework". However, it will still contain the old information while actually creating a new
homework. The same could happen when pressing edit with an existing assignment, and not pressing new homework. This will overwrite
the assignment that was edited, even though it was displaying the previously edited assignment. **The only way to fix this was by
pressing the cancel button first, and then pressing edit.** Because of this, I even tried calling the cancel method, but that
still didn't work for some reason.