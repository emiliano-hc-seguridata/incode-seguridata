import styled from 'styled-components/native';
import CustomText from '../CustomText/index';
import colors from '../Styles/colors';
import { RectButton } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';


export const Marco = styled.View`
flex: 1;
align-items: center;
justify-content: center;
padding: 15px;
background: ${colors.white};
`;

export const DivLogo = styled.View`
flex: 1;
align-items: center;
justify-content: center;
padding: 15px;
`;

export const DivButton = styled.View`
flex: 2;
align-items: center;
justify-content: center;
padding: 15px;
`;


export const ProductImage = styled.Image.attrs({
    resizeMode: 'contain'
  })`
  padding:2px;
  width: ${Dimensions.get('window').width * 1};`;



export const Button = styled.TouchableOpacity`
  background: ${colors.white};
  border-radius: 50px;
  padding: 5px;
  align-items: center;
  justify-content: center;
 
`;

export const LoginButtons = styled.TouchableOpacity`
background: #78aa2e;
color:white;
font-size: 1px;
margin: 10px;
padding: 0.25px 1px;
border: 2px solid #78aa2e;
border-radius: 3px;
`;

export const ButtonTexts = styled(CustomText)`
font-family: 'Arial';
margin: 5px;
font-size: 20;
color: ${colors.white};
`;