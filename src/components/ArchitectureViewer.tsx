"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, X, ZoomIn, Cpu, Layers, ShieldCheck, Sparkles, Check, ChevronRight } from "lucide-react";

export default function ArchitectureViewer() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"pipeline" | "amb">("pipeline");

  const pipelineSteps = [
    {
      id: "qrem",
      title: "1. Quantum Representation Enhancement (QREM)",
      desc: "Transforms raw chest X-ray features using parameterized quantum circuits (PQCs) to generate rich quantum-enhanced embeddings, boosting contrastive cross-modal alignment.",
      icon: Cpu,
      color: "text-teal-400 border-teal-500/40 bg-teal-500/10",
    },
    {
      id: "amb",
      title: "2. Adaptive Mutual Boosting (AMB)",
      desc: "Dynamically coordinates global shared adapters and local personalized adapters to resolve cross-institution client data heterogeneity without over-fitting.",
      icon: Layers,
      color: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10",
    },
    {
      id: "vlm",
      title: "3. Frozen Clinical LVLM Adaptation",
      desc: "Keeps the heavy vision-language model parameters frozen, updating only lightweight adapters to save communication bandwidth during federated synchronization.",
      icon: Sparkles,
      color: "text-indigo-400 border-indigo-500/40 bg-indigo-500/10",
    },
    {
      id: "fl",
      title: "4. Differential Privacy Federated Sync",
      desc: "Only lightweight adapter gradients are aggregated across hospital clients, eliminating any exposure of raw medical images or private health information (PHI).",
      icon: ShieldCheck,
      color: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
    },
  ];

  return (
    <section id="architecture" className="py-20 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-teal-500/30 text-teal-300 text-xs font-mono mb-4">
            <Layers className="w-3.5 h-3.5 text-teal-400" />
            <span>SYSTEM ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            QFed-AMRG Technical Architecture
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            End-to-end overview of quantum-enhanced representation, dual-adapter mutual boosting, and federated vision-language orchestration.
          </p>
        </div>

        {/* Diagram Selection Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setActiveTab("pipeline")}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === "pipeline"
                  ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Main Architecture Diagram</span>
            </button>
            <button
              onClick={() => setActiveTab("amb")}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === "amb"
                  ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Adaptive Mutual Boosting (AMB) Diagram</span>
            </button>
          </div>
        </div>

        {/* Interactive Diagram Card */}
        <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-slate-800 relative group mb-12">
          
          <div className="relative w-full min-h-[300px] sm:min-h-[450px] bg-slate-900/90 rounded-xl overflow-hidden flex items-center justify-center border border-slate-800/80">
            <Image
              src={activeTab === "pipeline" ? "/diagrams/main diagram.png" : "/diagrams/AMB Diagram.png"}
              alt={activeTab === "pipeline" ? "QFed-AMRG Main Architecture" : "AMB Module Architecture"}
              width={1200}
              height={700}
              className="object-contain max-h-[600px] w-auto transition-transform duration-300 group-hover:scale-[1.01]"
              priority
            />

            {/* Click to Enlarge Overlay Badge */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="absolute top-4 right-4 px-3.5 py-2 rounded-lg bg-slate-950/80 border border-slate-700 text-slate-200 hover:text-teal-300 hover:border-teal-500/50 text-xs font-semibold backdrop-blur-md transition-all flex items-center gap-2 shadow-lg"
            >
              <ZoomIn className="w-4 h-4 text-teal-400" />
              <span>Enlarge Full Resolution</span>
            </button>
          </div>

          <p className="text-center text-xs text-slate-400 mt-4 font-mono">
            Figure: {activeTab === "pipeline" ? "QFed-AMRG System Overview (QREM, AMB, Contrastive Visual Alignment, and Federated Node Aggregation)" : "Adaptive Mutual Boosting (AMB) Dual Adapter Routing Architecture"}
          </p>
        </div>

        {/* Pipeline Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pipelineSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="glass-panel p-5 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-all flex items-start gap-4"
              >
                <div className={`p-3 rounded-xl border ${step.color} shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1">{step.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8">
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex flex-col items-center justify-center">
            
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-2 right-2 p-2.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-teal-500/50 transition-all z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-full h-full relative flex items-center justify-center">
              <Image
                src={activeTab === "pipeline" ? "/diagrams/main diagram.png" : "/diagrams/AMB Diagram.png"}
                alt="Architecture Diagram Fullscreen"
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-4 px-6 py-2 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-mono">
              Press ESC or click close button to return
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
