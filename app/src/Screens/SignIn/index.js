import React, {useState} from 'react';

import {
    Container,
    InputArea, 
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles';

import SignInput from '../../components/SignInput';

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {

    const [emailField, SetEmailField] = useState('');
    const [passworldField, SetPassworldField] = useState('');

    return(
        <Container>
            <BarberLogo width="100%" height="160"/>

            <InputArea>

<SignInput
    IconSvg={EmailIcon}
    placeholder="Digite seu e-mail"
    value={emailField}
    onChangeText={t => SetEmailField(t)}
        
/>

<SignInput 
    IconSvg={LockIcon}
    placeholder="Digite sua senha"
    password={true}
    value={passworldField}
    onChangeText={t => SetPassworldField(t)}       
/>

<CustomButton >
    <CustomButtonText>LOGIN</CustomButtonText>
</CustomButton>
</InputArea>

            <SignMessageButton>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}
