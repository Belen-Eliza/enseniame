import { estilos } from '@/components/estilos';
import { MaterialIcons } from '@expo/vector-icons';
import { Stack, Navigator } from 'expo-router';
import { Pressable } from 'react-native';

export default function Layout(){
    return(
    <Stack screenOptions={{
          
          headerStyle: {
            backgroundColor: "#004993",
          },
          headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
            <Stack.Screen name='index' options={{headerShown:false}}/>
            <Stack.Screen name='detalle_modulo' options={{headerShown:false }}   />
            <Stack.Screen name='crear_modulo' options={{headerShown:false }}   />

    </Stack>)
}