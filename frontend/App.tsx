/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, ChangeEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Navbar, Sidebar, TechAside, FeatureSection } from "./components/LandingComponents";
import { explainError } from "./services/ai";
import { Terminal, Send, Loader2, CheckCircle2, ChevronRight, AlertCircle, Sparkles, Image as ImageIcon, X } from "lucide-react";

export default function App() {
  const [errorInput, setErrorInput] = useState("");
  const [selectedImage, setSelectedImage] = useState<{ mimeType: string, data: string } | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        const data = base64.split(',')[1];
        setSelectedImage({ mimeType: file.type, data });
        setImagePreview(base64);
        setErrorInput(""); // Clear text input when image is added
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleAnalyze = async () => {
    if (!errorInput.trim() && !selectedImage) return;
    setIsAnalyzing(true);
    setResult(null);
    try {
      const data = await explainError(selectedImage || errorInput);
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-brand-dark text-[#E0E0E0] font-sans scroll-smooth border-4 md:border-8 border-brand-border flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex overflow-hidden flex-col lg:flex-row">
        <Sidebar />

        {/* Main Content Area */}
        <section className="flex-1 flex flex-col p-4 md:p-8 overflow-y-auto custom-scrollbar h-full">
          <div className="mb-8 md:mb-12" id="analisis">
            <span className="text-[10px] uppercase text-brand-accent mb-4 tracking-[0.4em] font-bold block">
              Main Entry Point Analysis
            </span>
            <h2 className="text-3xl md:text-5xl font-serif leading-[1.1] mb-6 max-w-xl">
              Ubah <span className="underline decoration-brand-accent underline-offset-8">Sakit Kepala</span> Jadi Solusi Nyata.
            </h2>
          </div>

          <div className="bg-brand-card p-1 rounded-xl border border-white/5 shadow-2xl mb-12">
            <div className="bg-brand-dark p-4 md:p-6 rounded-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <span className="text-[10px] font-mono opacity-40 uppercase tracking-widest flex items-center gap-2">
                  <Terminal size={12} /> INPUT_CONSOLE_ERROR.log
                </span>
                {result && (
                  <span className="px-2 py-0.5 bg-brand-accent/10 text-brand-accent text-[9px] font-bold rounded uppercase tracking-tighter">
                    Detected: {result.language}
                  </span>
                )}
              </div>
              
              <div className="relative group">
                {!imagePreview ? (
                  <textarea 
                    value={errorInput}
                    onChange={(e) => setErrorInput(e.target.value)}
                    placeholder="Paste pesan error kamu di sini..."
                    className="w-full h-32 md:h-40 bg-transparent border-none text-red-400 font-mono text-sm focus:outline-none placeholder:text-white/10 resize-none opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <div className="relative w-full h-40 bg-black/20 rounded-lg overflow-hidden flex items-center justify-center border border-white/5">
                    <img src={imagePreview} alt="Error Screenshot" className="max-h-full object-contain" />
                    <button 
                      onClick={removeImage}
                      className="absolute top-2 right-2 bg-black/60 p-2 rounded-full hover:bg-red-500/80 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    ref={fileInputRef} 
                    onChange={handleImageUpload} 
                  />
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2 text-[10px] uppercase tracking-widest opacity-40 font-bold hover:opacity-100 transition-opacity"
                  >
                    <ImageIcon size={14} /> Upload Screenshot
                  </button>
                  <div className="h-4 w-px bg-white/10" />
                  <div className="text-[10px] uppercase tracking-widest opacity-40 font-bold">
                    Ready to interpret
                  </div>
                </div>
                
                <button 
                  onClick={handleAnalyze}
                  disabled={isAnalyzing || (!errorInput.trim() && !selectedImage)}
                  className="w-full sm:w-auto bg-brand-accent text-brand-dark text-[10px] font-bold uppercase py-3 px-8 tracking-widest hover:brightness-110 disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  {isAnalyzing ? (
                    <Loader2 className="w-3 h-3 animate-spin" />
                  ) : (
                    <Sparkles className="w-3 h-3" />
                  )}
                  {isAnalyzing ? "Analyzing..." : "Explify Now"}
                </button>
              </div>
            </div>
          </div>

          {/* Analysis Result Container */}
          <AnimatePresence>
            {result && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12 space-y-8"
              >
                <div className="space-y-4">
                  <h3 className="text-[10px] uppercase tracking-widest opacity-40 font-bold border-b border-white/5 pb-2">
                    Errorku Translation:
                  </h3>
                  <div className="p-1 rounded-xl bg-gradient-to-br from-brand-accent/20 to-transparent border border-white/5">
                    <div className="bg-brand-dark p-6 md:p-8 rounded-lg shadow-inner">
                       <p className="text-xl md:text-2xl font-outfit text-white leading-relaxed tracking-normal font-medium">
                        "{result.simpleExplanation}"
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-[10px] uppercase text-brand-accent tracking-widest font-bold flex items-center gap-2">
                      <CheckCircle2 size={12} /> Recommended Fix
                    </h3>
                    <div className="bg-white/5 p-4 md:p-6 rounded-xl border border-white/5">
                      <p className="text-sm font-mono text-white/70 leading-relaxed whitespace-pre-line">
                        {result.solution}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                     <h3 className="text-[10px] uppercase text-amber-400 tracking-widest font-bold flex items-center gap-2">
                      <AlertCircle size={12} /> Severity Analysis
                    </h3>
                    <div className="bg-white/5 p-4 md:p-6 rounded-xl border border-white/5">
                      <div className="flex items-end gap-3 mb-4">
                        <div className={`h-8 w-1 bg-brand-accent ${result.difficulty === 'Easy' ? 'opacity-100' : 'opacity-20'}`} />
                        <div className={`h-12 w-1 bg-amber-400 ${result.difficulty === 'Medium' ? 'opacity-100' : 'opacity-20'}`} />
                        <div className={`h-16 w-1 bg-red-500 ${result.difficulty === 'Hard' ? 'opacity-100' : 'opacity-20'}`} />
                        <span className="text-xs font-bold uppercase tracking-widest ml-4">{result.difficulty} Level</span>
                      </div>
                      <p className="text-[10px] leading-relaxed opacity-50">
                        Error ini terdeteksi sebagai tingkat {result.difficulty.toLowerCase()} berdasarkan kompleksitas struktur kode.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div id="fitur">
            <FeatureSection />
          </div>

          <div id="teknologi" className="mt-24">
             <div className="xl:hidden">
                <TechAside />
             </div>
          </div>

          <div id="roadmap" className="mt-24 mb-12">
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40 mb-8 px-2 flex items-center gap-4">
              Project Roadmap <span className="h-px flex-1 bg-white/10"></span>
            </h3>
            <div className="space-y-4">
               {[
                 { fase: "01", title: "MVP Release", status: "Active", desc: "Core AI Error translation engine & landing interface." },
                 { fase: "02", title: "OCR Integration", status: "Upcoming", desc: "Upload screenshot error and detect text automatically." },
                 { fase: "03", title: "Community Hub", status: "Planned", desc: "Discussion boards and peer-to-peer mentoring system." }
               ].map((item, i) => (
                 <div key={i} className="bg-brand-card p-6 rounded-xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                       <span className="font-serif italic text-3xl opacity-20">{item.fase}</span>
                       <div>
                          <h4 className="text-sm font-bold uppercase tracking-widest mb-1">{item.title}</h4>
                          <p className="text-xs opacity-50 max-w-md">{item.desc}</p>
                       </div>
                    </div>
                    <span className={`text-[9px] font-bold uppercase px-2 py-1 rounded w-fit ${item.status === 'Active' ? 'bg-brand-accent/20 text-brand-accent' : 'bg-white/5 text-white/30'}`}>
                      {item.status}
                    </span>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="h-24 shrink-0" />
        </section>

        <TechAside />
      </main>

      <footer className="h-12 border-t border-white/10 px-8 flex items-center justify-between text-[10px] opacity-40 uppercase tracking-widest bg-brand-dark">
        <div className="flex gap-4">
          <span>Jakarta, Indonesia</span>
          <span className="h-3 w-px bg-white/20"></span>
          <span>v1.0.4-beta</span>
        </div>
        <span>&copy; 2026 Errorku . All rights reserved.</span>
      </footer>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </div>
  );
}
