<p align="center"><img src="./bat-algorithm-logo.png" width="100" height="100"></p>
<h1 align="center">bat-algorithm</h1>
<p align="center">A simple JavaScript library implementing the Bat Algorithm for optimization problems.</p>

<p align="center">
  <img src="https://img.shields.io/github/license/Ykarux/bat-algorithm"/>
  <img src="https://img.shields.io/npm/v/bat-algorithm"/>
</p>

<h1>📑 Table of contents</h1>
<ul>
	<li><a href="#introduction">Introduction</a></li>
	<li><a href="#considerations">Considerations</a></li>
	<li><a href="#installation">Installation</a></li>
	<li><a href="#usage">Usage</a></li>
	<ul>
		<li><a href="#example">Example</a></li>
		<li><a href="#arguments">Arguments</a></li>
	</ul>
	<li><a href="output">Output</a></li>
	<li><a href="authors">Authors</a></li>
	<li><a href="references">References</a></li>
</ul>

<h1 id="introduction">🌟 Introduction</h1>
<p>The Bat Algorithm is a nature-inspired optimization algorithm designed to solve complex optimization problems. Mimicking the echolocation behavior of bats, it balances exploration and exploitation to efficiently search for optimal solutions. In this project, we provide a simple JavaScript implementation of the Bat Algorithm, offering a user-friendly batAlgorithm() function with customizable parameters. By integrating this algorithm into your JavaScript projects, you can leverage its power to tackle a wide range of optimization tasks.</p>

<h1 id="considerations">⚠️ Considerations</h1>
<p>When implementing the Bat Algorithm in JavaScript, it's essential to consider the language's suitability. Here's why JavaScript may not be the optimal choice for utilizing the Bat Algorithm:  </p>
<ol>
  <li>Numerical Computation Limitations:</li>
  <ul>
    <li>JavaScript's primary focus is web development, and it may lack specialized numerical computation capabilities compared to languages         like Python with libraries such as NumPy.</li>
    <li>Performance limitations and a potential lack of advanced mathematical functions in JavaScript can impact complex numerical                  optimization tasks.</li>
</ul>
<li>Ecosystem and Available Libraries:</li>
<ul>
<li>JavaScript's ecosystem excels in web-related tasks, but it may have a smaller footprint for scientific computing and optimization algorithms.</li>
<li>While there are numerical computation libraries in JavaScript, they might not offer the same functionality and performance optimizations as dedicated numerical computation libraries in other languages.</li>
</ul>
<li>Language-Specific Considerations:</li>
<ul>
<li>JavaScript's dynamically typed nature can introduce challenges in handling complex numerical operations, affecting type safety and performance.</li>
<li>JavaScript's single-threaded execution may not fully utilize parallel processing capabilities, potentially impacting the performance of computationally intensive tasks.</li>
</ul>
</ol>

<p>Despite these considerations, utilizing this JavaScript library offers the following advantages:</p>

<ul>
<li>Easy Integration: Seamlessly integrate the Bat Algorithm into existing JavaScript projects without additional language dependencies.</li>
<li>Web-Based Applications: JavaScript is convenient for web-based environments or real-time interactions.</li>
<li>JavaScript Proficiency: Leverage the familiarity and expertise of JavaScript, reducing development time and easing maintenance efforts.</li>
  </ul>
  <p>
Please assess your project requirements and consider these aspects before choosing JavaScript as the implementation language for the Bat Algorithm.</p>

<h1 id="installation">⚙️ Installation</h1>
<p>You can install the bat-algorithm library using npm, the Node.js package manager. Before proceeding, ensure that you have Node.js and npm installed on your system.</p>

```bash
npm install bat-algorithm
```
<p>Once the installation is complete, you can import the library into your JavaScript project using the require or import statement:</p>

```javascript
const { batAlgorithm } = require('bat-algorithm');
```

<p>Note: This library requires Node.js version 12 or above.</p>

<h1 id="usage">📘 Usage</h1>
<p>To use the batAlgorithm() function from the bat-algorithm library, follow the example below:</p>
<h3 id="example">Example</h3>

