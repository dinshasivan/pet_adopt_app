import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function SignUpScreen() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
        Create an Account
      </Text>

      {/* Full Name Input */}
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
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />

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
        placeholder="Email Address"
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
          marginBottom: 15,
          backgroundColor: "#fff",
        }}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Confirm Password Input */}
      <TextInput
        style={{
          height: 50,
          width: "100%",
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 12,
          paddingHorizontal: 15,
          marginBottom: 20,
          backgroundColor: "#fff",
        }}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Sign Up Button */}
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
          Sign Up
        </Text>
      </Pressable>

      {/* Already have an account? Login */}
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text style={{ fontSize: 14, color: "#666" }}>
          Already have an account?
        </Text>
        <Pressable onPress={() => router.push("/login")}>
          <Text style={{ color: "#007bff", fontSize: 14, marginLeft: 5 }}>
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
