import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { HeaderEntry } from "./HeaderEntryComponent";
import { SubHeader } from "./SubHeaderComponent";
import { store } from "./Store";
import { HelloService } from "./HelloService";
import { IProperties } from "./Interfaces/IProperties";

class App extends React.Component<IProperties> {
  constructor (props: any) {
    super (props);
    new HelloService();
  }

  render() {
    return (<div className="App">
      <Provider store={store}>
        <HeaderEntry></HeaderEntry>
        <SubHeader></SubHeader>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>

      </Provider>
    </div>
  );
  }
};

export default App;