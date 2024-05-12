import { useState } from "react";

export const useDatePokemon = () => {
    const [data, setData] = useState([]);
    const [err, setErr] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const getAllPokemon = async () => {
        try {
            const res = await fetch(
                "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
            );

            if (res.status !== 200) {
                throw new Error("Error fetching pokémon");
            } else {
                const dataPokemon = await res.json();
                createPokemonObject(dataPokemon.results);
            }
        } catch (error) {
            console.log(error);
            setErr(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    async function createPokemonObject(results) {
        try {
            const pokemonPromises = results.map(async (pokemon) => {
                const res = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
                );

                if (res.status !== 200) {
                    throw new Error("Error fetching pokemon name");
                } else {
                    return await res.json();
                }
            });

            const listPokemon = await Promise.all(pokemonPromises);
            // console.log(listPokemon)
            setData(listPokemon);
        } catch (error) {
            console.log(error);
            setErr(error.message);
        }
    }

    return {
        data,
        err,
        isLoading,
        getAllPokemon,
    };
};
