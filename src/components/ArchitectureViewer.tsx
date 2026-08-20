"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, X, ZoomIn, Cpu, Layers, ShieldCheck, Sparkles, Check, ChevronRight } from "lucide-react";



const highlights = [
  {
    number: "01",
    tag: "FEDERATED VLM FRAMEWORK",
    title: "Quantum-Enhanced Federated VLM Architecture",
    description:
      "We propose quantum enhanced federated large vision languages models learning architecture for privacy preserving multi institution clinical report generation, which combines quantum expression learning and VLMs within a unified communication efficient framework.",
    icon: Sparkles,
    topBar: "bg-indigo-500",
    iconBox: "bg-indigo-50 border border-indigo-100 text-indigo-600",
    pillTag: "bg-indigo-50 text-indigo-700 border border-indigo-100",
    cardBorder: "border-slate-200/80 hover:border-indigo-300 hover:shadow-indigo-500/10",
  },
  {
    number: "02",
    tag: "QUANTUM FEATURE PURIFICATION",
    title: "Quantum Representation Enhancement (QREM)",
    description:
      "We introduce QREM that exploits parameterized quantum circuits to purify visual expressions, enhancing feature discriminability and extensiveness over cross client data heterogeneity while storing clinically connected semantic information.",
    icon: Cpu,
    topBar: "bg-sky-500",
    iconBox: "bg-sky-50 border border-sky-100 text-sky-600",
    pillTag: "bg-sky-50 text-sky-700 border border-sky-100",
    cardBorder: "border-slate-200/80 hover:border-sky-300 hover:shadow-sky-500/10",
  },
  {
    number: "03",
    tag: "PARAMETER-EFFICIENT ADAPTATION",
    title: "Adaptive Mutual Boosting (AMB)",
    description:
      "We employed AMB an adaptive parameter efficient adaptation method that jointly performs adaptive adapter routing, mutual information boosting, and personalized federated enhancement to efficiently balance universally shared clinical data in heterogeneous healthcare environments.",
    icon: Layers,
    topBar: "bg-emerald-500",
    iconBox: "bg-emerald-50 border border-emerald-100 text-emerald-600",
    pillTag: "bg-emerald-50 text-emerald-700 border border-emerald-100",
    cardBorder: "border-slate-200/80 hover:border-emerald-300 hover:shadow-emerald-500/10",
  },
];

export default function ArchitectureViewer() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"pipeline" | "amb">("pipeline");

  return (
    <section id="architecture" className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-50 border border-teal-200 text-teal-700 text-xs font-mono mb-4">
            <Layers className="w-3.5 h-3.5 text-teal-600" />
            <span>SYSTEM ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            QFed-AMRG Technical Architecture
          </h2>
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
              <ul className="space-y-2.5 list-none pl-0 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-700 font-mono shrink-0">(1)</span>
                  <span>
                    <strong className="text-slate-900 font-semibold">Allocation:</strong> The central server allocates primary method environments to participating clients.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-700 font-mono shrink-0">(2)</span>
                  <span>
                    <strong className="text-slate-900 font-semibold">Local Client Learning:</strong> Individual clients train their methods employing two prime modules: 
                    <em className="text-slate-800 not-italic font-medium"> Hierarchical Contrastive Learning and Prompting (HCL)</em> resolves heterogeneity utilizing client-conscious feature contrasting, ensuring cross-center information imparting with clinical prompting; 
                    <em className="text-slate-800 not-italic font-medium"> Adaptive Mutual Boosting (AMB)</em> controls text heterogeneity via a dual dynamic pattern—the regular adapter (<code className="bg-slate-200/80 px-1 py-0.5 rounded text-xs font-bold text-indigo-700 font-mono">∀i</code>) collects universally shared reporting designs, while the specialized adapter (<code className="bg-slate-200/80 px-1 py-0.5 rounded text-xs font-bold text-indigo-700 font-mono">∃*p</code>) captures client-specific nuances.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-700 font-mono shrink-0">(3)</span>
                  <span>
                    <strong className="text-slate-900 font-semibold">Accumulation:</strong> Only encoder parameters and generic adjusters are uploaded and the server accumulates the refined updates, jointly resolving communication effectiveness.
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



        {/* Key Highlights Section (Placed After Architecture & Stages Description) */}
        <div className="mt-16 mb-10 max-w-6xl mx-auto text-center border-t border-slate-200/80 pt-16">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            CORE CONTRIBUTIONS
          </div>

          {/* Title */}
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Key Highlights
          </h3>

          {/* Subtitle */}
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed mb-10">
            QFed-AMRG is a privacy-preserving quantum-enhanced federated vision-language framework for multi-institution clinical report generation.
          </p>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch text-left">
            {highlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-6 sm:p-7 border ${item.cardBorder} shadow-xs hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden group`}
                >
                  {/* Top Colored Accent Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 ${item.topBar}`} />

                  <div className="flex flex-col h-full justify-between">
                    <div>
                      {/* Card Header: Icon & Big Faded Number */}
                      <div className="flex items-center justify-between gap-2 mb-5">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.iconBox}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-3xl font-extrabold font-mono text-slate-200 group-hover:text-slate-300 transition-colors select-none">
                          {item.number}
                        </span>
                      </div>

                      {/* Tag Pill */}
                      <span className={`inline-block text-[11px] font-bold font-mono tracking-wider uppercase px-3 py-1 rounded-full ${item.pillTag} mb-3.5`}>
                        {item.tag}
                      </span>

                      {/* Card Title */}
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-slate-800 transition-colors">
                        {item.title}
                      </h4>

                      {/* Card Body */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
