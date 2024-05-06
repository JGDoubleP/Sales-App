import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    Pressable,
    FlatList,
    TextInput,
  } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";
  import styles from "./LogListScreen.style";
  import { AntDesign } from "@expo/vector-icons";
  import { useNavigation, useRoute } from "@react-navigation/native";
  import { COLORS, FONT, SIZES } from '../../constants/theme';
  import React, { useState, useEffect } from 'react';
  import { doc, onSnapshot, query, where, } from "firebase/firestore";
  import { collectionRef } from "../../firebase";
  import { getAuth } from "firebase/auth";
  
  
  const LogListScreen = ({ }) => {
    const navigation = useNavigation();
    const route = useRoute(); // Initialize route with useRoute
    const [stockData, setStockData] = useState(null);
    const [search, setSearch] = useState(null);
    const [activities, setActivities] = useState('');
    const auth = getAuth();

    useEffect(() => {
      const q = query(collectionRef, where("uid", "==", auth.currentUser.uid));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const activities = [];
        querySnapshot.forEach((doc) => {
          activities.push({
            id: doc.id,
            clientname: doc.data().clientname,
            address: doc.data().address,
            detail: doc.data().detail,
          });
        });
        setActivities(activities);
      });
      return () => unsubscribe();
    }, []);

    const navigateToDocument = (itemId) => {
      // Navigate to the document with the id passed
      navigation.navigate("LogViewScreen", { itemId });
    };

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        
        <KeyboardAvoidingView style={{ flex: 1, alignItems: "center" }}>

          <View style={{ marginTop: 8, alignItems: "center" }}>
            <Text
              style={{
                color: COLORS.Saving_Blue,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 10,
                fontSize: 20,
                marginBottom: 10,
              }}
            >
              Activities Log
            </Text>

          </View>
  
          <View style={{ marginTop: 20 }} />

        <View style= {styles.History}>
            <Text style= {styles.HistoryText}>
                Search Log
            </Text>
        </View>

        <View style={styles.ViewInput}>
            <TextInput
              style={styles.TextInput}
              placeholder="Search Log"
              value={search}
              onChangeText={(text) => setSearch(text)}
            />
            <Pressable >
              <AntDesign name="search1" size={24} color="black" />
            </Pressable>
        </View>

        <FlatList
          data={activities}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <Pressable onPress={() => navigateToDocument(item.id)}>
              <View style={styles.historyItem}>
                <Text style={styles.historyMoney}>{item.clientname}</Text>
                <View style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row'
                }}>
                <Text numberOfLines ={1}  style={styles.historyInfo}>{item.detail.substring(0, 15)}...</Text> 
                <Text numberOfLines ={1}  style={styles.historyDate}>{item.address.substring(0, 15)}...</Text>
                </View>
              </View>
            </Pressable>
          )}/>


        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  
  export default LogListScreen;
  