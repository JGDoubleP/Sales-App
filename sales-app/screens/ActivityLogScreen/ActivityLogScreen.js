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
import {collectionRef, firebase_storage, firestore_db, uploadToFirebase} from "../../firebase"
import { addDoc, collection, doc } from "firebase/firestore";
import * as Location from "expo-location"
import * as ImagePicker from 'expo-image-picker';
import { Alert } from "react-native";
import { getAuth } from "firebase/auth";

const ActivityLogScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [clientName, setClientName] = useState("");
  const [address, setAddress] = useState("");
  const [detail, setDetail] = useState("");
  const [location, setLocation] = useState("");
  const [geolocation, setGeoLocation] = useState("");
  const [isInputsFilled, setIsInputsFilled] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [photoName, setPhotoName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [permission, requestPermission] = ImagePicker.useCameraPermissions();
  
  const auth = getAuth();

  useEffect(() => {
    const getPermission = async ()=> {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }
      let currentlocation = await Location.getCurrentPositionAsync({});
      setLocation(currentlocation);
    };
    getPermission();
  }, [])
  
  useEffect(() => {
    if (location && location.coords) {
       reverseGeocode();
    }
   }, [location]);

  useEffect(() => {

    if (clientName !== "" && address !== "" && detail !== "") {
      setIsInputsFilled(true);
    } else {
      setIsInputsFilled(false);
    }
  }, [clientName, address, detail]);

  useEffect(() => {
    console.log("photoName in useEffect: ", photoName);
  }, [photoName]);

  const reverseGeocode = async () => {
    const reverseGeocodeAddress = await Location.reverseGeocodeAsync({
       longitude: location.coords.longitude,
       latitude: location.coords.latitude
    });
    const formattedAddress = reverseGeocodeAddress[0].formattedAddress;
    // Set geolocation state with the formattedAddress
    setGeoLocation(formattedAddress);
   };

  const handleNextPress = async () => {
    try {
       const docRef = await addDoc(collectionRef, {
         clientname: clientName,
         address: address,
         detail: detail,
         geocodeAddress: geolocation,
         photoName: photoName,
         url: photoUrl,
         uid: auth.currentUser.uid,
         salesname: auth.currentUser.displayName,
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

   const takePhoto = async ()=> {
    try {
      const cameraResp = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        quality: 1,
      });

      if (!cameraResp.canceled) {
        const { uri } = cameraResp.assets[0];
        const fileName = uri.split("/").pop();
        const uploadResp = await uploadToFirebase(uri, fileName, (v) =>
          console.log(v)
        );
        console.log(uploadResp);
        setPhotoName(uploadResp.photoname);
        setPhotoUrl(uploadResp.downloadUrl);
        setPhoto(uri);
      }
    } catch (e) {
      Alert.alert("Error Uploading Image " + e.message);
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
            <Text style={[styles.ask, {marginTop: 10}]}>Take photo</Text>
          </View>

          {photo ? (
            <Image source={{ uri: photo }} style={{ width: 100, height: 100 }} />
          ) : (
            <Pressable
              style={[styles.Btn, { marginLeft: 5 }]}
              onPress={takePhoto}>
              <Text style={styles.BtnText}>Take Photo</Text>
            </Pressable>
          )}

        </View>
        <View style={styles.btnContainer}>
          <Pressable
            style={[styles.Btn, styles.CancelBtn]}
            onPress={() => {
              navigation.navigate("HomePageScreen");
            }}>
            <Text style={[styles.BtnText, styles.CancelText]}>Cancel</Text>
          </Pressable>
          <Pressable
            style={[styles.Btn, { marginLeft: 5, opacity: isInputsFilled ? 1 : 0.5 }]}
            disabled={!isInputsFilled}
            onPress={handleNextPress}>
            <Text style={styles.BtnText}>Next</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

  export default ActivityLogScreen;