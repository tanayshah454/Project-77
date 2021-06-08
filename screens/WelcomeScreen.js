import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    FlatList,
    Image,
    KeyBoardAvoidingView,
    ScrollView,
} from 'react-native';
import {
    Avatar,
    Badge,
    Input,
    Card,
    Header,
    Icon,
    ListItem,
    SearchBar,
    Tile
} from 'react-native-elements'

import {
    SafeAreaView,
    SafeAreaProvider,
} from 'react-native-safe-area-context';

import firebase from 'firebase'
import db from '../config'

class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: '',
            password: '',
            form: 'login'
        };
    }

    login = (emailId, password) => {
        firebase.auth().signInWithEmailAndPassword(emailId, password)
            .then(() => {
                alert('Login Sucessful')
            })
            .catch((error) => {
                alert(error)
            })

    }

    register = (emailId, password) => {
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
            .then(() => {
                alert('User Added Sucessfully')
            })
            .catch((error) => {
                alert(error)
            })
    }

    reset = (emailId) => {
        firebase.auth().sendPasswordResetEmail(emailId)
            .then(() => {
                return alert("Password reset email sent successfully")
            })
            .catch((error) => {
                alert(error)
            })
    }
    render() {
        if (this.state.form === 'login') {
            return (
                <SafeAreaProvider>
                    <View>
                        <Header
                            centerComponent={{ text: 'Barter App', style: { color: '#fff' } }}
                        />
                        <View style={styles.container}>
                        <Input
                            placeholder="Email Adress "
                            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                            style={styles.inputContainer}
                            keyboardType='email-address'
                            onChangeText={value => this.setState({ emailId: value })}
                        />
                        <Input
                            placeholder="Password "
                            leftIcon={{ type: 'font-awesome', name: 'unlock-alt' }}
                            style={styles.inputContainer}
                            secureTextEntry={true}
                            onChangeText={value => this.setState({ password: value })}
                        />
                        <TouchableOpacity style={styles.restoreButtonContainer} onPress={() => {
                            this.setState({
                                form: 'password'
                            })
                        }}>
                            <Text>
                                Forgot?
</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginButton}onPress={() => {
                            this.login(this.state.emailId, this.state.password)
                        }}>
                            <Text style={styles.loginText}>
                                Login
</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                            this.register(this.state.emailId, this.state.password)
                        }}>
                            <Text>
                                Register
</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </SafeAreaProvider>
            );
        }
               if (this.state.form === 'password') {
            return (
                <SafeAreaProvider>
                    <View>
                        <Input
                            placeholder="Email Adress "
                            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                            style={styles.inputContainer}
                            keyboardType='email-address'
                            onChangeText={value => this.setState({ emailId: value })}
                        />

                    </View>
                    <TouchableOpacity onPress={() => {
                        this.reset(this.state.emailId)
                    }}>
                        <Text>
                            reset password
</Text>
                    </TouchableOpacity>
                    <TouchableOpacity    style={styles.loginButton}onPress={()=>{
                        this.setState({
                            form:'login',
                            emailId:'',
                            password:''
                        })
                    }}>
                        <Text style={styles.loginText}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </SafeAreaProvider>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#C1F1F7',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:15,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    loginButton: {
      backgroundColor: '#3498db',
    },
    loginText: {
      color: 'white',
    },
    restoreButtonContainer:{
      width:250,
      marginBottom:15,
      alignItems: 'flex-end'
    },
  });
  
 
export default WelcomeScreen;
