import React from 'react';
import { OutlinedInput, OutlinedInputProps } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styled from 'styled-components';
import { COLORS } from 'colors';

type Props = OutlinedInputProps & {
    icon: IconDefinition,
};

export const IconInputBase = (props: Props) => (
    <Input
        startAdornment={<Icon icon={props.icon} />}
        className="icon-input"
        {...props}
    />
);

export const IconInput = styled(IconInputBase)``;

const Icon = styled(FontAwesomeIcon)`
    margin: 0 0.5rem;
    position: relative;
    top: -2px;

    color: ${COLORS.grey};
`;

const Input = styled(OutlinedInput)`
    margin: 1rem;
`;
