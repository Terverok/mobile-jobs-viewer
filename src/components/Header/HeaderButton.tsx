import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton, withStyles } from '@material-ui/core';

type Props = {
    icon: IconDefinition,
};

export const HeaderButton = ({ icon }: Props) => (
    <WhiteIconButton>
        <FontAwesomeIcon icon={icon} />
    </WhiteIconButton>
);

const WhiteIconButton = withStyles({
    root: { color: 'white' },
})(IconButton);
