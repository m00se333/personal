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
    description: ["This is a CRUD functional app that takes in a users Xbox Live Gamertag. The client captures that search and sends it off to my Express server. The Express server sends an AJAX request to the Halo Waypoint API and in response recieves data about the searched Gamertag's Warzone record in Halo 5. The response is handled by my Express server and data from the response is sent to a Firebase database. The client is listening for changes to the database and populates the DOM based on the information inside the Firebase database."
                  ,"One hurdle I had to get through was the API calls to the Halo Waypoint API- I could not do it from the client and had to learn how to make AJAX requests using Express. It was a challenge but I am really proud of what I produced. I eventually want to refactor this project using the Destiny API."] 
  }
  // testPoject:{
  //   url: "testURL@awesome.com",
  //   github: "github.com/88888djsd/awesome",
  //   description: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos fugit iure numquam praesentium, necessitatibus, quidem ipsum excepturi iusto blanditiis sapiente quia architecto minus, sunt ratione amet aliquam eaque ducimus deserunt.",
  //                 "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus velit culpa, deleniti voluptates. Deleniti itaque harum error! Ut modi necessitatibus illo, deserunt, tenetur sunt sed placeat ex cum voluptates quo?",
  //                 "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque laboriosam est eaque dolorem pariatur repellat, voluptate vitae ex perferendis debitis esse vero qui saepe ratione nihil. Nostrum ipsam aliquam error."]
  // }
  
}