
const _ = require('lodash');

const findP = (i, ordered) => {
  const last = ordered[i];
  let p = null;
  for(let j = i - 1; j >= 0; j--) {
    if(last.start >= ordered[j].end) {
      p = j;
      break;
    }
  }

  return p;
}

const findWIS = (input) => {
  // order by end time
  const ordered = _.orderBy(input, ['end'], ['asc']);

  // construct P
  const P = { '0': null };
  for(let i = ordered.length - 1; i > 0; i--) {
    P[i] = findP(i, ordered);
  }

  console.log('Ordered => ', ordered);
  console.log('P => ', P);

  // find weighted interval scheduling
  const M = { '0' : ordered[0].weight };
  for(let j=1; j<ordered.length; j++) {
    const vj = ordered[j].weight
    const pj = P[j];
    const Mpj = M[pj] || 0;
    M[j] = Math.max(vj + Mpj, M[j-1]);
  }

  console.log('M => ', M);
}

module.exports = findWIS;