angular.module("modernWebEventApp")
    .directive("moweTab", [
        function() {
            return {
                restrict: "E",
                templateUrl: "scripts/directives/mowe-tab/mowe-tab.html",
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
