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
      color: "text-teal-700 border-teal-200 bg-teal-50",
    },
    {
      id: "amb",
      title: "2. Adaptive Mutual Boosting (AMB)",
      desc: "Dynamically coordinates global shared adapters and local personalized adapters to resolve cross-institution client data heterogeneity without over-fitting.",
      icon: Layers,
      color: "text-cyan-700 border-cyan-200 bg-cyan-50",
    },
    {
      id: "vlm",
      title: "3. Frozen Clinical LVLM Adaptation",
      desc: "Keeps the heavy vision-language model parameters frozen, updating only lightweight adapters to save communication bandwidth during federated synchronization.",
      icon: Sparkles,
      color: "text-indigo-700 border-indigo-200 bg-indigo-50",
    },
    {
      id: "fl",
      title: "4. Differential Privacy Federated Sync",
      desc: "Only lightweight adapter gradients are aggregated across hospital clients, eliminating any exposure of raw medical images or private health information (PHI).",
      icon: ShieldCheck,
      color: "text-emerald-700 border-emerald-200 bg-emerald-50",
    },
  ];

  return (
    <section id="architecture" className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-50 border border-teal-200 text-teal-700 text-xs font-mono mb-4">
            <Layers className="w-3.5 h-3.5 text-teal-600" />
            <span>SYSTEM ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            QFed-AMRG Technical Architecture
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            End-to-end overview of quantum-enhanced representation, dual-adapter mutual boosting, and federated vision-language orchestration.
          </p>
        </div>

        {/* Diagram Selection Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => setActiveTab("pipeline")}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === "pipeline"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Cpu className="w-4 h-4 text-teal-600" />
              <span>Main Architecture Diagram</span>
            </button>
            <button
              onClick={() => setActiveTab("amb")}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === "amb"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Layers className="w-4 h-4 text-indigo-600" />
              <span>Adaptive Mutual Boosting (AMB) Diagram</span>
            </button>
          </div>
        </div>

        {/* Interactive Diagram Card */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm relative group mb-10 max-w-5xl mx-auto">
          
          <div className="relative w-full min-h-[200px] sm:min-h-[300px] bg-slate-50/80 rounded-xl overflow-hidden flex items-center justify-center border border-slate-200/80 py-4">
            <Image
              src={activeTab === "pipeline" ? "/diagrams/main diagram.png" : "/diagrams/AMB Diagram.png"}
              alt={activeTab === "pipeline" ? "QFed-AMRG Main Architecture" : "AMB Module Architecture"}
              width={1000}
              height={550}
              className="object-contain max-h-[340px] sm:max-h-[380px] w-auto transition-transform duration-300 group-hover:scale-[1.01]"
              priority
            />

            {/* Click to Enlarge Overlay Badge */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="absolute top-4 right-4 px-3.5 py-2 rounded-lg bg-white/90 border border-slate-200 text-slate-700 hover:text-teal-700 hover:border-teal-300 text-xs font-semibold backdrop-blur-md transition-all flex items-center gap-2 shadow-md"
            >
              <ZoomIn className="w-4 h-4 text-teal-600" />
              <span>Enlarge Full Resolution</span>
            </button>
          </div>

          {/* Caption Container */}
          {activeTab === "pipeline" ? (
            <div className="mt-5 p-4 sm:p-5 bg-slate-50/80 rounded-xl border border-slate-200 text-left text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p className="font-bold text-slate-900 mb-2 font-mono text-xs uppercase tracking-wide">
                Figure 1: Main QFed-AMRG System Architecture
              </p>
              <p className="text-slate-600 mb-2.5">
                The architecture of QFed-AMRG contains key stages following model initialization:
              </p>
              <ul className="space-y-2 list-none pl-0 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-700 font-mono shrink-0">(1)</span>
                  <span>
                    <strong className="text-slate-900">Allocation:</strong> The central server allocates primary method environments to participating clients.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-700 font-mono shrink-0">(2)</span>
                  <span>
                    <strong className="text-slate-900">Local Client Learning:</strong> Individual clients train their methods employing two prime modules: 
                    <em className="text-slate-800 not-italic font-semibold"> Hierarchical Contrastive Learning and Prompting (HCL)</em> resolves heterogeneity utilizing client-conscious feature contrasting, ensuring cross-center information imparting with clinical prompting; 
                    <em className="text-slate-800 not-italic font-semibold"> Adaptive Mutual Boosting (AMB)</em> controls text heterogeneity via a dual dynamic pattern—the regular adapter (<code className="bg-slate-200 px-1 py-0.5 rounded text-xs font-bold text-indigo-700">∀i</code>) collects universally shared reporting designs, while the specialized adapter (<code className="bg-slate-200 px-1 py-0.5 rounded text-xs font-bold text-indigo-700">∃*p</code>) captures client-specific nuances.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-700 font-mono shrink-0">(3)</span>
                  <span>
                    <strong className="text-slate-900">Accumulation:</strong> Only encoder parameters and generic adjusters are uploaded and the server accumulates the refined updates, jointly resolving communication effectiveness.
                  </span>
                </li>
              </ul>
            </div>
          ) : (
            <div className="mt-5 p-4 sm:p-5 bg-slate-50/80 rounded-xl border border-slate-200 text-left text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p className="font-bold text-slate-900 mb-1.5 font-mono text-xs uppercase tracking-wide">
                Figure 2: Adaptive Mutual Boosting (AMB) Architecture
              </p>
              <p className="text-slate-700 leading-relaxed">
                Adaptive Mutual Boosting (AMB) incorporates regular configuration and specialized configuration dynamically employing a dynamic routing path (<code className="bg-slate-200/80 px-1.5 py-0.5 rounded text-xs font-serif font-bold text-indigo-800">ω<sub>c,τ</sub><sup>ϰ</sup></code>).
              </p>
            </div>
          )}
        </div>

        {/* Pipeline Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pipelineSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className={`p-3 rounded-xl border ${step.color} shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">{step.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex flex-col items-center justify-center">
            
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-2 right-2 p-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-900 transition-all z-50 shadow-md"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-full h-full relative flex items-center justify-center bg-white p-4 rounded-2xl">
              <Image
                src={activeTab === "pipeline" ? "/diagrams/main diagram.png" : "/diagrams/AMB Diagram.png"}
                alt="Architecture Diagram Fullscreen"
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-4 px-6 py-2 rounded-full bg-white border border-slate-200 text-xs text-slate-700 font-mono shadow-md">
              Press ESC or click close button to return
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
