import { Stack, Navigator } from 'expo-router';

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
            <Stack.Screen name='vistas' options={{headerShown:false , presentation: "modal"}}   />
            <Stack.Screen name='ranking' options={{headerShown:false , presentation: "modal"}}   />
            <Stack.Screen name='moderar' options={{headerShown:false , presentation: "modal"}}   />

    </Stack>)
}