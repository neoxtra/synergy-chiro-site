"use client";

import { useState } from "react";

export default function ChatWidget() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  // ⬇️ Your sendMessage() function goes RIGHT HERE
  async function sendMessage(message: string) {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Error from /api/chat");
    }

    return data.reply;
  }

  // ⬇️ Example: call sendMessage() when user presses "Send"
  async function handleSend() {
    if (!input.trim()) return;

    const userText = input;
    setInput("");

    // show user message
    setMessages((prev) => [...prev, "You: " + userText]);

    // call API route
    const reply = await sendMessage(userText);

    // show AI reply
    setMessages((prev) => [...prev, "AI: " + reply]);
  }

  return (
    <div>
      <h3>Chat Widget</h3>

      {/* messages */}
      <div>
        {messages.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>

      {/* input */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
