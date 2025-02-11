
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
/*import React, { Component } from 'react'
import FBCPropEx from './propsex/FBCPropEx'
export default class App extends Component {
  render() {
    return (
      <div>
        
        {/*CBCPropEx 
        username="Bhavana"
        age={20}//number
        hobbies={["Cooking","reading books","gardening"]}//array
        address={{city:"Nizamabad",area:"Gandhinagar"}}//object
        sendFun={function(){alert("hi i am bhavana")}}
  
        />*//*}

        <FBCPropEx
        username="ram"
        isMarried={true}
        hobbies={["Chatting","Reading","Eating"]}
        />
        
      </div>

    )
  }
}*/
// !props children
/*import React from 'react'
import PropChildEx from './propsex/PropChildEx'
import SubChild from './propsex/SubChild'
import Child1 from './propsex/Child1'

const App = () => {
  return (
    <div>
    app
      {/* <PropChildEx num={1000}>
        <h1>this is data coming from props children</h1>
        <SubChild/>
      </PropChildEx> }
      <Child1 university="Mallareddy university"/>
    </div>
  )
}

export default App*/

/*import React from 'react'
import FBCStateEx from './stateexample/FBCStateEx'

const App = () => {
  return (
    <div>
      {/*<CBCStateEx></CBCStateEx>}
      <FBCStateEx/>
    </div>
  )
}

export default App*/
/*import React, { Component } from 'react'
import UseEffectEx from './hookexamples/UseEffectEx'

export default class App extends Component {
  render() {
    return (
      <div>App
        <UseEffectEx/>
      </div>
    )
  }
}*/
import React, { Component } from 'react'
import ContextAPI from './hookexamples/ContextAPI'
import ContextC1 from './hookexamples/ContextC1'

export default class App extends Component {
  render() {
    return (
      <div>App
        {/*<RefExamples/>*/}
        <ContextAPI>
          <ContextC1/>
        </ContextAPI>
      </div>
    )
  }
}


