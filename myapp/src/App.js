
/*import React from "react";
function App() {
  //let ele=React.createElement("div",{className:"App"},
    //React.createElement("h1",null,"Header")
  //);
  let username="Bhavana";
  return (
    //<div className="App">
      //<h1 style={{color:"red"}}>Welcome</h1>
      //<h1>Header</h1>
      //</div>
      //ele

      //<section>
        //<h1>One jsx elememt</h1>
        //<p>
          //lorm3
        ///</p>
      //</section>
    <div>
      <h1>{username}</h1>
        <p>{100+100}</p>
    </div>
  
  );
}

export default App;*/

/*import React from "react";
class App extends React.Component{
  render(){
    return(
      <h1>Class Based Componets</h1>
    )
  }
}
export default App;*/

/*function App(){
  return(
    <h1>Function Based Componets</h1>
    
  )
}
export default App;*/

/*const App  =()=>{
  return(
    <h1>Arrow Function</h1>
  )
}
export default App;*/

//component composition
/*import React from 'react'
import Footer from './components/Footer'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Sidebar1 from './components/Sidebar1'
import Sidebar2 from './components/Sidebar2'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Main/>
      <div className='sidebar'>
        <Sidebar1/>
        <Sidebar2/>
      </div>
      <Footer/>
    </div>
  )
}

export default App*/

//props
import React, { Component } from 'react'
import CBCPropEx from './propsex/CBCPropEx'
export default class App extends Component {
  render() {
    return (
      <div>App
        <CBCPropEx username="Vamshi"/>
      </div>
    )
  }
}


