import React, { useState } from "react";
import ButtonComp from "./src/Components/ButtonComp";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  const [select, setSelect] = useState([]);
  const [submit, setSubmit] = useState(false);
  const heros = [
    { name: "SpiderMan" },
    { name: "Venom" },
    { name: "IronMan" },
    { name: "Batman" },
    { name: "Woderwoman" },
    { name: "Hulk" },
  ];
  const eraseMarked = () => {
    setSelect([]);
  };

  const printHero = () => {
    setSubmit(true);
  };
  const handleSelected = (heroName) => {
    if (select.includes(heroName)) {
      setSelect(select.filter((hero) => hero !== heroName));
    } else {
      setSelect([...select, heroName]);
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 60,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={eraseMarked} activeOpacity={0.8}>
          <Image
            style={{ height: 40, width: 40, marginTop: 8 }}
            source={require("../Task2/assets/navigation-bar.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <Image
            style={{ height: 60, width: 250, borderRadius: 20 }}
            source={require("../Task2/assets/header-fox.jpg")}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <Image
            style={{ height: 40, width: 40, marginTop: 8, borderRadius: 15 }}
            source={require("../Task2/assets/Reminders-Red-And-Black.webp")}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            marginTop: 20,
            marginBottom: 30,
            textDecorationLine: "underline",
          }}
        >
          Choose your Hero
        </Text>
      </View>

      {heros.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => handleSelected(item.name)}>
          <View
            style={{
              flexDirection: "row",
              margin: 10,
              justifyContent: "space-between",
            }}
          >
            <Text>{item.name}</Text>
            <View style={styles.radioStyle1}>
              {select.includes(item.name) ? (
                <View style={styles.radioStyle2}></View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
      ))}

      {submit && (
        <View>
          <Text>{select}</Text>
        </View>
      )}
      <TouchableOpacity
        style={{
          height: 30 ,
          width: 100,
          backgroundColor: "lightblue",
          justifyContent: "center",
          alignItems: "center",
          alignSelf:"center",
          borderRadius:10,
          
        }}
        onPress={printHero}
      >
        <Text>submit</Text>
      </TouchableOpacity>
      {/* <ButtonComp onPress={printHero} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  radioStyle1: {
    backgroundColor: "white",
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: "center",
  },
  radioStyle2: {
    backgroundColor: "maroon",
    height: 20,
    width: 20,
    borderRadius: 10,
    borderColor: "green",
    borderWidth: 1,
    alignSelf: "center",
  },
});
