import { createContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const data = { modal, setModal };

  return <ModalContext.Provider value={data}>{children}</ModalContext.Provider>;
};
export { ModalProvider };
export default ModalContext;
