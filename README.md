## Todoish React Edition

http://a4-o355.glitch.me

Updated Todoish from A3 using React. React is now powering both tables on the website, plus any tasks in the still to do table are also done with react.

React has some nice perks, like automatic rendering when state changes, and the component-based nature of React made a project like Todoish pretty easy to convert over. I had to do some hacky stuff (like listening to a DOM event to do full table updates), but it was definitely much easier to control the table compared to A3 (where it was one big renderTable function anytime something changed). I can see why React definitely gets some use in larger projects, but in simpler projects Svelte could really shine.

The only downside was having to rebuild any time I made a change, which had about a 1-2 second delay. But I can imagine there's some stuff out there that can make this process faster.