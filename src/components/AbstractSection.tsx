"use client";

import { FileText, Tag } from "lucide-react";

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
    <section id="abstract" className="py-12 bg-gray-50 border-y border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center">
            <FileText className="w-4 h-4 text-teal-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Abstract</h2>
        </div>

        <div className="bg-white p-6 sm:py-6 sm:px-8 rounded-2xl border border-slate-200 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50/50 rounded-full blur-2xl pointer-events-none" />

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify font-normal">
            Clinical report generation has attained significant progress with large vision language models (LVLMs), yet their implementation over various clinical institutions remain challenging due to privacy limitations, communication overhead, and cross-client data heterogeneity. We propose <strong className="text-teal-700 font-semibold">QFed-AMRG</strong>, a communication-efficient federated vision language architecture for privacy-preserving multi-client clinical report generation. It integrates a <strong className="text-cyan-700 font-semibold">quantum representation enhancement module (QREM)</strong> to enhance cross-center visual feature learning through quantum improved expression designing succeeded by contrastive learning and prompting in order to upgrade image-text alignment. Moreover, QFed-AMRG combines <strong className="text-indigo-700 font-semibold">adaptive mutual boosting (AMB)</strong>, which dynamically coordinates shared and personalized adapters for effective adaptation of frozen clinical LVLMs over heterogeneous federating settings. Extensive evaluations on benchmark medical report generation datasets exhibit that QFed-AMRG continuously upgrades report quality, medical correctness, communication efficiency, and cross-domain generalization, outperforming previous privacy-preserving LVLMs and clinical report generation methods.
          </p>

          {/* Index Terms */}
          <div className="mt-5 pt-4 border-t border-slate-200">
            <div className="flex items-center gap-2 mb-2.5">
              <Tag className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                Index Terms &amp; Keywords
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {indexTerms.map((term, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-50 border border-slate-200 text-slate-600 hover:border-teal-300 hover:text-teal-700 transition-colors"
                >
                  {term}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

