"use client";

import { useState } from "react";
import { Cpu, Layers, Sparkles, RefreshCw, Zap, Sliders, CheckCircle2, ShieldAlert, ArrowRight } from "lucide-react";

export default function MethodModules() {
  const [activeTab, setActiveTab] = useState<"qrem" | "amb">("qrem");

  // QREM Interactive Simulation State
  const [qubits, setQubits] = useState(4);
  const [entangled, setEntangled] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(45);

  // AMB Interactive Simulation State
  const [alpha, setAlpha] = useState(0.65); // Global vs Personalized adapter ratio
  const [clientHeterogeneity, setClientHeterogeneity] = useState(0.8);

  return (
    <section id="method" className="py-20 bg-slate-900/40 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>CORE INNOVATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Methodology & Key Innovations
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Exploring the Quantum Representation Enhancement Module (QREM) and Adaptive Mutual Boosting (AMB) framework.
          </p>
        </div>

        {/* Core Method Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
          {/* Tab 1: QREM Card Header */}
          <button
            onClick={() => setActiveTab("qrem")}
            className={`p-6 rounded-2xl text-left transition-all border ${
              activeTab === "qrem"
                ? "bg-slate-900 border-teal-500 shadow-xl shadow-teal-500/10 ring-1 ring-teal-500/30"
                : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-teal-950/60 text-teal-300 border border-teal-500/20">
                MODULE 01
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Quantum Representation Enhancement (QREM)</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Enhances cross-center chest X-ray feature representation via quantum improved expression design, contrastive learning, and prompt tuning.
            </p>
          </button>

          {/* Tab 2: AMB Card Header */}
          <button
            onClick={() => setActiveTab("amb")}
            className={`p-6 rounded-2xl text-left transition-all border ${
              activeTab === "amb"
                ? "bg-slate-900 border-indigo-500 shadow-xl shadow-indigo-500/10 ring-1 ring-indigo-500/30"
                : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-indigo-950/60 text-indigo-300 border border-indigo-500/20">
                MODULE 02
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Adaptive Mutual Boosting (AMB)</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Dynamically coordinates shared and personalized adapters for effective adaptation of frozen LVLMs over heterogeneous FL clinical settings.
            </p>
          </button>

        </div>

        {/* Tab 1 Content: QREM Deep Dive */}
        {activeTab === "qrem" && (
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-teal-500/30 space-y-8 animate-fadeIn">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Cpu className="w-6 h-6 text-teal-400" />
                  <span>Quantum Improved Visual Feature Enhancement</span>
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  Traditional visual backbones struggle with cross-center domain shifts caused by varied X-ray machines and exposure settings. QREM maps extracted visual feature vectors into a high-dimensional quantum Hilbert space using parameterized quantum circuits (PQCs).
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong>Quantum Hilbert Space Mapping:</strong> Exponential representation capacity without memory explosion.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong>Contrastive Image-Text Alignment:</strong> Aligns quantum visual embeddings directly with radiology report text prompts.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong>Zero-Noise Gradient Encoding:</strong> Maintains privacy guarantees while sharpening lesion boundary features.</span>
                  </div>
                </div>

                {/* Mathematical Formula Display */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-teal-300 space-y-1">
                  <p className="text-slate-400 font-sans text-[11px] mb-1 font-semibold">QREM Feature Formulation:</p>
                  <p>|Ψ(x)⟩ = U(x, θ_q) |0⟩^⊗n</p>
                  <p>L_align = -log [ exp(sim(|Ψ(x)⟩, t_pos) / τ) / Σ exp(sim(|Ψ(x)⟩, t_k) / τ) ]</p>
                </div>

              </div>

              {/* Interactive QREM Quantum Circuit Simulator Box */}
              <div className="lg:col-span-5 glass-panel p-5 rounded-2xl border border-teal-500/20 bg-slate-950/80">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono font-bold text-teal-400 flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5" /> Interactive Quantum Circuit Simulator
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">PQC Parameters</span>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Qubit Count (n):</span>
                      <span className="font-mono text-teal-400 font-bold">{qubits} Qubits</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="8"
                      value={qubits}
                      onChange={(e) => setQubits(parseInt(e.target.value))}
                      className="w-full accent-teal-400 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Rotation Gate Angle (θ_q):</span>
                      <span className="font-mono text-teal-400 font-bold">{rotationAngle}°</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="360"
                      value={rotationAngle}
                      onChange={(e) => setRotationAngle(parseInt(e.target.value))}
                      className="w-full accent-teal-400 cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-slate-300">CNOT Entanglement:</span>
                    <button
                      onClick={() => setEntangled(!entangled)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        entangled ? "bg-teal-500 text-slate-950" : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {entangled ? "ENTANGLED" : "INDEPENDENT"}
                    </button>
                  </div>

                  {/* Visual State Representation */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
                    <p className="text-[11px] text-slate-400 font-mono">Quantum Feature Enhancement Gain:</p>
                    <div className="flex items-center justify-center gap-2">
                      <div className="text-2xl font-black text-teal-300 font-mono">
                        +{((qubits * 4.2) + (rotationAngle * 0.05) + (entangled ? 12.5 : 0)).toFixed(1)}%
                      </div>
                      <span className="text-xs text-slate-400">Cross-center alignment boost</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        )}

        {/* Tab 2 Content: AMB Deep Dive */}
        {activeTab === "amb" && (
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-indigo-500/30 space-y-8 animate-fadeIn">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Layers className="w-6 h-6 text-indigo-400" />
                  <span>Adaptive Mutual Boosting (AMB) Dual Adapter System</span>
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  Clinical institutions possess non-IID patient populations and localized writing styles in radiology reports. Standard FedAvg creates a global model that underperforms on specialized local hospital distributions. AMB introduces a dual-boosted routing mechanism.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span><strong>Global Shared Adapter (A_shared):</strong> Captures general medical knowledge & universal diagnostic concepts across all FL centers.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span><strong>Client Personalized Adapter (A_local):</strong> Preserves client-specific radiology terminologies and institution-level nuances.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span><strong>Mutual Information Regularization:</strong> Prevents adapter drift while fine-tuning frozen backbone prompts.</span>
                  </div>
                </div>

                {/* Mathematical Formula Display */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-indigo-300 space-y-1">
                  <p className="text-slate-400 font-sans text-[11px] mb-1 font-semibold">AMB Adapter Routing Equation:</p>
                  <p>H_i(x) = α_i · A_shared(x) + (1 - α_i) · A_local^(i)(x)</p>
                  <p>min L_AMB = L_report + λ_mutual · I(A_shared; A_local^(i))</p>
                </div>

              </div>

              {/* Interactive AMB Heterogeneity Balancing Simulator Box */}
              <div className="lg:col-span-5 glass-panel p-5 rounded-2xl border border-indigo-500/20 bg-slate-950/80">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono font-bold text-indigo-400 flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5" /> AMB Adapter Weight Adjuster
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Dynamic FL Weighting</span>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Global Shared Weight (α_i):</span>
                      <span className="font-mono text-indigo-400 font-bold">{(alpha * 100).toFixed(0)}% Shared</span>
                    </div>
                    <input
                      type="range"
                      min="0.1"
                      max="0.9"
                      step="0.05"
                      value={alpha}
                      onChange={(e) => setAlpha(parseFloat(e.target.value))}
                      className="w-full accent-indigo-400 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Client Data Heterogeneity Level:</span>
                      <span className="font-mono text-cyan-400 font-bold font-mono">{(clientHeterogeneity * 100).toFixed(0)}% Non-IID</span>
                    </div>
                    <input
                      type="range"
                      min="0.2"
                      max="1.0"
                      step="0.05"
                      value={clientHeterogeneity}
                      onChange={(e) => setClientHeterogeneity(parseFloat(e.target.value))}
                      className="w-full accent-cyan-400 cursor-pointer"
                    />
                  </div>

                  {/* Calculated Metric */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Adaptive Boosting Synergy:</span>
                      <span className="font-bold text-emerald-400 font-mono">
                        {((1 - Math.abs(alpha - (1 - clientHeterogeneity * 0.5))) * 98.4).toFixed(1)}% Optimal
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-teal-400 transition-all duration-300"
                        style={{ width: `${((1 - Math.abs(alpha - (1 - clientHeterogeneity * 0.5))) * 98.4).toFixed(1)}%` }}
                      />
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
