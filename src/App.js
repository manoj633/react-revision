import { useRef } from "react";
import ParentComponent from "./components/propsBasics/Parent";
import DefaultProps from "./components/propsBasics/DefaultProps";
import CounterComponent from "./components/useState hook/Counter";
import DataFetching from "./components/useEffect hook/DataFetching";
import BasicContextProvider from "./components/contextAPI/BasicContextExample/BasicContextProvider";
import UserContextProvider from "./components/contextAPI/ObjectContextExample/UserContextProvider";
import Modal from "./components/portal/Modal";

import ForwardRefChild from "./components/forwardRefs/ForwardRefChild";
import ForwardRefSecondChild from "./components/forwardRefs/ForwardRefSecondChild";

import Counter from "./components/useRef Example/Counter";
import Parent from "./components/child to parent prop passing/Parent";
import ListsAndKeys from "./components/Lists and Keys/ListsAndKeys";
import ConditionalRendering from "./components/conditional rendering/Conditionalrendering";
import FunctionalComponentLifecycle from "./components/Lifecycle Demo/FunctionalComponentLifecycle";
import ControlledComponent from "./components/controlled component/ControlledComponent";
import UncontrolledComponent from "./components/uncontrolled component/UncontrolledComponent";
import AccessValues from "./components/Forms/Basic Form/AccessValues";
import ValidateInput from "./components/Forms/validation/ValidateInput";
import AdvancedValidation from "./components/Forms/validation/AdvancedValidation";
import { LoginForm } from "./components/Forms/form hook/LoginForm";
import FormSubmission from "./components/Forms/form hook/FormSubmission";
import { FormValidation } from "./components/Forms/form hook/FormValidation";
import { CustomFormValidation } from "./components/Forms/form hook/CustomFormValidation";
import { ErrorVisualFeedback } from "./components/Forms/form hook/ErrorVisualFeedback";

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
      {/* <ForwardRefSecondChild ref={childRef} clickHandler={secondClickHandler} /> */}

      {/* useRef Exmaple */}
      {/* <Counter /> */}

      {/* Pass data from child to Parent */}
      {/* <Parent /> */}

      {/* List and Keys */}
      {/* <ListsAndKeys /> */}

      {/* Conditional rendering */}
      {/* <ConditionalRendering condition={true} /> */}

      {/* Functional Lifecycle Example */}
      {/* <FunctionalComponentLifecycle /> */}

      {/* Controlled component */}
      {/* <ControlledComponent /> */}

      {/* Uncontrolled component */}
      {/* <UncontrolledComponent /> */}

      {/* Form Basics */}
      {/* <AccessValues /> */}

      {/* Validating Input */}
      {/* <ValidateInput /> */}
      {/* <AdvancedValidation /> */}

      {/* React Hook Form validation */}
      {/* <LoginForm /> */}
      {/* <FormSubmission /> */}
      {/* <FormValidation /> */}
      {/* <CustomFormValidation /> */}
      <ErrorVisualFeedback />
    </div>
  );
}

export default App;
