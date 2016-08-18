angular
  .module('app')
  .filter('getHoursAgo', getHoursAgo);
  
  function getHoursAgo() {
    return function(input) {
      if (typeof input === 'number') {
        var secondDifference = Date.now()/1000 - input;
        if (secondDifference < 3600) {
          var minutesAgo = secondDifference/60;
          return pluralizeTime(Math.floor(minutesAgo), 'minute');
        } else if (3600 && secondDifference && secondDifference < 86400) {
          var hoursAgo = secondDifference/3600; 
          return pluralizeTime(Math.floor(hoursAgo), 'hour'); 
        } else if (86400 <= secondDifference && secondDifference < 2592000) {
          var daysAgo = secondDifference/86400;
          return pluralizeTime(Math.floor(daysAgo), 'day');
        } else if (2592000 <= secondDifference && secondDifference < 3153600) {
          var monthsAgo = secondDifference/2592000;
          return pluralizeTime(Math.floor(monthsAgo), 'month');
        } else {
          var yearsAgo = secondDifference/31536000;
          return pluralizeTime(Math.floor(yearsAgo), 'year');
        }
      } else {
        throw new Error('getHoursAgoFilter must be given a number as an input.');
      }
    };
    function pluralizeTime(number, timeUnit) {
      if (number === 1) {
        return number + ' ' + timeUnit + ' ago';
      } else {
        return number + ' ' + timeUnit + 's ago';
      }
    }
  };