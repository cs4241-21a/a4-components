## Morgan's text OwO-ifier
Link: https://a4-patrick-lee22.herokuapp.com/

This application is designed to take user input and then convert it into "OwO speak." The specific regex rules implemented on the user messages have these effects:

1. All 'L' or 'R' characters are replaced with 'W' characters, case sensitive.
2. All 'N' characters followed by a vowell are replaced with 'Ny', also case sensitive.
3. All '!' characters are replaced with a text face randomly selected from a predetermined list of faces.

The resulting data from this transformation can be viewed in a table or in a sentence form, at the user's preference. The options for which view is currently active are at the top of the page.

The layout for this page was set up using flexboxes.

## Changes for Assignment 4
For this assignment, all elements displaying user data and the button used for submission were retooled using React components. It should have the exact same functionality as it did in assignment 2 (as listed above), the primary difference in using this new development framework was the headache I developed while refactoring the code.

I did not enjoy using React. My problems with React as a framework mostly boil down to my personal preferences when coding and trying my best to preserve the code base as it already existed, which was a challenge. I found out, to my dismay, that I could not update the state of a React component from another function. The only way to set the state of a React component is to do so via an internal method, and the only way these internal methods can be called is via a browser event, originating from a react component. So, this is why the submit button is now part of a React component, along with all of the code to fetch the appdata.

I originally wished to use React to generate similar blocks of HTML on the fly whenever I needed to insert a new element into the page. I ended up completely changing the structure of my code, and what resulted was a more complicated, somewhat less readable application. I understand the power this framework has. I will probably use this framework again at some point in the future. That fact brings me great pain.

PS: To anyone looking at my commit history, I'm fine, I swear. I'm just a bit overdramatic and I like documenting my pain in the commit messages. 