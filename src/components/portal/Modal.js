import ReactDOM from "react-dom";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div style={{ backgroundColor: "#ffff00" }}>
      <h1>Hello</h1>
      {children}
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;
