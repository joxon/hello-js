// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

function humanReadable(seconds) {
  let tmp = seconds;

  const secondsPerHour = 60 * 60;
  let hour = Math.floor(tmp / secondsPerHour);
  tmp -= hour * secondsPerHour;

  const secondsPerMinute = 60;
  let minute = Math.floor(tmp / secondsPerMinute);
  tmp -= minute * secondsPerMinute;

  let second = tmp;

  return (
    hour.toString().padStart(2, '0') +
    ':' +
    minute.toString().padStart(2, '0') +
    ':' +
    second.toString().padStart(2, '0')
  );
}

console.log(humanReadable(36010));
