angular.module("modernWebEventApp")
    .directive("moweContent", [
        function() {
            return {
                restrict: "E",
                templateUrl: "scripts/directives/mowe-content/mowe-content.html",
                controller: function(){},
                controllerAs: "ctrl",
                scope: {
                    moweDataProvider: "="
                },
                bindToController: {
                    moweDataProvider: "="
                }
            }
        }
    ]);
