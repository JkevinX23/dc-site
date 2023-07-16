import { Button, DatePicker, Form, Select, Switch } from 'antd';
import locale from 'antd/es/date-picker/locale/pt_BR';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';
import { BsCheck } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

import DriverDropdown from './components/driver.dropdown';
import Uploader from './components/uploadFile';
import * as S from './styles';

const { RangePicker } = DatePicker;
const CreatePackageSection = () => {
  const drivers = [
    {
      value: 'Marcio Souza',
    },
    {
      value: 'João Rodrigues',
    },
    {
      value: 'Pedro Silva',
    },
    {
      value: 'Kevin Souza',
    },
  ];

  const vehicles = [
    {
      value: 'Mercedes Benz - 2019',
    },
    {
      value: 'Marcopolo mini volare',
    },
    {
      value: 'Iveco Daily',
    },
  ];

  return (
    <S.Container>
      <S.Header>
        <S.InputWrapper>
          <S.Input type="text" required />
          <div className="underline" />
          <S.Label>Nome do pacote</S.Label>
        </S.InputWrapper>

        <div>
          <div className="buttons">
            <Button ghost type="primary">
              Salvar como rascunho
            </Button>
            <Button type="primary">Salvar</Button>
          </div>
          <S.Switch>
            <Switch
              checkedChildren={<BsCheck />}
              unCheckedChildren={<IoClose />}
              defaultChecked
            />
            Publicar pacote
          </S.Switch>
        </div>
      </S.Header>

      <S.Hr />
      <Form>
        <S.ImagesSection>
          <div>
            <S.Subtitle> Imagem principal </S.Subtitle>
            <Uploader />
          </div>
          <div>
            <S.Subtitle> Imagens adicionais </S.Subtitle>
            <Uploader maxFiles={10} />
          </div>
        </S.ImagesSection>

        <label> Descrição do pacote</label>
        <TextArea rows={4} />

        <S.DetailsSection>
          <S.Subtitle> Detalhes Internos </S.Subtitle>
          <S.Row>
            <S.Dropdown>
              <S.FieldLabel> Selecione o(s) mototista(s) </S.FieldLabel>
              <DriverDropdown options={drivers} />
            </S.Dropdown>
            <S.Dropdown>
              <S.FieldLabel> Selecione o(s) veiculo(s) </S.FieldLabel>
              <DriverDropdown options={vehicles} />
            </S.Dropdown>

            <S.Dropdown>
              <S.FieldLabel> Selecione o(s) responsável(veis) </S.FieldLabel>
              <DriverDropdown options={drivers} />
            </S.Dropdown>
          </S.Row>
        </S.DetailsSection>

        <S.DetailsSection>
          <S.Subtitle> Detalhes Do Pacote </S.Subtitle>
          <S.Row>
            <S.Collumn>
              <S.FieldLabel>Origem</S.FieldLabel>
              <Select
                defaultValue="lucy"
                options={[{ value: 'lucy', label: 'Montes Claros - MG' }]}
              />
            </S.Collumn>
            <S.Collumn>
              <S.FieldLabel>Destino</S.FieldLabel>
              <Select
                defaultValue="lucy"
                options={[{ value: 'lucy', label: 'Porto Seguro - BA' }]}
              />
            </S.Collumn>
            <S.Collumn>
              <S.FieldLabel>Ida e Volta</S.FieldLabel>
              <RangePicker locale={locale} format="DD/MM/YYYY" />
            </S.Collumn>
          </S.Row>
        </S.DetailsSection>
      </Form>
    </S.Container>
  );
};

export default CreatePackageSection;
