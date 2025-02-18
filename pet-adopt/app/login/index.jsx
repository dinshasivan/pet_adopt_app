import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Title */}
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 30,
          color: "#333",
        }}
      >
        Welcome Back!
      </Text>

      {/* Email Input */}
      <TextInput
        style={{
          height: 50,
          width: "100%",
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 12,
          paddingHorizontal: 15,
          marginBottom: 15,
          backgroundColor: "#fff",
        }}
        placeholder="Enter your email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input */}
      <TextInput
        style={{
          height: 50,
          width: "100%",
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 12,
          paddingHorizontal: 15,
          marginBottom: 10,
          backgroundColor: "#fff",
        }}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Forgot Password */}
      <Pressable onPress={() => router.push("/forgot-password")}>
        <Text
          style={{
            color: "#007bff",
            fontSize: 14,
            alignSelf: "flex-end",
            marginBottom: 20,
          }}
        >
          Forgot Password?
        </Text>
      </Pressable>

      {/* Login Button */}
      <Pressable
        style={{
          backgroundColor: "#007bff",
          padding: 15,
          borderRadius: 12,
          width: "100%",
          alignItems: "center",
          marginBottom: 15,
        }}
        onPress={() => router.push("/home")}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
          Login
        </Text>
      </Pressable>

      {/* Sign Up Link */}
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text style={{ fontSize: 14, color: "#666" }}>
          Don't have an account?
        </Text>
        <Pressable onPress={() => router.push("/signup")}>
          <Text style={{ color: "#007bff", fontSize: 14, marginLeft: 5 }}>
            Sign Up
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
