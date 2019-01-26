/* eslint import/no-webpack-loader-syntax: off */
import FooText from "!raw-loader!./Foo.js";
import React, { Component } from "react";
import Foo from "./Foo";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Use</h1>
        <pre>
          <code>{`<Foo name={"test"} />`}</code>
        </pre>
        <hr />
        <h1>Result</h1>
        <Foo name={"test"} />
        <hr />
        <h1>Component</h1>
        <pre>
          <code>{FooText}</code>
        </pre>
      </div>
    );
  }
}

export default App;
