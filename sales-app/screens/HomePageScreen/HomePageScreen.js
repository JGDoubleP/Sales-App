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

const HomePageScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);
  const [fullName, setFullName] = useState("");
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [activities, setActivities] = useState('')

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const q = query(collectionRef);
    // Assuming setActivities is a state setter function
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
      return ()=> unsubscribe();
      }, []);

      const renderItem = ({ item }) => (
        <View style={styles.historyItem}>
          <Text>{item.clientname}</Text>
        </View>
      );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ margin: 20 }}>
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
              <TouchableOpacity
                style={styles.option}
              >
                <Text style={styles.optionText}>Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option} >
                <Text style={styles.optionText}>Logout</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleMenu}>
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Text style={styles.title}>Welcome User</Text>
        
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

          <Pressable onPress={() => navigation.navigate("LogViewScreen")} style={styles.Btn}>
            <Text style={styles.BtnText}>View Log</Text>
          </Pressable>

        </View>

      </ScrollView>

      <FlatList
          data={activities}
          renderItem={renderItem}
          keyExtractor={(item => item.id)}
        />

    </SafeAreaView>
  );
};


export default HomePageScreen;
