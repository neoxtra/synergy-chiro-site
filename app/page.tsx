import Hero from "@/components/Hero";
import FloatingChatbot from "@/components/FloatingChatbot";

export default function Home() {
  return (
    <div>
      {/* Your hero section */}
      <Hero />

      {/* Floating AI Assistant */}
      
      <FloatingChatbot
        botName="NeoTek Site Navigator"
        welcomeMessage="Hi! I’m the integrated AI assistant here to showcase the full capabilities of NeoTek Design Studios."
        accentColor="#197e04ff"
        position="bottom-right"
      />
      
    </div>
  );
}
