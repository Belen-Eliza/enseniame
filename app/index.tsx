import { BotonLogin } from '@/components/botones';
import { paleta } from '@/components/colores';
import { estilos } from '@/components/estilos';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { get_user_by_id } from '@/conexiones/gestion_usuarios';
import { useUserContext } from '@/hooks/useUserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

export default function Index() {
  const contexto = useUserContext();

  const img = require("../assets/images/lsa-aqua.png");

  useEffect( () => {
    (async ()=>  {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) { 
        try {
          const usuario = await get_user_by_id(Number(value)) ;
          if (usuario) contexto.login_app(usuario);
        } catch (error) {
          console.log(error," al regresar a la sesión");
        }
        
      }
    } )()
  }, [])

  return (    
    <ThemedView  style={styles.mainView}  lightColor='white'>
      <View style={[styles.partition]}>
        <Image
          source={img}
          style={styles.logo}
          contentFit="contain"
        />
      </View>
      <View style={[styles.partition,estilos.centrado]}>
        <ThemedView style={[styles.titleContainer,estilos.centrado]}>
          <ThemedText type="title" style={{fontSize: 40}}>¡Hola!</ThemedText>        
        </ThemedView>

      <ThemedView style={[styles.stepContainer,estilos.centrado]}>
        <ThemedText>
          <ThemedText type="subtitle">¿Qué es </ThemedText>{''}
          <ThemedText type="subtitle">En</ThemedText>{''}
          <ThemedText type="subtitle" lightColor="#03a793">seña</ThemedText>{''}
          <ThemedText type="subtitle">me?</ThemedText>
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">En</ThemedText>{''}
          <ThemedText type="defaultSemiBold" lightColor="#03a793">seña</ThemedText>{''}
          <ThemedText type="defaultSemiBold">me</ThemedText>{' '}
           es una aplicación de aprendizaje de 
          <ThemedText type="defaultSemiBold"> Lengua de Señas Argentina (LSA)</ThemedText>.
        </ThemedText>
          
      </ThemedView>

      <ThemedView style={[styles.stepContainer,estilos.centrado]}>
        <ThemedText type="subtitle">¿Para quién es?</ThemedText>
        <ThemedText>
          Está pensada para personas oyentes que desean aprender 
          <ThemedText type="defaultSemiBold"> LSA</ThemedText>{' '}
           para poder comunicarse con las personas sordas en su lengua natural. 
        </ThemedText>
      </ThemedView>

      <ThemedView style={[styles.stepContainer,estilos.centrado]}>
        <ThemedText type="subtitle">Primeros pasos</ThemedText>
        <ThemedText>
          {`Para comenzar, creá una nueva cuenta y... `}
          <ThemedText type="defaultSemiBold">¡a aprender!</ThemedText>
        </ThemedText>
      </ThemedView>

      <BotonLogin callback={()=>{router.navigate('/login');}} textColor={'black'} bckColor={paleta.sea_green} text={'Empezar'} />
      </View>
      
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  mainView:{
    flexDirection: "row",
    flex: 1,
    height: "100%",
    width: "100%"
  },
  partition:{
    height: "100%",
    width: "50%",
    padding: 40
  },  
  logo: {
    height: "100%",
    width: "100%",  
      
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 40
  },
  stepContainer: {
    gap: 18,
    marginVertical: 8,
    maxWidth: 500
  },
  
})
