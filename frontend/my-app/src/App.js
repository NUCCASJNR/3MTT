import React from "react";

//Create a component

function Greetings () {
  return (<p>Hello Good Morning!</p>)
}

const App = () => {
  return (
    <section className="header">
      <h1>Hello World!</h1>
      <Greetings />
    </section>
  );
};

export default App;
