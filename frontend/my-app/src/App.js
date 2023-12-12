import React, { useState } from "react";
import ListComponent from "./components/ListItem";
import Greetings from "./components/Greetings";
import Avatar from "./components/Avatar";



// const my_stack_lists = ["React", "Node", "MongoDB", "python", "Django", "flask"];

// const my_stack_lists_items = my_stack_lists.map((my_stack_list) => (
//   <li>{my_stack_list}</li>
// ));
// A list item component
// function ListItem() {
//   return <li>list item</li>;
// }

const users = [{
  name: 'Al-Areef',
  bio: 'Backend dev trying to become full stack',
  age: 17,
  avatar: 'https://www.w3schools.com/howto/img_avatar.png'
}, {
  name: 'Al-Ameen',
  bio: 'Upcoming ML engineer',
  age: 13,
  avatar: 'https://www.w3schools.com/howto/img_avatar.png'
}
]
const usersList = users.map(user => {
  return <div>
    <img src={user.avatar} alt="Avatar" style={{ width: 100}} />
    <h3>{user.name}</h3>
    <h4>{user.age}</h4>
    <p>{user.bio}</p>
  </div>
})

const handleClick = (event) => {
  console.log('You clicked me!!!');
}
const Counter = () => {
  const [count, setCount] = useState(0)
  
  const increment = () => {
    setCount(count + 1)
    console.log(count)
  };
  const decrement = () => {
    setCount(count - 1)  
  }
  return (
    <section className="header">
      {/*<h1>Hello World!</h1>*/}
      {<Greetings />}
      {<Avatar />}
      {/*<ListComponent />*/}
      {/* <ul>{my_stack_lists_items}</ul> */}
      {usersList}
      <button onClick={handleClick}>Click Me</button>
      <h1>Counter: {count}</h1>
      <button onClick={increment} className="incr-btn">Increment</button>
      <button onClick={decrement} className="decr-btn">Decrement</button>
    </section>
  );

}



const App = () => {
  return (
    <div className="App">
      <Counter />
      {/* console.log(Counter) */}
    </div>
  );
};

export default App;
