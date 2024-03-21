import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { COLORS } from '../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'; 

const SplashScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{flex : 1, backgroundColor: "white"}}>
            <Text>SplashScreen</Text>

            <Button title="LoginScreen"
            color={COLORS.Saving_Blue}
            onPress={() => {
                navigation.navigate('LoginScreen'); // Navigate to the Login screen
            }}
            />

            <Button title="RegisterScreen"
            color={COLORS.Saving_Blue}
            onPress={() => {
                navigation.navigate('RegisterScreen'); // Navigate to the Login screen
            }}
            />

            <Button title="ConfirmationScreen"
            color={COLORS.Saving_Blue}
            onPress={() => {
                navigation.navigate('ConfirmationScreen'); // Navigate to the Login screen
            }}
            />

            <Button title="TransferScreen"
            color={COLORS.Saving_Blue}
            onPress={() => {
                navigation.navigate('TransferScreen'); // Navigate to the Login screen
            }}
            />
        </SafeAreaView>
    );
}

export default SplashScreen;

const styles = StyleSheet.create({});
