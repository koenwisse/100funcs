// ## ❌ 01: double 1
function double1(num1) {
  result = num1 * 2;
  console.log(result);
}
double1(4);

// ## ❌ 02: double 2
function double2(num1) {
  result = num1 * 2;
  return result;
}
console.log(double2(10));

// ## ❌ 03: double 3

function double3(num1, num2) {
  if (num1 > num2) {
    console.log(num1 * 2);
  } else {
    console.log(num2 * 2);
  }
}
double3(10, 40);

// ## ❌ 04: double arrows
const arrow_double1 = (num1) => {
  result = num1 * 2;
  console.log(result);
};
arrow_double1(4);

const arrow_double2 = (num1) => {
  result = num1 * 2;
  return result;
};
console.log(arrow_double2(10));

const arrow_double3 = (num1, num2) => {
  if (num1 > num2) {
    console.log(num1 * 2);
  } else {
    console.log(num2 * 2);
  }
};
arrow_double3(10, 40);

// ## ❌ 05: repeat

const repeat = (string1, num1) => {
  console.log(string1.repeat(num1));
};

repeat("ajax", 5);

// ## ❌ 06: batman

const batman = () => {
  console.log(`${repeat("na", 10)} batman!`);
};
batman();

// ## ❌ 07: maxDivide

const max = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};
console.log(max(29, 20));

// ## ❌ 08: maxDivideDivide

const maxDivide = (num1, num2) => {
  if (num1 < num2) {
    return num1 / num2;
  } else {
    return num2 / num1;
  }
};
console.log(maxDivide(16, 1));
// ## ❌ 09: maxStr
const maxStr = (stringOne, stringTwo) => {
  if (stringOne.length < stringTwo.length) {
    return stringTwo;
  } else {
    return stringOne;
  }
};

console.log(maxStr("hsdsd", "jij"));

module.exports = { double1 };
