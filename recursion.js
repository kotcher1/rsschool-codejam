function parseTree({ value, left, right }) {
  const result = [value];
  if (right) {
    result.push(parseTree(right));
  }
  if (left) {
    result.push(parseTree(left));
  }
  return result;
}

function parsEl(row) {
  const values = [];
  let child = [];
  row.forEach((el) => {
    if (Array.isArray(el)) {
      child = child.concat(el);
    } else {
      values.push(el);
    }
  });

  if (child.length) {
    child = parsEl(child);
  }

  return [values.reverse(), ...child];
}

function recursion(tree) {
  const rows = parseTree(tree);
  return parsEl(rows);
}

module.exports = recursion;
