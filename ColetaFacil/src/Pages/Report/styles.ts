import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #3aafb9;
`;

export const TableReports = styled.View`
  width: 70%;
  font-weight: bold;
  border-radius: 10px;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  background-color: #3aafb9;
  color: white;
  margin-top: 5%;
  margin-left: 15%;
  padding: 4%;
  padding-left: 7%;
`;

export const SendEmail = styled.View`
  width: 50%;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
`;

export const ContentContainer = styled.View`
  flex: 9;
  /* width: 50%; */
  height: 96%;
  padding: 1%;
  margin-right: 5px;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fefefe;
`;
