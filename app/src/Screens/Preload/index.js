import React, {useEffect} from 'react';
import {Container,LoadingIcon} from './styles';
import BarberLogo from '../../assets/barber.svg';
import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';


export default () => {

    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token ==! null){
    
            }else {
                navigation.navigate('SignIn');
            }
        }
        checkToken();
    
    }, []);

    return(
        <Container>
            <BarberLogo whidth="100%" height="160"/>
            <LoadingIcon size="large" color="#FFFFFF" />
        </Container>
    );
}
