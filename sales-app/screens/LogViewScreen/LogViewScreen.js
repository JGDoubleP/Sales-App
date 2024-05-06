import React, { useEffect, useState } from "react";
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
import { doc, documentId, getDoc, onSnapshot, query, where } from "firebase/firestore";
import { collectionRef } from "../../firebase";
import { getAuth } from "firebase/auth";

const LogViewScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { itemId } = route.params || {}; // Ensure route.params is defined
  const [activity, setActivities] = useState('');
  const auth = getAuth();

  useEffect(() => {
    if (itemId) {
      const docRef = doc(collectionRef, itemId); // Reference to the document using its ID
      getDoc(docRef)
        .then((docSnapshot) => {
          if (docSnapshot.exists()) {
            // Checking if the document exists
            const data = docSnapshot.data();
            setActivities(data); // Setting the document data to state
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.error("Error fetching document: ", error);
        });
    }
  }, [itemId]);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView style={{ alignItems: "center", flex: 1 }}>
        <Text style={styles.title}>Result</Text>
        <View style={styles.cardContainer}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              <AntDesign name="user" size={24} color="green" /> Log
            </Text>
            <View style={styles.resultContainer}>
            
                  <View style={styles.row} key={activity.id}>
                    <View style={[styles.item, styles.itemMargin]}>
                      <AntDesign
                        name="rightsquare"
                        size={24}
                        color="green"
                      />
                      <Text style={styles.textContext}>
                        Nama
                      </Text>
                      <Text style={styles.textPrice}>{activity.clientname}</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={[styles.item, styles.itemMargin]}>
                      <AntDesign name="rightsquare" size={24} color="green" />
                      <Text style={styles.textContext}>Address</Text>
                      <Text style={styles.textPrice}>{activity.address}</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={[styles.item, styles.itemMargin]}>
                      <AntDesign name="rightsquare" size={24} color="green" />  
                      <Text style={styles.textContext}>Detail</Text>
                      <Text style={styles.textPrice}>{activity.detail}</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <Image
                      style={{ width: 200, height: 200 }}
                      source={{
                        uri:activity.detail
                      }}
                    />
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
