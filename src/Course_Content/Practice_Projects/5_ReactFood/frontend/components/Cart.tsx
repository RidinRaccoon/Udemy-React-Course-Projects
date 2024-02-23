import * as React from 'react';
// import * as RRD from 'react-router-dom';
import { Modal } from './UI/Modal';

export function Cart(props: { isVisible: Boolean; onClose: () => void }) {
  // const navigate = RRD.useNavigate();
  const { isVisible, onClose } = props;

  /*   const handleClose = React.useCallback(() => {
    console.log('called');
    // navigate('../');
  }, [navigate]); */

  return (
    <div>
      {isVisible && (
        <Modal /* onClose={toggleCart} */>
          <div>
            <button type="button" onClick={onClose}>
              Close
            </button>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
            </ul>
          </div>
        </Modal>
      )}
    </div>
  );
}

/* {isVisible && (
  
)} */
