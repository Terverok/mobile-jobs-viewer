import React from 'react';
import { Breadcrumbs as MaterialBreadcrumbs, withStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

type Props = {
    path: string[],
};

export const Breadcrumbs = ({ path }: Props) => (
    <StyledBreadcrumbs separator={<FontAwesomeIcon size="xs" icon={faChevronRight} />}>
        {path.map(subpath => <span>{subpath}</span>)}
    </StyledBreadcrumbs>
);

const StyledBreadcrumbs = withStyles({
    root: { margin: '1rem' },
})(MaterialBreadcrumbs);
