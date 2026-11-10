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
  return Dex.species.all()
    .filter((p) => {
      // Excluir formas cosméticas que no cambian stats competitivos (como los Pikachu con gorra)
      const isCosmeticForm = p.battleOnly || (p.forme && ['Original', 'Hoenn', 'Sinnoh', 'Unova', 'Kalos', 'Alola', 'Partner', 'World'].includes(p.forme));
      return p.isNonstandard === null && p.baseStats.hp > 0 && !isCosmeticForm;
    })
    .slice(0, 150)
    .map((p) => {
      // Normalizar el slug para la URL de sprites
      const cleanName = p.name.toLowerCase().replace(/[^a-z0-9]/g, '');
      return {
        num: p.num,
        name: p.name,
        types: p.types,
        baseStats: p.baseStats,
        bst: Object.values(p.baseStats).reduce((a, b) => a + b, 0),
        abilities: Object.values(p.abilities),
        spriteUrl: `https://play.pokemonshowdown.com/sprites/ani/${cleanName}.gif`,
      };
    });
}