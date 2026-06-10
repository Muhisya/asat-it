import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <CustomCursor />
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}