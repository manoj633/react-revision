import ParentComponent from "./components/propsBasics/Parent";
import DefaultProps from "./components/propsBasics/DefaultProps";
import CounterComponent from "./components/useState hook/Counter";
import DataFetching from "./components/useEffect hook/DataFetching";
import BasicContextProvider from "./components/contextAPI/BasicContextExample/BasicContextProvider";
import UserContextProvider from "./components/contextAPI/ObjectContextExample/UserContextProvider";
import Modal from "./components/portal/Modal";
import { useRef } from "react";
// import ForwardRefChild from "./components/forwardRefs/ForwardRefChild";
import ForwardRefSecondChild from "./components/forwardRefs/ForwardRefSecondChild";

function App() {
  const inputRef = useRef(null);
  const childRef = useRef(null);

  function clickHandler() {
    inputRef.current.focus();
  }

  function secondClickHandler() {
    if (childRef.current) {
      childRef.current.style.backgroundColor = "blue";
    }
  }

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
      {/* <UserContextProvider /> */}

      {/* Portal */}
      {/* <Modal>
        <div style={{ backgroundColor: "#ff0000" }}>Namaste</div>
      </Modal> */}

      {/* Forward Refs */}
      {/* <ForwardRefChild ref={inputRef} clickHandler={clickHandler} /> */}

      {/* Forward Ref Second exmaple */}
      <ForwardRefSecondChild ref={childRef} clickHandler={secondClickHandler} />
    </div>
  );
}

export default App;
