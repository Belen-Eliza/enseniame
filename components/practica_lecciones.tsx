import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ProgressBarAnimada } from './animations/ProgressBarAnimada';
import { BotonLogin } from './botones';
import { paleta, paleta_colores } from './colores';
import { estilos } from './estilos';
import { ThemedText } from './ThemedText';
import { Senia_Alumno } from './types';
import VideoPlayer from './VideoPlayer';

type Senia_Leccion ={
  senia: Senia_Alumno;    
  descripcion?: string;
  aprendiendo: boolean;
}

function FlashCardVideo ({senia_actual,setMostrarRes,currentIndex,total,opciones_senias}:
  {senia_actual:Senia_Alumno,
    setMostrarRes:React.Dispatch<React.SetStateAction<boolean>>,
    currentIndex:number,
    total:number,
    opciones_senias?: Senia_Leccion[]
  }){

    const [selectedSenia,setSelectedSenia]= useState<Senia_Alumno>();

    const renderOpciones = ({ item }: { item: Senia_Leccion }) => (
    <TouchableOpacity onPress={()=>setSelectedSenia(item.senia)} style={[styles.filtros, estilos.centrado,
      {backgroundColor: selectedSenia && selectedSenia.info.id==item.senia.info.id ? paleta.blue:paleta.turquesa}]}>
      <ThemedText lightColor={selectedSenia && selectedSenia.info.id==item.senia.info.id ? "white":"black"}>
        {item.senia.info.significado}</ThemedText>
    </TouchableOpacity>
  );


    return (
      <>
      <View style={[styles.progressBarRow,estilos.centrado]}>
          <ProgressBarAnimada progress={currentIndex/total*100} />   
          <ThemedText style={{marginLeft:6}}>{currentIndex}/{total}</ThemedText>
        </View>   
      
        <View style={[styles.bck_content,estilos.centrado]}>                             
            
          <View style={[styles.card,paleta_colores.dark_aqua,estilos.centrado,{height:"auto"}]}>
          <ThemedText style={[styles.title]}>Identificar el significado de la seña</ThemedText>
          
            <VideoPlayer 
            uri={senia_actual.info.video_url}
            style={styles.video}
            />        

          {/* <FlatList 
            data={opciones_senias?.slice(0,4)}
            renderItem={renderOpciones}
            keyExtractor={(item) => item.senia.info.id.toString()}
            contentContainerStyle={[estilos.centrado,styles.opciones]}
            ItemSeparatorComponent={() => <View style={styles.separator}  /> }
            columnWrapperStyle={{marginHorizontal:10}}
            numColumns={2}
          /> */}
            
          
          <BotonLogin callback={()=>setMostrarRes(true)} 
              textColor={'white'} bckColor={"#006868"} text={'Ver respuesta'}    />
          </View>        
                                      
        </View></>
    )
}

function FlashCardNombre ({senia_actual,setMostrarRes,currentIndex,total}:
  {senia_actual:Senia_Alumno,
    setMostrarRes:React.Dispatch<React.SetStateAction<boolean>>,
    currentIndex:number,
    total:number
  }){

    return (
      <>
        <View style={[styles.progressBarRow,estilos.centrado]}>
          <ProgressBarAnimada progress={currentIndex/total*100} />   
          <ThemedText style={{marginLeft:6}}>{currentIndex}/{total}</ThemedText>
        </View>   
      
        <View style={[styles.bck_content,estilos.centrado]}>                             
            
          <View style={[styles.card,paleta_colores.dark_aqua,estilos.centrado]}>
          <ThemedText style={[styles.title]}>Identificar la seña correspondiente</ThemedText>
          
            <View style={[styles.card,estilos.centrado,{marginBottom:10,height:"50%",padding:0}]}>
              <ThemedText style={[estilos.centrado,styles.texto_significado]}>
                {senia_actual.info.significado} 
              </ThemedText>
            </View>                  
          
          <BotonLogin callback={()=>setMostrarRes(true)} 
              textColor={'white'} bckColor={"#006868"} text={'Ver respuesta'}    />
          </View>        
                                      
        </View></>
    )
}

export { FlashCardNombre, FlashCardVideo };

const styles = StyleSheet.create({
    bck_content:{
    width: "100%",
    backgroundColor: "white",
    height: "85%",
    borderRadius: 20
  },
  video: {
    width: '100%',
    aspectRatio: 16/9,
    borderRadius: 12,
    marginBottom: 25
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,    
    shadowColor: "#222",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
    width:"95%",
    height:"70%",
    marginBottom: 100
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    color: "white",    
    marginBottom:40
  },
  progressBarRow:{
    flexDirection:"row",
    width:"85%",
    justifyContent:"space-between",
    marginBottom:25
  },
  texto_significado:{
    color:paleta.blue,
    fontSize:40,
    padding:30,
    lineHeight:50,
    textAlign:"center",
    fontWeight: "500"
  },
  opciones:{
    height: 120,   
    marginBottom:0,
     
  },
  separator:{

  },
  filtros: {
    padding: 8,
    borderRadius: 12,        
    margin: 5,
    marginBottom: 15,
    width: 150
  },
})