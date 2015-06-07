angular.module("modernWebEventApp")
    .controller("MoweTabsCtrl", [
        function() {
            this.selectedTab = this.moweDataProvider[0];

            this.onClickTab = function(tab) {
                this.selectedTab = tab;
            };
        }
    ]);
