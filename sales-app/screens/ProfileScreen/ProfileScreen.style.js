import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants/theme';

const styles = StyleSheet.create({

  container: {
    padding: 24,
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'left', 
  },
  ViewInput: {
    alignItems: "left",
    gap: SIZES.medium,
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
  title: {
    marginTop: 0,
    paddingVertical: 0,
    borderRadius: 0,
    textAlign: 'center',
    fontSize: SIZES.xxxSmall,
    fontWeight: "bold"
  },
  line: {
    width: 300,
    height: 1,
    backgroundColor: 'grey', 
  },
  changeText: {
    marginTop: 25,
    flex: 1, 
    textAlign: 'right', 
    color:'#01AB6C'
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  margin: {
    marginTop: 25,
  },
  Btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.Saving_Blue,
    borderRadius: SIZES.medium,
    height: 50,
    width: 120,
    marginBottom: 10,
  },

  BtnText: {
    textAlign: 'center',
    color: "white",
    alignItems: 'center',
    padding: 15,
    fontSize: SIZES.medium,
  },
  centerHomeBtn: {
    marginTop:20,
    alignItems: 'center',
  },
});

export default styles;