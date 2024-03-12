import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import styles from "../style/styles";
import { SettingsContext } from "./Contexts";

export default Settings = () => {

  const { isMiles, setIsMiles } = useContext(SettingsContext);

  return (
    <View>
      <RadioButton.Group onValueChange={isMiles => setIsMiles(isMiles)} value={isMiles}>
        <RadioButton.Item label="Kilometers" value={false} />
        <RadioButton.Item label="Miles" value={true} />
      </RadioButton.Group>
    </View>
  )
}