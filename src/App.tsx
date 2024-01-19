import React from "react";
import { Header } from "./components/Header";
import "./style/app.scss";
import { Route, Routes } from "react-router-dom";
import { Home } from "./page/Home";
import { Calendar } from "./page/Calendar";
import { ChoiceDate } from "./page/ChoiceDate";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="react-astronomy/" element={<Home />} />
        <Route path="react-astronomy/calendar" element={<Calendar />} />
        <Route path="react-astronomy/choice-date" element={<ChoiceDate />} />
      </Routes>
    </>
  );
};
