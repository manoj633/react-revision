import ReactDOM from "react-dom";

function Modal() {
  return ReactDOM.createPortal(
    <div style={{ backgroundColor: "#ffff00" }}>
      <h1>Hello</h1>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;
