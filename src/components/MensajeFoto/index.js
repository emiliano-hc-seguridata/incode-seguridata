import React, { useEffect, useState } from 'react';
import {
    Marco,
    DivButton,
    ButtonTexts,ButtonTextMensaje,LoginButtons,DivLogo,Header,FinishButtonse} from './styles';
    import { SafeAreaView} from 'react-native-safe-area-context';
    import { FontAwesome } from '@expo/vector-icons/'; 
    import colors from '../Styles/colors';

export default function MensajeFoto({navigation}){
  return(
      <>
<SafeAreaView edges={['top']} style={{backgroundColor:"#78aa2e"}}/>
        <Marco>
   <Header>
    <FinishButtonse onPress={()=>navigation.goBack()}>
          <FontAwesome name="arrow-left" color={colors.blackColor} size={18} />
          </FinishButtonse>
          <ButtonTexts>Regresar</ButtonTexts>
      </Header>
           <DivLogo>            
           <ButtonTexts>Se tomara una foto</ButtonTexts>
        </DivLogo>
        <DivButton>

          <LoginButtons
          onPress={() => {
  console.log("clic")
          }}
        >
         <ButtonTexts>Continuar</ButtonTexts>
        </LoginButtons>
        </DivButton>
        </Marco>
        </>
    )
}   