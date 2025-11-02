import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddTask from "./pages/AddTask";
import Reports from "./pages/Reports";
import ScheduleTracker from "./pages/ScheduleTracker";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-ios-bg">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/schedule" element={<ScheduleTracker />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
