var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Navigation = ReactRouter.Navigation; //mixin
var History = ReactRouter.History
import createHashHistory from 'history/lib/createHashHistory'
import { Router, Route, Link, IndexRoute } from "react-router";
const history = createHashHistory({ queryKey: false })

export default class MasterLayout extends React.Component {
  mixins: [History], 

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
};