import ParentComponent from "./components/propsBasics/Parent";
import DefaultProps from "./components/propsBasics/DefaultProps";
import CounterComponent from "./components/useState hook/Counter";

function App() {
  return (
    <div className="App">
      {/* <ParentComponent /> */}
      {/* <DefaultProps /> */}
      <CounterComponent /> {/* useState hook example */}
    </div>
  );
}

export default App;
