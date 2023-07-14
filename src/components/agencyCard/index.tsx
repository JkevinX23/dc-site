import Image from 'next/image';
import React from 'react';

import * as S from './styles';

const AgencyCard = ({
  agencyName,
  agencyLogo,
  agencyLocation,
  agencyRating,
  isFollowing,
}: {
  agencyName: string;
  agencyLogo: string;
  agencyLocation: string;
  agencyRating: number;
  isFollowing: boolean;
}) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.InfoContainer>
          <S.Logo>
            <Image
              src={agencyLogo}
              width={150}
              height={50}
              alt="Logo da empresa"
            />
          </S.Logo>
          <S.BasicInfo>
            <S.Name>
              {agencyName}
              <S.Rating rating={agencyRating}>{agencyRating}</S.Rating>
            </S.Name>
            <S.Location>{agencyLocation}</S.Location>
          </S.BasicInfo>
        </S.InfoContainer>
        <S.FollowButton isFollowing={isFollowing}>
          {isFollowing ? 'seguindo' : 'seguir'}
        </S.FollowButton>
      </S.ImageContainer>
    </S.Container>
  );
};

export default AgencyCard;
