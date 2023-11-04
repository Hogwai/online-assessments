# CSS: Nested Three-Panel Layout

## Instructions

Your task is to create a simple three-panel layout that responds to two screen widths. Here is the layout you'll be creating:

Three boxes (divs), red on top, blue in the middle and green on the bottom, all three equal size in the narrow layout, then in the wide layout, green is twice the size of the other boxes and placed to the right of the red and blue boxes which remain stacked

Please copy the layout as precisely as you can using a breakpoint at 600px. You can use any HTML elements you need in index.html and style them in src/styles.css.

Your code can use modern browser technologies available and need not support legacy browsers.

Your solution will be validated by a Puppeteer testing suite in test/solution.js. This suite will access 3 elements by their data-testid attribute: red, green and blue respective to the 3 boxes shown in the specification screen capture. The suite will make sure these elements exist, check their text contents, then assert their relative positions.

When you finish, please leave a brief description of your approach to the problem in the challenge's candidate notes field (called "Your Notes" in the interface).