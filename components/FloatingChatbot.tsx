"use client";

import { useState, useRef, useEffect, type KeyboardEvent } from "react";

type Message = {
  from: "user" | "bot";
  text: string;
};

type FloatingChatbotProps = {
  botName?: string;
  welcomeMessage?: string;
  accentColor?: string;
  position?: "bottom-right" | "bottom-left";
};

export default function FloatingChatbot({
  botName = "NeoTek Designs AI Navigator",
  welcomeMessage = "Hi! How can I help you today?",
  accentColor = "#145a33ff",
  position = "bottom-right",
}: FloatingChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: welcomeMessage },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const containerPositionStyle =
    position === "bottom-right"
      ? { right: "20px", bottom: "20px" }
      : { left: "20px", bottom: "20px" };

  // Scroll to bottom when messages change or when opened
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  async function sendMessageToApi(message: string) {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Error from /api/chat");
    }

    return data.reply as string;
  }

  async function handleSend() {
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setInput("");

    // Add user message
    setMessages((prev) => [...prev, { from: "user", text: userText }]);
    setLoading(true);

    try {
      const reply = await sendMessageToApi(userText);
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    } catch (err: any) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 9999,
        ...containerPositionStyle,
      }}
    >
      {/* Floating bubble button (only when closed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            width: 56,
            height: 56,
            borderRadius: "999px",
            border: "none",
            backgroundColor: accentColor,
            color: "white",
            cursor: "pointer",
            boxShadow:
              "0 10px 20px rgba(0,0,0,0.18), 0 6px 6px rgba(0,0,0,0.22)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
          }}
          aria-label="Open chat"
        >
          {/* Chat bubble icon */}
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M5 5.5C5 4.67157 5.67157 4 6.5 4H17.5C18.3284 4 19 4.67157 19 5.5V12.5C19 13.3284 18.3284 14 17.5 14H10L7 17V14H6.5C5.67157 14 5 13.3284 5 12.5V5.5Z"
              stroke="white"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="9" r="0.9" fill="white" />
            <circle cx="12" cy="9" r="0.9" fill="white" />
            <circle cx="15" cy="9" r="0.9" fill="white" />
          </svg>
        </button>
      )}

      {/* Chat window (only when open) */}
      {isOpen && (
        <div
          style={{
            width: 340,
            height: 420,
            backgroundColor: "white",
            borderRadius: 16,
            boxShadow:
              "0 10px 25px rgba(0,0,0,0.2), 0 8px 10px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            fontFamily:
              "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: accentColor,
              color: "white",
              padding: "10px 12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 14, fontWeight: 600 }}>{botName}</span>
              <span style={{ fontSize: 11, opacity: 0.9 }}>
                Online · Synergy Spine Chiropractic
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: 18,
                cursor: "pointer",
                lineHeight: 1,
              }}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: "10px 10px 6px 10px",
              overflowY: "auto",
              backgroundColor: "#f3f4f6",
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  justifyContent:
                    msg.from === "user" ? "flex-end" : "flex-start",
                  marginBottom: 6,
                }}
              >
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "8px 10px",
                    borderRadius: 12,
                    fontSize: 13,
                    lineHeight: 1.3,
                    whiteSpace: "pre-wrap",
                    backgroundColor:
                      msg.from === "user" ? accentColor : "white",
                    color: msg.from === "user" ? "white" : "#111827",
                    border:
                      msg.from === "bot"
                        ? "1px solid rgba(0,0,0,0.05)"
                        : "none",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginBottom: 6,
                }}
              >
                <div
                  style={{
                    padding: "8px 10px",
                    borderRadius: 12,
                    fontSize: 12,
                    backgroundColor: "white",
                    color: "#6b7280",
                    border: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  Typing…
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            style={{
              borderTop: "1px solid #e5e7eb",
              padding: 8,
              backgroundColor: "white",
              display: "flex",
              gap: 6,
              alignItems: "center",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask a question…"
              style={{
                flex: 1,
                fontSize: 13,
                padding: "8px 10px",
                borderRadius: 999,
                border: "1px solid #d1d5db",
                outline: "none",
              }}
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              style={{
                fontSize: 13,
                padding: "8px 12px",
                borderRadius: 999,
                border: "none",
                backgroundColor:
                  loading || !input.trim() ? "#9ca3af" : accentColor,
                color: "white",
                cursor:
                  loading || !input.trim() ? "not-allowed" : "pointer",
                fontWeight: 500,
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
