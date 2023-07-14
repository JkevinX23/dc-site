import styled from 'styled-components';

export const P = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

export const H1 = styled.h1`
  font-weight: bold;
  margin: 0;
  font-size: 24px;
`;

export const SignInContainer = styled.div`
  left: 0;
  width: 50%;
  z-index: 2;
`;

export const SingUpContainer = styled.div`
  left: 0;
  width: 50%;
  z-index: 1;
  opacity: 0;
`;

export const Form = styled.form`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 50px;
  height: 100%;
`;
export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;
export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #ec008c;
  background-color: #ec008c;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 120ms ease-in;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #ec008c;

    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #fff;
    color: #fff;
    transform: scale(0.95);
  }

  &.ghost {
    background-color: transparent;
    border-color: #fff;
  }
  &.ghost:hover {
    background-color: #fff;
    color: #ec008c;
  }
`;
export const SocialContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 1rem;
  align-items: center;
  a {
    border: 1px solid #ddd;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
`;
export const Overlay = styled.div`
  background: #fc6767;
  background: linear-gradient(to right, #ec008c, #fc6767) no-repeat 0 0 / cover;
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;
export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 40px;
  height: 100%;
  width: 50%;
  left: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  z-index: 100;

  &.overlay-right {
    right: 0;
    transform: translateX(0);
  }

  &.overlay-left {
    left: 0%;
    transform: translateX(0);
  }
`;

export type ContainerProps = {
  isSignUp: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;

  span {
    font-size: 12px;
  }

  a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
  }

  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
  }

  // animation - move signin to the right

  ${({ isSignUp }) =>
    isSignUp
      ? `
    ${SignInContainer} {
        transform: translateX(100%);
    }
    ${OverlayContainer} {
        transform: translateX(-100%);
    }
    ${SingUpContainer} {
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
    }
    ${Overlay} {
        transform: translateX(50%);
        }

    ${OverlayPanel} {
        .overlay-left {
            transform: translateX(20%);
          }
    }
  `
      : ``}
`;