```javascript
const batAlgorithm = require('bat-algorithm');

// Define the cost function
function sphere(x) {
	let sum = 0
	for (let i = 0; i < x.length; i++) {
		sum += x[i] * x[i]
	}
	return sum
}

// Call the batAlgorithm() function with optional parameters
const result = await batAlgorithm(sphere);
const result = await batAlgorithm(sphere, "./myFolder", 150, 10000, 100, 30, 2, 1, -10, 10, 0, 10);
```
<p>Please ensure that you provide a valid cost function as the first argument when calling the batAlgorithm() function. Customize the optional parameters as needed to suit your optimization problem.</p>
<h3 id="arguments">Arguments</h3>

<p>Here is a table listing the arguments that can be passed to the batAlgorithm() function, along with their default values and descriptions:</p>

<table>
  <thead>
    <tr>
      <th>Argument</th>
      <th>Default Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>costFunc</td>
      <td><p align="center">-</p></td>
      <td>The cost function to be minimized.</td>
    </tr>
	  <tr>
      <td>folderPath</td>
      <td><p align="center">-</p></td>
      <td>The folder path to save the data in.(see <a href="#output">output)</a></td>
    </tr>
	  <tr>
      <td>saveRate</td>
      <td>100</td>
      <td>The rate at wich data is saved.(see <a href="#output">output)</a></td>
    </tr>
    <tr>
      <td>maxGen</td>
      <td>1000</td>
      <td>The maximum number of generations.</td>
    </tr>
    <tr>
      <td>popSize</td>
      <td>50</td>
      <td>The population size.</td>
    </tr>
    <tr>
      <td>dimension</td>
      <td>30</td>
      <td>The dimension of the problem.</td>
    </tr>
    <tr>
      <td>maxLoudness</td>
      <td>2</td>
      <td>The maximum loudness value.</td>
    </tr>
    <tr>
      <td>maxPulseRate</td>
      <td>1</td>
      <td>The maximum pulse rate value.</td>
    </tr>
    <tr>
      <td>fMin</td>
      <td>0</td>
      <td>The minimum frequency value.</td>
    </tr>
    <tr>
      <td>fMax</td>
      <td>10</td>
      <td>The maximum frequency value.</td>
    </tr>
    <tr>
      <td>lowerBound</td>
      <td>-5</td>
      <td>The lower bound of the search space.</td>
    </tr>
    <tr>
      <td>upperBound</td>
      <td>5</td>
      <td>The upper bound of the search space.</td>
    </tr>
  </tbody>
</table>

<h1 id="output">📊 Output</h1>
<p>This library provides an easy and accessible way to save all or part of the computed data during the execution of the Bat Algorithm. The function is asynchronous and returns a Promise, which is resolved at the end of the Bat Algorithm execution, providing an array representing the positions of the best individual at the end of the call. (see <a href="#example">example</a>)</p>

<p>Additionally, the library offers data recording functionalities. If the function receives a second parameter, it will be treated (if not undefined) as the path of the directory where the data should be saved. It is also possible to modify the "save pulse" parameter by passing a number as the third argument (optional, with a default value of 100). When a second argument is provided to the function, data will be recorded every x generations (where x is the save pulse value, which can be modified).</p>

<p>Each recording is saved as a JSON file, created at each recording occurrence. Therefore, multiple files are generated with a single function call. The JSON file includes essential data such as generation number, loudness array, pulse rate array, frequency array, position array, velocity array, and the best individual.</p>

<p>Feel free to explore and utilize these data recording capabilities to monitor and analyze the progress and results of the Bat Algorithm in your projects.</p>

<h1 id="authors">👥 Authors</h1>
<p>Guillaume Giannantonio/p>

<h1 id="references">🔖 References</h1>
<p>Yang, X.-S. "A new metaheuristic bat-inspired algorithm." Nature inspired cooperative strategies for optimization (NICSO 2010). Springer Berlin Heidelberg, 2010. 65-74.</p>
