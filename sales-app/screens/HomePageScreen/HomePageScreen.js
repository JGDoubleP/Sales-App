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
  Button
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";
import styles from "./HomePageScreen.style";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, FONT, SIZES } from "../../constants/theme";

const HomePageScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);
  const [fullName, setFullName] = useState("");
  const [totalExpenses, setTotalExpenses] = useState(0);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

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

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default HomePageScreen;
