import React from 'react'
import  ReactDOM  from 'react-dom'

// function Greeting(){
//   return <h4>hey there</h4>
// }

//using arrow function
// const Greeting = () =>{
//   return React.createElement('h1', {}, 'this is my page')
// }

//jsx rules


function BookList(){
  return (
  <section>
    <Book/>
    <Book/>
    <Book/>
  </section>)
}

const Book = () =>{
  return <article>
  <Image/>
  <Title/>
  <Author/>
  </article>
}

const Image = () => (
  <img src="https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL127_SR127,127_.jpg" alt=''></img>
)

const Title = () => (
  <h1>It ends with us</h1>
)

const Author = () => (
  <h4>Verie best</h4>
)
ReactDOM.render(<BookList/>, document.getElementById('root'))