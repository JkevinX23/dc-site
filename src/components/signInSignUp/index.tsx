import { useState } from 'react';
import { BsFacebook, BsGoogle, BsInstagram } from 'react-icons/bs';

import * as S from './styles';

const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <S.Container isSignUp={isSignUp}>
      <S.SingUpContainer className="form-container">
        <S.Form>
          <S.H1>Criar conta</S.H1>
          <S.SocialContainer>
            <a href="#" className="social">
              <BsFacebook />
            </a>
            <a href="#" className="social">
              <BsInstagram />
            </a>
            <a href="#" className="social">
              <BsGoogle />
            </a>
          </S.SocialContainer>

          <span>ou use seu email para se registrar</span>
          <S.InputContainer>
            <S.Input type="text" placeholder="Nome" />
            <S.Input type="email" placeholder="E-mail" />
            <S.Input type="password" placeholder="Senha" />
            <S.Button type="submit">Cadastrar</S.Button>
          </S.InputContainer>
        </S.Form>
      </S.SingUpContainer>
      <S.SignInContainer className="form-container">
        <S.Form>
          <S.H1>Entrar</S.H1>
          <S.SocialContainer>
            <a href="#" className="social">
              <BsFacebook />
            </a>
            <a href="#" className="social">
              <BsInstagram />
            </a>
            <a href="#" className="social">
              <BsGoogle />
            </a>
          </S.SocialContainer>

          <span>ou use sua conta</span>
          <S.InputContainer>
            <S.Input type="email" placeholder="E-mail" />
            <S.Input type="password" placeholder="Senha" />
            <a href="#">Esqueceu sua senha?</a>
            <S.Button type="submit">Entrar</S.Button>
          </S.InputContainer>
        </S.Form>
      </S.SignInContainer>

      <S.OverlayContainer>
        <S.Overlay>
          <S.OverlayPanel className="overlay-right">
            <S.H1>Bem vindo de volta!</S.H1>
            <S.P>
              Para se manter conectado conosco, faça login com suas informações
              pessoais. Caso seja novo por aqui, clique no botão a baixo e crie
              sua conta.
            </S.P>
            <S.Button
              className="ghost"
              id="signIn"
              onClick={() => setIsSignUp(true)}
            >
              Cadastre-se
            </S.Button>
          </S.OverlayPanel>
          <S.OverlayPanel className="overlay-left">
            <S.H1>Olá, amigo!</S.H1>
            <S.P>Insira seus dados pessoais e comece uma jornada conosco</S.P>
            <S.Button
              className="ghost"
              id="signUp"
              onClick={() => setIsSignUp(false)}
            >
              Já tenho conta!
            </S.Button>
          </S.OverlayPanel>
        </S.Overlay>
      </S.OverlayContainer>
    </S.Container>
  );
};

export default SignInSignUp;
