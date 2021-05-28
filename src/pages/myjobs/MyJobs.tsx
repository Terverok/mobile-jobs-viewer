import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Button, Input, MenuItem, Select, Tabs, Tab, withStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faDownload, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Breadcrumbs } from 'components/Breadcrumbs';
import { IconInput } from 'components/IconInput';
import { JobsList } from 'components/JobsList';
import jobs from 'mocks/jobs';
import { COLORS } from 'colors';
import { JobType } from 'types';
import { useFilters } from './useFilters';

export const MyJobs = () => {
    const [activeTab, setActiveTab] = useState<JobType>(JobType.Active);
    const [searchedTerm, setSearchedTerm] = useState<string | null>(null);

    const changeActiveTab = useCallback(
        (_e: any, value: JobType) => setActiveTab(value),
        [],
    );

    const changeSearchedTerm = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchedTerm(e.target.value);
    }, [])

    const displayedJobs = useFilters(jobs, searchedTerm, activeTab);

    return (
        <Root>
            <Breadcrumbs path={['Dashboard', 'My Jobs']} />
            <Header>All Jobs</Header>
            <ExportButton
                startIcon={<FontAwesomeIcon icon={faDownload} />}
            >
                export
            </ExportButton>
            <StyledTabs
                value={activeTab}
                onChange={changeActiveTab}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
            >
                <StyledTab label="active" value={JobType.Active} />
                <StyledTab label="upcoming" value={JobType.Upcoming} />
                <StyledTab label="completed" value={JobType.Completed} />
            </StyledTabs>
            <Filters>
                <IconInput
                    icon={faSearch}
                    placeholder="Search Job"
                    margin="dense"
                    value={searchedTerm}
                    onChange={changeSearchedTerm}
                />
                <Select
                    value="date"
                    input={<StyledInput disableUnderline />}
                >
                    <MenuItem value="date">Date</MenuItem>
                </Select>
            </Filters>
            <JobsList jobs={displayedJobs} />
        </Root>
    );
}

const Root = styled.div`
    background-color: ${COLORS.neutralBackground};
`;

const Header = styled.header`
    margin: 1rem;

    font-size: 2rem;
`;

const ExportButton = withStyles({
    root: {
        fontWeight: 600,
        margin: '0 1rem',
    },
    startIcon: { color: COLORS.grey },
})(Button);

const sideMargin = '0.5rem';

const StyledTabs = styled(Tabs)`
    background-color: white;
    margin: 0 ${sideMargin};
`;

const StyledTab = withStyles({
    root: { fontWeight: 800 },
})(Tab);

const StyledInput = withStyles({
    input: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '0.8rem',
        fontSize: '1.2rem',
    }
})(Input);

const Filters = styled.div`
    margin: 0 ${sideMargin};

    background-color: white;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;
