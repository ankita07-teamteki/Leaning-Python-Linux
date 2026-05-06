import React from "react";

export default function App() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "2rem" }}>
      <h1>React Container is Running</h1>
      <p>This app is running inside Docker with a local bind mount.</p>
      <p>Edit <code>react-app/src/App.jsx</code> and save to see hot updates.</p>
    </main>
  );
}
