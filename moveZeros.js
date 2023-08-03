function moveZeros(array) {
  let zeros = [];
  let nonZeros = [];

  array.forEach((value) => {
    if (value === 0) {
      zeros.push(value);
    } else {
      nonZeros.push(value);
    }
  });

  console.log(zeros);
  console.log(nonZeros);
  return nonZeros.concat(zeros);
}

module.exports = moveZeros;
