import React, { useReducer, useRef } from "react";
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
import { DefaultValues } from "./components/Forms/form hook/DefaultValues";
import { NestedObject } from "./components/Forms/form hook/NestedObject";
import { DynamicFields } from "./components/Forms/form hook/field array hook/DynamicFields";
import { NumbersAndDates } from "./components/Forms/form hook/NumbersAndDates";
import { WatchValue } from "./components/Forms/form hook/WatchValue";
import { GetFieldValue } from "./components/Forms/form hook/GetFieldValue";
import { SetFieldValue } from "./components/Forms/form hook/SetFieldValue";
import { TouchedAndDirtyFields } from "./components/Forms/form hook/TouchedAndDirtyFields";
import { DisabledFields } from "./components/Forms/form hook/DisabledFields";
import { HandleFormSubmissionError } from "./components/Forms/form hook/HandleFormSubmissionError";
import { DisableFormSubmission } from "./components/Forms/form hook/DisableFormSubmission";
import { FormSubmissionStates } from "./components/Forms/form hook/FormSubmissionStates";
import { ResetForm } from "./components/Forms/form hook/ResetForm";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Router/Home";
// import { About } from "./components/Router/About";
import { NavBar } from "./components/Router/NavBar";
import { OrderSummary } from "./components/Router/OrderSummary";
import { NoMatch } from "./components/Router/NoMatch";
import { Products } from "./components/Router/Products";
import { FeaturedProduct } from "./components/Router/FeaturedProduct";
import { NewProduct } from "./components/Router/NewProduct";
import { Users } from "./components/Router/Users";
import { UserDetails } from "./components/Router/UserDetails";
import { Admin } from "./components/Router/Admin";
import { Profile } from "./components/Router/Authentication and protected routes/Profile";
import { RequireAuth } from "./components/Router/Authentication and protected routes/RequireAuth";
import { Login } from "./components/Router/Authentication and protected routes/Login";
import { AuthProvider } from "./components/Router/Authentication and protected routes/auth";
import CounterWithReducer from "./components/useReducer Example/CounterWithReducer";
import CounterWithUseReducerAndPayload from "./components/useReducer Example/CounterWithUseReducerAndPayload";
import ComponentA from "./components/useReducer Example/useReducer with useContext/ComponentA";
import ComponentB from "./components/useReducer Example/useReducer with useContext/ComponentB";
import ComponentD from "./components/useReducer Example/useReducer with useContext/ComponentD";
import DisplayPost from "./components/useReducer Example/useReducer with data fetching/DisplayPost";

const LazyAbout = React.lazy(() => import("./components/Router/About"));

const initalState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initalState;
    default:
      return state;
  }
};

export const CountContext = React.createContext({});

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

  const [count, dispatch] = useReducer(reducer, initalState);

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
      {/* <ErrorVisualFeedback /> */}
      {/* <DefaultValues /> */}
      {/* <NestedObject /> */}
      {/* <DynamicFields /> */}

      {/* <NumbersAndDates /> */}
      {/* <WatchValue /> */}
      {/* <GetFieldValue /> */}
      {/* <SetFieldValue /> */}
      {/* <TouchedAndDirtyFields /> */}
      {/* <DisabledFields /> */}
      {/* <HandleFormSubmissionError /> */}
      {/* <DisableFormSubmission /> */}
      {/* <FormSubmissionStates /> */}
      {/* <ResetForm /> */}

      {/* React Router */}
      {/* <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="about"
            element={
              <React.Suspense fallback="...Loading">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="order-summary" element={<OrderSummary />} />
          <Route path="products" element={<Products />}>
            <Route index element={<FeaturedProduct />} />
            <Route path="featured" element={<FeaturedProduct />} />
            <Route path="new" element={<NewProduct />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="login" element={<Login />} /> */}
      {/* Protected route */}
      {/* <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AuthProvider> */}

      {/* useReducer Examples */}
      {/* <CounterWithReducer /> */}
      {/* <CounterWithUseReducerAndPayload /> */}

      {/* useReducer with useContext */}
      {/* <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <div>Count - {count}</div>
        <ComponentA />
        <ComponentB />
        <ComponentD />
      </CountContext.Provider> */}

      <DisplayPost />
    </div>
  );
}

export default App;
