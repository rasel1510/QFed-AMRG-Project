import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AbstractSection from "@/components/AbstractSection";
import ArchitectureViewer from "@/components/ArchitectureViewer";
import BenchmarkResults from "@/components/BenchmarkResults";
import DatasetSection from "@/components/DatasetSection";
import BibtexCitation from "@/components/BibtexCitation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <Hero />
      <AbstractSection />
      <ArchitectureViewer />
      <BenchmarkResults />
      <DatasetSection />
      <BibtexCitation />
      <Footer />
    </main>
  );
}
