import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 126px;

    background-color: ${({ theme }) => theme.colors.background_secondary};

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 24px;
    margin-bottom: 16px;
    border-radius: 30px;
`;

export const Details = styled.View`
    
`;

export const Brand = styled.Text`
    color: ${({ theme }) => theme.colors.text};
`;

export const Name = styled.Text`
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 700;
`;

export const About = styled.View`
    flex-direction: row;
    align-items: center;

    margin-top: 16px;
`;

export const Rent = styled.View`
    margin-right: 24px;
`;

export const Period = styled.Text`
    color: ${({ theme }) => theme.colors.text};
`;

export const Price = styled.Text`
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 700;
`;

export const Type = styled.View`
    
`;

export const DoctorImg = styled.Image`
    width: 167px;
    height: 85px;
`;