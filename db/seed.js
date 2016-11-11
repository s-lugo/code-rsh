const data = {
    "language":[
        {
            "name": "Javascript",
            "courses":[
                {
                    "name": "Google Maps API",
                    "text":`function initMap() {
                        var myLatLng = {lat: -25.363, lng: 131.044};

                        var map = new google.maps.Map(document.getElementById('map'), {
                            zoom: 4,
                            center: myLatLng
                        });

                        var marker = new google.maps.Marker({
                            position: myLatLng,
                            map: map,
                            title: 'Hello World!'
                        });
                        }
                    `,
                    "difficulty":5,
                }
            ]
        },
        {
            "name": "Ruby",
            "courses":[

            ]
        },
        {
            "name": "Python",
            "courses":[

            ],
        },
        {
            "name": "Java",
            "courses":[

            ]
        },
        {
            "name": "PHP",
            "courses":[

            ]
        },
        {
            "name": "Haskell",
            "courses":[

            ]
        }
    ],
    "achievement":[

    ]
}

module.exports = data;