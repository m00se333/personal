var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Navigation = ReactRouter.Navigation; //mixin
var History = ReactRouter.History;
import createHashHistory from 'history/lib/createHashHistory';
import { Router, Route, Link, IndexRoute } from "react-router";
const history = createHashHistory({ queryKey: false });
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');




var MasterLayout = React.createClass({
  mixins: [History],

  render: function(){
      var childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                doSomething: this.doSomething
            })
          );

    return(

        <div id="container">
          <Navigation activeRoute={this.props.location.pathname} />
          <div id="content">
            {childrenWithProps}
          </div>
        </div>
      )

  }
}); 

  
  // This is the parent component that sits on the side or the top depending on the
  // broswer size, contains components NavEndpt
  var Navigation = React.createClass({
    getInitialState: function(){
      var endpoints = require("./data/naviEnd.js");
      return {
        endpoints: endpoints,
        activeRoute: this.props.activeRoute
      }           
    },

    componentDidMount: function(){
        var cover = document.getElementById("cover");
        var projects = document.getElementById("projects");
        var about = document.getElementById("about");

        var active = this.props.activeRoute

        this.setActive();
    },

    resetClasses: function(){
      var active = this.props.activeRoute

      var cover = document.getElementById("cover");
      var projects = document.getElementById("projects");
      var about = document.getElementById("about");    

          cover.className = "navLink";
          projects.className = "navLink";
          about.className = "navLink";
    },

    setActive: function(){
      var active = this.props.activeRoute

      var cover = document.getElementById("cover");
      var projects = document.getElementById("projects");
      var about = document.getElementById("about");

            if (active === "/"){

            cover.className += " active";
          } else if (active === "/projects"){

            projects.className += " active"
          } else if (active === "about"){
            about.className += " active"
          }
    },

    altActive: function(){
      var cover = document.getElementById("cover");
      var projects = document.getElementById("projects");
      var about = document.getElementById("about");

      var allEndpoints = document.getElementsByClassName("navLink");

      function yellowBox(){

        console.log("hello")
      }

      allEndpoints.onClick = yellowBox(allEndpoints)

    },

    componentDidUpdate: function(){

      this.resetClasses();
      this.setActive();

    },

    renderEndpoints: function(key){
      var endpointDetails = this.state.endpoints[key];
  
      return(
        <NavEndpt id={endpointDetails.id} key={endpointDetails.title} url={endpointDetails.url} title={endpointDetails.title}/>
        )
    
    },

    render: function(){
      return(
          <div id="navigation">
              <About  />
              {Object.keys(this.state.endpoints).map(this.renderEndpoints)}
          </div>
        )
      }
    });

        // Child of Navigation component
        var NavEndpt = React.createClass({

          render: function(){
          
            return (
              <div className="navLink" id={this.props.id}>
                <Link id={this.props.id + "-link"} to={this.props.url}>{this.props.title}</Link>
              </div>
              )
        
          }
        })

      // Projects Route //
      var Projects = React.createClass({
          getInitialState: function(){
            var projects = require("./data/projectsObject");
            
            return{
              projects: projects
            }

          },

          renderProjects: function(key){

            var projectDetails = this.state.projects[key];

            var data = {
                url: projectDetails.url,
                github: projectDetails.github,
                desc: projectDetails.description
            }

            return(
                <Project id={key} key={key} data={data}/>
              )
          },

          render: function(){

            return (
                <div className="postWrapper">
                  <div id="projectsHeader">
                    <h1>Projects</h1>
                  </div>
                  <div id="projectsBody">
                    {Object.keys(this.state.projects).map(this.renderProjects)}
                  </div>
                </div>
                
              )
          }
      })
          // template for each individual project
          var Project = React.createClass({


              //formats arrays so they return as cleaner paragraphs
              formatParagraph: function(){
                var desc = this.props.data.desc;
                var id = 1
                
                var paragraphs = desc.map(function(para){

                    return(<p key={id++}>{ para }</p>)

                });

                return(<div>{ paragraphs }</div>)


              },
              render: function(){
                var data = this.props.data;

                return(
                    <div className="project">
                      <h1>{this.props.id}</h1>
                      <a href={"https://" + data.url} target="blank">{data.url}</a>
                      <a href={"https://" + data.github} target="blank">{data.github}</a>
                      {this.formatParagraph()}
                    </div>
                  )
              }
          })
  
      // The Story So Far //   
      var CoverLetter = React.createClass({
        getInitialState: function(){
            var landingText = require("./data/landingObject");
            return{
              postInfo: landingText
            }  
        },
        formatPost: function(){
          var postContent = this.state.postInfo.content;
          var id = 1;

          var paragraphs = postContent.map(function(para){
                return (<p key={id ++}>{para}</p>)
          })

          return(<div id="paragraphs">{paragraphs}</div>)

        },
        render: function(){
          var post = this.state.postInfo;

          var style = {

            backgroundImage: "url("+ post.image[0] +")"

          }
          return(
              <div className="postWrapper">
                  <div id="titleDate" style={style}>
                    <h2>{post.title}</h2>
                    <span>{post.date}</span>
                  </div>
                <div id="postBody">
                    {this.formatPost()}
                </div>
              </div>
            )
        }
      })

      // 404 Error //

      var NotFound = React.createClass({
        render: function(){
          return(
              <h1>There is nothing at this endpoint</h1>
            )
        }   
      })
// Animated "about me" pop out in browser and regular page in mobile
var About = React.createClass({
      render: function(){
        return (
          <div className="navLink" id="about">
            <Link id="about-link" to="/">About</Link>
          </div>
          )
      }
})


var routes = (
          <Router history={history}>
            <Route path="/" component={MasterLayout}>
              <IndexRoute component={CoverLetter}></IndexRoute>
              <Route path="/projects" component={Projects}></Route>
              <Route path="/*" component={NotFound}></Route>
            </Route>
          </Router>
  )



ReactDOM.render(routes, document.getElementById("app"));
