import Toast from 'react-native-toast-message';

function success_alert(msg:string){
    Toast.show({
        type: 'success',
        text1: "Operación exitosa",
        text2: msg
      });

}

function error_alert(msg:string){
    Toast.show({
        type: 'error',
        text1: "Error",
        text2: msg
      });
}

export  {success_alert, error_alert }