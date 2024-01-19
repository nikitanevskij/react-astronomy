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
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/choice-date" element={<ChoiceDate />} />
      </Routes>
    </>
  );
};
