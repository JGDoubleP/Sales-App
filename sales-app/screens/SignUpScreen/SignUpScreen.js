import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";
import styles from "./SignUpScreen.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}></View>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            alignContent: "center",
            width: 300,
            height: 273,
          }}
          source={require("../../assets/icons/SignUpLogo.png")}
        />

        <Text style={styles.title}>
        Log your activity with our app.
        </Text>

        <Text style={styles.title2}>
          Your partner in Sales, here to elevate your expertise.
        </Text>

        <Pressable
          style={styles.Btn}
          onPress={() => {
            navigation.navigate("RegisterScreen");
          }}
        >
          <Text style={styles.BtnText}>Create Account</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("LoginScreen");
          }}
        >
          <Text
            style={{
              color: COLORS.Saving_Blue,
              fontWeight: "bold",
              textAlign: "center",
              margin: 15,
            }}
          >
            Login
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
