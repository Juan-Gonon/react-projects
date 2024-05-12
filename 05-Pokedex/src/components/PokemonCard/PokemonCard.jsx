import { useState } from "react";
import "./PokemonCard.css";
import pokeball from "../../Img/pokeball.png";

export const PokemonCard = ({ pokemon, id }) => {
    const [isShown, setIsShown] = useState(false);

    const image = pokemon.sprites.other["official-artwork"].front_default;
    const type = pokemon.types[0].type.name;
    const weight = pokemon.weight;
    const height = pokemon.height;
    const stats = pokemon.stats.map((element) => element.base_stat).slice(0, 3);
    const statsName = pokemon.stats
        .map((element) => element.stat.name)
        .slice(0, 3);

    return (
        <div className="container">
            {isShown && (
                <div className="show">
                    <div className="stat-container-title">
                        <p>{pokemon.name}</p>
                        <img
                            src={image}
                            alt={pokemon.name}
                            className="img-title"
                        />
                    </div>
                    <img src={image} alt={pokemon.name} />

                    <div style={{ display: "flex", width: "100%" }}>
                        <div
                            className="stats-left"
                            style={{
                                background: "#dbdbd9",
                                textAlign: "center",
                            }}>
                            <p>Type</p>
                            <p>Height</p>
                            <p>Weight</p>
                        </div>
                        <div
                            className="stats-right"
                            style={{ background: "#fff", textAlign: "center" }}>
                            <p>{type}</p>
                            <p>{height}0 cm</p>
                            <p>{weight} lbs</p>
                        </div>
                    </div>

                    <div className="base-stats">
                        <div>
                            {statsName?.map((stats, index) => (
                                <p
                                    className="stats"
                                    key={`${stats}-${id}-${index}`}>
                                    {stats}
                                </p>
                            ))}
                        </div>
                        <div>
                            {stats?.map((stats, index) => (
                                <p
                                    className="stats"
                                    key={`${stats}-${id}-${index}`}>
                                    {stats}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div
                className="right"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                <img
                    src={image}
                    style={{
                        maxHeight: "50px",
                        marginRight: "10px",
                        width: "50px",
                    }}
                />
                <p style={{ width: "270px" }}>No. {id}</p>
                <p>{pokemon.name}</p>
                <img
                    src={pokeball}
                    alt="pokeball"
                    style={{ marginLeft: "auto", width: "40px" }}
                />
            </div>
        </div>
    );
};
