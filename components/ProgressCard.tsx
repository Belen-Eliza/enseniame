import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

interface Props {
  title: string;
  learned: number;
  total: number;
  onPress?: () => void;
}

export default function ProgressCard({ title, learned, total, onPress }: Props) {
  const progress = total > 0 ? Math.min(learned / total, 1) : 0;
  const percent = Math.round(progress * 100);

  return (
    <Pressable style={styles.card} onPress={onPress} disabled={!onPress}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.count}>{learned}/{total}</Text>
      </View>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${percent}%` }]} />
      </View>
      <Text style={styles.percent}>{percent}%</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#222',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  title: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 16,
  },
  count: {
    color: '#555',
    fontWeight: '600',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#e9f7f4',
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 10,
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

