Array.prototype.uniq = function() {
	let uniqueArray = [];

	for (let i = 0; i < this.length; i++){
		if (uniqueArray.indexOf(this[i]) === -1){
			uniqueArray.push(this[i]);
		}
	}

	return uniqueArray;
}

Array.prototype.twoSums = function(){
	let twoSumArray = [];

	for (let i = 0; i < this.length; i++){
		for (let j = i + 1; j < this.length - 1; j++){
			if (this[i] + this[j] === 0){
				twoSumArray.push([i, j]);
			}
		}
	}

	return twoSumArray;
}

Array.prototype.transpose = function(){
	const transposedArray = Array.from(
    { length: this[0].length },
    () => Array.from({ length: this.length })
  );

	for (let i = 0; i < this.length; i++){
		for (let j = 0; j < this[i].length - 1; j++){
			transposedArray[j][i] = this[i][j];
		}
	}

	return transposedArray;
}