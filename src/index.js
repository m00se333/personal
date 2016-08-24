var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Navigation = ReactRouter.Navigation; //mixin
var History = ReactRouter.History
import createHashHistory from 'history/lib/createHashHistory'
import { Router, Route, Link, IndexRoute } from "react-router";
const history = createHashHistory({ queryKey: false })

var MasterLayout = React.createClass({
  mixins: [History], 
  getInitialState: function(){
    return{
      hello: {}
    }
  },
  doSomething: function() {
    console.log('doSomething called by child with value:');
  },
  render: function(){
      var childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                doSomething: this.doSomething
            })
          );

    return(

        <div id="container">
          <Navigation />
          <div id="content">
            {childrenWithProps}
          </div>
        </div>
      )

  }
});

var Child = React.createClass({
    render: function(){
      return(
          <div onClick={() => this.props.doSomething(this.props.value)}>Click Me</div>
        )
    }
  });

  // Top Level Containers //
  var Navigation = React.createClass({

    render: function(){
      return(
          <div id="navigation">
            <ul>
              <li><Link to="/">The Story So Far...</Link></li>
              <li><Link to="/games-on-high-settings">Games on High Settings</Link></li>
              <li><Link to="/podcast">Conversation on High Settings</Link></li>
              <li><Link to="/projects">Projects</Link></li>
            </ul>
          </div>
        )
    }
  });

  
  // Different Blog Components, named Blog for simplicity //
  var GamesOnHighSettings = React.createClass({
    render: function(){
      return <h1>Games on High Settings</h1>
    }
  });

  var Podcast = React.createClass({
    render: function(){
      return <h1>Podcast</h1>
    }
  });

  var Projects = React.createClass({
    getInitialState: function(){
      var projects = require("./data/projectsObject");
      
      return{
        projects: projects
      }
    },
    renderProjects: function(){
      console.log(this.state.projects.first.url);
    },
    render: function(){

      return (
          <div className="postWrapper">
            <div id="projectsHeader">
              <h1>Projects</h1>
            </div>
            <div id="projectsBody">
              {this.renderProjects}
            </div>
          </div>
          
        )
    }
  })

  var TestPage = React.createClass({

    render: function(){
      return(
          <div className="postWrapper">
            <div id="postHeader">
              <div id="titleDate">
                <h2>This is a test blog title</h2>
                <span>1/1/2016</span>
              </div>
              <div id="testFrame">
              </div>
            </div>
            <div id="postBody">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae totam atque, sunt nesciunt nemo nobis nostrum cumque fugit esse soluta deleniti hic, quod dolorum. Nobis labore illum dolorem adipisci, ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus nostrum delectus ducimus officiis voluptatibus, tempora tempore, nobis magni neque laborum in hic omnis consectetur labore consequatur sint corrupti quo.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit assumenda quod ipsa, quisquam mollitia voluptatum molestias quos vitae velit doloribus numquam quaerat veniam facilis quas eaque dolore impedit saepe fugiat.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae totam atque, sunt nesciunt nemo nobis nostrum cumque fugit esse soluta deleniti hic, quod dolorum. Nobis labore illum dolorem adipisci, ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus nostrum delectus ducimus officiis voluptatibus, tempora tempore, nobis magni neque laborum in hic omnis consectetur labore consequatur sint corrupti quo.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit assumenda quod ipsa, quisquam mollitia voluptatum molestias quos vitae velit doloribus numquam quaerat veniam facilis quas eaque dolore impedit saepe fugiat.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae totam atque, sunt nesciunt nemo nobis nostrum cumque fugit esse soluta deleniti hic, quod dolorum. Nobis labore illum dolorem adipisci, ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus nostrum delectus ducimus officiis voluptatibus, tempora tempore, nobis magni neque laborum in hic omnis consectetur labore consequatur sint corrupti quo.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit assumenda quod ipsa, quisquam mollitia voluptatum molestias quos vitae velit doloribus numquam quaerat veniam facilis quas eaque dolore impedit saepe fugiat.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae totam atque, sunt nesciunt nemo nobis nostrum cumque fugit esse soluta deleniti hic, quod dolorum. Nobis labore illum dolorem adipisci, ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus nostrum delectus ducimus officiis voluptatibus, tempora tempore, nobis magni neque laborum in hic omnis consectetur labore consequatur sint corrupti quo.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit assumenda quod ipsa, quisquam mollitia voluptatum molestias quos vitae velit doloribus numquam quaerat veniam facilis quas eaque dolore impedit saepe fugiat.</p>
            </div>
          </div>
        )
    }
  })


var routes = (
          <Router history={history}>
            <Route path="/" component={MasterLayout}>
              <IndexRoute component={TestPage}></IndexRoute>
              <Child path="/games-on-high-settings" component={GamesOnHighSettings}></Child>
              <Child path="/podcast" component={Podcast}></Child>
              <Child path="/projects" component={Projects}></Child>
            </Route>
          </Router>
  )

var testRoutes = (
      <MasterLayout>
        <Child value="1"></Child>
        <Child value="2"></Child>
      </MasterLayout>

  )

ReactDOM.render(routes, document.getElementById("app"));
