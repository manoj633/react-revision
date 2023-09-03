import ParentComponent from "./components/propsBasics/Parent";
import DefaultProps from "./components/propsBasics/DefaultProps";
import CounterComponent from "./components/useState hook/Counter";
import DataFetching from "./components/useEffect hook/DataFetching";
import BasicContextProvider from "./components/contextAPI/BasicContextExample/BasicContextProvider";
import UserContextProvider from "./components/contextAPI/ObjectContextExample/UserContextProvider";

function App() {
  return (
    <div className="App">
      {/* <ParentComponent /> */}
      {/* <DefaultProps /> */}

      {/* useState hook example */}
      {/* <CounterComponent /> */}

      {/* useEffect example */}
      {/* <DataFetching /> */}

      {/* basic context API example */}
      {/* <BasicContextProvider /> */}

      {/* Bit advanced context example */}
      <UserContextProvider />
    </div>
  );
}

export default App;
