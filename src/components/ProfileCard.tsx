import { type ReactNode, Fragment } from 'react';
import profilImage from '@/assets/profil.png';

function Github({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function Linkedin({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function Twitter({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export function ProfileCard() {
  const links = [
    { href: "https://github.com/FXHibon", icon: <Github className="w-6 h-6" />, label: "GitHub" },
    { href: "https://linkedin.com/in/fxhibon", icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn" },
    { href: "https://twitter.com/FXHibon", icon: <Twitter className="w-6 h-6" />, label: "Twitter" },
  ];

  return (
    <div className="relative z-10 flex flex-col items-center">

      {/* Profile Image */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative w-56 h-56 rounded-full bg-slate-900 border-2 border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
          <img src={profilImage} alt="François-Xavier HIBON" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Text Details */}
      <div className="mt-10 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-white mb-2 uppercase drop-shadow-lg">
          François-Xavier HIBON
        </h1>
        <p className="text-cyan-400 font-mono text-sm tracking-[0.4em] uppercase opacity-80 mb-12">
          Platform Engineer
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
          href="mailto:fxhibon+fxhibon.fr@proton.me"
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
