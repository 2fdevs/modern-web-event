angular.module("modernWebEventApp")
    .controller("MainCtrl", [
        function() {
            this.dataProvider = [
                {
                    "title": "Tab 1 title",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a lacus quis justo gravida vehicula in eu orci."
                },
                {
                    "title": "Tab 2 title",
                    "content": "Vivamus eu libero dictum sem placerat vehicula eget vel urna. Sed at gravida ex. In hac habitasse platea dictumst."
                },
                {
                    "title": "Tab 3 title",
                    "content": "Nulla nibh enim, consequat et vehicula vel, iaculis quis nunc. Suspendisse potenti. Mauris at leo justo."
                }
            ];

            this.updateProvider = function() {
                this.dataProvider = [
                    {
                        "title": "Title",
                        "content": "Mad Max: Fury Road"
                    },
                    {
                        "title": "Storyline",
                        "content": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and almost everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland."
                    },
                    {
                        "title": "Cast",
                        "content": "Tom Hardy, Charlize Theron Nicholas Hoult, Hugh Keays-Byrne, Josh Helman, Nathan Jones"
                    },
                    {
                        "title": "Rating",
                        "content": "8.6/10 from 159,721 users"
                    }
                ];
            };
        }
    ]);
