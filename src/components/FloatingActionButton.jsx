import React from "react";

export default function FloatingActionButton() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className="floating-action fixed bottom-6 right-6 bg-blue-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
      onClick={scrollTop}
    >
      <i data-lucide="chevron-up" className="w-6 h-6"></i>
    </div>
  );
}
