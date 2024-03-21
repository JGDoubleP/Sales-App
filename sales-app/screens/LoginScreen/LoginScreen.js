import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./LoginScreen.style";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebase_auth } from "../../firebase";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const auth = firebase_auth;

  const handleLogin = async () => {
    try {
       const userCredential = await signInWithEmailAndPassword(auth, emailAddress, password);
       const user = userCredential.user;
       console.log("User Signed In:", user.email);
       // Navigate to the next screen or perform other actions
    } catch (error) {
       console.error("Error creating user:", error.message);
       alert(error.message);
    }
   };


  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      
      {/* <Pressable onPress={()=> {navigation.goBack}}>
        <View style={styles.container}>
        <AntDesign name="left" size={24} color="black" />
        </View>
      </Pressable> */}

      <KeyboardAvoidingView style={{ alignItems: "center", flex: 1 }}>
        <Text style={styles.title}>Log in to your account</Text>

        <View style={{ marginTop: 50 }}>
          <View style={styles.ViewInput}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email Address"
              value={emailAddress}
              onChangeText={(text) => setEmailAddress(text)}
            />

            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          <Pressable onPress={handleLogin} style={styles.Btn}>
            <Text style={styles.BtnText}>Login</Text>
          </Pressable>
        </View>
        
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
