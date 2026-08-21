"use client";

import { useState } from "react";
import { BookOpen, Copy, Check, FileText, Download } from "lucide-react";

export default function BibtexCitation() {
  const [copied, setCopied] = useState(false);

  const bibtex = `@article{saha2026qfedamrg,
  title  = {QFed-AMRG: Quantum Federated Driven VLM for Privacy Preserving Clinical Report Generation},
  author = {Saha*, Dip Kumar and Ahmed, Mohammad Rasel and Fahad*, Nafiz and Morol*, Md. Kishor},
  year   = {2026}
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
    element.download = "QFed-AMRG.bib";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="citation" className="py-20 bg-white border-t border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-50 border border-teal-200 text-teal-700 text-xs font-mono mb-4 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-teal-600" />
            <span>CITATION</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            How to Cite QFed-AMRG
          </h2>
          <p className="text-slate-600 mt-2 text-xs sm:text-sm">
            If you find this research paper or implementation useful in your academic research, please cite our work.
          </p>
        </div>

        {/* BibTeX Box */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm relative">
          
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-3">
            <span className="text-xs font-mono font-bold text-slate-700 flex items-center gap-2">
              <FileText className="w-4 h-4 text-teal-600" /> BibTeX Entry
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={downloadBib}
                className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 text-xs font-mono transition-all flex items-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5 text-slate-500" />
                <span>.bib File</span>
              </button>

              <button
                onClick={copyToClipboard}
                className="px-3.5 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied to Clipboard!" : "Copy BibTeX"}</span>
              </button>
            </div>
          </div>

          <pre className="p-4 sm:p-6 rounded-2xl bg-slate-900 text-teal-300 text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed shadow-inner">
            {bibtex}
          </pre>

        </div>

      </div>
    </section>
  );
}
