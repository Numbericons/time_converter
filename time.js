function singleIncrement(timeArr, increment, seconds, unit) {
  const count = Math.floor(seconds / increment);
  if (count === 1) timeArr.push(`1 ${unit}`);
  if (count > 1) timeArr.push(`${count} ${unit}s`);
  return count;
}

function formatStr(arr){
  let retStr = "";
  const len = arr.length;

  for(let i=0; i< len;i++){
    if (i === 0) {
      retStr += arr[i];
    } else if (i < len - 1) {
      retStr += ', ' + arr[i];
    } else {
      retStr += ' and ' + arr[i];
    }
  }
  
  return retStr;
}

function formatDuration(seconds) {
  if (seconds === 0) return "now";
  let increment = 60 * 60 * 24 * 365;
  let timeArr = [];

  let count = singleIncrement(timeArr, increment, seconds, 'year');
  seconds -= count * increment;
  increment /= 365;
  count = singleIncrement(timeArr, increment, seconds, 'day');
  seconds -= count * increment;
  increment /= 24;
  count = singleIncrement(timeArr, increment, seconds, 'hour');
  seconds -= count * increment;
  increment /= 60;
  count = singleIncrement(timeArr, increment, seconds, 'minute');
  seconds -= count * increment;
  increment /= 60;

  if (seconds === 1) timeArr.push('1 second');
  if (seconds > 1) timeArr.push(`${seconds} seconds`);

  return formatStr(timeArr);
}

let result = formatDuration(55555555);
console.log(result);