import { motion } from "motion/react";
import { Terminal, Brain, MessageSquare, History } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="flex flex-col md:flex-row items-start md:items-end justify-between px-6 md:px-8 py-6 border-b border-white/10 bg-brand-dark sticky top-0 z-50">
      <div>
        <h1 className="font-serif italic text-4xl md:text-6xl tracking-tighter leading-none">
          Errorku<span className="text-brand-accent">.</span>
        </h1>
        <p className="text-[10px] uppercase tracking-[0.3em] mt-2 opacity-50">The Human-Centric Debugger</p>
      </div>
      <div className="flex flex-wrap gap-4 md:gap-8 text-[10px] uppercase tracking-widest font-bold border-t md:border-t-0 md:border-l border-white/10 mt-6 md:mt-0 pt-4 md:pt-0 md:pl-8 items-center w-full md:w-auto">
        <a href="#analisis" className="hover:text-brand-accent transition-colors">Analisis</a>
        <a href="#fitur" className="hover:text-brand-accent transition-colors">Fitur</a>
        <a href="#teknologi" className="hover:text-brand-accent transition-colors">Teknologi</a>
        <a href="#roadmap" className="hover:text-brand-accent transition-colors">Roadmap</a>
      </div>
    </header>
  );
};

export const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-white/10 p-6 flex flex-col gap-6 hidden lg:flex shrink-0">
      <div>
        <h3 className="text-[10px] uppercase opacity-40 mb-4 tracking-widest">Struktur Proyek</h3>
        <div className="font-mono text-[11px] space-y-1 opacity-80">
          <div className="flex items-center gap-2 text-brand-accent"><span className="w-3 h-[1px] bg-current"></span> root/</div>
          <div className="pl-4 text-white">
            <div className="flex items-center gap-2"><span className="opacity-30">├─</span> src/</div>
            <div className="pl-4">
              <div className="flex items-center gap-2 font-bold"><span className="opacity-30">├─</span> ui/</div>
              <div className="flex items-center gap-2"><span className="opacity-30">├─</span> ai-engine/</div>
              <div className="flex items-center gap-2"><span className="opacity-30">└─</span> services/</div>
            </div>
            <div className="flex items-center gap-2"><span className="opacity-30">└─</span> main.ts</div>
          </div>
        </div>
      </div>
      <div className="mt-auto pt-6 border-t border-white/10">
        <div className="text-[40px] font-serif italic leading-none opacity-20 mb-2">01</div>
        <p className="text-[11px] font-light leading-relaxed opacity-60">Membantu mahasiswa IT & pemula memahami error tanpa kamus teknis.</p>
      </div>
    </aside>
  );
};

export const TechAside = () => {
  return (
    <aside className="w-80 bg-white text-black p-8 flex flex-col hidden xl:flex">
      <div className="flex-1">
        <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-8 border-b border-black/10 pb-2 text-gray-900">Tech Stack</h3>
        <div className="space-y-6">
          <div>
            <p className="text-[10px] uppercase opacity-50 font-bold mb-1">Frontend Strategy</p>
            <p className="font-serif italic text-xl">React 19 + Tailwind 4</p>
          </div>
          <div>
            <p className="text-[10px] uppercase opacity-50 font-bold mb-1">Intelligence Layer</p>
            <p className="font-serif italic text-xl">Gemini 3 Flash</p>
          </div>
          <div>
            <p className="text-[10px] uppercase opacity-50 font-bold mb-1">Deployment</p>
            <p className="font-serif italic text-xl">Cloud Run Infrastructure</p>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center font-serif italic font-bold">E!</div>
          <div className="text-[10px] font-bold uppercase tracking-tighter">
            Errorku Roadmap <br/> 
            <span className="font-normal opacity-50 italic uppercase text-gray-500">Fase 1: MVP Release</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-black text-white text-[10px] font-bold uppercase py-3 tracking-widest hover:bg-gray-800 transition-all">Start Debug</button>
          <button className="border border-black text-black text-[10px] font-bold uppercase py-3 tracking-widest hover:bg-black/5 transition-all">Doc View</button>
        </div>
      </div>
    </aside>
  );
};

export const FeatureSection = () => {
  const features = [
    {
      icon: <Brain className="w-4 h-4" />,
      title: "Analisis AI",
    },
    {
      icon: <Terminal className="w-4 h-4" />,
      title: "Deteksi Otomatis",
    },
    {
      icon: <History className="w-4 h-4" />,
      title: "Riwayat Log",
    },
    {
       icon: <MessageSquare className="w-4 h-4" />,
       title: "Komunitas",
    }
  ];

  return (
    <section className="mt-12">
      <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40 mb-8 px-2 flex items-center gap-4 text-white">
        Kemampuan Utama <span className="h-px flex-1 bg-white/10"></span>
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((f, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-brand-card p-6 rounded-xl border border-white/5 flex items-center gap-4 group cursor-default"
          >
            <div className="text-brand-accent opacity-50 group-hover:opacity-100 transition-opacity">
              {f.icon}
            </div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-white">{f.title}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
