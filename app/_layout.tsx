import UserContextProvider from "@/context/UserContext";
import { useUserContext } from "@/hooks/useUserContext";
import { Stack } from "expo-router";

function RootNavigator (){
  const {isLoggedIn} = useUserContext();
  return (
    <Stack>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name='index' options={{title:"Start",headerShown: false}}/>
        <Stack.Screen name='login' options={{title:"Login",headerShown: false}}/>
        <Stack.Screen name='signup_alumno' options={{title:"Crear cuenta",headerShown: false}}/>        
        <Stack.Screen name='acc_recovery' options={{title:"Recuperar cuenta",headerShown: false}}/>    
      </Stack.Protected>  
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name='tabs' options={{headerShown: false}}/>
      </Stack.Protected>
    </Stack>
  )
}

export default function RootLayout() {
  
  return(
    <UserContextProvider>
      
      <RootNavigator/>

    </UserContextProvider>
    );
}
