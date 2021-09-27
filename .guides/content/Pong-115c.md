## Build an interactive pong game
![](.guides/img/pong.png)

In this project, you will create a game. This game includes interactions between sprites, score, and levels. The game is similar to the classic game of pong, where the goal is to keep the sprite from getting past you.

## Start here
- Add a backdrop, then draw a filled square on the backdrop for the "floor".
- Create two sprites: a paddle for the user to control and a ball the user will be playing with.
  ![](.guides/img/pong-sprites.png)
- Add keyboard controls for the paddle to move it left and right.
  ![](.guides/img/pong-controls.png)
- On the ball sprite, use a forever loop to control the ball when the green flag is clicked. If the ball is touching the paddle, it will bounce at a random angle. If it is touching the floor, use the "stop all" block to stop the game.
  ![](.guides/img/pong-loop-script.png)
- On the ball sprite, add a script to make the ball go back to its original position when the flag is clicked.
  ![](.guides/img/pong-reset-ball.png)
- Add a forever loop to move the ball 10 steps, and also bounce the ball if on the edge (put "move 10 steps" after the "if on edge" block).
  ![](.guides/img/pong-bounce.png)
  
## Blocks to play with
![](.guides/img/pong-blocks-1.png)

![](.guides/img/pong-blocks-2.png)