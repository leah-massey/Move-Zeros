function moveZeros(array) {
  let zeros = array.filter((value) => {
    return value === 0;
  });
  let nonZeros = array.filter((value) => {
    return value !== 0;
  });

  return nonZeros.concat(zeros);
}

module.exports = moveZeros;
