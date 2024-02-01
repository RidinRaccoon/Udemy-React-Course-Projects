import { uiActions } from './ui-slice';
import { AppDispatch } from './index';
import { TCartState, cartActions } from './cart-slice';

const endpoint =
  'https://react-course---advanced-redux-default-rtdb' +
  '.europe-west1.firebasedatabase.app/cart.json';

export function fetchCartData() {
  return async (dispatch: AppDispatch) => {
    const fetchData = async () => {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("Couldn't fetch cart data");
      }
      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
          changed: false,
        }),
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Failed to get cart data.',
        }),
      );
    }
  };
}

export function sendCartData(cart: TCartState) {
  return async (dispatch: AppDispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'ending',
        title: 'Sending',
        message: 'Sending cart data.',
      }),
    );

    async function sendRequest() {
      const response = await fetch(endpoint, {
        method: 'PUT',
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        }),
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    }

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Sucess',
          message: 'Cart data sent successfully.',
        }),
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Failed to send cart data.',
        }),
      );
    }
  };
}
