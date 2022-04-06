import React, { useState } from "react";

const AppContext = React.createContext();
const AppProvider = (props) => {
  const sliderDefaultValue = 16;
  const [passwordLength, setPasswordLength] = useState(sliderDefaultValue);
  return (
    <AppContext.Provider
      value={[passwordLength, setPasswordLength, sliderDefaultValue]}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };
