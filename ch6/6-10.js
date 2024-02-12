import _ from 'lodash'
const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
  return reading;
}

export function enrichReading(original) {
  // const result = {...original}; //Object.assign: 얉은 복사
  const result = _.cloneDeep(original);
  result.baseCharge = calcuateBaseCharge(result);
  result.textableCharge = Math.max(
    0,
    result.baseCharge - taxTreshold(result.year)
  );
  return result;
}

function calcuateBaseCharge(reading) {
  return baseRate(reading.month, reading.year) * reading.quantity
}

export function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}
