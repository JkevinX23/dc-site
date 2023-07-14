import styled from 'styled-components';

import SignInSignUp from '@/components/signInSignUp';

const Div = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const AccessPage = () => {
  return (
    <Div>
      <div> Parceiros </div>
      <SignInSignUp />
    </Div>
  );
};

export default AccessPage;
