import { type ReactNode, Fragment } from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function ProfileCard() {
  const links = [
    { href: "https://github.com", icon: <Github className="w-6 h-6" />, label: "GitHub" },
    { href: "https://linkedin.com", icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn" },
    { href: "https://twitter.com", icon: <Twitter className="w-6 h-6" />, label: "Twitter" },
  ];

  return (
    <div className="relative z-10 flex flex-col items-center">
      
      {/* Profile Image */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative w-56 h-56 rounded-full bg-slate-900 border-2 border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
          <div className="w-full h-full bg-slate-800 flex items-center justify-center">
            <span className="font-mono text-sm tracking-tight text-slate-500">IMAGE</span>
          </div>
        </div>
      </div>

      {/* Text Details */}
      <div className="mt-10 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-white mb-2 uppercase drop-shadow-lg">
          Alex Developer
        </h1>
        <p className="text-cyan-400 font-mono text-sm tracking-[0.4em] uppercase opacity-80 mb-12">
          Platform Engineer & SRE
        </p>
      </div>

      {/* Social Toolbar */}
      <div className="flex items-center gap-4 bg-slate-900/60 backdrop-blur-2xl border border-white/10 px-8 py-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {links.map((link) => (
          <Fragment key={link.label}>
            <SocialLink href={link.href} icon={link.icon} label={link.label} />
            <div className="w-[1px] h-6 bg-white/10"></div>
          </Fragment>
        ))}
        {/* GET IN TOUCH Button wrapping Email link to match immersive UI */}
        <a
          href="mailto:hello@example.com"
          className="flex items-center justify-center px-6 h-12 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm transition-all cursor-pointer shadow-lg shadow-cyan-900/20 active:scale-95"
        >
          GET IN TOUCH
        </a>
      </div>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-white transition-all cursor-pointer"
    >
      {icon}
    </a>
  );
}
