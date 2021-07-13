import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContainerCards = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto 5%;
  display: grid;
  gap: 12px;
  padding-bottom: 24px;
  /* grid-template-columns: repeat(3, 1fr); */
`;

export const ContainerHeader = styled.header`
  width: 90%;
  margin: 0 auto 24px;
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    color: #fff;
  }
`;
