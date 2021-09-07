# This program is broken!
In this project, when the green ﬂag is clicked an animation of a ﬂower growing begins. The animation *should* stop once it has fully bloomed. But something is not quite right! Instead of stopping when all the petals have bloomed, the animation starts all over.

**How do we ﬁx the program?**

{Start Over | reset}()

|||info
# Need a hint?
The flower has 12 "costumes". Each costume is a step in the animation.

Take a look at the "Repeat until" block. That repeat block will repeat the code inside it "until the costume number is greater than 12" (the `>` sign means "greater than"). The code inside it goes to the next costume number.

If the sprite is on costume 12 when the "next costume" block runs, it goes back to the first costume. So the costume number is *never* greater than 12, and the repeat loop never stops!

The condition in the "repeat until" block needs to be fixed. It should repeat "until the costume number **equals** 12". Can you find the correct block to use in the **operators** category?
|||

## Reflection
{Submit Answer!|assessment}(free-text-188943917)
