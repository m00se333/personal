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
    description: ["My final project from General Assembly is something I am very proud of. This is a CRUD functional app that takes in a users Xbox Live Gamertag. The client captures that search and sends it off to my Express server. The Express server sends an AJAX request to the Halo Waypoint API and in response recieves data about the searched Gamertag's Warzone record in Halo 5. The response is handled by my Express server and data from the response is sent to a Firebase database. The client is listening for changes to the database and populates the DOM based on the information inside the Firebase database."
                  ,"One hurdle I had to get through was the API calls to the Halo Waypoint API- I could not do it from the client and had to learn how to make AJAX requests using Express. It was a challenge, yet I came away with a good grasp of working with a database and how to use NodeJS beyond setting up a devServer."] 
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