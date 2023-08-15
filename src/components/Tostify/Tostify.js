import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  function Tostify(props){
    const showToastMessage = () => {
      toast.warning(`${props.errText}`, {
        position: toast.POSITION.TOP_LEFT
    });
  };
  return (
      <div>
          <button onClick={showToastMessage}>Notify</button>
          <ToastContainer />
      </div>
  );
  }
  export default Tostify;