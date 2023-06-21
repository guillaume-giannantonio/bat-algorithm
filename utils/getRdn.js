function getRdn(min, max) {
	return Math.random() * (max - min) + min
}

module.exports = getRdn