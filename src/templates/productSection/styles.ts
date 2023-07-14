import styled from 'styled-components';

export const Container = styled.section``;
export const Icon = styled.div`
  font-size: 25px;
`;

export const PackageBenefits = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

export const PackageBenefitDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`;
export const PackageBenefit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 20px;
  gap: 10px;

  h4 {
    padding-top: 4px;
    font-weight: 500;
    align-items: center;
    margin: 0;
    color: #111;
  }

  p {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    color: #909090;
  }
`;

export const Gallery = styled.div`
  width: 100vw;
  height: 40vh;
  margin-bottom: 100px;
`;

export const AgencyCard = styled.div`
  padding: 1.5rem;
`;
