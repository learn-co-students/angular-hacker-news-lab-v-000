function StartFrom() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
};


angular 
	.module('app')
	.filter('startFrom', StartFrom)