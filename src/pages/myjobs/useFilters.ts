import { JobDTO, JobType } from 'types';
import { isAfter, isBefore, parseISO } from 'date-fns';

export const useFilters = (jobs: JobDTO[], searchedTerm: string | null, type: JobType) => {
    const now = new Date();

    let filteredJobs = jobs;
    filteredJobs = (
        searchedTerm
        ? jobs.filter(({ companyName }) => companyName?.toLowerCase().includes(searchedTerm.toLowerCase()))
        : jobs
    );

    filteredJobs = (
        type === JobType.Upcoming ? filteredJobs.filter(({ expirationDate }) => isAfter(parseISO(expirationDate), now)) :
        type === JobType.Completed ? filteredJobs.filter(({ expirationDate }) => isBefore(parseISO(expirationDate), now)) :
        filteredJobs
    );

    return filteredJobs;
}
