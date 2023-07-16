import styled, { keyframes } from 'styled-components';

// INPUT
const slideUpAndDisappear = keyframes`
  0%   { transform: translateY(-10px); opacity: 1; }
  100% { transform: translateY(-30px); opacity: 0; font-size: 6px}
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  border-bottom: 1px solid silver;
  font-size: 24px;

  &:focus {
    outline: none;
  }

  &:focus ~ label,
  &:valid ~ label {
    outline: none;
    animation: ${slideUpAndDisappear} 1s forwards;
    font-size: 18px;
  }
`;
export const Label = styled.label`
  position: absolute;
  bottom: 0;
  left: 0;
  color: grey;
  pointer-events: none;
  transition: all 0.3s ease;
`;
export const InputWrapper = styled.div`
  padding-top: 5px;
  height: 50px;
  width: 70%;
  position: relative;

  .underline {
    position: absolute;
    bottom: -3px;
    height: 2px;
    width: 105%;
    background-color: #3f95fa;
    transform: scaleX(0);

    &::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: #3f95fa;
    }
  }

  &:focus-within .underline {
    transform: scaleX(1);
  }
`;

export const Container = styled.div``;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;

export const Hr = styled.hr`
  border: 1px solid #ccc;
`;
export const Button = styled.button``;
export const Switch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  padding: 10px;
`;
export const Content = styled.div``;
export const ImagesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  img {
    width: 250px;
  }
`;
export const Subtitle = styled.h2``;
export const DragAndDrop = styled.div``;
export const DetailsSection = styled.div``;
export const FieldLabel = styled.label``;
export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  gap: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: top;
`;

export const Collumn = styled.div`
  display: flex;
  flex-direction: column;
`;
