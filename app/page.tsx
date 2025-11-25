import Hero from "@/components/Hero";
import FloatingChatbot from "@/components/FloatingChatbot";
import CursorSpotlight from "@/components/CursorSpotlight";
import Summary1 from "@/components/Summary1";
import Summary2 from "@/components/Summary2";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-slate-100 overflow-hidden">
      {/* Global cursor glow (optional – you can comment this out if you only want the glow in Hero) */}
      {/* <CursorSpotlight /> */}

      {/* Foreground content */}
      <div className="relative z-10">
        {/* HERO with blue background + triangle */}
        <Hero />

        {/* SUMMARY SECTION (white background, two columns) */}
        <Summary1 />

        <Summary2 />

        {/* FLOATING CHATBOT */}
        <FloatingChatbot
          botName="NeoTek Site Navigator"
          welcomeMessage="Hi! I’m the integrated AI assistant to showcase the full capabilities of NeoTek Design Studios."
          accentColor="#197e04ff"
          position="bottom-right"
        />
      </div>
    </main>
  );
}
