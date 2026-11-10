'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

const modules = [
  {
    title: 'Pokédex Competitiva',
    desc: 'Consulta estadísticas base, speed tiers y habilidades adaptadas a Cobblemon.',
    href: '/pokedex',
    badge: 'Base de Datos',
  },
  {
    title: 'Teambuilder & Validadores',
    desc: 'Arma tus equipos, valida sinergias y exporta en formato Showdown.',
    href: '/teambuilder',
    badge: 'Herramienta',
  },
  {
    title: 'Calculadora de Daño',
    desc: 'Calcula rangos de daño exactos para predecir OHKO y 2HKO en combate.',
    href: '/calculator',
    badge: 'Combate',
  },
  {
    title: 'Metagame & VGC Hub',
    desc: 'Spreads de EVs recomendados, tiers y análisis de sinergias para torneos.',
    href: '/meta',
    badge: 'Estrategia',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-neutral-950 text-white flex flex-col justify-center px-6 py-12">
      <div className="max-w-5xl mx-auto w-full space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-widest font-mono text-red-400 bg-red-950/40 border border-red-800/50 px-3 py-1 rounded-full">
            Cobblemon Competitive Engine
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Plataforma Estratégica <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">
              Ultra-Optimizada
            </span>
          </h1>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm md:text-base">
            Herramientas tácticas, cálculo de daño y metagame sin sobrecarga de datos. Todo cargado desde la nube bajo demanda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modules.map((mod) => (
            <Link key={mod.href} href={mod.href}>
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(239, 68, 68, 0.4)' }}
                transition={{ duration: 0.15 }}
                className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:bg-neutral-900/70 transition-colors flex flex-col justify-between h-44"
              >
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-800 border border-neutral-700">
                    {mod.badge}
                  </span>
                  <h2 className="text-xl font-bold mt-3 text-neutral-100">{mod.title}</h2>
                  <p className="text-neutral-400 text-xs mt-1 leading-relaxed">{mod.desc}</p>
                </div>
                <div className="text-xs text-red-400 font-medium flex items-center gap-1">
                  Acceder al módulo &rarr;
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}