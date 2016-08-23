var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation; //mixin
var History = ReactRouter.History
import createHashHistory from 'history/lib/createHashHistory'
import { Link, IndexRoute } from "react-router";
const history = createHashHistory({ queryKey: false })

var MasterLayout = React.createClass({
  mixins: [History], 
  getInitialState: function(){
    return{
      hello: {}
    }
  },
  render: function(){
    return(
        <div id="container">
          <Navigation />
          <div id="content">
            {this.props.children}
          </div>
        </div>
      )

  }
});
  // Top Level Containers //
  var Navigation = React.createClass({
    navigateTo: function(){

    },
    render: function(){
      return(
          <div id="navigation">
            <ul>
              <li><Link to="/">The Story So Far...</Link></li>
              <li><Link to="blog2">Games on High Settings</Link></li>
              <li><Link to="blog3">Conversation on High Settings</Link></li>
              <li><Link to="blog4">Projects</Link></li>
            </ul>
          </div>
        )
    }
  });

  
  // Different Blog Components, named Blog for simplicity //
  var Blog1 = React.createClass({
    render: function(){
      return <h1>Blog1</h1>
    }
  })
  var Blog2 = React.createClass({
    render: function(){
      return <h1>Blog2</h1>
    }
  })
  var Blog3 = React.createClass({
    render: function(){
      return <h1>Blog3</h1>
    }
  })
  var Blog4 = React.createClass({
    render: function(){
      return <h1>Blog4</h1>
    }
  })

  var TestPage = React.createClass({
    render: function(){
      return(
          <div id="postWrapper">
            <div id="postHeader">
              <h2>This is a test blog title</h2>
              <div id="testFrame">
              </div>
            </div>
            <div id="postBody">
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
              <Route path="/blog2" component={Blog2}></Route>
              <Route path="/blog3" component={Blog3}></Route>
              <Route path="/blog4" component={Blog4}></Route>
            </Route>
          </Router>
  )



ReactDOM.render(routes, document.getElementById("app"));
