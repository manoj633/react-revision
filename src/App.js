import ParentComponent from "./components/propsBasics/Parent";
import DefaultProps from "./components/propsBasics/DefaultProps";
import CounterComponent from "./components/useState hook/Counter";
import DataFetching from "./components/useEffect hook/DataFetching";

function App() {
  return (
    <div className="App">
      {/* <ParentComponent /> */}
      {/* <DefaultProps /> */}

      {/* useState hook example */}
      {/* <CounterComponent /> */}

      {/* useEffect example */}
      <DataFetching />
    </div>
  );
}

export default App;
