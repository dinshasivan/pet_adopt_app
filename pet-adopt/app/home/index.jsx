import { Link } from "expo-router";
import { Text, View, Image, Pressable, ScrollView } from "react-native";
import Colors from "@/constants/Colors";

export default function Home() {
  return (
    <ScrollView
      style={{
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      {/* Home Banner */}
      <Image
        source={require("./../../assets/images/login.png")}
        style={{
          width: "100%",
          height: 350,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      />

      <View
        style={{
          padding: 20,
          alignItems: "center",
        }}
      >
        {/* Heading */}
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 25,
            textAlign: "center",
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

        {/* Categories Section */}
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
            marginTop: 30,
            alignSelf: "flex-start",
          }}
        >
          Browse by Category
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            width: "100%",
          }}
        >
          {/* Dog Category */}
          <Pressable
            style={{
              alignItems: "center",
              width: "30%",
            }}
          >
            <Image
              source={require("./../../assets/images/bone.png")}
              style={{ width: 80, height: 80 }}
            />
            <Text style={{ fontSize: 16, fontFamily: "outfit-medium" }}>
              Dogs
            </Text>
          </Pressable>

          {/* Cat Category */}
          <Pressable
            style={{
              alignItems: "center",
              width: "30%",
            }}
          >
            <Image
              source={require("./../../assets/images/weight.png")}
              style={{ width: 80, height: 80 }}
            />
            <Text style={{ fontSize: 16, fontFamily: "outfit-medium" }}>
              Cats
            </Text>
          </Pressable>

          {/* Bird Category */}
          <Pressable
            style={{
              alignItems: "center",
              width: "30%",
            }}
          >
            <Image
              source={require("./../../assets/images/calendar.png")}
              style={{ width: 80, height: 80 }}
            />
            <Text style={{ fontSize: 16, fontFamily: "outfit-medium" }}>
              Birds
            </Text>
          </Pressable>
        </View>
      </View>
      
    </ScrollView>
  );
}
