import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView, Pressable } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

import { COLORS, SIZES } from "../../constants/theme";
import styles from "./ProfileScreen.style";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const userId = route.params?.userId;

  const [userDetails, setUserDetails] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    age: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const url = `http://192.168.10.122:8000/user/${userId}`;
        const response = await fetch(url);

        if (response.ok) {
          const userData = await response.json();
          setUserDetails({
            fullName: userData.user.fullName,
            emailAddress: userData.user.emailAddress,
            phoneNumber: userData.user.phoneNumber,
            age: userData.user.age ? userData.user.age.toString() : "",
          });
        } else {
          console.log("Failed to fetch user data");
          Alert.alert("Error", "Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        Alert.alert("Error", "An error occurred while fetching user data");
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);
   const handleNavigateToHomePage = () => {
    navigation.navigate('HomePageScreen', { userId: userId });
  };
  const renderEditableField = (label, value) => {
    return (
      <View style={styles.ViewInput}>
        <View style={styles.textContainer}>
          <Text style={[styles.text, styles.margin]}>{label}</Text>
          <TouchableOpacity
            onPress={() => handleTextChange(label, value)}
            activeOpacity={0.7}
            style={{ position: 'absolute', left: 250 }}
          >
          </TouchableOpacity>
        </View>
        <TextInput
          style={[styles.text, { marginTop: 5, marginBottom: 5 }]}
          value={value}
          onChangeText={(text) => handleTextChange(label, text)}
          placeholder={`Enter new ${label}`}
        />
        <View style={styles.line} />
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <AntDesign name="left" size={24} color="black" />
        <Text style={styles.title}>Contact Info</Text>
      </View>
      <KeyboardAvoidingView style={{ alignItems: "center" }}>
        <View
          style={{
            marginTop: 30,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {renderEditableField("Name", userDetails.fullName)}
          {renderEditableField("Age", userDetails.age)}
          {renderEditableField("Email", userDetails.emailAddress)}
          {renderEditableField("Phone Number", userDetails.phoneNumber)}
          
          <View style={styles.centerHomeBtn}>
            <TouchableOpacity onPress={handleNavigateToHomePage} style={styles.Btn}>
              <Text style={styles.BtnText}>Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
