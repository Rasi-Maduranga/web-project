import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#f0f0f0]">
      {/* Fixed navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Home />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
