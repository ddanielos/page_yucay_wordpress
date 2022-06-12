const settings = {
  "name": "yucaybrewery",
  "state": {
    "frontity": {
      "url": "https://yucaybrew.com",
      "title": "Cervecería artesanal en el corazón del Valle Sagrado",
      "description": "Cervecería artesanal en el corazón del Valle Sagrado"
    }
  },
  "packages": [
    {
      "name": "yucaybrew-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://yucaybrew.com/",
          "postTypes": [
            {
              type: "beer",
              endpoint: "beer",
              archive: "/beers"
            },
            {
              type: "blogs",
              endpoint: "blogs",
              archive: "/blogs"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
