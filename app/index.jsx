import { StyleSheet, Text, View } from "react-native";
import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


const index = () => {
  return (
    <View className="flex-1 justify-center items-center bg-yellow-300">
      <Text>index</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
