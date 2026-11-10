import { getCompetitivePokedex } from '@/features/pokedex/lib/dex';
import PokemonCard from '@/features/pokedex/components/PokemonCard';

export default function PokedexPage() {
  const pokemons = getCompetitivePokedex();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-extrabold text-white">Pokédex Competitiva Cobblemon</h1>
          <p className="text-neutral-400 mt-2">
            Base stats, speed tiers y cobertura competitiva filtrable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.num + pokemon.name} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </main>
  );
}