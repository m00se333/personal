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

  activePage: function(){
    this.setState({
      active: true
    });
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
  // Top Level Containers //
  var Child = React.createClass({
      render: function(){
        return(
            <div onClick={() => this.props.doSomething(this.props.value)}>Click Me</div>
          )
      }
    });
/*

    Links to new features:

    <li><Link to="/games-on-high-settings">Games on High Settings</Link></li>
    <li><Link to="/podcast">Podcast</Link></li>

*/

  
  
  var Navigation = React.createClass({
    
    getInitialState: function(){
      var endpoints = require("./data/naviEnd.js");
      return {
        endpoints: endpoints
      }
                  
    },
    componentDidMount: function() { 

          },

    renderEndpoints: function(key){
      var endpointDetails = this.state.endpoints[key];
      
      return(
        <NavEndpt key={endpointDetails.title} url={endpointDetails.url} title={endpointDetails.title}/>
        )
    
    },

    render: function(){
        
      return(
          <div id="navigation">
            <ul>
              {Object.keys(this.state.endpoints).map(this.renderEndpoints)}
            </ul>
          </div>
        )
    }
  });

        var NavEndpt = React.createClass({

          

          render: function(){
            return(
              <li><Link to={this.props.url}>{this.props.title}</Link></li>
            )
          }
        })
            

            // var NavEndpoints = React.createClass({
                
                

            //     renderEndpoints: function(key){

            //       return(<li><Link to={key.url}>{key.title}</Link></li>)
                  
            //     },

            //     render: function(){
            //       var paths = {
            //               home: {
            //                 url: "/",
            //                 title: "The Story So Far..."
            //               },
            //               projects: {
            //                 url: "/projects",
            //                 title: "Projects"
            //               }
            //           } 

            //     return (

            //         {Object.keys(paths).map(this.renderEndpoints())}
                    
            //         )
            //     }
            //   });
  
  // Different Blog components for each route //
    
    /*
      // Games on High Settings //
      var GamesOnHighSettings = React.createClass({
        render: function(){
          return <h1>Games on High Settings</h1>
        }
      });

      // Podcast //
      var Podcast = React.createClass({
        render: function(){
          return <h1>Podcast</h1>
        }
      });
    */

      // Projects //
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
                      <a href={data.url} target="blank">{data.url}</a>
                      <a href={data.github} target="blank">{data.github}</a>
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

          return(<div>{paragraphs}</div>)

        },
        render: function(){
          var post = this.state.postInfo;
          return(
              <div className="postWrapper">
                <div id="postHeader">
                  <div id="titleDate">
                    <h2>{post.title}</h2>
                    <span>{post.date}</span>
                  </div>
                  <img src={post.image} alt="Destiny Warlock" id="testFrame"/>
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

/* 

    Paths to new features:

    <Child path="/games-on-high-settings" component={GamesOnHighSettings}></Child>
    <Child path="/podcast" component={Podcast}></Child>
*/


var routes = (
          <Router history={history}>
            <Route path="/" component={MasterLayout}>
              <IndexRoute component={CoverLetter}></IndexRoute>
              <Child path="/projects" component={Projects}></Child>
              <Child path="/*" component={NotFound}></Child>
            </Route>
          </Router>
  )



ReactDOM.render(routes, document.getElementById("app"));
