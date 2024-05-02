import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 6,
    textAlign: "center",
    fontSize: SIZES.xxLarge,
    fontWeight: "bold",
  },

  Btn: {
    marginTop: SIZES.xxLarge,
    alignItems: "center",
    backgroundColor: COLORS.Saving_Blue,
    borderRadius: SIZES.medium,
    height: 50,
  },

  BtnText: {
    textAlign: "center",
    color: "white",
    alignItems: "center",
    padding: 15,
  },
  title: {
    marginTop: 5,
    paddingVertical: 8,
    borderRadius: 6,
    width: "100%",
    textAlign: "left",
    marginLeft: 30,
    fontSize: SIZES.xxLarge,
    fontWeight: "bold",
  },
  contentTitle: {
    paddingVertical: 8,
    borderRadius: 6,
    textAlign: "center",
    fontSize: SIZES.medium,
    fontWeight: "bold",
  },
  contentTitle2: {
    paddingVertical: 8,
    borderRadius: 6,
    textAlign: "left",
    marginLeft: 30,
    fontSize: SIZES.medium,
    fontWeight: "bold",
  },
  contentTitle3: {
    paddingVertical: 8,
    borderRadius: 6,
    textAlign: "left",
    width: "100%",
    marginLeft: 60,
    fontSize: SIZES.medium,
    fontWeight: "bold",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    marginTop: 20,
    width: 330,
    height: 135,
    borderRadius: 25,
    shadowOpacity: 1,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    backgroundColor: COLORS.Saving_Blue,
  },
  cardContent: {
    padding: 10,
    marginTop: 25,
  },
  expenseText: {
    fontSize: SIZES.medium,
    color: "white",
    textAlign: "left",
    marginLeft: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-between",
  },
  articleContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    justifyContent: "space-between",
  },
  expenseAmount: {
    fontSize: SIZES.xLarge,
    color: "white",
    fontWeight: "bold",
    marginLeft: 25,
  },
  btn: {
    backgroundColor: "white",
    borderRadius: SIZES.small,
    height: 35,
    width: 120,
    justifyContent: "center",
    textAlign: 'center',
    color: 'white',
    alignItems: 'center',
  },
  BtnText2: {
    color: COLORS.Saving_Red,
    textAlign: "center",
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  option: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    width: "100%",
  },
  optionText: {
    fontSize: 18,
    textAlign: "center",
  },
  closeButton: {
    fontSize: 16,
    color: "blue",
    textAlign: "center",
  },
    stockImageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10, // Adjust margin as per your UI requirement
  },

  History: {
    width: 350,
    marginTop: 20,
  },

  HistoryText: {
    fontSize: SIZES.medium,
    fontWeight: "bold",
  },

  historyItem: {
    backgroundColor: "white",
    borderWidth: 1,
    width: 350,
    borderColor: "gray",
    borderRadius: SIZES.small,
    height: 40,
    justifyContent: "center"
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
});

export default styles;
