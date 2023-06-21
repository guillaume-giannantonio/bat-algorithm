function getRdn(min, max) {
	return Math.random() * (max - min) + min
}

function batAlgorithm(costFunc, popSize = 50, dimension = 30, maxLoudness = 2, maxPulseRate = 1, fMin = 0, fMax = 10, lowerBound = -5, upperBound = 5) {
	if (!costFunc) throw new Error("Please pass a valid cost function for your optimization problems");

	// parameters initialization using uniform distribution
	let position, velocity, loudness, pulseRate, frequency;
	position = velocity = loudness = pulseRate = frequency = [];
	for (let i = 0; i < popSize; i++) {
		loudness[i] = getRdn(1, maxLoudness)
		pulseRate[i] = getRdn(0, maxPulseRate)
		frequency[i] = getRdn(fMin, fMax)
		position[i] = []
		velocity[i] = []
		for (let j = 0; j < dimension; j++) {
			position[i][j] = getRdn(lowerBound, upperBound)
			velocity[i][j] = getRdn(lowerBound, upperBound)
		}
	}
}

module.exports = batAlgorithm