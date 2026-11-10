'use client';

import { motion } from 'motion/react';
import type { CompPokemon } from '../lib/dex';

const typeColors: Record<string, string> = {
  Fire: 'bg-red-500/20 text-red-400 border-red-500/30',
  Water: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  Grass: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  Electric: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  Dragon: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
  Steel: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
  Fairy: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  Ghost: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};

export default function PokemonCard({ pokemon }: { pokemon: CompPokemon }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 backdrop-blur-sm flex flex-col justify-between"
    >
      <div className="flex justify-between items-start">
        <div>
          <span className="text-xs font-mono text-neutral-500">#{pokemon.num.toString().padStart(3, '0')}</span>
          <h3 className="font-bold text-lg text-white">{pokemon.name}</h3>
        </div>
        <div className="flex gap-1">
          {pokemon.types.map((type) => (
            <span
              key={type}
              className={`text-[10px] uppercase font-semibold px-2 py-0.5 rounded border ${typeColors[type] || 'bg-neutral-800 text-neutral-400 border-neutral-700'}`}
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      <div className="h-28 flex items-center justify-center my-3">
        <img
          src={pokemon.spriteUrl}
          alt={pokemon.name}
          className="max-h-24 object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
          loading="lazy"
        />
      </div>

      <div className="space-y-1 text-xs">
        <div className="flex justify-between text-neutral-400">
          <span>Speed: <strong className="text-neutral-200">{pokemon.baseStats.spe}</strong></span>
          <span>BST: <strong className="text-emerald-400">{pokemon.bst}</strong></span>
        </div>
      </div>
    </motion.div>
  );
}