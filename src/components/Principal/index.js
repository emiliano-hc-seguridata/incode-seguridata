import React, { useEffect, useState } from 'react';
import {
    Marco,
    DivLogo,
    ProductImage,
    DivButton,
    ButtonTexts,LoginButtons} from './styles';
import logo from '~/assets/icon/logo.png';

export default function Principal({navigation}) {
    return(
        <Marco>
        <DivLogo>            
                <ProductImage source={logo} />
        </DivLogo>
        <DivButton>
          <LoginButtons
          onPress={() => {
  console.log("clic")
          }}
        >
         <ButtonTexts>Generar proceso de enrolamiento nuevo</ButtonTexts>
        </LoginButtons>
        <LoginButtons
          onPress={() => {
            navigation.navigate('MensajeFoto');
          }}
        >
         <ButtonTexts>Validar registro de usuario</ButtonTexts>
        </LoginButtons>
        </DivButton>
        </Marco>
    )
}   