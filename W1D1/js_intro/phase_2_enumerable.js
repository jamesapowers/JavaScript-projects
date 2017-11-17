Array.prototype.myEach = function(callback){
	for (let i = 0; i < this.length; i++){
		callback(this[i]);
	}
};

Array.prototype.myMap = function(callback){
	const mappedArray = [];

	this.myEach(element => mappedArray.push(func(element)));

	return mappedArray;
};

Array.prototype.myReduce = function(callback, initialValue){
	let arr = this;
	let result = initialValue;

	if (!initialValue){
    	initialValue = arr[0];
    	arr = arr.slice(1);
  	}

  	arr.myEach(el => result = func(result, el));

	return result;
};