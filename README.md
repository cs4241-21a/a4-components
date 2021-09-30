## Procrast-inator

https://a4-ryan-stebe.herokuapp.com

Procrast-inator is a To-Do list and task scheduler that enables aggressive procrastination. From assignment 3, I replaced the update behavior of the frontend with a React class called Tasks. I also fixed some issues with pre-filling data into the form when editing or adding a new task. Overall React was far simpler and easier than manually changing the html of the tasklist. It also cut down on a lot of complicated frontend code involving an html template and using closure to procedurally assign a different callback for each task's edit and remove buttons. Snowpack caused a lot of issues on Heroku, mostly involving a config file that isn't needed on local but is on remote. Additionally, createapp's package.json start script needed to be changed from snowpack dev to node server.improved.js in order to run properly since snowpack is pruned from heroku after the build process since it is a dev dependency.
