import styled from 'styled-components';

export const Container = styled.div`
  .MuiButtonBase-root {
    transition: transform 0.2s;
    &.rotate {
      transform: rotate(180deg);
    }
  }
  .MuiCardActions-root {
    justify-content: flex-end;
  }
`;
