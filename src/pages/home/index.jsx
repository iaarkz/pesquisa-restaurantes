import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map } from '../../components';
import { Container, Carousel, Search, Logo, Wrapper, CarouselTitle } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptativeHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo Restaurante" />
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurante} title="nome" />
            <Card photo={restaurante} title="nome" />
            <Card photo={restaurante} title="nome" />
            <Card photo={restaurante} title="nome" />
            <Card photo={restaurante} title="nome" />
            <Card photo={restaurante} title="nome" />
          </Carousel>
        </Search>
        <RestaurantCard />
      </Container>
      <Map />
      {/*      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
       */}
    </Wrapper>
  );
};

export default Home;

/* Concluindo a busca de restaurantes e introdução ao Redux */
