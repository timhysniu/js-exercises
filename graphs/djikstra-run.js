const findShortestPath = require('./djikstra');

const graph = {
	S: { A: 5, B: 4, C: 5 },
	A: { D: 4, E: 7 },
	B: { E: 3 },
	C: { F: 7 },
	D: { G: 2 },
	E: { D: 4, F: 3, G: 6 },
  F: { G: 5},
  G: {}
};

const path = findShortestPath(graph, 'S', 'G');

console.log('final path: ', path);
