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

    const pagesCount = jobs && jobs.length ? Math.ceil(jobs.length/elementsPerPage) : 1;
    const pastJobsCount = (page - 1) * elementsPerPage;
    const pageJobs = jobs?.slice(pastJobsCount, pastJobsCount + elementsPerPage);

    const changePage = useCallback((_e: any, newPage: number) => {
        setPage(newPage);
    }, []);


    return (
        <Root>
            {pageJobs?.map((job) => (
                <Job job={job} />
            ))}
            <Bottom>
                <CenteredPagination
                    count={pagesCount}
                    color="primary"
                    size="large"
                    page={page}
                    onChange={changePage}
                />
            </Bottom>
        </Root>
    );
}

JobsList.defaultProps = { elementsPerPage: 10 };

const Root = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
`;

const Bottom = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const CenteredPagination = styled(Pagination)`
    width: 100vw;
    margin-top: 1rem;

    display: flex;
    justify-content: center;
`;
