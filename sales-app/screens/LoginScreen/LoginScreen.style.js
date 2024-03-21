import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants/theme';

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
    fontSize: SIZES.xxLarge,
    fontWeight: "bold"
  },

  ViewInput: {
    alignItems: "center",
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

  Btn: {
    marginTop: SIZES.xxLarge,
    alignItems: "center",
    backgroundColor: COLORS.Saving_Blue,
    borderRadius: SIZES.medium,
    height: 50,
  },

  BtnText: {
    textAlign: 'center',
    color: 'white',
    alignItems: 'center',
    padding: 15
  }
});

export default styles;