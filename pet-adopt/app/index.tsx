import { Link } from "expo-router";
import { Text, View, Image, Pressable } from "react-native";
import Colors from "@/constants/Colors";

export default function Index() {
  return (
    <View>
      <Image
        source={require("../assets/images/login.png")}
        style={{
          width: "100%",
          height: 500,
        }}
      />
      <View
        style={{
          padding: 20,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 25,
            marginLeft: 2,
          }}
        >
          Ready to make a new friend?
        </Text>

        <Text
          style={{
            fontSize: 14,
            fontFamily: "outfit",
            color: Colors.GRAY,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Let's adopt the pet you like and make their life happy again.
        </Text>

        <Pressable
          style={{
            padding: 14,
            marginTop: 100,
            backgroundColor: Colors.PRIMARY,
            width: "100%",
            borderRadius: 14,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
