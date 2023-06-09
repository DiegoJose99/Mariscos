import React, { useState } from 'react';
import { Alert, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { size } from 'lodash';
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('dbMariscos.db');
export default function Login() {
    const navegacion = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [verPassword, setVerPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // const [errors, setErrors] = useState('');

  //
  const login = () => {
    // const db = SQLite.openDatabase('dbMariscos.db');
    if (correo.trim() === '' || password.trim() === '') {
      // Verifica que el correo y la contraseña no estén vacíos
      setErrorMessage('Por favor, ingresa el usuario y la contraseña.');
      return;
    }
  
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM tdUsers WHERE correo = ? AND password = ?',
        [correo, password],
        (tx, result) => {
          if (result.rows.length > 0) {
            // Acceso correcto, redirige a la pantalla de menú
            console.log('Acceso correcto');
            setErrorMessage('');
            navegacion.navigate('Menu');
            // Aquí puedes realizar la navegación a la pantalla de menú
          } else {
            // Acceso incorrecto, muestra un mensaje de error
            console.log('los datos no coinciden');
            setErrorMessage('Usuario o contraseña incorrectos');
          }
        },
        (_, error) => {
          console.error('Error al ejecutar la consulta', error);
        }
      );
    });
  };

  const handlePress = () => {
    // Lógica que se ejecuta cuando se presiona el botón
    console.log('Botón presionado');
    navegacion.navigate('Menu')

  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/fondo.jpeg')} style={styles.backgroundImage}>
      {/* <Text style={{color: 'black', fontSize: 20}}>App</Text> */}
      </ImageBackground>
             <View style={styles.hearderImg}>
           <Image
            source={require('../assets/Pics3.png')}
            style={{ width: 330, height: 100, borderRadius: 20 }}
            resizeMode='cover'
          />
          {/* <Text style={styles.hearderText} allowFontScaling={false}> Mariscos {"\n"}              'El Tizoc'</Text> */}
        </View>
      <ScrollView>
        <View style={styles.secondContainer}>
          
          <Text style={styles.iniciarSesion} >Inicia sesión con tu cuenta</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop:'10%'}}>
          {/* <Text style={{fontSize:40, color: 'white'}}>Correo</Text> */}
          <Input
            value={correo}
            onChangeText={setCorreo}
            allowFontScaling={false}
            placeholder="Usuario"
            placeholderTextColor='#994E09'
            style={styles.inputStyle}
            selectionColor={'black'}
            inputStyle={{textAlign: 'center'}}
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderBottomWidth: 2, borderBottomColor: '#FCC756', backgroundColor: 'transparent' ,height: 55}}
            autoCapitalize={'none'}
            // onChange={e => onChange(e, 'usuario')}
          />
          {/* <Text style={{fontSize:40, color:'#ffffff'}}>Contraseña</Text> */}
          <Input
            value={password}
            onChangeText={setPassword}
            allowFontScaling={false}
            placeholder="Contraseña"
            placeholderTextColor='#994E09'
            style={styles.inputStyle}
            selectionColor={'black'}
            inputStyle={{textAlign: 'center'}}
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderBottomWidth: 2,
              borderBottomColor: '#FCC756', backgroundColor: 'transparent', height: '110%'}}
            autoCapitalize={'none'}
            password={true}
            secureTextEntry={verPassword ? false : true}
            rightIcon={
              <Icon
                type="font-awesome"
                name={verPassword ? 'eye' : 'eye-slash'}
                size={27}
                iconStyle={{ color: '#994E09' }}
                onPress={() => setVerPassword(!verPassword)}
              />
            }
            // onChange={e => onChange(e, 'password')}
            // errorMessage={errors.verPassword}
          />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: '3%' }}>
        {/* <TouchableOpacity> */}
          <Button
            allowFontScaling={false}
            containerStyle={styles.containerIngresar}
            buttonStyle={styles.btnIngresar}
            title="Iniciar sesión"
            titleStyle={{
              fontWeight:'bold',
              color: '#994E09',
              fontSize: 28,
              letterSpacing: -0.5750000000000001,
            }}
            onPress={login}
          />
          {errorMessage !== '' && <Text>{errorMessage}</Text>}
          {/* </TouchableOpacity> */}
        </View>
        {/* <View style={{ paddingTop: '4%', justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={styles.forgottenPassword}
            allowFontScaling={false}
            // onPress={() => { navegacion.navigate('RecuperarPassword') }}
            >
            ¿Olvidaste tu contraseña?
          </Text>
        </View> */}
        <View style={{ alignItems: 'center', paddingTop: '1%' }}>
          <Text
            allowFontScaling={false}
            style={{
              // color: 'rgba(151,158,181,1)',
              fontSize: 17,
            }}>
            {/* ¿No tienes cuenta?{' '} */}
            <Text
              style={{
                color: '#994E09',
                fontWeight: 'bold',
                fontSize: 30,
                textDecorationLine: 'underline',
              }}
              onPress={() => navegacion.navigate('Registro')}
              >
              Crear cuenta.
            </Text>{' '}
          </Text>
        </View>
        {/* <Loader isVisible={isVisible} text="Cargando..." /> */}
      </ScrollView>
      {/* <Text style={{color: 'black'}}>App</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#ffffff',
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center"
  },
  backgroundImage: {
    position: "absolute",
    // top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: "cover",
    opacity: 0.1, // Opacidad de la imagen (0 - 1)
    backgroundColor: "#000000", // Color de fondo mientras carga la imagen
    top:'4%',
    // flex: 1,
    // width: "100%",
    // height: "100%",
    // resizeMode: 'repeat',
    // justifyContent: "center",
    // alignItems: "center"
  },
    hearderStyle:{
    // fontWeight: 'bold',
    paddingLeft: 15,
    textAlign: 'right',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: '5%',
  },
  hearderImg:{
    // fontWeight: 'bold',
    // paddingLeft: 15,
    // textAlign: 'right',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '15%',
  },
  hearderText:{
    paddingTop: '6%',
    paddingBottom: '4%',
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
  },
  secondContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '20%',
  },
  iniciarSesion: {
    // bottom:'40%',
    margin:10,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingBottom: '4%',
    fontSize: 45,
    color: '#994E09',
    fontWeight: 'bold',
  },
  inputStyle: {
    textAlign: 'center',
    fontSize: 25,
  },
  inputContainer: {
    width: '89%',
    height: 49,
    borderWidth: 0,
    borderColor: 'rgba(151,151,151,1)',
    marginBottom: 20,
    borderRadius: 5,
  },
  containerIngresar: {
    top:'30%',
    width: '65%',
    height: 50,
    marginBottom: 30,
  },
  btnIngresar: {
    borderRadius: 20,
    backgroundColor: '#FCC756',
  },
  forgottenPassword: {
    color: 'rgba(151,158,181,1)',
    fontSize: 17,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
