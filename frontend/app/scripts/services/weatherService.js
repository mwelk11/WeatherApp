app.service('weatherService', function($http, $q) {

    this.getWeather = function(zip) {
        return $http.get('http://localhost:8081/weather?zip=' + zip)
            .then(function(response) {
                if(typeof response.data === 'object') {
                    console.log('SUCCESS!');
                    return response.data;
                }
                else {
                    console.log(">>> Invalid response");
                    // invalid response
                    return $q.reject(response.data);
                }
            }, function(response) {
                console.log('Error returned from localhost:8081/weather');
                return $q.reject(response.data);
            });
    }

});
