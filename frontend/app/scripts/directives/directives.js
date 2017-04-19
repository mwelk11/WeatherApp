app.directive('zipDirective', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function zipValidation(zip) {
                if(isNaN(zip)) {
                    mCtrl.$setValidity('zipValid', false);
                } else {
                    mCtrl.$setValidity('zipValid', true);
                }
                return zip;
            }
            mCtrl.$parsers.push(zipValidation);
        }
    };
});
