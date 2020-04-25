# workoutTracker

This was a struggle. I'm unsure what exactly the website's normal function and flow should look like, which made this hard to develop.
Some of the routes work, but when the PUT route refused to work everything fell apart.

In theory, I believe a user should click "add workout," fill in details of the work out, which will POST a workout,
and PUT exercises in the workout, then the home page will GET THE LAST WORKOUT, displaying it, and if the user clicks on "continue workout,"
then it also GETS THE LAST WORKOUT and allows the user to PUT different exercizes in the same workout object.

However, it currently falls apart with the first PUT. I intend to go back to this and fix everything.