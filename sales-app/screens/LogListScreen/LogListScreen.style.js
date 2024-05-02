import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants/theme';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({

  container: {
    padding: 24,
    backgroundColor: 'white',
  },

  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 6,
    textAlign: 'center',
    fontSize: SIZES.xLarge,
    fontWeight: "bold"
  },
  container: {
    flexDirection: 'row', // Arrange "IDR" and TextInput horizontally
    alignItems: 'center', // Center them vertically
    borderBottomWidth: 1,
    borderColor: "#F5F6FA"
  },

  currencyText: {
    marginRight: 5,
    fontSize: SIZES.xxLarge,
    fontWeight: "bold",
  },

  rectangle: {
    marginTop: SIZES.Small,
    alignItems: "center",
    backgroundColor: COLORS.Saving_Blue,
    borderRadius: SIZES.medium,
    height: 50,
    width: 350,
    height: 130,
  },

  categoriesLabel: {
    color: "#ffffff",
    fontSize: SIZES.medium,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: SIZES.medium,
    alignItems: "center",
    marginTop: SIZES.small,
  },

  Categories1: {
    marginTop: SIZES.Small,
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: 50,
    width: 150,
    height: 100,
    backgroundColor: COLORS.Saving_Red,
    marginTop: 10
  },

  Categories2: {
    marginTop: SIZES.Small,
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: 50,
    width: 150,
    height: 100,
    backgroundColor: "chocolate",
    marginTop: 10
  },

  Categories3: {
    marginTop: SIZES.Small,
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: 50,
    width: 150,
    height: 100,
    backgroundColor: "gold",
    marginTop: 10
  },

  Categories4: {
    marginTop: SIZES.Small,
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: 50,
    width: 150,
    height: 100,
    backgroundColor: "purple",
    marginTop: 10
  },

  titleLabel: {
    color: "#ffffff",
    fontSize: SIZES.medium,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: SIZES.medium,
    alignItems: "center",
    marginTop: SIZES.small,
  },

  assetLabel: {
    color: "#ffffff",
    fontSize: SIZES.xLarge,
    fontWeight: "700",
    letterSpacing: 0,
    alignItems: "center",
    marginTop: 30
  },

  ContainerRow: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.xLarge,
    marginBottom: 10,
    gap: 10
  },

  History: {
    width: 350,
    marginTop: 20,

  },

  HistoryText: {
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
    marginBottom: 15
  },

  historyItem: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    width: 350,
    borderBottomColor: "gray",
  },

  historyMoney: {
    fontSize: SIZES.medium,
    fontWeight: "bold",
    marginBottom: 5
  },

  historyInfo: {
    fontSize: SIZES.medium,
    opacity: 0.5,
    marginBottom: 5
  },

  historyDate: {
    fontSize: SIZES.medium,
    opacity: 0.5,
    marginBottom: 5,
    textAlign: 'right',
  },

  ViewInput: {
    alignItems: "center",
    gap: SIZES.medium,
    flexDirection:"row"
  },

  TextInput: {
    borderWidth: 1,
    opacity: 0.7,
    height: 50,
    width: 300,
    paddingVertical: 5,
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.medium,
    
  },
  
});

export default styles;