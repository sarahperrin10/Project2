# This is my Second Art Project
------

### My Art Project: The Bouncing Rectangles 
![Sarah Perrin](images/screenshot.png?raw=true "Sarah Perrin")

Every time the original rectange hits one side of the screen, another rectangle is added and all existing rectangles change color randomly. If the mouse is pressed, the rectangles will speed up and a sign that says "Slow Down!" will replace them. In addition, as rectangles are added, fuzzy black dots appear on the screen that jitter and cover them. The point of this work is to address how the more moving parts we have going on in life, and the faster we try to move them along, the more our vision and perspective is obscured. Eventually, there comes a certain threshold when we take on too much, and we wil not be able to see anything clearly at all.

I came across many problems when trying to create a class for these rectangles. First, I realized that I wanted only one rectangle to be added each time. Therefore, I had to create a rectangle that was outside of the class on which the rest would be based off of. As a result of this, not every rectangle hitting the screen affects the rest; only the original rectangle can do that. I also found that no new rectangles were being created when I was calling them, so I had to move this code up to the draw()function and incorporate it into an "if" function based off of the position of the first rectangle.



