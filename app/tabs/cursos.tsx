import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Cursos() {
  type IoniconName = 
    | "school-outline"
    | "chatbubble-ellipses-outline"
    | "briefcase-outline"
    | "people-outline";

  const cursos: {
    nombre: string;
    icon: IoniconName;
    dificultad: string;
    dificultadColor: string;
    progreso: number;
  }[] = [
    {
      nombre: 'LSA Básico',
      icon: 'school-outline',
      dificultad: 'Fácil',
      dificultadColor: '#20bfa9',
      progreso: 0.7,
    },
    {
      nombre: 'Conversación Cotidiana',
      icon: 'chatbubble-ellipses-outline',
      dificultad: 'Intermedio',
      dificultadColor: '#ffd600',
      progreso: 0.35,
    },
    {
      nombre: 'LSA para Profesionales',
      icon: 'briefcase-outline',
      dificultad: 'Difícil',
      dificultadColor: '#ffb703', 
      progreso: 0.12,
    },
    {
      nombre: 'Cultura Sorda y Comunidad',
      icon: 'people-outline',
      dificultad: 'Experto',
      dificultadColor: '#20bfa9', 
      progreso: 0.0,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cursos</Text>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {cursos.map((curso, idx) => (
          <View key={idx} style={styles.card}>
            <View style={styles.cardHeader}>
              <Ionicons name={curso.icon} size={36} color="#222" style={styles.cardIcon} />
              <View style={{flex:1}}>
                <Text style={styles.cardTitle}>{curso.nombre}</Text>
                <View style={styles.difficultyRow}>
                  <Ionicons name="ellipse" size={14} color={curso.dificultadColor} style={{marginRight:6}} />
                  <Text style={[styles.difficultyText, {color: curso.dificultadColor}]}>{curso.dificultad}</Text>
                </View>
              </View>
            </View>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, {width: `${curso.progreso*100}%`, backgroundColor: curso.dificultadColor}]} />
            </View>
            <Text style={styles.progressText}>{Math.round(curso.progreso*100)}% completado</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f7f2', 
    paddingTop: 0,
    paddingHorizontal: 0,
    position: 'relative',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 48,
    marginBottom: 28,
    alignSelf: 'center',
    fontFamily: 'System',
    letterSpacing: 0.5,
    zIndex: 2,
  },
  scrollContent: {
    paddingBottom: 40,
    alignItems: 'center',
    zIndex: 2,
  },
  card: {
    width: '92%',
    backgroundColor: '#fff',
    borderRadius: 32,
    padding: 24,
    marginBottom: 28,
    shadowColor: '#222',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
    alignItems: 'flex-start',
    borderWidth: 1.5,
    borderColor: '#e0e0e0',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardIcon: {
    marginRight: 18,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 2,
    fontFamily: 'System',
    letterSpacing: 0.2,
  },
  difficultyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  difficultyText: {
    fontSize: 15,
    fontWeight: '600',
    opacity: 0.85,
    fontFamily: 'System',
  },
  progressBarBg: {
    width: '100%',
    height: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginTop: 12,
    marginBottom: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 8,
  },
  progressText: {
    fontSize: 13,
    color: '#222',
    fontWeight: '500',
    marginTop: 2,
    opacity: 0.7,
    fontFamily: 'System',
  },
});