function getRdn(min, max) {
	return Math.random() * (max - min) + min
}

function average(array) {
	let sum = 0
	for (let i = 0; i < array.length; i++) {
		sum += array[i]
	}
	return sum / array.length
}

function checkBound(val, lower, upper) {
	if(val < lower) return lower;
	if(val > upper) return upper;
	return val;
}

function sphere(x) {
	let sum = 0
	for (let i = 0; i < x.length; i++) {
		sum += x[i] * x[i]
	}
	return sum
}

function batAlgorithm(costFunc, maxGen = 10000, popSize = 50, dimension = 30, maxLoudness = 2, maxPulseRate = 1, fMin = 0, fMax = 10, lowerBound = -5, upperBound = 5) {
	if (!costFunc) throw new Error("Please pass a valid cost function for your optimization problems");

	const ALPHA = 0.9;
	const GAMMA = 0.9;

	// parameters initialization using uniform distribution
	let position = []
	let velocity = []
	let loudness = []
	let pulseRate = []
	let frequency = []
	let newPosition = []
	let newCost;
	for (let i = 0; i < popSize; i++) {
		loudness[i] = getRdn(1, maxLoudness)
		pulseRate[i] = getRdn(0, maxPulseRate)
		frequency[i] = getRdn(fMin, fMax)
		position[i] = []
		velocity[i] = []
		newPosition[i] = [] // bats local array
		for (let j = 0; j < dimension; j++) {
			position[i][j] = getRdn(lowerBound, upperBound)
			velocity[i][j] = getRdn(lowerBound, upperBound)
		}
	}

	// evaluate the bats after initialization
	let cost = []
	for (let i = 0; i < popSize; i++) {
		cost[i] = costFunc(position[i])
	}

	// cycle through each generation
	for (let gen = 0; gen < maxGen; gen++) {
		let indexMin = cost.indexOf(Math.min(...cost)) // best bat index so far
		let bestBat = position[indexMin] // best bat so far

		// cycle through the population
		for (let i = 0; i < popSize; i++) {
			frequency[i] = fMin + (fMax - fMin) * getRdn(0,1) // assign new frequency to each bat
			for (let j = 0; j < dimension; j++) {
				velocity[i][j] = velocity[i][j] + (position[i][j] - bestBat[j]) * frequency[i]
				newPosition[i][j] = position[i][j] + velocity[i][j]
				newPosition[i][j] = checkBound(newPosition[i][j], lowerBound, upperBound)
			}

			if(getRdn(0,1) > pulseRate[i]) {
				for (let j = 0; j < dimension; j++) {
					newPosition[i][j] = bestBat[j] + getRdn(-1,1) * average(loudness)
					newPosition[i][j] = checkBound(newPosition[i][j], lowerBound, upperBound)
				}
			}

			newCost = costFunc(newPosition[i])
			if(getRdn(0,1) < loudness[i] && newCost <= cost[i]) {
				for (let j = 0; j < dimension; j++) {
					position[i][j] = newPosition[i][j]
				}
				cost[i] = newCost
				loudness[i] = loudness[i] * ALPHA
				pulseRate[i] = pulseRate[i] * (1 - Math.exp(-GAMMA * gen))
			}
		}
	}
}

batAlgorithm(sphere)

module.exports = batAlgorithm