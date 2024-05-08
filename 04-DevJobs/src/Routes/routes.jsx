import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { JobList } from '../components/JobList';
import { JobDetails } from '../components/JobDetails';


const  router = createBrowserRouter([
    {
        path : "/",
        element : <JobList/>
    },{
        path : "/jobs",
        element : <JobList/>
    },{
        path : "/jobs/:position",
        element : <JobDetails/>
    }

])

export const MyRoutes = ()=> <RouterProvider router={router} />