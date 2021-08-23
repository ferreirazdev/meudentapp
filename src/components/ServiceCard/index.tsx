import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { ServicesDTO } from '../../dtos/ServicesDTO';

import PngDoctor from '../../assets/doctor1.png';

import {
    Container, 
    Details,
    Type,
    Name,
    About,
    Rent,
    Period,
    Price,
    DoctorImg
} from './styles'

interface Props extends RectButtonProps {
  data: ServicesDTO;
}

export function ServiceCard({ data, ...rest }: Props){
    return (
        <Container>
            <Details>
                <Type>{data.type}</Type>
                <Name>{data.name}</Name>

                <About>
                    <Rent>
                        <Period>{data.period}</Period>
                        <Price>{`R$ ${data.price}`}</Price>
                    </Rent>
                </About>
            </Details>

            <DoctorImg 
                source={{uri: data.thumbnail}}
                resizeMode="contain"
            />
            
        </Container>
    )
}