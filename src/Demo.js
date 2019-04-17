import React, { Component } from 'react';

const eml = "Hello world";

function merge_name(user){
    return user.firstname + ' ' +user.lastname;
}

const user = {
    firstname : "Thuận",
    lastname : "Vũ"
}

function timedate() {
    return new Date().toLocaleTimeString();
}

function Welcome(name) {
    return <h1>Hello, {name.lastname}</h1>
}

setInterval(timedate, 1000);
class Demo extends Component {
  render() {
    return (
     <div>
       <Welcome lastname="thuan" />
       <Welcome lastname="thuan" />
       <Welcome lastname="thuan" />
     </div>
    );
  }
}
export default Demo;
