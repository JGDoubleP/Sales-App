import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants/theme';

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
        marginTop: 80,
        width: 350,
        height: 400,
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
      cardTitle: {
        marginTop: 15,
        textAlign: 'center',
        fontSize: SIZES.large,
        fontWeight: "bold",
        color: COLORS.Saving_Green
      },
      cardContent: {
        padding: 10,
        marginTop:40
      },
      Btn: {
        marginTop: SIZES.xxLarge,
        alignItems: "center",
        backgroundColor: COLORS.Saving_Blue,
        borderRadius: SIZES.xxLarge,
        height: 50,
        width:120
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
        marginLeft: 200
      },
      imageContainer: {
        alignItems: "center",
        justifyContent: "center",
      },
      result: {
        height: 25,
        width: 25,
      },
      row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
      resultContainer: {
        marginTop:30
      },
      textContext:{
        width: 100,
        marginTop: 0,
        textAlign: 'left',
        fontSize: SIZES.medium,
        fontWeight: "bold",
        color: "black"
      },
      bullet: {
        height: 35,
        width: 37,
        marginRight:10
      },
      item: {
        padding: 10,
        width: 350,
        margin: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
      itemMid: {
        padding: 10,
        width: 350,
        margin: 0,
        borderTopWidth: 1, 
        borderBottomWidth: 1, 
        borderColor:"gray",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
      textPrice:{
        width: 100,
        marginLeft: 80,
        textAlign: "left",
        fontSize: SIZES.small,
        color: "black"
      },
});

export default styles;