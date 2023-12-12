import React from "react";
import ListComponent from "./components/ListItem";
import Greetings from "./components/Greetings";
import Avatar from "./components/Avatar";
//Create a component



// List component



// const my_stack_lists = ["React", "Node", "MongoDB", "python", "Django", "flask"];

// const my_stack_lists_items = my_stack_lists.map((my_stack_list) => (
//   <li>{my_stack_list}</li>
// ));
// A list item component
// function ListItem() {
//   return <li>list item</li>;
// }

const App = () => {
// const cars = ["Benz", "BMW", "Toyota", "Nissan", "Honda"];
  return (
    <section className="header">
      <h1>Hello World!</h1>
      <Greetings />
      <Avatar />
      <ListComponent />
      {/* <ul>{my_stack_lists_items}</ul> */}
    </section>
  );
};

export default App;
