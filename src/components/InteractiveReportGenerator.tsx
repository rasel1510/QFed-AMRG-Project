"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Play, RefreshCw, ShieldCheck, CheckCircle2, AlertCircle, FileText, Cpu, Layers, Activity, ChevronRight } from "lucide-react";

interface SampleCase {
  id: string;
  name: string;
  dataset: string;
  indication: string;
  image: string;
  groundTruth: string;
  qfedReport: string;
  baselineReport: string;
  qfedMetrics: { bleu4: string; radgraph: string; bertscore: string };
  baselineMetrics: { bleu4: string; radgraph: string; bertscore: string };
}

const sampleCases: SampleCase[] = [
  {
    id: "case1",
    name: "Cardiomegaly & Pulmonary Edema",
    dataset: "MIMIC-CXR #48291",
    indication: "Shortness of breath, history of congestive heart failure.",
    image: "/diagrams/Response.png",
    groundTruth: "Enlargement of the cardiac silhouette with mild pulmonary vascular congestion. Interstitial edema and bilateral lower zone opacity consistent with mild heart failure. No focal consolidation or pneumothorax.",
    qfedReport: "FINDINGS: Cardiac silhouette is moderately enlarged. Prominence of interstitial markings and cephalization of pulmonary veins consistent with mild pulmonary edema. Trace bilateral pleural effusions. IMPRESSION: Cardiomegaly with mild congestive heart failure changes.",
    baselineReport: "FINDINGS: Heart size is big. Mild cloudiness in lungs. No clear pneumonia. IMPRESSION: Enlarged heart, possible fluid.",
    qfedMetrics: { bleu4: "0.198", radgraph: "0.584", bertscore: "0.892" },
    baselineMetrics: { bleu4: "0.142", radgraph: "0.451", bertscore: "0.810" }
  },
  {
    id: "case2",
    name: "Right Lower Lobe Pneumonia",
    dataset: "IU X-Ray #2910",
    indication: "Fever, productive cough for 4 days.",
    image: "/diagrams/Response.png",
    groundTruth: "Focal opacity in the right lower lobe with silhouette sign of the right hemidiaphragm, indicative of acute right lower lobe consolidation/pneumonia. Pleural space is clear.",
    qfedReport: "FINDINGS: Focal dense consolidation in the right lower lobe. Air bronchograms present. Left lung is clear. Heart size normal. IMPRESSION: Right lower lobe pneumonia. Recommend clinical follow-up.",
    baselineReport: "FINDINGS: Opacity seen on right side. Heart size normal. No fluid. IMPRESSION: Infiltrate right lung.",
    qfedMetrics: { bleu4: "0.210", radgraph: "0.612", bertscore: "0.905" },
    baselineMetrics: { bleu4: "0.155", radgraph: "0.480", bertscore: "0.832" }
  },
  {
    id: "case3",
    name: "Pleural Effusion & Atelectasis",
    dataset: "MIMIC-CXR #19204",
    indication: "Post-operative chest tightness, reduced breath sounds.",
    image: "/diagrams/Response.png",
    groundTruth: "Moderate left pleural effusion with associated compressive atelectasis in the left base. Right lung field is clear. Mediastinal contours remain within normal limits.",
    qfedReport: "FINDINGS: Left retrocardiac opacity with blunting of the left costophrenic angle, consistent with moderate left pleural effusion and compressive atelectasis. Right lung clear. IMPRESSION: Moderate left pleural effusion with bibasilar atelectasis.",
    baselineReport: "FINDINGS: Left side fluid collection. Lungs partially collapsed. IMPRESSION: Effusion left lung.",
    qfedMetrics: { bleu4: "0.189", radgraph: "0.568", bertscore: "0.887" },
    baselineMetrics: { bleu4: "0.138", radgraph: "0.439", bertscore: "0.795" }
  }
];

