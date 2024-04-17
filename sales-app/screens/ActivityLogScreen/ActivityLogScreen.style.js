import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    title: {
      marginTop: 0,
      textAlign: 'center',
      fontSize: SIZES.large,
      fontWeight: "bold",
      color: COLORS.Saving_Green
    },
    cardContainer: {
      borderWidth: 1,
      marginTop: 40,
      width: 380,
      height: 500,
      borderRadius: 15,
      borderColor: '#ddd',
      margin: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 3,
      backgroundColor: '#DEF4DE',
    },
    cardContent: {
      padding: 10,
      marginTop:40
    },
    input: {
      height: 60,
      borderColor: COLORS.gray,
      borderRadius: 15,
      marginTop:5,
      marginBottom: 10,
      paddingHorizontal: 10,
      backgroundColor:"white",
      width: "100%",
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    Btn: {
      marginTop: SIZES.xxLarge,
      alignItems: "center",
      backgroundColor: COLORS.Saving_Blue,
      borderRadius: SIZES.xxLarge,
      height: 50,
      width:90
    },
  
    BtnText: {
      textAlign: 'center',
      color: 'white',
      alignItems: 'center',
      padding: 15
    },
    btnContainer: {
      flexDirection: 'row', 
      justifyContent: 'space-around', 
      alignItems: 'center', 
      marginBottom:20,
      marginLeft: 190
    },
    CancelBtn: {
      backgroundColor: 'white', 
      borderColor: COLORS.Saving_Blue, 
      borderWidth: 2, 
    },
    CancelText: {
      color: COLORS.Saving_Blue, 
    },
    ask: {
      color: "black", 
    },
  });

  export default styles;