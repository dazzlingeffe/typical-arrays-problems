
exports.min = function min (array) {
  if (!arguments.length || !array.length) {
    return 0;
  }
  let minimum = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i];
    }
  }
  return minimum;
}

exports.max = function max (array) {
  if (!arguments.length || !array.length) {
    return 0;
  }
  let maximum = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maximum) {
      maximum = array[i];
    }
  }
  return maximum;
}

exports.avg = function avg (array) {
  if (!arguments.length || !array.length) {
    return 0;
  }
  let summ = 0;
  for (let i = 0; i < array.length; i++) {
    summ += array[i];
  }
  return summ / array.length;
}
