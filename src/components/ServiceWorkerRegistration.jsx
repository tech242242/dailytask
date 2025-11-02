import { useEffect } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";

export default function ServiceWorkerRegistration() {
  const { needRefresh, updateServiceWorker } = useRegisterSW();

  useEffect(() => {
    console.log("✅ PWA Service Worker Registered");

    // Reload page when new service worker activates
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        window.location.reload();
      });
    }
  }, []);

  return (
    <>
      {needRefresh && (
        <div className="fixed bottom-4 right-4 bg-cyan-600 text-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
          <p>New version available!</p>
          <button
            onClick={() => updateServiceWorker(true)}
            className="ml-2 bg-white/20 px-2 py-1 rounded-md hover:bg-white/30"
          >
            Update
          </button>
        </div>
      )}
    </>
  );
}
