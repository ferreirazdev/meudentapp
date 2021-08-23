import React, { useState, useEffect } from 'react';
import { AppState, StatusBar } from 'react-native';
import { SearchInput } from '../../components/SearchInput';
import { ServiceCard } from '../../components/ServiceCard';
import LogoSvg from '../../assets/logo.svg';
import { api } from '../../services/api';
import { ServicesDTO } from '../../dtos/ServicesDTO';

import { Text } from 'react-native'

import { 
  Container,
  Header,
  SearchBarWrapper,
  ServicesList
} from './styles';


export function Home(){
  const [services, setServices] = useState<ServicesDTO[]>([]);
  const [loading, setLoading] = useState(true);

  function handleServiceDetails(service: ServicesDTO){
    
  }

  

  useEffect(() => {
    async function fetchServices(){
      const response = await api.get('/services')
  
      setServices(response.data)
      setLoading(false)
    }
    
    fetchServices();
  }, [])

  return (
    <Container>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <LogoSvg 
          width="55"
          style={{ alignSelf: 'center'}}
        />
        <SearchBarWrapper>
          <SearchInput 
            placeholder="Busque um atendimento"
          />
        </SearchBarWrapper>
      </Header>

      {
        loading ? <Text>Carregando...</Text> :
        <ServicesList 
          data={services}
          keyExtractor={item => item.id}
          renderItem={({ item }) => 
            <ServiceCard 
              data={item}
            />
          }
        />
      }
      
    </Container>
  );
}