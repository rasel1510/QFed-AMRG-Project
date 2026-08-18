import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AbstractSection from "@/components/AbstractSection";
import ArchitectureViewer from "@/components/ArchitectureViewer";
import MethodModules from "@/components/MethodModules";
import InteractiveReportGenerator from "@/components/InteractiveReportGenerator";
import BenchmarkResults from "@/components/BenchmarkResults";
import DatasetSection from "@/components/DatasetSection";
import BibtexCitation from "@/components/BibtexCitation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-teal-500/30 selection:text-teal-200">
      <Navbar />
      <Hero />
      <AbstractSection />
      <ArchitectureViewer />
      <MethodModules />
      <InteractiveReportGenerator />
      <BenchmarkResults />
      <DatasetSection />
      <BibtexCitation />
      <Footer />
    </main>
  );
}
