import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./LogViewScreen.style";

const LogViewScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
  
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
  
        <KeyboardAvoidingView style={{ alignItems: "center", flex: 1 }}>
          <Text style={styles.title}>Result</Text>
          <View style={styles.cardContainer}>
            <View style={styles.cardContent}>
              
              <Text style={styles.cardTitle}><AntDesign name="user" size={24} color="green" /> Log</Text>

              <View style={styles.resultContainer}>
                <View style={styles.row}>
                  <View style={[styles.item, styles.itemMargin]}>
                    <AntDesign name="rightsquare" size={24} color="green" />
                    <Text style={styles.textContext}>Name</Text>
                    <Text style={styles.textPrice}>NULL</Text> 
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={[styles.item, styles.itemMargin]}>
                    <AntDesign name="rightsquare" size={24} color="green" />
                    <Text style={styles.textContext}>Address</Text>
                    <Text style={styles.textPrice}>NULL</Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={[styles.item, styles.itemMargin]}>
                    <AntDesign name="rightsquare" size={24} color="green" />  
                    <Text style={styles.textContext}>Final Net</Text>
                    <Text style={styles.textPrice}>NULL</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <Pressable
              style={styles.Btn}
              onPress={() => {
                navigation.navigate("HomePageScreen");
              }}
            >
              <Text style={styles.BtnText}>Back</Text>
            </Pressable>
          </View>

        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };

  export default LogViewScreen;
  