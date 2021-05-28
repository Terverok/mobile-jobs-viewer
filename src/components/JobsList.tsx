import React, { useCallback, useState } from 'react';
import { Divider } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import styled from 'styled-components';
import { Job } from 'components/Job';
import type { JobDTO } from 'types';

type Props = {
    jobs?: JobDTO[],
    elementsPerPage: number,
}

export const JobsList = ({ jobs, elementsPerPage }: Props) => {
    const [page, setPage] = useState<number>(1);

    const pagesCount = jobs ? Math.ceil(jobs.length/elementsPerPage) : 1;
    const pastJobsCount = (page - 1) * elementsPerPage;
    const pageJobs = jobs?.slice(pastJobsCount, pastJobsCount + elementsPerPage);

    const changePage = useCallback((_e: any, newPage: number) => {
        setPage(newPage);
    }, []);


    return (
        <div>
            {pageJobs?.map((job) => (
                <Job job={job} />
            ))}
            <CenteredPagination
                count={pagesCount}
                color="primary"
                size="large"
                page={page}
                onChange={changePage}
            />
        </div>
    );
}

JobsList.defaultProps = { elementsPerPage: 10 };

const CenteredPagination = styled(Pagination)`
    margin-top: 1rem;

    display: flex;
    justify-content: center;
`;
