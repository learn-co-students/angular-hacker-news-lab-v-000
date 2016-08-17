angular
  .module('app')
  .filter('getHoursAgo', getHoursAgo);
  
  function getHoursAgo() {
    return function(input) {
      if (typeof input === 'number') {
        var secondDifference = Date.now()/1000 - input;
        if (secondDifference < 3600) {
          var minutesAgo = Math.floor(secondDifference/60);
          return pluralizeTime(minutesAgo, 'minute');
        } else if (3600 <= secondDifference && secondDifference < 86400) {
          var hoursAgo = Math.floor(secondDifference/3600);
          return pluralizeTime(hoursAgo, 'hour'); 
        } else if (86400 <= secondDifference && secondDifference < 2592000) {
          var daysAgo = Math.floor(secondDifference/86400);
          return pluralizeTime(daysAgo, 'day');
        } else if (2592000 <= secondDifference && secondDifference < 31536000) {
          var monthsAgo = Math.floor(secondDifference/2592000);
          return pluralizeTime(monthsAgo, 'month');
        } else {
          var yearsAgo = Math.floor(secondDifference/31536000);
          return pluralizeTime(yearsAgo, 'year');
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