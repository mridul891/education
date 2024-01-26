import { View, Text, Image, StyleSheet, SafeAreaView, Button, Touchable } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import * as WebBrowser from 'expo-web-browser'
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();
export default function Login() {
    const [fontsLoaded, fontError] = useFonts({
        'Poppins-black': require('../Assets/fonts/Poppins/Poppins-Black.ttf'),
        'Poppins-SemiBold': require('../Assets/fonts/Poppins/Poppins-SemiBold.ttf'),
        'Poppins-Regular': require('../Assets/fonts/Poppins/Poppins-Regular.ttf'),
        'Poppins-MediumItalic': require('../Assets/fonts/Poppins/Poppins-MediumItalic.ttf')
    });
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } =
                await startOAuthFlow();

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error("OAuth error", err);
        }
    }, []);
    return (
        <View
            style={[
                styles.container,
                {
                    flexDirection: 'column',
                },
            ]}>
            <View style={{ flex: 1, justifyContent: "center", marginTop: 20, alignItems: "center" }} >
                <Image source={require('../Assets/Images/home.png')} />
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "space-evenly" }}>
                <View >
                    <Text style={styles.Text}>Let's find the "A" with us</Text>
                    <Text style={{ fontFamily: "Poppins-MediumItalic", textAlign: "center", color: "gray" }}>Please Sign in to view personalized recommendations</Text>
                </View>
                <Touchable onpress={onPress} style={{ width: 267, height: 61, backgroundColor: "#5667FD", borderRadius: 12 }}>
                    <Text style={{ fontSize: 20, textAlign: 'center', paddingTop: 15, fontFamily: 'Poppins-MediumItalic', color: "white", }}>Sign up</Text>
                </Touchable>
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
        textAlign: "center"
    },
    button: {
        width: "10%",
        height: 100
    }
})
