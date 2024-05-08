import { useState } from "react";
import { jobs } from "../../data/data";

export const useEventsData = () => {
    const [data, setData] = useState(jobs);
    const [isLoading, setIsLoading] = useState(false)

    const fetchingData = (job) => {
        setIsLoading(true)
        setData(job);
        setIsLoading(false)
        //setData(jobs)
    };

    return {
        data,
        isLoading,
        fetchingData,
        jobs
    };
};
