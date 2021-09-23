## Build an interactive maze game
![](.guides/img/maze.png)

In this project, you will create a game. This game includes interactions between sprites, score, and levels. You move a sprite from the start of a maze to the end without touching the walls.

## Start Here
1. Draw a maze-like background and use different colors for the walls.
2. Add your main sprite (a character, a ball, or whatever you like).
3. Add keyboard controls to your main sprite to point it in a direction and move it 10 steps whenever a key is pressed.
   ![](.guides/img/keyboard-controls.png)
4. Make it so that the sprite re-sets when you press the green flag.
   ![](.guides/img/maze-reset.png)
5. Add a "forever" loop on your main sprite that checks to see if it is touching the "wall" color. If it is, use the "move -10 steps" block to move the sprite back to where it was.
   ![](.guides/img/maze-wall-collision.png)
7. Create another sprite for the "goal" at the end of the maze.
6. Add a "forever" loop on your "goal" marker that checks to see if it is touching your sprite character. If it is, use the "say" block to say "you win!"
   ![](.guides/img/maze-goal-script.png)

## Blocks to play with
![](.guides/img/maze-blocks-1.png)

![](.guides/img/maze-blocks-2.png)