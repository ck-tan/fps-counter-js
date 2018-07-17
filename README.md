# fps-counter-js
- A JavaScript FPS counter implementation.
- A fixed position FPS counter will appear on the top left of the screen on initiation
- Edit the CSS style within the source to change the position

### Instructions
Open index.html in a web browser to test.
Include the script 
```html
<script type="text/javascript" src="scripts/fps-counter.js"></script>
```
Initiate by creating a new instance of fpsCounter()
```js
var myFPSCounter = new fpsCounter();
```
Update the object every tick or frame by calling the update() function
```js
myFPSCounter.update(timestamp);
```
Passing a timestamp (e.g. from requestAnimationFrame) is optional. If there are no arguments, it will default to using performance.now()