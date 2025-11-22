// app/page.tsx
import Hero from "@/components/Hero";
import FloatingChatbot from "@/components/FloatingChatbot";

export default function Home() {
  return (
    <div>
      {/* Your hero section */}
      <Hero />

      {/* Floating AI Assistant */}
      <FloatingChatbot
        botName="Synergy Assistant"
        welcomeMessage="Hi! I’m the Synergy front desk assistant. How can I help you today?"
        accentColor="#0D8642"
        position="bottom-right"
      />
    </div>
  );
}
