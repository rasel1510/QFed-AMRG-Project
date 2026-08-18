"use client";

import { Database, ShieldCheck, FileSpreadsheet, Lock, Server, CheckCircle2 } from "lucide-react";

export default function DatasetSection() {
  return (
    <section id="datasets" className="py-20 bg-slate-900/60 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Database className="w-3.5 h-3.5 text-cyan-400" />
            <span>BENCHMARK DATASETS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Clinical Benchmark Datasets
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Evaluated on large-scale public chest radiograph benchmark corpora under realistic federated client partition protocols.
          </p>
        </div>

        {/* Datasets Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Dataset 1: MIMIC-CXR */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-teal-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/30 text-xs font-mono font-bold">
                  PRIMARY BENCHMARK
                </span>
                <span className="text-xs font-mono text-slate-400">PhysioNet / Beth Israel Deaconess</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">MIMIC-CXR v2.0.0</h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-6">
                The largest public de-identified chest X-ray dataset paired with semi-structured free-text radiology reports written by board-certified radiologists.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">TOTAL SCANS</span>
                  <span className="text-lg font-bold text-teal-300">377,110</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">RADIOLOGY REPORTS</span>
                  <span className="text-lg font-bold text-cyan-300">227,835</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>DICOM high-resolution frontal & lateral chest views</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>RadGraph entity & relation annotations</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-mono">
                <Lock className="w-3.5 h-3.5 text-emerald-400" /> HIPAA De-identified
              </span>
              <a
                href="https://physionet.org/content/mimic-cxr/2.0.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline font-semibold"
              >
                PhysioNet Access ↗
              </a>
            </div>
          </div>

          {/* Dataset 2: IU X-Ray */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 text-xs font-mono font-bold">
                  CROSS-CENTER GENERALIZATION
                </span>
                <span className="text-xs font-mono text-slate-400">Indiana University Hospital</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">IU X-Ray (OpenI)</h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-6">
                Standard medical report evaluation dataset collected by Indiana University Hospitals, used for assessing zero-shot cross-center generalization.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">TOTAL SCANS</span>
                  <span className="text-lg font-bold text-indigo-300">7,470</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">REPORTS</span>
                  <span className="text-lg font-bold text-teal-300">3,955</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Dual projections (PA and lateral chest X-rays)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Structured Medical Subject Headings (MeSH)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-mono">
                <Server className="w-3.5 h-3.5 text-indigo-400" /> Non-IID FL Client Partition
              </span>
              <a
                href="https://openi.nlm.nih.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline font-semibold"
              >
                NLM OpenI Access ↗
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
