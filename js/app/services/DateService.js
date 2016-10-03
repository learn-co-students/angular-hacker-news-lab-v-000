function DateService() {
  var service = this;

  service.unixTimeConverter = function(unixTime){
    var date = moment.unix(unixTime)
    return date.format("dddd, MMMM Do YYYY, h:mm:ss a")
  }

}

angular
  .module('app')
  .service('DateService', DateService);