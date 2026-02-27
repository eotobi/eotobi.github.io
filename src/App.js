import React, { useState } from "react";
import "./App.css";
import Main from "./containers/Main.js";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme.js";
import { GlobalStyles } from "./global.js";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={themes[theme]} setTheme={setTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
