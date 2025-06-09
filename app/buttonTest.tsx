import { Ionicons } from "@expo/vector-icons";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ButtonTest() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.sectionTitle}>{Platform.OS}</Text>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Border Width: 2</Text>
          <View style={styles.buttonContainer}>
            <Pressable style={[styles.decorateButton, styles.border2]}>
              <Ionicons name="color-palette" size={24} color="#ffffff" />
            </Pressable>
            <View style={styles.createDeckButtonWrapper}>
              <Pressable style={[styles.createDeckButton, styles.border2]}>
                <Ionicons name="add-circle-outline" size={24} color="#ffffff" />
                <Text style={styles.createDeckButtonText}>Border Bottom</Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Border Width: 4</Text>
          <View style={styles.buttonContainer}>
            <Pressable style={[styles.decorateButton, styles.border4]}>
              <Ionicons name="color-palette" size={24} color="#ffffff" />
            </Pressable>
            <View style={styles.createDeckButtonWrapper}>
              <Pressable style={[styles.createDeckButton, styles.border4]}>
                <Ionicons name="add-circle-outline" size={24} color="#ffffff" />
                <Text style={styles.createDeckButtonText}>Border Bottom</Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Border Width: 6</Text>
          <View style={styles.buttonContainer}>
            <Pressable style={[styles.decorateButton, styles.border6]}>
              <Ionicons name="color-palette" size={24} color="#ffffff" />
            </Pressable>
            <View style={styles.createDeckButtonWrapper}>
              <Pressable style={[styles.createDeckButton, styles.border6]}>
                <Ionicons name="add-circle-outline" size={24} color="#ffffff" />
                <Text style={styles.createDeckButtonText}>Border Bottom</Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Border Width: 8</Text>
          <View style={styles.buttonContainer}>
            <Pressable style={[styles.decorateButton, styles.border8]}>
              <Ionicons name="color-palette" size={24} color="#ffffff" />
            </Pressable>
            <View style={styles.createDeckButtonWrapper}>
              <Pressable style={[styles.createDeckButton, styles.border8]}>
                <Ionicons name="add-circle-outline" size={24} color="#ffffff" />
                <Text style={styles.createDeckButtonText}>Border Bottom</Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Border Width: 10</Text>
          <View style={styles.buttonContainer}>
            <Pressable style={[styles.decorateButton, styles.border10]}>
              <Ionicons name="color-palette" size={24} color="#ffffff" />
            </Pressable>
            <View style={styles.createDeckButtonWrapper}>
              <Pressable style={[styles.createDeckButton, styles.border10]}>
                <Ionicons name="add-circle-outline" size={24} color="#ffffff" />
                <Text style={styles.createDeckButtonText}>Border Bottom</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollContainer: {
    padding: 16,
  },
  sectionContainer: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  decorateButton: {
    backgroundColor: "#FF6B6B",
    padding: 12,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#FF6B6B",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    borderBottomColor: "#e55353",
  },
  createDeckButtonWrapper: {
    flex: 1,
    alignItems: "center",
  },
  createDeckButton: {
    backgroundColor: "#007AFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderBottomColor: "#0056b3",
  },
  createDeckButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
  border2: {
    borderBottomWidth: 2,
  },
  border4: {
    borderBottomWidth: 4,
  },
  border6: {
    borderBottomWidth: 6,
  },
  border8: {
    borderBottomWidth: 8,
  },
  border10: {
    borderBottomWidth: 10,
  },
});
