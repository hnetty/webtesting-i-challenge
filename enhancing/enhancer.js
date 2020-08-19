module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  if (item < 100){
    item = 100;
    return {item};
  } else {
    return {item};
  };
}

function get(item) {
  return { ...item };
}
