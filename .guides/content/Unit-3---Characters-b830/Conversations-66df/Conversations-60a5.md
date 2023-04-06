![](.guides/img/conversations.png)

## What are different ways to coordinate interactions between sprites?

In this activity, you'll explore different ways to program sprites to have conversations!

Experiment with timing and explore using broadcast by remixing a joke project.

## Start Here
1. The project on the left has a conversation between two sprites. Click the green flag button to see what happens.
2. Investigate the code to see how the **wait** and **say** blocks are used to coordinate the conversation
3. Remix the project to use **broadcast** and **when I receive** blocks instead of wait blocks.
   ![](.guides/img/broadcast-receive-blocks.png)
   
## Feeling stuck?
When you're having a conversation with your friend, how do you know when to start talking? Think about how conversations work in real life:

1. Penguin says "Hello!"
2. Nano hears "Hello"
3. Nano says another statement in response

Think of the **broadcast** block as someone *saying* something, and the **when I receive** block as someone *hearing* something:

1. When penguin says something, show the speech bubble, then broadcast `hello`.
2. On Nano, use the **when I receive** block to listen for `hello`.
3. When Nano receives `hello`, have him say "Hi there!", then broadcast `hi-there`
4. Have the penguin listen for `hi-there`, and then say the next thing.
5. Repeat this over and over until you've finished the conversation!