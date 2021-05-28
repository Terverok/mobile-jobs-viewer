import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/faveoWhite.svg';
import sampleAvatar from '../../assets/sampleAvatar.webp';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { HeaderButton } from './HeaderButton';

type Props = {
    onlyLogo?: boolean;
}

export const Header = ({ onlyLogo }: Props) => (
    <HeaderContent>
        {onlyLogo && <Image src={logo} />}
        {!onlyLogo && (
            <>
                <HeaderButton icon={faBars} />
                <RightSide>
                    <HeaderButton icon={faSearch} />
                    <HeaderButton icon={faBell} />
                    <Avatar src={sampleAvatar} />
                </RightSide>
            </>
        )}
    </HeaderContent>
);

const Image = styled.img`
    margin: 1rem;

    font-size: 1rem;
    color: white;
`;

const HeaderContent = styled.header`
    height: 5em;
    width: 100vw;
    background-color: #0777f7;

    display: flex;
    align-items: center;
`;

const Avatar = styled.img`
    width: 3rem;
    height: auto;

    border-radius: 50%;
    border: 2px solid white;

    margin: 0.5rem;

    clip-path: circle(50% at 50% 50%);
`;

const RightSide = styled.div`
    margin-left: auto;
    margin-right: 1rem;

    display: flex;
    align-items: center;
`;
