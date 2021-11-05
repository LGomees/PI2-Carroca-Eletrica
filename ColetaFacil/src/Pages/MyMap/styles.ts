import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #3aafb9;
`;

export const ContentContainer = styled.View`
  flex: 9;
  flex-direction: row;
  /* width: 50%; */
  height: 98%;
  padding: 1%;
  margin-right: 5px;
  border-radius: 10px;
  background-color: #fefefe;
`;

export const SearchTextInput = styled.TextInput`
  color: black;
  border: 1px;
  border-color: black;
  height: 100%;
  overflow: visible;
`;

export const SearchContainer = styled.View`
  position: absolute;
  top: 10;
  left: 10;
  width: 30%;
  height: 100%;
  overflow: visible;
`;

export const MapContainer = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
`;
