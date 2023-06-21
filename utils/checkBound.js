function checkBound(val, lower, upper) {
	if(val < lower) return lower;
	if(val > upper) return upper;
	return val;
}

module.exports = checkBound