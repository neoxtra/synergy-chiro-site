import Hero from "@/components/Hero";
import FloatingChatbot from "@/components/FloatingChatbot";
import CursorSpotlight from "@/components/CursorSpotlight";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-slate-100">
      {/* Background + glow */}
      <CursorSpotlight />

      {/* Foreground content */}
      <div className="relative z-10">
        <Hero />

        <FloatingChatbot
          botName="NeoTek Site Navigator"
          welcomeMessage="Hi! I’m the integrated AI assistant here to showcase the full capabilities of NeoTek Design Studios."
          accentColor="#197e04ff"
          position="bottom-right"
        />
      </div>
    </main>
  );
}
