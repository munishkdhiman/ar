var APP_DATA = {
  "scenes": [
    {
      "id": "0-location_1",
      "name": "location_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.3786270346298721,
        "pitch": 0.25949785225822275,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": -1.260797763152592,
          "pitch": 0.03409257210644512,
          "rotation": 0,
          "target": "1-location_2"
        },
        {
          "yaw": 1.7061097758362624,
          "pitch": 0.015601010377334745,
          "rotation": 0,
          "target": "2-location_3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0038851298497384,
          "pitch": -0.013784479059903987,
          "title": "Good Start!",
          "text": "You have found 1 sign out of 6,"
        },
        {
          "yaw": -0.8527290608702796,
          "pitch": -0.326159764142087,
          "title": "Good Job!",
          "text": "You have found 2 signs, 4 more to go."
        }
      ]
    },
    {
      "id": "1-location_2",
      "name": "location_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.8192361795075307,
        "pitch": 0.05290732910118834,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": -1.2032377377905465,
          "pitch": 0.04632853358969413,
          "rotation": 0,
          "target": "0-location_1"
        },
        {
          "yaw": 2.3803810138655344,
          "pitch": 0.05581859721940319,
          "rotation": 0,
          "target": "2-location_3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6638544142916079,
          "pitch": -0.5235766785580207,
          "title": "Well Done!",
          "text": "You have found 3 signs, 3 more to go."
        },
        {
          "yaw": 2.6842288788132986,
          "pitch": -0.14266949936961382,
          "title": "Bravo!",
          "text": "You have found 4 signs, 2 more to go."
        }
      ]
    },
    {
      "id": "2-location_3",
      "name": "location_3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.5699034292226308,
        "pitch": 0.020155172990925507,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": 0.5788081703042423,
          "pitch": 0.05794612234892327,
          "rotation": 0,
          "target": "1-location_2"
        },
        {
          "yaw": -3.060487439243383,
          "pitch": -0.004125011181994154,
          "rotation": 0,
          "target": "0-location_1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.8049083464229234,
          "pitch": 0.06366330189562319,
          "title": "Almost There!",
          "text": "You have fund 5 signs, just 1 to go."
        },
        {
          "yaw": 3.100873234766535,
          "pitch": -0.10574373653712144,
          "title": "Congratulations!",
          "text": "You have successfully found all the signs, please close the app and fill the form [FORM LINK]"
        }
      ]
    }
  ],
  "name": "Singapore",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
