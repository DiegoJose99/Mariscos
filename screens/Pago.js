import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, ScrollView, ImageBackground, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { size } from 'lodash';

export default function Pago() {
  const navegacion = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/fondo.jpeg')} style={styles.backgroundImage}>
      </ImageBackground>
      {/* <View style={styles.hearderImg}>
        <Image
          source={require('../assets/logo.png')}
          style={{ width: 330, height: 100, borderRadius: 20 }}
          resizeMode='cover'
        />
      </View> */}
      <View style={{
                width: '100%',
                backgroundColor: '#C4C8CC',
                height: '7%',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <View style={{ width: '15%' }}>
                    {/* <Text style={{ fontSize: 25, justifyContent: 'center', alignItems: 'center', height: '100%' }}>header</Text> */}
                    <TouchableOpacity onPress={() => navegacion.goBack()}>
                        <Image
                            source={require('../assets/flecha-izquierda.png')}
                            style={{ width: 30, height: 30, marginLeft: 13, tintColor:'#994E09' }}
                            resizeMode='cover'
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ width: '74%' }}>
                    <Text style={{
                        fontSize: 25,
                        // backgroundColor:'red',
                        fontWeight: 'bold',
                        color: '#994E09',
                        textAlign: 'center'
                    }}>Pago</Text>
                </View>
            </View>
      <ScrollView style={{ margin: '0%', marginTop: 10}}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#994E09', fontSize: 55 }}>Registrar tarjeta</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize:40, color: 'white'}}>Tipo de tarjeta</Text>
          <Input
            allowFontScaling={false}
            // placeholder="Usuario"
            style={styles.inputStyle}
            selectionColor={'#3D5CA4'}
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderBottomWidth: 0, backgroundColor: '#ffffff', borderRadius: 20,height: 55}}
            autoCapitalize={'none'}
          />
          <Text style={{fontSize:40, color: 'white'}}>Nombre del titular</Text>
          <Input
            allowFontScaling={false}
            // placeholder="Usuario"
            style={styles.inputStyle}
            selectionColor={'#3D5CA4'}
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderBottomWidth: 0, backgroundColor: '#ffffff', borderRadius: 20,height: 55}}
            autoCapitalize={'none'}
          />
          <Text style={{fontSize:40, color: 'white'}}>Número de tarjeta</Text>
          <Input
            allowFontScaling={false}
            // placeholder="Usuario"
            style={styles.inputStyle}
            selectionColor={'#3D5CA4'}
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderBottomWidth: 0, backgroundColor: '#ffffff', borderRadius: 20,height: 55}}
            autoCapitalize={'none'}
          />
        </View>
        <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{ width:'45%', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize:40, color: 'white'}}>Vigencia</Text>
          <Input
            allowFontScaling={false}
            // placeholder="Usuario"
            style={styles.inputStyle}
            selectionColor={'#3D5CA4'}
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderBottomWidth: 0, backgroundColor: '#ffffff', borderRadius: 20,height: 55}}
            autoCapitalize={'none'}
          />
          </View>
          <View style={{width: '45%', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize:40, color: 'white'}}>CCV</Text>
          <Input
            allowFontScaling={false}
            // placeholder="Usuario"
            style={styles.inputStyle}
            selectionColor={'#3D5CA4'}
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderBottomWidth: 0, backgroundColor: '#ffffff', borderRadius: 20,height: 55}}
            autoCapitalize={'none'}
          />
          </View>
        </View>
        {/* <View> */}
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: '10%' }}>
          {/* <TouchableOpacity> */}
          <Button
            containerStyle={styles.containerIngresar}
            buttonStyle={styles.btnIngresar}
            title="Agregar tarjeta"
            titleStyle={{
              fontWeight: 'bold',
              color: '#994E09',
              fontSize: 28,
              letterSpacing: -0.5750000000000001,
            }}
          onPress={() => navegacion.navigate('Direccion')}
          />
          {/* </TouchableOpacity> */}
        </View>
        {/* </View> */}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#ffffff',
    top: '3.5%'
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
    top: '4%',
  },
  hearderStyle: {
    // fontWeight: 'bold',
    paddingLeft: 15,
    textAlign: 'right',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: '5%',
  },
  hearderImg: {
    // fontWeight: 'bold',
    // paddingLeft: 15,
    // textAlign: 'right',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '15%',
  },
  hearderText: {
    paddingTop: '6%',
    paddingBottom: '4%',
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
  },
  secondContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '15%',
  },
  iniciarSesion: {
    bottom: '40%',
    paddingBottom: '4%',
    fontSize: 60,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  inputStyle: {
    textAlign: 'center',
    fontSize: 18,
  },
  inputContainer: {
    width: '89%',
    height: 49,
    borderWidth: 0,
    borderColor: 'rgba(151,151,151,1)',
    marginBottom: 20,
    // borderRadius: 5,

  },
  containerIngresar: {
    marginBottom: 60,
    top: '20%',
    // bottom:'30%',
    width: '65%',
    height: 50,
  },
  btnIngresar: {
    borderRadius: 20,
    backgroundColor: '#FBBF3E',
  },
  forgottenPassword: {
    color: 'rgba(151,158,181,1)',
    fontSize: 17,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  inputContainer2: {
    width: '100%',
    height: 90,
    borderWidth: 1,
    borderColor: 'rgba(151,151,151,1)',
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#FBBF3E'
  },
  inputStyle2: {
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: 'red'
  },
});