"use client";

import { useState } from "react";
import Image from "next/image";
import { BarChart3, Table, Eye, ZoomIn, CheckCircle2, TrendingUp, ShieldCheck, FileSpreadsheet, X } from "lucide-react";

export default function BenchmarkResults() {
  const [activeTab, setActiveTab] = useState<"tables" | "plots" | "qualitative">("tables");
  const [activeTable, setActiveTable] = useState<"t1" | "t2" | "t3" | "ablation">("t1");
  const [selectedPlot, setSelectedPlot] = useState<string | null>(null);

  const tablesData = {
    t1: {
      title: "Table 1: Main Report Generation Performance on MIMIC-CXR & IU X-Ray",
      desc: "Comparison of QFed-AMRG against state-of-the-art centralized VLMs, federated VLMs, and privacy-preserving clinical report generators.",
      img: "/diagrams/table 1.png",
      mimicData: [
        { model: "R2Gen", type: "Centralized", bleu1: "0.353", bleu4: "0.103", meteor: "0.142", rouge: "0.277", cider: "0.385" },
        { model: "M2KT", type: "Centralized", bleu1: "0.378", bleu4: "0.118", meteor: "0.156", rouge: "0.290", cider: "0.421" },
        { model: "FedAvg + VLM", type: "Federated", bleu1: "0.341", bleu4: "0.095", meteor: "0.138", rouge: "0.264", cider: "0.362" },
        { model: "FedProx + VLM", type: "Federated", bleu1: "0.358", bleu4: "0.107", meteor: "0.145", rouge: "0.278", cider: "0.394" },
        { model: "QFed-AMRG (Ours)", type: "Quantum FL", bleu1: "0.412", bleu4: "0.148", meteor: "0.185", rouge: "0.324", cider: "0.512", isBest: true }
      ]
    },
    t2: {
      title: "Table 2: Medical Correctness & Clinical Efficacy Evaluation",
      desc: "Evaluation using RadGraph F1 score, BERTScore, and clinical precision across diverse disease categories.",
      img: "/diagrams/table 2.png"
    },
    t3: {
      title: "Table 3: Communication Overhead & Privacy Efficiency",
      desc: "Analysis of uploaded parameter payload per communication round and privacy leakage bounds.",
      img: "/diagrams/table 3.png"
    },
    ablation: {
      title: "Ablation Study: Impact of QREM, AMB, and Contrastive Alignment",
      desc: "Stepwise performance contribution of individual architectural components in QFed-AMRG.",
      img: "/diagrams/ablation table .png"
    }
  };

  const plots = [
    {
      id: "heterogeneity",
      title: "Client Heterogeneity & Scalability",
      desc: "Robustness under extreme non-IID data distributions across varying federated hospital client counts.",
      img: "/diagrams/combined_heterogeneity_scalability.png"
    },
    {
      id: "heatmap",
      title: "Federated Client Data Heatmap",
      desc: "Visualization of diagnostic disease distribution shift across participating clinical centers.",
      img: "/diagrams/heatmap of client.png"
    },
    {
      id: "hyperparameters",
      title: "Hyperparameter Sensitivity",
      desc: "Performance stability with respect to quantum rotation angles, qubit counts, and adapter rank.",
      img: "/diagrams/hyperparameter_sensitivity_filled.png"
    }
  ];

  return (
    <section id="results" className="py-20 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-teal-500/30 text-teal-300 text-xs font-mono mb-4">
            <BarChart3 className="w-3.5 h-3.5 text-teal-400" />
            <span>EXPERIMENTAL RESULTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Benchmark Evaluations & Paper Results
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Empirical validation on MIMIC-CXR and IU X-Ray datasets demonstrating superior clinical report quality, medical correctness, and communication efficiency.
          </p>
        </div>

        {/* View Selection Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setActiveTab("tables")}
              className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === "tables"
                  ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Table className="w-4 h-4" />
              <span>Benchmark Tables</span>
            </button>

            <button
              onClick={() => setActiveTab("plots")}
              className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === "plots"
                  ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Scalability & Analysis Plots</span>
            </button>

            <button
              onClick={() => setActiveTab("qualitative")}
              className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === "qualitative"
                  ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Qualitative Output Analysis</span>
            </button>
          </div>
        </div>

        {/* 1. Benchmark Tables Tab */}
        {activeTab === "tables" && (
          <div className="space-y-6">
            
            {/* Sub-tabs for Tables */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <button
                onClick={() => setActiveTable("t1")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeTable === "t1" ? "bg-teal-500/20 text-teal-300 border border-teal-500/40" : "bg-slate-900 text-slate-400 border border-slate-800"
                }`}
              >
                Table 1 (Overall Metrics)
              </button>
              <button
                onClick={() => setActiveTable("t2")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeTable === "t2" ? "bg-teal-500/20 text-teal-300 border border-teal-500/40" : "bg-slate-900 text-slate-400 border border-slate-800"
                }`}
              >
                Table 2 (Medical Correctness)
              </button>
              <button
                onClick={() => setActiveTable("t3")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeTable === "t3" ? "bg-teal-500/20 text-teal-300 border border-teal-500/40" : "bg-slate-900 text-slate-400 border border-slate-800"
                }`}
              >
                Table 3 (Comm. & Privacy)
              </button>
              <button
                onClick={() => setActiveTable("ablation")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeTable === "ablation" ? "bg-teal-500/20 text-teal-300 border border-teal-500/40" : "bg-slate-900 text-slate-400 border border-slate-800"
                }`}
              >
                Ablation Study
              </button>
            </div>

            {/* Table Display Card */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="font-bold text-white text-lg">{tablesData[activeTable].title}</h3>
                  <p className="text-xs text-slate-400">{tablesData[activeTable].desc}</p>
                </div>
                <button
                  onClick={() => setSelectedPlot(tablesData[activeTable].img)}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-300 hover:text-teal-300 hover:border-teal-500/40 font-mono transition-all flex items-center gap-1.5 self-start sm:self-auto"
                >
                  <ZoomIn className="w-3.5 h-3.5 text-teal-400" />
                  <span>View Original Image</span>
                </button>
              </div>

              {/* High Resolution Image Box */}
              <div
                onClick={() => setSelectedPlot(tablesData[activeTable].img)}
                className="relative w-full min-h-[250px] sm:min-h-[350px] bg-slate-900/90 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-800 cursor-pointer group"
              >
                <Image
                  src={tablesData[activeTable].img}
                  alt={tablesData[activeTable].title}
                  width={1000}
                  height={500}
                  className="object-contain max-h-[500px] w-auto transition-transform duration-300 group-hover:scale-[1.01]"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-xl bg-slate-900/90 border border-teal-500/50 text-teal-300 text-xs font-bold shadow-xl backdrop-blur-md">
                    Click to Enlarge Table Image
                  </span>
                </div>
              </div>

              {/* Formatted Interactive Table preview for Table 1 */}
              {activeTable === "t1" && (
                <div className="mt-6 pt-6 border-t border-slate-800 overflow-x-auto">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-3">
                    Interactive Table View (MIMIC-CXR Benchmark):
                  </span>
                  <table className="w-full text-left text-xs text-slate-300 border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800 bg-slate-900/60 font-mono text-[11px] text-slate-400">
                        <th className="p-3">Model Architecture</th>
                        <th className="p-3">Setting</th>
                        <th className="p-3">BLEU-1</th>
                        <th className="p-3">BLEU-4</th>
                        <th className="p-3">METEOR</th>
                        <th className="p-3">ROUGE-L</th>
                        <th className="p-3">CIDEr</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-mono">
                      {tablesData.t1.mimicData.map((row, idx) => (
                        <tr key={idx} className={row.isBest ? "bg-teal-500/10 font-bold text-white" : "hover:bg-slate-900/30"}>
                          <td className="p-3 flex items-center gap-2 font-sans">
                            {row.isBest && <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />}
                            <span>{row.model}</span>
                          </td>
                          <td className="p-3 text-slate-400">{row.type}</td>
                          <td className="p-3">{row.bleu1}</td>
                          <td className="p-3 text-teal-300">{row.bleu4}</td>
                          <td className="p-3">{row.meteor}</td>
                          <td className="p-3">{row.rouge}</td>
                          <td className="p-3 text-cyan-300">{row.cider}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

            </div>

          </div>
        )}

        {/* 2. Scalability & Plots Tab */}
        {activeTab === "plots" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plots.map((plot) => (
              <div
                key={plot.id}
                onClick={() => setSelectedPlot(plot.img)}
                className="glass-panel p-4 rounded-2xl border border-slate-800 hover:border-teal-500/40 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-48 bg-slate-900/90 rounded-xl overflow-hidden mb-3 border border-slate-800 flex items-center justify-center">
                    <Image
                      src={plot.img}
                      alt={plot.title}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1">{plot.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{plot.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-teal-400 font-mono">
                  <span>Enlarge Figure</span>
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. Qualitative Output Analysis Tab */}
        {activeTab === "qualitative" && (
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="font-bold text-white text-lg">Qualitative Report Generation Comparisons</h3>
                <p className="text-xs text-slate-400">Side-by-side comparison of generated clinical impressions vs. radiologist ground truth.</p>
              </div>
              <button
                onClick={() => setSelectedPlot("/diagrams/Response.png")}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-300 hover:text-teal-300 transition-all flex items-center gap-1.5"
              >
                <ZoomIn className="w-3.5 h-3.5 text-teal-400" />
                <span>Fullscreen View</span>
              </button>
            </div>

            <div
              onClick={() => setSelectedPlot("/diagrams/Response.png")}
              className="relative w-full min-h-[300px] sm:min-h-[450px] bg-slate-900/90 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-800 cursor-pointer group"
            >
              <Image
                src="/diagrams/Response.png"
                alt="Qualitative Reports Comparison"
                width={1100}
                height={600}
                className="object-contain max-h-[600px] w-auto transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>
          </div>
        )}

      </div>

      {/* Lightbox Modal for Selected Plot */}
      {selectedPlot && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8">
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex flex-col items-center justify-center">
            <button
              onClick={() => setSelectedPlot(null)}
              className="absolute top-2 right-2 p-2.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-teal-500/50 transition-all z-50"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full h-full relative flex items-center justify-center">
              <Image
                src={selectedPlot}
                alt="Enlarged Plot"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
