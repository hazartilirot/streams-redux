import React from "react";
import ReactDOM from "react-dom";

/*Portal are commonly used when React is introduced into a server-side
 application like Django, Java, etc that renders HTML.
stopPropagation() is used to prevent an event from bubbling up i.e. if a user
clicks on a window itself the event would be prevented from going up to the
parent container in which there is announced a different an event handler. */
const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      onClick={props.onDismiss}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};
export default Modal;