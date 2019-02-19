# This is my Second Art Project
------

### My Art Project: The Bouncing Rectangles 
![Sarah Perrin](images/screenshotdots.png?raw=true "Sarah Perrin")

In this piece, every time the original rectange hits one side of the screen, another rectangle is added and all existing rectangles change color randomly. If the mouse is pressed, a Pac Man will replace the original rectangle, and ghosts the others. Both increase in speed. In addition, as rectangles are added, fuzzy black dots appear on the screen that jitter and block the view of the rectangles. The point of this work is to address how the more moving parts we have going on, and the faster we try to move them along, the more our vision and perspective is obscured. Eventually, there comes a certain threshold when we take on too much, and we will not be able to see anything clearly at all. The inclusion of the Pac Man and ghosts has to do with a theory that the secret meaning of the Pac Man game is that it represents the "pure consumer" stuck in an endless cycle, always needing more, always with an instatiable hunger. Many have theorized that the Pac Man embodies Capitalism as it travels through a maze, consuming all resources in its path and creating revenue for the user. But in this work, the faster the pacman tries to go, the more ghosts he creates and the more he is blacked out.  

In terms of my code, I came across many problems when trying to create a class for these rectangles. First, I realized that I wanted only one rectangle to be added each time. Therefore, I had to create a rectangle that was outside of the class on which the rest would be based. As a result of this, not every rectangle hitting the screen affects the rest; only the original rectangle can generate changes. I also found that no new rectangles were being created when I was calling them,so I had to move this code up to the draw() function and incorporate it into an "if" function based off of the position of the first rectangle. 



