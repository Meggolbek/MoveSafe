MoveSafe
========

To create a branch you can:
WebStorm: click the git on the bottom right and click +new branch
Below creates a new branch and checks it out
Command line or git bash: git checkout -b name

To push:

git add nameOfFile OR git add . (to add all files)
git commit -m "your message"
git pull
git push

To resolve merge conflicts in webstorm:
Click VCS tab at the top
Go to Git and click Resolve Conflicts
A window will pop up with three files
The left is yours, the middle is what the file will look like after,
and the right will be the file in the repository
you can either type the changes in the middle or
click the >> or << to grab the changes from the left and right files respectively
you can also click the x to discard that change.
Then you click ok or merge button
Finally commit and push those changes

To switch branches click the Git on the lower right
Then select the branch you wish to change to.
If the branch you want is not there change to master
then do: git pull
This should pull all the new branches and you will be able to switch to that branch

To merge branches in Github, go to our repository in a web browser
click the pull requests tab
then select new pull request
if you wish to merge to master the first button should say master on the top left.
The second button is the branch you wish to merge onto master


