import { useUserContext } from '@/hooks/useUserContext';
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function RootLayout() {
  const contexto = useUserContext()
  
  return(
    
    <Tabs screenOptions={{
      tabBarStyle: styles.navBar,
      tabBarItemStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 70, 
      },
  }}>
      <Tabs.Screen name='index'  options={() =>({title:"Home",headerShown:false,
        tabBarButton: ((props) => 
          <TouchableOpacity onPress={() => {
            contexto.user.goHome()
          }} style={styles.navItem}>
            <Ionicons name="home" size={22} color="#fff" />
            <Text style={styles.navText}>Inicio</Text>
          </TouchableOpacity>
        ),
      })}
      />

      <Tabs.Screen name='Modulos_Alumno'  options={() =>({title:"Módulos", headerShown:false,     
          tabBarButton: ((props) => 
            <TouchableOpacity onPress={() => contexto.user.gotToModules()}  style={styles.navItem}>
              <Ionicons name="albums-outline" size={22} color="#fff" />
              <Text style={styles.navText}>Módulos</Text>
            </TouchableOpacity>
          ),
        })}
        />

    
        <Tabs.Screen name='Dashboard_Alumno' options={({ navigation }) => ({ title: 'Dashboard', headerShown: false,
          tabBarButton: ((props) => (
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard_Alumno')} style={styles.navItem}>
              <Ionicons name="stats-chart-outline" size={22} color="#fff" />
              <Text style={styles.navText}>Dashboard</Text>
            </TouchableOpacity>
          )),
        })} />
      
     
   

      <Tabs.Screen name='Diccionario'   options={({ navigation }) =>({title:"Diccionario", headerShown:false,
        tabBarButton: ((props) => 
          <TouchableOpacity onPress={() => navigation.navigate('Diccionario')}  style={styles.navItem}>
            <Ionicons name="search" size={22} color="#fff" />
            <Text style={styles.navText}>Diccionario</Text>
          </TouchableOpacity>
        ),
      })}
      />

      <Tabs.Screen name='PerfilAlumno'    options={({ navigation }) =>({title:"Perfil", headerShown:false, 
        tabBarButton: ((props) => 
          <TouchableOpacity onPress={() => contexto.user.gotToProfile()}  style={styles.navItem}>
            <Ionicons name="person-circle-outline" size={22} color="#fff" />
            <Text style={styles.navText}>Perfil</Text>
          </TouchableOpacity>
        ),
      })}
      />      
      
      <Tabs.Screen name='cursos'  options={{href:null,headerShown:false}} />
      <Tabs.Screen name="HomeStudent" options={{href:null,title:"Home",headerShown:false}}/>      
      <Tabs.Screen name='misiones/index' options={{href:null}} />    
      <Tabs.Screen name='leaderboard_grupo' options={{href:null, headerShown: false,}} />
      
    </Tabs>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#3e9f94ff',
    paddingVertical: 20,
    width: '100%',
    height: 60,
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10,    
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 70,
    marginTop: 15,
    marginBottom: 14
  },
  navText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
    fontWeight: '500',
  },
  
})