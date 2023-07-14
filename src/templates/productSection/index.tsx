import { FaHiking } from 'react-icons/fa';
import { IoBedOutline } from 'react-icons/io5';
import { RiBusFill } from 'react-icons/ri';
import { TbCoffee } from 'react-icons/tb';

import AgencyCard from '@/components/agencyCard';
import CollapseComponent from '@/components/collapse';
import GalleryThumbsComponent from '@/components/galleryThumbs ';

import * as S from './styles';

const Index = () => {
  const items = [
    {
      title: 'Dia 1 - Saída de Montes Claros - MG ',
      content: (
        <div>
          <p>
            Embarque em Montes Claros com destino a Porto Seguro. Chegada
            prevista para o dia seguinte.
          </p>
        </div>
      ),
    },
    {
      title: 'Dia 2 - Chegada em Porto Seguro - BA',
      content: (
        <div>
          <p>Chegada prevista para o dia seguinte.</p>
        </div>
      ),
    },
    {
      title: 'Dia 3 - Passeio de Escuna',
      content: (
        <div>
          <p>
            Embarque em Montes Claros com destino a Porto Seguro. Chegada
            prevista para o dia seguinte.
          </p>
        </div>
      ),
    },
    {
      title: 'Dia 4 - Passeio de Escuna',
      content: (
        <div>
          <p>
            Embarque em Montes Claros com destino a Porto Seguro. Chegada
            prevista para o dia seguinte.
          </p>
        </div>
      ),
    },
    {
      title: 'Dia 5 - Passeio de Escuna',
      content: (
        <div>
          <p>
            Embarque em Montes Claros com destino a Porto Seguro. Chegada
            prevista para o dia seguinte.
          </p>
        </div>
      ),
    },
  ];

  const agencyProps = {
    agencyName: 'Agência de Teste',
    agencyLogo: 'https://via.placeholder.com/150',
    agencyLocation: 'São Paulo - SP',
    agencyRating: 4.5,
    isFollowing: false,
  };

  return (
    <div>
      <h1>Viagem para Porto Seguro</h1>
      <S.Gallery>
        <GalleryThumbsComponent />
      </S.Gallery>
      <div>
        <h2> O que tem no pacote? </h2>
        <S.PackageBenefits>
          <S.PackageBenefit>
            <S.Icon>
              <TbCoffee />
            </S.Icon>
            <S.PackageBenefitDetails>
              <h4> Café da manhã </h4>
              <p> Inclui café da manhã na hospedagem</p>
            </S.PackageBenefitDetails>
          </S.PackageBenefit>

          <S.PackageBenefit>
            <S.Icon>
              <RiBusFill />
            </S.Icon>
            <S.PackageBenefitDetails>
              <h4> Transporte </h4>
              <p> Ida e volta até o destino</p>
            </S.PackageBenefitDetails>
          </S.PackageBenefit>

          <S.PackageBenefit>
            <S.Icon>
              <IoBedOutline />
            </S.Icon>
            <S.PackageBenefitDetails>
              <h4> Hospedagem </h4>
              <p>Com quarto duplo ou triplo.</p>
            </S.PackageBenefitDetails>
          </S.PackageBenefit>

          <S.PackageBenefit>
            <S.Icon>
              <FaHiking />
            </S.Icon>
            <S.PackageBenefitDetails>
              <h4> Guia </h4>
              <p>Guia turistico</p>
            </S.PackageBenefitDetails>
          </S.PackageBenefit>
        </S.PackageBenefits>
      </div>
      <h2>Programação</h2>
      <CollapseComponent items={items} />
      <S.AgencyCard>
        <AgencyCard {...agencyProps} />
      </S.AgencyCard>
    </div>
  );
};

export default Index;
