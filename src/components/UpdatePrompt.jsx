import React, { useEffect, useState } from "react";

export default function UpdatePrompt() {
  const [waitingWorker, setWaitingWorker] = useState(null);
  const [showReload, setShowReload] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistration().then((reg) => {
        if (!reg) return;

        reg.addEventListener("updatefound", () => {
          const newWorker = reg.installing;
          newWorker.addEventListener("statechange", () => {
            if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
              setWaitingWorker(newWorker);
              setShowReload(true);
            }
          });
        });
      });
    }
  }, []);

  const reloadApp = () => {
    waitingWorker?.postMessage({ type: "SKIP_WAITING" });
    setShowReload(false);
    window.location.reload();
  };

  const hidePrompt = () => {
    setShowReload(false);
  };

  if (!showReload) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-gray-900/80 text-white px-5 py-3 rounded-2xl border border-white/20 backdrop-blur-md shadow-lg animate-slideUp">
      <span>✨ New version available!</span>
      <button
        onClick={reloadApp}
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-3 py-1 rounded-lg transition-all"
      >
        Update
      </button>
      <button
        onClick={hidePrompt}
        className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold px-3 py-1 rounded-lg transition-all"
      >
        Hide
      </button>

      <style>{`
        @keyframes slideUp {
          from { transform: translate(-50%, 150%); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
