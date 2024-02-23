import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

const MyCoursesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Courses</Text>
    </View>
  );
};

export default MyCoursesScreen;

interface Styles {
  container: ViewStyle;
  heading: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 20,
    paddingVertical: 20,
  },
});
