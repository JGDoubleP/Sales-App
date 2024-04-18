import React, { useState, useEffect } from "react";
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
import styles from "./ActivityLogScreen.style"
import {collectionRef, firestore_db} from "../../firebase"
import { addDoc, collection, doc } from "firebase/firestore";

const ActivityLogScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [clientName, setClientName] = useState("");
  const [address, setAddress] = useState("");
  const [detail, setDetail] = useState("");
  const [investmentNominal, setInvestmentNominal] = useState("");
  const [isInputsFilled, setIsInputsFilled] = useState(false);

  useEffect(() => {

    if (clientName !== "" && address !== "" && detail !== "") {
      setIsInputsFilled(true);
    } else {
      setIsInputsFilled(false);
    }
  }, [clientName, address, detail]);

  const handleNextPress = async () => {
    try {
       const docRef = await addDoc(collectionRef, {
         clientname: clientName,
         address: address,
         detail: detail,
       });
       console.log("Document written with ID: ", docRef.id);
       setAddress('');
       setClientName('');
       setDetail('');
       navigation.navigate('HomePageScreen');
    } catch (e) {
       console.error("Error adding document: ", e);
    }
   };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>

      <KeyboardAvoidingView style={{ alignItems: "center", flex: 1 }}>
        <Text style={styles.title}>Log your activity</Text>
        <View style={styles.cardContainer}>
          <View style={styles.cardContent}>
            <Text style={styles.ask}>Client Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Client Name"
              value={clientName}
              onChangeText={(text) => setClientName(text)}
            />
            <Text style={[styles.ask, {marginTop: 10}]}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the address"
              value={address}
              onChangeText={(text) => setAddress(text)}
            />
            <Text style={[styles.ask, {marginTop: 10}]}>Activity Detail</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Activity Detail"
              value={detail}
              onChangeText={(text) => setDetail(text)}
            />
            <Text style={[styles.ask, {marginTop: 10}]}>Lorem Ipsum</Text>
            <TextInput
              style={styles.input}
              placeholder="Lorem ipsum"
              value={investmentNominal}
              onChangeText={(text) => setInvestmentNominal(text)}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Pressable
            style={[styles.Btn, styles.CancelBtn]}
            onPress={() => {
              navigation.navigate("HomePageScreen");
            }}
          >
            <Text style={[styles.BtnText, styles.CancelText]}>Cancel</Text>
          </Pressable>
          <Pressable
            style={[styles.Btn, { marginLeft: 5, opacity: isInputsFilled ? 1 : 0.5 }]}
            disabled={!isInputsFilled}
            onPress={handleNextPress}
          >
            <Text style={styles.BtnText}>Next</Text>
          </Pressable>
        </View>
        
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
  export default ActivityLogScreen;
  