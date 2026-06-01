import { LightspeedBackground } from './components/LightspeedBackground';
import { ProfileCard } from './components/ProfileCard';

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] flex flex-col items-center justify-center font-sans text-slate-100">
      <LightspeedBackground />
      
      {/* Immersive UI Background Additions - Laser Lines */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[200px] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent rotate-[30deg] blur-[2px]"></div>
        <div className="absolute top-[80%] left-[70%] w-[300px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rotate-[-150deg] blur-[3px]"></div>
        <div className="absolute top-[40%] right-[5%] w-[150px] h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent rotate-[15deg] blur-[1px]"></div>
        <div className="absolute bottom-[10%] left-[40%] w-[400px] h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent rotate-[200deg] blur-[4px]"></div>
      </div>
      
      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_70%)] z-0 pointer-events-none"></div>

      <ProfileCard />

      {/* Status Bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-mono text-slate-500 pointer-events-none z-10">
        <span>0x8849.v2</span>
        <div className="w-1 h-1 rounded-full bg-slate-700"></div>
        <span>High Speed Infrastructure</span>
        <div className="w-1 h-1 rounded-full bg-slate-700"></div>
        <span>Deploying... OK</span>
      </div>
    </main>
  );
}
