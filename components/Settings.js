import React, { useContext } from "react";
import { View } from "react-native";
import { RadioButton } from "react-native-paper";
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