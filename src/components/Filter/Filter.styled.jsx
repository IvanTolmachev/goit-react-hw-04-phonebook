import styled from '@emotion/styled';

export const Input = styled.input`
  height: 30px;
  padding: 5px;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 500;
  transition: box-shadow 0.3s ease-in-out;
  &:hover,
  focus {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;
