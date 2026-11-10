import { Dex } from '@pkmn/dex';

export interface CompPokemon {
  num: number;
  name: string;
  types: string[];
  baseStats: {
    hp: number;
    atk: number;
    def: number;
    spa: number;
    spd: number;
    spe: number;
  };
  bst: number;
  abilities: string[];
  spriteUrl: string;
}

export function getCompetitivePokedex(): CompPokemon[] {
  // Obtenemos los Pokémon totalmente evolucionados o viables en el meta
  return Dex.species.all()
    .filter((p) => p.isNonstandard === null && p.baseStats.hp > 0)
    .slice(0, 150) // Límite inicial paginado para ultra-rendimiento
    .map((p) => ({
      num: p.num,
      name: p.name,
      types: p.types,
      baseStats: p.baseStats,
      bst: Object.values(p.baseStats).reduce((a, b) => a + b, 0),
      abilities: Object.values(p.abilities),
      // URL optimizada consumida externamente (sin meter imágenes al repo)
      spriteUrl: `https://play.pokemonshowdown.com/sprites/ani/${p.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.gif`,
    }));
}