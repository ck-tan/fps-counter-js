var fpsCounter = function() {
	var fps = 0,
		framesThisSecond = 0,
		lastFpsUpdate = 0,
		fpsDecay = 0.25,
		fpsUpdateTime = 1000;
	var fpsDisplay = document.createElement('div');
	fpsDisplay.style.cssText = 'position:fixed;left:0;top:0;opacity:0.7;z-index:9999;font-family:sans-serif;font-size:16px;font-weight:bold;color:#00F;';
	fpsDisplay.appendChild(document.createTextNode(" FPS"));
	document.body.appendChild(fpsDisplay);
	this.update = function(timestamp) {
		if (typeof timestamp === 'undefined') { timestamp = performance.now() }; //if no timestamp is given, default to performance.now()
		if (timestamp > lastFpsUpdate + fpsUpdateTime) { //update every fpsUpdateTime
			fps = fpsDecay * framesThisSecond + (1 - fpsDecay) * fps; //compute the new FPS
			lastFpsUpdate = timestamp;
			framesThisSecond = 0;
			fpsDisplay.textContent = Math.round(fps) + " FPS";
		}
		framesThisSecond++;
	}
}