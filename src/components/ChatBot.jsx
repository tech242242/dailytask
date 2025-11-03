import React, { useState } from "react";

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const response = await fetch(
      `https://www.dark-yasiya-api.site/ai/letmegpt?q=${encodeURIComponent(input)}`
    );
    const data = await response.text();

    const botMessage = { sender: "bot", text: data };
    setMessages((prev) => [...prev, botMessage]);

    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white/70 backdrop-blur-xl shadow-lg p-4 rounded-2xl border border-gray-300 w-80">
      <h3 className="font-bold text-gray-800 mb-2">💬 AI Chat Assistant</h3>

      <div className="h-48 overflow-y-auto px-2 mb-3 bg-white rounded-lg p-2 shadow-inner">
        {messages.map((msg, index) => (
          <p
            key={index}
            className={`text-sm my-1 ${
              msg.sender === "user"
                ? "text-blue-600 text-right"
                : "text-green-600 text-left"
            }`}
          >
            {msg.text}
          </p>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          className="flex-1 border px-2 py-1 rounded-lg outline-none bg-white/80"
        />
        <button
          onClick={sendMessage}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
}
