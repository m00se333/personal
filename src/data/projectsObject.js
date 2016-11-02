module.exports ={
  abcusd:{
    url: "abcusd.herokuapp.com",
    github:"github.com/m00se333/ABCUSD",
    description: ["This is a static website I created for my first freelance job. I used Express as a backend to serve up the files and used Sass, HTML5, Jade templates, JavaScript, and jQuery to create."
                  , "This project taught me a lot about dynamic styling and optimization across devices. In additon to the browser this website works in both portrait and landscape for iPhone 6, iPhone 6 plus, and iPad."]
  },
  haloApp:{
    url: "warzonedata.herokuapp.com",
    github: "github.com/m00se333/haloApp",
    description: ["My final project for General Assembly is something I am really proud of. This is a CRUD functional app that takes in a users Xbox Live Gamertag. The client captures that search and sends it off to my Express server. The Express server sends an AJAX request to the Halo Waypoint API and in response recieves data about the searched Gamertag's Warzone record in Halo 5. The response is handled by my Express server and data from the response is sent to a Firebase database. The client is listening for changes to the database and populates the DOM based on the information inside the Firebase database."
                  ,"There was one giant hurdle with this project, the API. The Halo Waypoint API does not allow one using JavaScript to send requests to their API from the client side; so, I had to learn how to make AJAX requests using Node. It was a challenge but I came away with a project that incorporates Firebase, XMLHTTP requests, and templating to create an ugly yet functioning web app."] 
  }

  ,

 bakeryDisplay:{
     url: "michaelbakery.herokuapp.com",
     github: "github.com/m00se333/bakeryDisplay",
     description: ["Bakery Display is my latest freelance project that I've contracted with a friend to grow his business. This web app is entirely written in React and ES6, this project is great practice in writing clean code and maintaining tidy file structure."
                    ,"I also worked with React CSSTransitionGroups to create a slick entrance and exit for the gallery which is the main attraction of the app so far, so I wanted to make sure it was animated to procude a certain level of satisfaction for the user."
                    , "Stay tuned becuase this is an e commerce site in the making."]
   }
  
}