import React, { useCallback, useState } from 'react';
import { IconInput } from '../../components/IconInput';
import { FormControlLabel, Checkbox, Button, withStyles } from '@material-ui/core';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useAuth } from './useAuth';

type Props = {
    onLoggedIn?: () => void;
};

export const Login = ({ onLoggedIn }: Props) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const changeEmail = useCallback((event) => {
        setEmail(event.target.value);
    }, []);

    const changePassword = useCallback((event) => {
        setPassword(event.target.value);
    }, []);

    const [isKeepSignedIn, setKeepSignedIn] = useState(false);
    const [login, hasLoginFailed] = useAuth(email, password, isKeepSignedIn, onLoggedIn);

    const changeKeepSignedIn = useCallback(() => {
        setKeepSignedIn((currentValue) => !currentValue);
    }, []);

    return (
        <LoginContent>
            <Header>Log in</Header>
            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat consequat interdum.</Description>
            <Inputs>
                <IconInput
                    error={hasLoginFailed!}
                    icon={faUser}
                    placeholder="Email"
                    value={email}
                    onChange={changeEmail}
                />
                <IconInput
                    error={hasLoginFailed!}
                    icon={faLock}
                    inputProps={{ type: 'password' }}
                    placeholder="Password"
                    value={password}
                    onChange={changePassword}
                />
            </Inputs>

            <Row>
                <FormControlLabel
                    control={(
                        <Checkbox
                            checked={isKeepSignedIn}
                            onChange={changeKeepSignedIn}
                            color="primary"
                            name="rememberMe"
                        />
                    )}
                    label="Keep me signed in"
                />

                <ForgotPasswordLink href="https://www.lastpass.com/password-generator">
                    Forgot Password?
                </ForgotPasswordLink>
            </Row>

            <Bottom>
                <SignInButton
                    variant="contained"
                    color="primary"
                    onClick={login}
                >
                    SIGN IT
                </SignInButton>
            </Bottom>
        </LoginContent>
    );
}

const leftAlignmentLength = 1;

const LoginContent = styled.div`
    display: flex;
    flex-direction: column;

    flex: 1;
`;

const Header = styled.div`
    font-size: 2rem;

    margin: 2rem 0rem 0rem ${leftAlignmentLength}rem;
`;

const Description = styled.div`
    word-break: break-word;

    font-weight: 200;
    margin: ${leftAlignmentLength}rem;
`;

const Inputs = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    ${IconInput} {
        width: calc(100% - ${2 * leftAlignmentLength}rem);
    }
`;

const Row = styled.div`
    margin: 0 ${leftAlignmentLength}rem;

    display: flex;
    align-items: center;
`;

const ForgotPasswordLink = styled.a`
    margin-left: auto;
`;

const Bottom = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const SignInButton = withStyles({
    root: {
        width: `calc(100% - ${2 * leftAlignmentLength}rem)`,
        marginLeft: `${leftAlignmentLength}rem`,
        marginBottom: '3rem',
    },
})(Button);
