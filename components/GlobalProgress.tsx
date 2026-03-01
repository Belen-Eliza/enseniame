import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  learned: number;
  total: number;
}

export default function GlobalProgress({ learned, total }: Props) {
  const progress = total > 0 ? Math.min(learned / total, 1) : 0;
  const percent = Math.round(progress * 100);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Progreso Global</Text>
      <Text style={styles.total}>{learned}/{total} señas</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${percent}%` }]} />
      </View>
      <Text style={styles.percent}>{percent}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#222',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 6,
  },
  total: {
    color: '#555',
    marginBottom: 8,
  },
  progressBar: {
    height: 12,
    backgroundColor: '#e9f7f4',
    borderRadius: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#20bfa9',
    borderRadius: 8,
  },
  percent: {
    alignSelf: 'flex-end',
    color: '#20bfa9',
    fontWeight: 'bold',
    marginTop: 6,
  },
});

