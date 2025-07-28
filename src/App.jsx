import React from "react";
import AppRoutes from "./routes/AppRoutes";


const App = () => {
  return (
    <>
      {/* Global providers or components can go here */}
      <ToastContainer />
      <AppRoutes /> {/* Handles all routing */}
    </>
  );
};

export default App;
