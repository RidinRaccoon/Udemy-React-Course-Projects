import * as React from 'react';
// Components & Types
import { ModalWindow } from '../components/UI/Modal/ModalWindow';

export type TModalContext = {
  hide: () => void;
  open: React.Dispatch<React.SetStateAction<React.ReactNode>>;
};

export const ModalContext = React.createContext<TModalContext>({
  hide: () => {},
  open: () => {},
});

/**
 * Provides a modal window with customisable content [`children`] for elements
 * wrapped in the `ModalProvider` component.
 *
 * The modal's visibility can be toggled with the `close` and `hide` 
 * methods of the `ModalContext`.
 */
export function ModalProvider({ children }: React.PropsWithChildren) {
  const [modalContent, setModalContent] = React.useState<React.ReactNode>();

  return (
    <ModalContext.Provider
      value={React.useMemo(
        () => ({
          hide: () => setModalContent(''),
          open: setModalContent,
        }),
        [],
      )}
    >
      {modalContent ? <ModalWindow>{modalContent}</ModalWindow> : null}
      {children}
    </ModalContext.Provider>
  );
}
