"use client";

import { useState } from "react";
import { FileText, Github, Sparkles, Copy, Check, Download, ShieldCheck, Cpu, ArrowRight, Zap, Database, Award } from "lucide-react";

export default function Hero() {
  const [copiedBib, setCopiedBib] = useState(false);

  const copyBibtex = () => {
    const bibtex = `@inproceedings{saha2026qfedamrg,
  title={QFed-AMRG: Quantum Federated Driven VLM for Privacy Preserving Clinical Report Generation},
  author={Saha, Dip Kumar and Ahmed, Mohammad Rasel and Morol, Md. Kishore},
  booktitle={IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)},
  year={2026}
}`;
    navigator.clipboard.writeText(bibtex);
    setCopiedBib(true);
    setTimeout(() => setCopiedBib(false), 2500);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950">
      {/* Background Animated Quantum Gradients & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-teal-500/15 via-cyan-500/10 to-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Conference Submission Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-medium shadow-xl shadow-teal-950/40 mb-8 backdrop-blur-md">
          <Award className="w-4 h-4 text-teal-400 animate-pulse" />
          <span>IEEE / CVF WACV 2026 Submission</span>
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
          <span className="text-slate-400 font-mono text-[11px]">Primary Track: Medical & Computer Vision</span>
        </div>

        {/* Paper Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.15] mb-6">
          <span className="quantum-gradient-text block sm:inline">QFed-AMRG:</span>{" "}
          <span>Quantum Federated Driven VLM for Privacy Preserving Clinical Report Generation</span>
        </h1>

        {/* Authors Section */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 my-8 text-slate-200">
          <div className="group relative bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-2 hover:border-teal-500/50 transition-all">
            <p className="font-bold text-slate-100 text-sm sm:text-base group-hover:text-teal-300 transition-colors">
              Dip Kumar Saha
            </p>
            <p className="text-[11px] text-slate-400 font-mono">Researcher & AI Specialist</p>
          </div>

          <div className="group relative bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-2 hover:border-teal-500/50 transition-all">
            <p className="font-bold text-slate-100 text-sm sm:text-base group-hover:text-teal-300 transition-colors">
              Mohammad Rasel Ahmed
            </p>
            <p className="text-[11px] text-slate-400 font-mono">Medical VLM Lead</p>
          </div>

          <div className="group relative bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-2 hover:border-teal-500/50 transition-all">
            <p className="font-bold text-slate-100 text-sm sm:text-base group-hover:text-teal-300 transition-colors">
              Md. Kishore Morol
            </p>
            <p className="text-[11px] text-slate-400 font-mono">Quantum & FL Architect</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-10">
          <a
            href="#paper-preview"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-600 text-slate-950 font-bold text-sm shadow-xl shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>Read Paper PDF</span>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-semibold text-sm transition-all shadow-md"
          >
            <Github className="w-4 h-4 text-slate-400" />
            <span>Code Repository</span>
          </a>

          <a
            href="#demo"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 border border-teal-500/40 text-teal-300 hover:bg-teal-950/40 font-semibold text-sm transition-all"
          >
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>Live Interactive Demo</span>
          </a>

          <button
            onClick={copyBibtex}
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-sm transition-all"
          >
            {copiedBib ? <Check className="w-4 h-4 text-teal-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
            <span>{copiedBib ? "BibTeX Copied!" : "Cite Paper"}</span>
          </button>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mt-12">
          <div className="glass-panel p-4 rounded-xl text-left border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400 font-mono">BENCHMARK DATASETS</span>
              <Database className="w-4 h-4 text-cyan-400" />
            </div>
            <p className="text-xl sm:text-2xl font-black text-white">MIMIC-CXR & IU</p>
            <p className="text-xs text-slate-400 mt-1">Multi-center clinical validation</p>
          </div>

          <div className="glass-panel p-4 rounded-xl text-left border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400 font-mono">QUANTUM ENHANCEMENT</span>
              <Cpu className="w-4 h-4 text-teal-400" />
            </div>
            <p className="text-xl sm:text-2xl font-black text-teal-300">QREM Module</p>
            <p className="text-xs text-slate-400 mt-1">Quantum visual representation</p>
          </div>

          <div className="glass-panel p-4 rounded-xl text-left border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400 font-mono">ADAPTER COORDINATION</span>
              <Zap className="w-4 h-4 text-indigo-400" />
            </div>
            <p className="text-xl sm:text-2xl font-black text-indigo-300">AMB Mechanism</p>
            <p className="text-xs text-slate-400 mt-1">Adaptive mutual boosting</p>
          </div>

          <div className="glass-panel p-4 rounded-xl text-left border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400 font-mono">COMMUNICATION & PRIVACY</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-xl sm:text-2xl font-black text-emerald-300">Zero-PHI FL</p>
            <p className="text-xs text-slate-400 mt-1">Efficient multi-client federation</p>
          </div>
        </div>

      </div>
    </section>
  );
}
