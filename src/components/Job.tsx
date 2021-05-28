import React from 'react';
import { Avatar, Card, withStyles } from '@material-ui/core';
import styled from 'styled-components';
import { COLORS } from 'colors';
import { format, parseISO } from 'date-fns';
import type { JobDTO } from 'types';

type Props = {
    job: JobDTO,
}

export const Job = ({ job }: Props) => {
    const shortName = job.companyName?.slice(0, 2);

    return (
        <JobRoot square>
            <Logo>{shortName}</Logo>
            <CompanyName>{job.companyName}</CompanyName>
            <Role>{job.role}</Role>
            <ExpirationDate>{format(parseISO(job.expirationDate), 'PP - p')}</ExpirationDate>
            <Price>${job.price}</Price>
            <Localisation>{job.localisation}</Localisation>
        </JobRoot>
    );
}

const JobRoot = styled(Card)`
    margin: 2px 0.5rem;
    padding: 1rem 1.5rem;

    display: grid;

    grid-template-columns: auto 2fr 1fr;
    grid-template-rows: repeat(3, auto);
    grid-template-areas: "logo companyName price" "logo role ." "logo expirationDate localisation";

    grid-gap: 0 1rem;
    align-items: start;
`;

const Logo = withStyles({
    root: {
        gridArea: 'logo',
        alignSelf: 'center',

        width: '4rem',
        height: '4rem',

        backgroundColor: 'red',
    },
})(Avatar);

const CompanyName = styled.div`
    grid-area: companyName;

    font-size: 1rem;
    font-weight: 600;
`;

const Role = styled.div`
    grid-area: role;

    margin-top: 0.5rem;
    color: ${COLORS.grey};
    font-size: 0.8rem;
    font-weight: 500;
`;

const ExpirationDate = styled.div`
    grid-area: expirationDate;

    color: ${COLORS.grey};
    font-size: 0.9rem;
`;

const Price = styled.div`
    grid-area: price;

    justify-self: end;

    font-size: 1rem;
    font-weight: 600;
`;

const Localisation = styled.div`
    grid-area: localisation;

    color: ${COLORS.grey};
    font-size: 0.9rem;
    justify-self: end;
    text-align: end;
`;
