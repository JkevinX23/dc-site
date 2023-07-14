import styled from 'styled-components';

export const Container = styled.div``;
export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;
`;

export const BasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;
export const RatingContainer = styled.div``;
export const Logo = styled.div`
  margin-left: 5px;
  margin-top: 5px;
  width: 80px;
  height: 80px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const Name = styled.h3`
  margin: 5px 0;
  font-size: 1.2rem;
`;
export const Location = styled.span``;

type FollowButtonProps = {
  isFollowing: boolean;
};

export const FollowButton = styled.button<FollowButtonProps>`
  margin-right: 5px;
  background-color: ${(props) => (props.isFollowing ? '#fff' : '#fa3faf')};
  color: ${(props) => (props.isFollowing ? '#fa3faf' : '#fff')};
  border: 2px solid #fa3faf;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) => (props.isFollowing ? '#fa3faf' : '#fff')};
    color: ${(props) => (props.isFollowing ? '#fff' : '#fa3faf')};
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

type RatingProps = {
  rating: number;
};

export const Rating = styled.div<RatingProps>`
  margin-left: 5px;
  margin-top: 5px;
  width: 15px;
  height: 15px;
  border-radius: 6px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: ${(props) => {
    const { rating } = props;
    const hue = 120 * (rating / 5); // Ajuste o denominador conforme a sua escala de classificação.
    return `hsl(${hue}, 100%, 50%)`;
  }};
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
`;
