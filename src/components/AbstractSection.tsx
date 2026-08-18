"use client";

import { FileText, Shield, Cpu, RefreshCw, CheckCircle2, Tag, ArrowUpRight } from "lucide-react";

export default function AbstractSection() {
  const indexTerms = [
    "VLM (Vision-Language Models)",
    "Federated Learning",
    "QML (Quantum Machine Learning)",
    "Clinical Summarization",
    "Large Language Models (LLM)",
    "MIMIC-CXR Benchmark",
    "IU X-Ray Dataset",
  ];

  return (
    <section id="abstract" className="py-20 bg-slate-900/60 border-y border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Abstract Card */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center">
                <FileText className="w-4 h-4 text-teal-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Abstract</h2>
            </div>

            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                Clinical report generation has attained significant progress with large vision language models (LVLMs), yet their implementation over various clinical institutions remain challenging due to privacy limitations, communication overhead, and cross-client data heterogeneity.
              </p>
              
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                We propose <strong className="text-teal-300 font-semibold">QFed-AMRG</strong>, a communication-efficient federated vision language architecture for privacy-preserving multi-client clinical report generation. It integrates a <strong className="text-cyan-300 font-semibold">quantum representation enhancement module (QREM)</strong> to enhance cross-center visual feature learning through quantum improved expression designing succeeded by contrastive learning and prompting in order to upgrade image-text alignment.
              </p>
              
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                Moreover, QFed-AMRG combines <strong className="text-indigo-300 font-semibold">adaptive mutual boosting (AMB)</strong>, which dynamically coordinates shared and personalized adapters for effective adaptation of frozen clinical LVLMs over heterogeneous federating settings.
              </p>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                Extensive evaluations on benchmark medical report generation datasets exhibit that QFed-AMRG continuously upgrades report quality, medical correctness, communication efficiency, and cross-domain generalization, outperforming previous privacy-preserving LVLMs and clinical report generation methods.
              </p>

              {/* Index Terms */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Index Terms & Keywords
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {indexTerms.map((term, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-950 border border-slate-800 text-slate-300 hover:border-teal-500/40 hover:text-teal-300 transition-colors"
                    >
                      {term}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Problem & Solution Overview Card */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* The Clinical Challenge */}
            <div className="glass-panel p-6 rounded-2xl border border-red-500/20 bg-red-950/10">
              <div className="flex items-center gap-2 mb-3 text-red-400 font-bold text-sm">
                <Shield className="w-4 h-4" />
                <span>Core Challenges Addressed</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span><strong>Strict HIPAA/GDPR Constraints:</strong> Medical centers cannot pool patient chest X-rays centrally.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span><strong>Communication Bottleneck:</strong> Full LVLM fine-tuning across FL nodes requires excessive bandwidth.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span><strong>Cross-Center Heterogeneity:</strong> Scanner variance & patient demographic shifts degrade report accuracy.</span>
                </li>
              </ul>
            </div>

            {/* QFed-AMRG Innovations */}
            <div className="glass-panel p-6 rounded-2xl border border-teal-500/30 bg-teal-950/10">
              <div className="flex items-center gap-2 mb-3 text-teal-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>QFed-AMRG Solutions</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 font-bold">1.</span>
                  <span><strong>QREM:</strong> Quantum-enhanced representation for high-fidelity visual feature alignment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 font-bold">2.</span>
                  <span><strong>AMB:</strong> Dual-adapter mutual boosting balancing global knowledge & personalized client features.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 font-bold">3.</span>
                  <span><strong>Frozen Backbone:</strong> Keeps clinical LVLM frozen while updating lightweight adapters only.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
