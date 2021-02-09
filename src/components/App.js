import React from "react";
// import '.././App.css';
import Header from './Header';
import MonthHandler from "./MonthHandler";
import ScheduleHandler from './ScheduleHandler';

function App() {
  return (
    <>
      <Header />
      <ScheduleHandler />
      <MonthHandler />
    </>
  );
}

export default App;
