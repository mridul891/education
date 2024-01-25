import { View, Text, Image, StyleSheet, SafeAreaView, Button } from 'react-native'
import React from 'react'
import Colors from '../Shared/Colors'
// import { Ionicons } from '@expo/vector-icons'
// import LottieView from 'lottie-react-native'
import { useFonts } from 'expo-font'

export default function Login() {
    const [fontsLoaded, fontError] = useFonts({
        'Poppins-black': require('../Assets/fonts/Poppins/Poppins-Black.ttf'),
        'Poppins-SemiBold': require('../Assets/fonts/Poppins/Poppins-SemiBold.ttf'),
        'Poppins-Regular': require('../Assets/fonts/Poppins/Poppins-Regular.ttf'),
        'Poppins-MediumItalic':require('../Assets/fonts/Poppins/Poppins-MediumItalic.ttf')
    });
    return (
        <View
            style={[
                styles.container,
                {
                    flexDirection: 'column',
                },
            ]}>
            <View style={{ flex: 1, justifyContent: "center",marginTop:20, alignItems: "center" }} >
                <Image source={require('../Assets/Images/home.png')} />
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "space-evenly" }}>
                <View >
                    <Text style={styles.Text}>Let's find the "A" with us</Text>
                    <Text style={{fontFamily:"Poppins-MediumItalic" , textAlign:"center" ,  color:"gray" }}>Please Sign in to view personalized recommendations</Text>
                </View>
                <View style={{ width: 267, height: 61, backgroundColor: "#5667FD" ,borderRadius:12}}>
                    <Text style={{ fontSize: 20, textAlign: 'center', paddingTop: 15, fontFamily: 'Poppins-MediumItalic', color: "white",}}>Sign up</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F5F9"
    },
    Text: {
        fontFamily: 'Poppins-MediumItalic',
        fontSize: 27,
        color: "#000",
        textAlign:"center"
    },
    button: {
        width: "10%",
        height: 100
    }
})
