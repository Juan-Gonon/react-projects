import { Link } from "react-router-dom"

export const JobItem = ({job}) => {

    //console.log(job)



  return (
    <div className="job__item">
        <img src={job.logo} alt={job.company} />
        <div className="job__content">
            <h6>{`${job.postedAt}-${job.contract}`}</h6>
        </div>
        <h1>
            <Link to={`/jobs/${job.position}`}>
                {
                    job.position
                }
            </Link>
        </h1>
        <p>{job.company}</p>
        <div className="location">
            <p>Location: <span>{job.location}</span> </p>
        </div>
    </div>
  )
}
