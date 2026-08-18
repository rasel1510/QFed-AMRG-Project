"use client";

import { useState } from "react";
import { BookOpen, Copy, Check, FileText, Download } from "lucide-react";

export default function BibtexCitation() {
  const [copied, setCopied] = useState(false);

  const bibtex = `@inproceedings{saha2026qfedamrg,
  title     = {QFed-AMRG: Quantum Federated Driven VLM for Privacy Preserving Clinical Report Generation},
  author    = {Saha, Dip Kumar and Ahmed, Mohammad Rasel and Morol, Md. Kishore},
  booktitle = {IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)},
  year      = {2026}
}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const downloadBib = () => {
    const element = document.createElement("a");
    const file = new Blob([bibtex], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "QFed-AMRG-WACV2026.bib";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="citation" className="py-20 bg-slate-950 border-t border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-teal-500/30 text-teal-300 text-xs font-mono mb-4">
            <BookOpen className="w-3.5 h-3.5 text-teal-400" />
            <span>CITATION</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            How to Cite QFed-AMRG
          </h2>
          <p className="text-slate-400 mt-2 text-xs sm:text-sm">
            If you find this research paper or implementation useful in your academic research, please cite our WACV work.
          </p>
        </div>

        {/* BibTeX Box */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 relative">
          
          <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
            <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-2">
              <FileText className="w-4 h-4 text-teal-400" /> BibTeX Entry
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={downloadBib}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-mono transition-all flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-slate-400" />
                <span>.bib File</span>
              </button>

              <button
                onClick={copyToClipboard}
                className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center gap-1.5 hover:opacity-95"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied to Clipboard!" : "Copy BibTeX"}</span>
              </button>
            </div>
          </div>

          <pre className="p-4 sm:p-6 rounded-2xl bg-slate-950 border border-slate-900 text-xs sm:text-sm text-teal-300 font-mono overflow-x-auto leading-relaxed selection:bg-teal-500/30">
            {bibtex}
          </pre>

          <p className="text-[11px] text-slate-400 font-mono mt-4 text-center">
            IEEE / CVF Winter Conference on Applications of Computer Vision (WACV 2026)
          </p>

        </div>

      </div>
    </section>
  );
}
