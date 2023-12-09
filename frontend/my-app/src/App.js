import React from "react";

//Create a component

function Greetings() {
  return <p>Hello Good Morning!</p>;
}

function Avatar() {
  return <img src="/fb.png" alt="profile" />;
}
function UserProfileCard() {
  return (
    <div className="user-profile-card">
      <Avatar />
      <h2>Al-Areef</h2>
      <p>Full stack dev</p>
    </div>
  );
}

const my_stack_lists = ["React", "Node", "MongoDB", "python", "Django", "flask"];

const my_stack_lists_items = my_stack_lists.map((my_stack_list) => (
  <li>{my_stack_list}</li>
));
// A list item component
// function ListItem() {
//   return <li>list item</li>;
// }

const App = () => {
  return (
    <section className="header">
      <h1>Hello World!</h1>
      <Greetings />
      <UserProfileCard />
      <ul>{my_stack_lists_items}</ul>
    </section>
  );
};

export default App;
