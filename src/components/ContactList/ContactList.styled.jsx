import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 10px;
  font-weight: 500;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
`;
export const Name = styled.p`
  font-size: 17px;
  font-weight: 700;
  margin-right: 10px;
`;

export const NumberName = styled.span`
  font-size: 22px;
  font-weight: 500;
  margin-right: 10px;
`;

export const DeleteBtn = styled.button`
  font-size: 17px;
  font-weight: 700;
  height: 40px;
  margin-left: auto;
  padding: 10px;
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
    background-color: red;
    color: #fff;
  }
`;
