import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Button,
} from "react-native";

const Advertisement = (props) => {
  return (
    <View style={styles.ads}>
      <Image
        source={require("./assets/Porsche.jpeg")}
        style={{ flex: 1, height: "50px", width: "100px", margin: "auto" }}
      ></Image>
      <Text style={styles.textstyle}> {props.title} </Text>
      <Text style={styles.textstyle}> {props.location} </Text>
      <Text style={styles.textstyle}> {props.price} </Text>
    </View>
  );
};

export default function App() {
  const [currentColor, set_currentColor] = useState("black");

  function buttonToggle() {
    if (currentColor == "black") {
      set_currentColor("white");
    } else {
      set_currentColor("black");
    }
  }

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: currentColor }}
      className="4"
    >
      <ScrollView style={styles.container} className="3">
        <View style={styles.subcontainer} className="2">
          <View className="1">
            <View style={{ marginBottom: "10px" }}>
              <Advertisement
                title="Volvo"
                location="Gotland"
                price="250000kr"
              />
            </View>
            <View style={{ marginBottom: "10px" }}>
              <Advertisement
                title="Porsche"
                location="England"
                price="400000kr"
              />
            </View>
            <View style={{ marginBottom: "10px" }}>
              <Advertisement
                title="Fiat"
                location="Stockholm"
                price="400000kr"
              />
            </View>
            <View style={{ marginBottom: "10px" }}>
              <Advertisement
                title="BMW"
                location="Gothenburg"
                price="400000kr"
              />
            </View>
            <View>
              <Advertisement title="Saab" location="Varberg" price="400000kr" />
            </View>
          </View>
        </View>
      </ScrollView>

      <Button
        title="Change variables"
        onPress={() => {
          buttonToggle();
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  subcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    marginTop: "-30px",
    flex: 0.2,
  },

  ads: {
    width: "220px",
    height: "150px",
    backgroundColor: "#fff",
    paddingBottom: "20px",
    paddingTop: "20px",
    textAlign: "center",
  },

  btn: {
    marginTop: "100px",
  },

  textstyle: {
    marginTop: "10px",
  },

  textbox: {
    flex: 1,
  },
});
