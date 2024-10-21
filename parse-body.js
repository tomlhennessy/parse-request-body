function firstStep(input) {
  return input.split('&');
}

function secondStep(input) {
  return input.map(pair => pair.split('='));
}

function thirdStep(input) {
  return input.map(([key, value]) => [key, value.replace(/\+/g, ' ')]);
}

function fourthStep(input) {
  return input.map(([key, value]) => [key, decodeURIComponent(value)]);
}

function fifthStep(input) {
  return input.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
}

function parseBody(str) {
  return fifthStep(fourthStep(thirdStep(secondStep(firstStep(str)))));
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
