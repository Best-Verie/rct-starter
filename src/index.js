import React from 'react'
import  ReactDOM  from 'react-dom'

// function Greeting(){
//   return <h4>hey there</h4>
// }

//using arrow function
const Greeting = () =>{
  return React.createElement('h1', {}, 'this is my page')
}

//jsx rules


ReactDOM.render(<Greeting/>, document.getElementById('root'))