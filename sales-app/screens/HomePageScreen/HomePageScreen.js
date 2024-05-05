import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
  Pressable,
  Button,
  FlatList
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";
import styles from "./HomePageScreen.style";
import { AntDesign } from "@expo/vector-icons";
import { doc, onSnapshot, query, } from "firebase/firestore";
import { collectionRef } from "../../firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const HomePageScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);
  const [fullName, setFullName] = useState("");
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [activities, setActivities] = useState('');
  const auth = getAuth();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setFullName(user.displayName);
    });
  }, [])


  useEffect(() => {
    const q = query(collectionRef);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const activities = [];
      querySnapshot.forEach((doc) => {
        activities.push({
          id: doc.id,
          clientname: doc.data().clientname,
        });
      });
      setActivities(activities);
    });
    return () => unsubscribe();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.History}>
      <View style={styles.historyItem}>
        <Text style= {styles.HistoryText}>{item.clientname}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      
        <View>
          <TouchableOpacity onPress={toggleMenu}>
            <AntDesign name="bars" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={showMenu}
          onRequestClose={() => {
            setShowMenu(false);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {/* <TouchableOpacity
                style={styles.option}
              >
                <Text style={styles.optionText}>Profile</Text>
              </TouchableOpacity> */}
              <TouchableOpacity onPress={() => {
                signOut(auth).then(() => {
                  // Sign-out successful.
                }).catch((error) => {
                  console.log(error)
                });
                }}
                style={styles.option} >
                <Text style={styles.optionText}>Logout</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleMenu}>
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {fullName ? (
          <Text style={styles.title}>Welcome {fullName}</Text>
          ) : (<Text style={styles.title}>Welcome User</Text>
          )}
        
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <View style={styles.cardContent}>
              <Text style={styles.expenseText}>Text Placeholder</Text>

            </View>
          </View>
          
          <Text style={styles.contentTitle3}>Log your activity</Text>

          <Pressable onPress={() => navigation.navigate("ActivityLogScreen")} style={styles.Btn}>
            <Text style={styles.BtnText}>Start Activity Log</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("LogListScreen")} style={styles.Btn}>
            <Text style={styles.BtnText}>View Log</Text>
          </Pressable>

        </View>

      <Text style={styles.contentTitle3}>Recent Logs</Text> 

      <View style={styles.container}>
        <FlatList
          data={activities.slice(0, 5)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomePageScreen;
