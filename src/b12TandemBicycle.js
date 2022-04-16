function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
	if (redShirtSpeeds.length === 0 || blueShirtSpeeds.length === 0) return 0;
	const speeds = redShirtSpeeds.concat(blueShirtSpeeds).sort((a, b) => a - b);
	redShirtSpeeds.sort((a, b) => a-b); 
	blueShirtSpeeds.sort((a, b) => a-b); 
	console.log(speeds);
	let speed = fastest ? fast(speeds) : slow(redShirtSpeeds, blueShirtSpeeds)
	
  return speed;
}

function fast(speeds) {
	let half = speeds.length / 2;
	let halfArr = speeds.splice(half, (speeds.length - 1));
	let sum = halfArr.reduce((acc, a) => acc + a);
	return sum
}

function slow(red, blue) {
	let sum = 0;
	for (let i = 0; i < red.length; i++){
		if (red[i] >= blue[i]) sum += red[i];
		else sum += blue[i]
	}

	return sum;
}

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;
