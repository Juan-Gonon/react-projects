import { useEffect, useState } from "react";
import { useEventsData } from "./Hook/useEventsData";
import { JobItem } from "./JobItem";

export const JobList = () => {
    const { data, isLoading, fetchingData, jobs } = useEventsData();
    const [valueInput, setValueInput] = useState("");
    const [searchByLocation, setSearchByLocation] = useState("");

    const handleChangeInput = (e) => {
        setValueInput(e.target.value);
    };
    const handleChangeSearch = (e) => {
        setSearchByLocation(e.target.value);
    };

    const handleLocationSearch = () => {
        if (searchByLocation === "") return data;

        const searchLocation = data?.filter((element) =>
            element.location
                .toLowerCase()
                .includes(searchByLocation.toLowerCase())
        );

        fetchingData(searchLocation);
    };

    const filterData = (e) => {
        const contract = e.target.value;
        let filterData = [];

        if (contract == "full-time") {
            filterData = jobs.filter(
                (element) => element.contract === "Full Time"
            );
        } else if (contract === "part-time") {
            filterData = jobs.filter(
                (element) => element.contract === "Part Time"
            );
        } else if (contract === "freelance") {
            filterData = jobs.filter(
                (element) => element.contract === "Freelance"
            );
        }else{
          filterData = jobs;
        }

        fetchingData(filterData);
    };

    return (
        <>
            {isLoading ? (
                <div>Cargando...</div>
            ) : (
                <section className="job__list">
                    <div className="container">
                        <div className="job__list__wrapper">
                            <div className="search__panel">
                                <div className="search__panel-01">
                                    <input
                                        type="text"
                                        value={valueInput}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                                <div className="search__panel-02">
                                    <input
                                        type="text"
                                        placeholder="Buscar location"
                                        value={searchByLocation}
                                        onChange={handleChangeSearch}
                                    />
                                    <button onClick={handleLocationSearch}>
                                        Buscar
                                    </button>
                                </div>

                                <div className="search__panel-03">
                                    <select onChange={filterData}>
                                        <option>Filtrar trabajo por</option>
                                        <option value="full-time">
                                            Tiempo completo
                                        </option>
                                        <option value="part-time">
                                            Tiempo parcial
                                        </option>
                                        <option value="freelance">
                                            Freelance
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="jobs__wrapper">
                                {data
                                    ?.filter((element) => {
                                        if (valueInput === "") {
                                            return element;
                                        }

                                        if (
                                            element.position
                                                .toLowerCase()
                                                .includes(
                                                    valueInput.toLowerCase()
                                                ) ||
                                            element.company
                                                .toLowerCase()
                                                .includes(
                                                    valueInput.toLowerCase()
                                                )
                                        ) {
                                            return element;
                                        }
                                    })
                                    .map((element) => (
                                        <JobItem
                                            job={element}
                                            key={element.id}
                                        />
                                    ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};
