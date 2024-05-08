import React from "react";
import { useParams } from "react-router-dom";
import { useEventsData } from "./Hook/useEventsData";

export const JobDetails = () => {
    const { jobs } = useEventsData();
    const { position } = useParams();

    const job = jobs.find((item) => item.position === position);

    return (
        <section>
            <div className="container">
                <div className="details__top">
                    <h1>{job.position}</h1>
                    <h6>
                        {job.postedAt} - {job.contract}
                    </h6>
                </div>
                <div className="requirements">
                    <h1>Requirements</h1>
                    <ul className="requirement__item">
                        {job.requirements.reqItem.map((element, index) => {
                            return <li key={index}>{element}</li>;
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};
