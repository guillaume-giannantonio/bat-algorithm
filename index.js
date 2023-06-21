const getRdn = require('./utils/getRdn')
const average = require('./utils/average')
const checkBound = require('./utils/checkBound')

function sphere(x) {
	let sum = 0
	for (let i = 0; i < x.length; i++) {
		sum += x[i] * x[i]
	}
	return sum
}

function batAlgorithm(costFunc,
                      maxGen = 1000,
                      popSize = 50,
                      dimension = 30,
                      maxLoudness = 2,
                      maxPulseRate = 1,
                      fMin = 0,
                      fMax = 10,
                      lowerBound = -5,
                      upperBound = 5) {

	if (!costFunc) throw new Error("Please pass a valid cost function for your optimization problems");

	const ALPHA = 0.9;
	const GAMMA = 0.9;

	// parameters initialization using uniform distribution
	let position = [];
	let velocity = [];
	let loudness = [];
	let pulseRate = [];
	let frequency = [];
	let newPosition = []; // bats local array used to calculate bats new position at each generation, before acceptation

	for (let i = 0; i < popSize; i++) {
		loudness[i] = getRdn(1, maxLoudness);
		pulseRate[i] = getRdn(0, maxPulseRate);
		frequency[i] = getRdn(fMin, fMax);
		position[i] = [];
		velocity[i] = [];
		newPosition[i] = [];

		for (let j = 0; j < dimension; j++) {
			position[i][j] = getRdn(lowerBound, upperBound);
			velocity[i][j] = getRdn(lowerBound, upperBound);
		}
	}

	// evaluate the bats after initialization
	let cost = [];
	for (let i = 0; i < popSize; i++) {
		cost[i] = costFunc(position[i]);
	}

	let newCost; // bat 'newPosition's cost

	// cycle through each generation
	for (let gen = 0; gen < maxGen; gen++) {
		let indexMin = cost.indexOf(Math.min(...cost)); // best bat index so far
		let bestBat = position[indexMin]; // best bat so far

		// cycle through the population
		for (let i = 0; i < popSize; i++) {
			// getRdn(0,1) = beta
			frequency[i] = fMin + (fMax - fMin) * getRdn(0,1); // assign new frequency to each bat (2)
			for (let j = 0; j < dimension; j++) {
				velocity[i][j] = velocity[i][j] + (position[i][j] - bestBat[j]) * frequency[i]; // assign new velocity to each bat (3)
				newPosition[i][j] = position[i][j] + velocity[i][j]; // creating a new position that is not yet assigned to the bat (4)
				newPosition[i][j] = checkBound(newPosition[i][j], lowerBound, upperBound);
			}

			// generate a local solution around the best solution
			if(getRdn(0,1) > pulseRate[i]) {
				for (let j = 0; j < dimension; j++) {
					// getRdn(-1, 1) = epsilon
					newPosition[i][j] = bestBat[j] + getRdn(-1,1) * average(loudness); // random walk (5)
					newPosition[i][j] = checkBound(newPosition[i][j], lowerBound, upperBound);
				}
			}

			newCost = costFunc(newPosition[i]);

			// try to accept the new solution
			if(getRdn(0,1) < loudness[i] && newCost <= cost[i]) {
				// new solution accepted, assigning new position to each bat
				for (let j = 0; j < dimension; j++) {
					position[i][j] = newPosition[i][j];
				}
				cost[i] = newCost;
				loudness[i] = loudness[i] * ALPHA; // loudness update (6)
				pulseRate[i] = pulseRate[i] * (1 - Math.exp(-GAMMA * gen)); // pulse rate update (6)
			}
		}
	}
}

batAlgorithm(sphere)

module.exports = batAlgorithm