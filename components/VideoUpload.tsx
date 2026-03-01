import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Alert, 
  ActivityIndicator,
  StyleSheet 
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';
import { paleta_colores } from './colores';

interface VideoUploadProps {
  onVideoUpload: (video: { uri: string; name: string; type: string }) => void;
}

const VideoUpload: React.FC<VideoUploadProps> = ({ onVideoUpload }) => {
  const [uploading, setUploading] = useState(false);

  const pickVideo = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permisos necesarios', 'Necesitamos acceso a tu galería para subir videos');
      return;
    }
    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
      videoMaxDuration: 60,
    });

    if (!result.canceled) {
      const asset = result.assets[0];
      const file = {
        uri: asset.uri,
        name: asset.fileName ?? 'video.mp4',
        type: 'video/mp4',
      };
      await uploadVideo(file);
    }
  };

  const uploadVideo = async (video: { uri: string; name: string; type: string }) => {
    setUploading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      onVideoUpload(video);
      // Alert.alert('Éxito', '¡Video subido correctamente!');
    } catch (error) {
      Alert.alert('Error', 'No se pudo subir el video. Intenta nuevamente.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity 
        style={[styles.uploadButton,paleta_colores.dark_aqua]}
        onPress={pickVideo}
        disabled={uploading}
      >
        {uploading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <>
            <Ionicons name="cloud-upload-outline" size={24} color="#FFFFFF" />
            <Text style={styles.buttonText}>Subir Video</Text>
          </>
        )}
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  uploadButton: {
    backgroundColor: '#73d3c8ff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    minWidth: 200,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default VideoUpload;