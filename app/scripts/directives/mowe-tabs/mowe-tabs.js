angular.module("modernWebEventApp")
    .directive("moweTabs", [
        function() {
            return {
                restrict: "E",
                templateUrl: "scripts/directives/mowe-tabs/mowe-tabs.html",
                controller: "MoweTabsCtrl",
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
