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

const App = () => {
  return (
    <section className="header">
      <h1>Hello World!</h1>
      <Greetings />
      <UserProfileCard />
    </section>
  );
};

export default App;
