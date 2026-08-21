"use client";

import { Cpu, ArrowUp, FileText } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-indigo-500 p-[1px]">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <Cpu className="w-4 h-4 text-teal-400" />
              </div>
            </div>
            <div>
              <span className="font-bold text-white text-base">QFed-AMRG</span>
              <p className="text-[11px] text-slate-400">Quantum Federated VLM for Medical Imaging</p>
            </div>
          </div>

          <div className="flex items-center gap-4 font-medium text-slate-300">
            <a href="#abstract" className="hover:text-teal-300 transition-colors">Abstract</a>
            <a href="#architecture" className="hover:text-teal-300 transition-colors">Architecture</a>
            <a href="#results" className="hover:text-teal-300 transition-colors">Results</a>
            <a href="#datasets" className="hover:text-teal-300 transition-colors">Datasets</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-teal-500/40 transition-all flex items-center gap-1.5 font-mono text-[11px]"
          >
            <ArrowUp className="w-3.5 h-3.5 text-teal-400" />
            <span>Back to top</span>
          </button>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px]">
          <p>
            Authors: <span className="text-slate-300 font-semibold">Dip Kumar Saha*, Mohammad Rasel Ahmed, Md. Kishor Morol*, Nafiz Fahad*</span>.
          </p>

          <p className="font-mono text-slate-400">
            Designed to A* Conference Web Standards.
          </p>
        </div>

      </div>
    </footer>
  );
}
