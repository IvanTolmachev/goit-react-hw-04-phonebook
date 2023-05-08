import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 10px;
  font-weight: 500;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  font-weight: 500;
  text-transform: uppercase;
`;

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

export const AddBtn = styled.button`
  font-size: 17px;
  font-weight: 700;
  height: 40px;
  width: 150px;
  border: 2px solid #c7c7c7;
  border-radius: 10px;
  color: black;

  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  &:hover {
    background-color: green;
    color: #fff;
  }
`;
