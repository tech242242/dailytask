import React from "react";
import Header from "./components/Header";
import CurrentReminder from "./components/CurrentReminder";
import SyllabusProgress from "./components/SyllabusProgress";
import ScheduleList from "./components/ScheduleList";
import SubjectProgress from "./components/SubjectProgress";
import PerformanceSummary from "./components/PerformanceSummary";
import FloatingActionButton from "./components/FloatingActionButton";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--ios-bg)] text-gray-900 font-inter">
      <div className="container mx-auto max-w-2xl px-5 py-8">
        <Header />
        <CurrentReminder />
        <SyllabusProgress />
        <ScheduleList />
        <SubjectProgress />
        <PerformanceSummary />
      </div>
      <FloatingActionButton />
    </div>
  );
}
