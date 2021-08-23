import React from 'react';
import { RectButton } from 'react-native-gesture-handler';

import PngDoctor from '../../assets/doctor1.png';

import {
    Container, 
    Details,
    Brand,
    Name,
    About,
    Rent,
    Period,
    Price,
    DoctorImg
} from './styles'

export function ServiceCard(){
    return (
        <Container>
            <Details>
                <Brand>Básico</Brand>
                <Name>Limpeza e Manutenção</Name>

                <About>
                    <Rent>
                        <Period>Consulta</Period>
                        <Price>R$30,00</Price>
                    </Rent>
                </About>
            </Details>

            <DoctorImg 
                source={PngDoctor}
                resizeMode="contain"
            />
            
        </Container>
    )
}