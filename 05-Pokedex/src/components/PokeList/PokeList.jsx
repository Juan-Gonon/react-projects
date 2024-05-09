import { useEffect } from "react";
import { useDatePokemon } from "../../Hook/useDatePokemon";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import "./PokeList.css";

export const PokeList = () => {
    const { data, isLoading, err, getAllPokemon } = useDatePokemon();

    useEffect(() => {
        getAllPokemon();
    }, []);

    if (isLoading) return <div>Cargando...</div>;
    if (err !== "") return <div>Error {err}</div>;

    return (
        <div className="app-container">
            <div className="pokemon-container">
                <div className="all-container">
                    {data?.map((item, index) => (
                        <PokemonCard
                            key={`${index}-${item.id}`}
                            pokemon={item}
                            id={item.id.toString().padStart(3, "0")}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
