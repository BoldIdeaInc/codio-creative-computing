## Build an interactive side-scroller game
![](.guides/img/scroller.png)

In this project, you will create a game. This game includes interactions between sprites, score, and levels. The game is similar to Flappy Bird, where the goal is to keep an object from falling to the ground or touching certain objects.

## Start Here
1. Create a sprite for the player to control (eg, a helicoptor, bird, or whatever)
   ![](.guides/img/scroller-sprites.png)
2. Add a script to the player sprite that puts it in the middle of the screen when the green flag is clicked.
   ![](.guides/img/scroller-reset.png)
3. Add another block that waits one second, followed by a "forever" loop that causes the sprite to continuously fall down.
   ![](.guides/img/scroller-gravity.png)
4. Add a script that makes the sprite move up 20 pixels (change y position) when the space key is pressed.
   ![](.guides/img/scroller-keyboard-control.png)
5. Draw a new sprite for the gliding bars. Make different costumes where the gap between bars is in different places.
   ![](.guides/img/scroller-bar-costumes.png)
6. On the gliding bars sprite, add a script that creates a "clone" of itself every 5 seconds.
   ![](.guides/img/scroller-clone.png)
7. Add another script using the "When I start as a clone" event block that switches the sprite to a random costume, positions it off screen at the far right, and makes it glide across the screen (make sure the sprite deletes itself when it's done gliding).
   ![](.guides/img/scroller-bars-move.png)
8. Finally, on the player sprite, add a "forever" loop that checks if the sprite ever touches the gliding bars color, and if it does, use the "stop all" block to stop the game.
   ![](.guides/img/scroller-game-over.png)

## Blocks to play with
![](.guides/img/scroller-blocks-1.png)

![](.guides/img/scroller-blocks-2.png)