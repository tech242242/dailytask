import React from "react";
import Header from "./components/Header";
import DashboardOverview from "./components/DashboardOverview";
import UpdatePrompt from "./components/UpdatePrompt";
import InstallAppButton from "./components/InstallAppButton";
import ServiceWorkerRegistration from "./components/ServiceWorkerRegistration";
import CurrentReminder from "./components/CurrentReminder";
import SyllabusProgress from "./components/SyllabusProgress";
import ScheduleList from "./components/ScheduleList";
import SubjectProgress from "./components/SubjectProgress";
import PerformanceSummary from "./components/PerformanceSummary";
import FloatingActionButton from "./components/FloatingActionButton";
import DailyGoalTracker from "./components/DailyGoalTracker";
import StudyNotifier from "./components/StudyNotifier";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--ios-bg)] text-gray-900 dark:text-white font-inter transition-all duration-300">
      <div className="container mx-auto max-w-2xl px-5 py-8">
        <Header />

        <div className="space-y-8">
          <CurrentReminder />
          <DashboardOverview />

          {/* --- Daily Tracker + Notifier side by side on large screens --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <DailyGoalTracker />
            <StudyNotifier />
          </div>

          <SyllabusProgress />
          <ScheduleList />
          <SubjectProgress />
          <PerformanceSummary />
        </div>
      </div>

      <FloatingActionButton />
      <InstallAppButton />
      <UpdatePrompt />
      {/* Smooth theme transition */}
      <style>{`
        :root {
          --ios-bg: linear-gradient(to bottom right, #f0faff, #dfe9ff);
        }
        [data-theme='dark'] {
          --ios-bg: linear-gradient(to bottom right, #0b0f19, #1a1f2c);
        }
      `}</style>
    </div>
  );
}
