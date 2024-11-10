import styled from 'styled-components';

export const Wrapper = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 20px;
    padding-left: 25px;
  }
`;
