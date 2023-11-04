# CSS: Box in Corner 

## Instructions

In this HTML and CSS challenge, your task is to reproduce a nested layout.

Specifically, position a box of red text nested in the bottom-right corner of a text-filled container. The text in the larger container should flow around the box. We'll use the size (in pixels) of 100x100 for the small box and 250x250 for the large box.

Basic HTML is provided to work with in index.html in your workspace and you can use src/styles.css to do your styling.

You have the freedom to change the HTML markup, CSS, classes as you wish. No CSS preprocessors are available.

Your code can use modern browser technologies available and need not support legacy browsers.

Your solution will be validated by a Puppeteer testing suite in test/solution.js. This suite will access two elements by their data-testid attribute: wrapper, and box respective to the two boxes shown in the specification reference image. The suite will make sure these elements exist, check their text contents, then assert their relative positions.