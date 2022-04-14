function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
	let arrays = [redShirtHeights, blueShirtHeights];
		
	arrays.forEach(function(shirts) {
		shirts.sort((a, b) => {
		return a - b;
		});		
		shirts.reverse();
			
	console.log(shirts)
	})
	let num = 0;
	if (redShirtHeights[0] === blueShirtHeights[0]) {
		num = 1;
	}
	
	let takePhoto = redShirtHeights[num] > blueShirtHeights[num] ? 
		check(redShirtHeights, blueShirtHeights) : check(blueShirtHeights, redShirtHeights);
	
	return takePhoto;
}

function check(shirt1, shirt2) {
	for(let i = 0; i < shirt1.length; i++) {
		if ((shirt1[i] - shirt2[i]) <= 0) return false;
	}
	return true;
}

// Do not edit the line below.
exports.classPhotos = classPhotos;