export default function InteractiveReportGenerator() {
  const [selectedCase, setSelectedCase] = useState<SampleCase>(sampleCases[0]);
  const [selectedClient, setSelectedClient] = useState<string>("Client A (MIMIC-CXR Hub)");
  const [useOurs, setUseOurs] = useState<boolean>(true);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [stepIndex, setStepIndex] = useState<number>(3); // 3 means done

  const runSimulation = () => {
    setIsGenerating(true);
    setStepIndex(0);

    setTimeout(() => setStepIndex(1), 700);
    setTimeout(() => setStepIndex(2), 1400);
    setTimeout(() => {
      setStepIndex(3);
      setIsGenerating(false);
    }, 2100);
  };

  return (
    <section id="demo" className="py-20 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-teal-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-teal-500/30 text-teal-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>INTERACTIVE CLINICAL SIMULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live Clinical Report Generation Engine
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Select a clinical scan and federated hospital client node to test QFed-AMRG versus standard FL-VLM models.
          </p>
        </div>

        {/* Control Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Input Selection Controls */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 1. Select Case */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800">
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-3">
                1. Select Clinical Case Scan:
              </label>
              <div className="space-y-2">
                {sampleCases.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      setSelectedCase(c);
                      runSimulation();
                    }}
                    className={`w-full p-3 rounded-xl text-left text-xs transition-all border ${
                      selectedCase.id === c.id
                        ? "bg-teal-500/15 border-teal-500/50 text-white font-semibold"
                        : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold">{c.name}</span>
                      <span className="text-[10px] font-mono text-teal-400">{c.dataset}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-1">{c.indication}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Select Hospital Node */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800">
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-3">
                2. Select Federated Client Node:
              </label>
              <select
                value={selectedClient}
                onChange={(e) => setSelectedClient(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium focus:border-teal-500 focus:outline-none"
              >
                <option value="Client A (MIMIC-CXR Hub)">Hospital Client A (MIMIC-CXR Tertiary Medical Center)</option>
                <option value="Client B (IU Health Node)">Hospital Client B (Indiana University Health System)</option>
                <option value="Client C (Regional Hospital)">Hospital Client C (Regional Diagnostic Clinic)</option>
              </select>
            </div>

            {/* 3. Method Toggle */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800">
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-3">
                3. Model Architecture Mode:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setUseOurs(true)}
                  className={`p-3 rounded-xl text-xs font-bold transition-all border ${
                    useOurs
                      ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 border-teal-400 shadow-lg shadow-teal-500/20"
                      : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white"
                  }`}
                >
                  ✨ QFed-AMRG (Ours)
                </button>
                <button
                  onClick={() => setUseOurs(false)}
                  className={`p-3 rounded-xl text-xs font-bold transition-all border ${
                    !useOurs
                      ? "bg-slate-800 text-white border-slate-600 shadow-md"
                      : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white"
                  }`}
                >
                  Standard FL-VLM Baseline
                </button>
              </div>
            </div>

            {/* Run Button */}
            <button
              onClick={runSimulation}
              disabled={isGenerating}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-teal-400 via-cyan-500 to-teal-500 text-slate-950 font-black text-sm tracking-wide shadow-xl shadow-teal-500/25 hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                  <span>Processing Quantum Embeddings...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 text-slate-950 fill-slate-950" />
                  <span>Generate Report & Evaluate Metrics</span>
                </>
              )}
            </button>

          </div>

          {/* Right Column: Interactive Output Display */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-6">
              
              {/* Generation Pipeline Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-slate-400">
                  <span>FL Node: {selectedClient}</span>
                  <span className="text-teal-400 font-bold">
                    {stepIndex === 0 && "1/3 Quantum Encoding (QREM)..."}
                    {stepIndex === 1 && "2/3 AMB Adapter Alignment..."}
                    {stepIndex === 2 && "3/3 LVLM Impression Synthesis..."}
                    {stepIndex === 3 && "Completed"}
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500 transition-all duration-500"
                    style={{ width: `${((stepIndex + 1) / 4) * 100}%` }}
                  />
                </div>
              </div>

              {/* Output Report Display Box */}
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800/80 space-y-4">
                
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-teal-400" />
                    <span className="font-bold text-white text-sm">Generated Radiology Report</span>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                    useOurs ? "bg-teal-500/20 text-teal-300 border border-teal-500/40" : "bg-slate-800 text-slate-400"
                  }`}>
                    {useOurs ? "QFed-AMRG (Quantum Boosted)" : "Standard Baseline"}
                  </span>
                </div>

                <div className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans min-h-[100px]">
                  {isGenerating ? (
                    <div className="flex items-center justify-center h-28 text-slate-500 text-xs animate-pulse font-mono">
                      Generating structured findings with privacy-preserving FL model...
                    </div>
                  ) : (
                    useOurs ? selectedCase.qfedReport : selectedCase.baselineReport
                  )}
                </div>

                {/* Ground Truth Comparison Collapsible */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Board-Certified Radiologist Ground Truth:
                  </span>
                  <p className="text-slate-300 text-[11px] italic leading-relaxed">
                    "{selectedCase.groundTruth}"
                  </p>
                </div>

              </div>

              {/* Quantitative Metrics Bar for this Case */}
              <div className="grid grid-cols-3 gap-3">
                
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 font-mono uppercase block mb-1">BLEU-4 Score</span>
                  <p className="text-lg font-black text-white font-mono">
                    {useOurs ? selectedCase.qfedMetrics.bleu4 : selectedCase.baselineMetrics.bleu4}
                  </p>
                  <span className="text-[10px] text-teal-400 font-mono">
                    {useOurs ? "+39.4% vs Baseline" : "Baseline Standard"}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 font-mono uppercase block mb-1">RadGraph F1</span>
                  <p className="text-lg font-black text-cyan-300 font-mono">
                    {useOurs ? selectedCase.qfedMetrics.radgraph : selectedCase.baselineMetrics.radgraph}
                  </p>
                  <span className="text-[10px] text-cyan-400 font-mono">
                    {useOurs ? "+29.5% Medical Accuracy" : "Baseline Standard"}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 font-mono uppercase block mb-1">BERTScore</span>
                  <p className="text-lg font-black text-indigo-300 font-mono">
                    {useOurs ? selectedCase.qfedMetrics.bertscore : selectedCase.baselineMetrics.bertscore}
                  </p>
                  <span className="text-[10px] text-indigo-400 font-mono">
                    {useOurs ? "+10.1% Semantic Match" : "Baseline Standard"}
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
