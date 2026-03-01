import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  nombre: string;
  modulo: string;
  fechaISO: string; // ISO timestamp
};

export default function HistorialItem({ nombre, modulo, fechaISO }: Props) {
  const date = new Date(fechaISO);
  const fecha = isNaN(date.getTime()) ? fechaISO : date.toLocaleString();

  return (
    <View style={styles.card}>
      <Text style={styles.nombre}>{nombre}</Text>
      <View style={styles.row}>
        <Text style={styles.badge}>{modulo}</Text>
        <Text style={styles.fecha}>{fecha}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  nombre: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
    marginBottom: 6,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#e6f7f2',
    color: '#20bfa9',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    fontWeight: '600',
  },
  fecha: {
    color: '#555',
  },
});
