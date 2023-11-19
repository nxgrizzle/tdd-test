import React, { useState } from "react";
const App = () => {
  const [state, setState] = useState({ foo: "bar" });
  return <div className="hello">Hello World!</div>;
};
export default App;
