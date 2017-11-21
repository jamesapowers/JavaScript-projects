var range = function(start, end){
	if (start === end]) { return []; }

	let arr = (start, end - 1);
	arr.push(end - 1);

	return arr;
};

var sumRec = function(arr){
	if (arr.length === 0) { return 0; }

	let lastNum = numbers[numbers.length - 1];
  	return sumRec(numbers.slice(0, numbers.length - 1)) + lastNum;
};

var exponent = function(base, exp){
	if (exp === 0) { return 1;}

	return base * exponent(base, exp - 1);
};

var fibonacci = function(n){
 	if (n < 3) {
   		return [0, 1].slice(0, n);
  	}

  	let fibs = fibsRec(n - 1);
	fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);

	return fibs;
};

var bsearch = function(numbers, target){
	if (numbers.length === 0) {
		return -1;
	}

	const probeIdx = Math.floor(numbers.length / 2);
	const probe = numbers[probeIdx];

	if (target === probe) {
	 	return probeIdx;
	} else if (target < probe) {
	  	const left = numbers.slice(0, probeIdx);
	  	return bsearch(left, target);
	} else {
		const right = numbers.slice(probeIdx + 1);
		const subProblem = bsearch(right, target);

		return subProblem === -1 ? -1 : subProblem + (probeIdx + 1);
	}
};

var mergesort = function(array){
	if (array.length < 2) {
    	return array;
  	} else {
	    const middle = Math.floor(array.length / 2);

	    const left = mergeSort(array.slice(0, middle));
	    const right = mergeSort(array.slice(middle));

	    return merge(left, right);
  }
};

var merge = function(left, right) {
	const merged = [];

	while (left.length > 0 && right.length > 0) {
		let nextItem = (left[0] < right[0]) ? left.shift() : right.shift();
    	merged.push(nextItem);
	}

	return merged.concat(left, right);
};

var subset = function(arr){
	if (array.length === 0) {
    	return [[]];
	}

	const first = array[0];
	const withoutFirst = subsets(array.slice(1));
	const withFirst = withoutFirst.map(sub => [first].concat(sub) );

	return withoutFirst.concat(withFirst);
};