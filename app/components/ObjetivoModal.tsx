import React, { useEffect, useState } from 'react';
import { Modal, View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Objetivo = {
  id?: number;
  titulo: string;
  descripcion?: string | null;
  fecha_limite?: string | null;
  completado?: boolean;
}

export default function ObjetivoModal({
  visible,
  onClose,
  onSave,
  initialData,
}: {
  visible: boolean;
  onClose: () => void;
  onSave: (payload: Partial<Objetivo> & { id?: number }) => Promise<void> | void;
  initialData?: Objetivo;
}) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fecha, setFecha] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitulo(initialData.titulo || '');
      setDescripcion(initialData.descripcion || '');
      setFecha(initialData.fecha_limite || '');
    } else {
      setTitulo('');
      setDescripcion('');
      setFecha('');
    }
  }, [initialData, visible]);

  const handleSave = async () => {
    if (!titulo.trim()) {
      Alert.alert('Validación', 'El título no puede estar vacío');
      return;
    }

    const payload: Partial<Objetivo> & { id?: number } = {
      titulo: titulo.trim(),
      descripcion: descripcion.trim() || null,
      fecha_limite: fecha ? fecha : null,
    };
    if (initialData && initialData.id) payload.id = initialData.id;

    await onSave(payload);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.center}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{initialData ? 'Editar objetivo' : 'Nuevo objetivo'}</Text>
            <TouchableOpacity onPress={onClose}><Ionicons name="close" size={22} /></TouchableOpacity>
          </View>

          <Text style={styles.label}>Título *</Text>
          <TextInput value={titulo} onChangeText={setTitulo} placeholder="Título" style={styles.input} />

          <Text style={styles.label}>Descripción</Text>
          <TextInput value={descripcion} onChangeText={setDescripcion} placeholder="Descripción (opcional)" style={[styles.input, { height: 80 }]} multiline />

          <Text style={styles.label}>Fecha límite (YYYY-MM-DD)</Text>
          <TextInput value={fecha} onChangeText={setFecha} placeholder="2025-12-31" style={styles.input} />

          <View style={styles.rowBtns}>
            <TouchableOpacity style={[styles.btn, styles.cancel]} onPress={onClose}>
              <Text style={styles.btnText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.save]} onPress={handleSave}>
              <Text style={[styles.btnText, { color: 'white' }]}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  modal: { width: '92%', backgroundColor: 'white', borderRadius: 10, padding: 16, elevation: 6 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  headerTitle: { fontSize: 18, fontWeight: '700' },
  label: { marginTop: 8, fontSize: 13, color: '#333' },
  input: { borderWidth: 1, borderColor: '#e6e6e6', borderRadius: 6, padding: 8, marginTop: 6 },
  rowBtns: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 12 },
  btn: { paddingVertical: 10, paddingHorizontal: 14, borderRadius: 6, marginLeft: 8 },
  cancel: { backgroundColor: '#f1f1f1' },
  save: { backgroundColor: '#0a7ea4' },
  btnText: { color: '#333', fontWeight: '600' },
});
