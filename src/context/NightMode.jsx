import { createContext, useState } from "react";

const NightMode = createContext();

const NightModeProvider = ({ children }) => {
  const [nightMode, setNightMode] = useState(true);
  const data = { nightMode, setNightMode };
  return <NightMode.Provider value={data}>{children}</NightMode.Provider>;
};
export { NightModeProvider };
export default NightMode;
