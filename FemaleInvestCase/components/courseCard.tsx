import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageStyle,
  TextStyle,
  ViewStyle,
} from "react-native";

import { FontAwesome, Feather } from "@expo/vector-icons";

interface Lesson {
  id: string;
  name: string;
  duration: number;
}
interface Course {
  id: string;
  coverImage: string;
  progress?: number;
  name: string;
  lessons: Lesson[];
  duration: number;
}

const CourseCard = ({
  coverImage,
  progress,
  name,
  lessons,
  duration,
}: Course) => {
  return (
    <View style={[styles.container, !!progress && { width: 200, height: 200 }]}>
      <Image source={{ uri: coverImage }} style={styles.coverImage} />
      {!!progress && (
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>{progress * 100}% completed</Text>
        </View>
      )}

      <FontAwesome name="bookmark-o" size={20} style={styles.bookmarkIcon} />

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.rowContainer}>
          <Text style={styles.detailText}>{lessons.length} lessons</Text>
          <Text>
            <Feather name="clock" size={15} color="black" />
            {` ${(duration / 3600).toFixed(1)}h`}
          </Text>
        </View>
      </View>
    </View>
  );
};

interface Styles {
  container: ViewStyle;
  coverImage: ImageStyle;
  bookmarkIcon: ViewStyle;
  progressContainer: ViewStyle;
  progressText: TextStyle;
  detailsContainer: ViewStyle;
  title: TextStyle;
  rowContainer: ViewStyle;
  detailText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  coverImage: {
    flex: 1,
    resizeMode: "cover",
  },
  bookmarkIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 20,
    height: 20,
  },
  progressContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    borderRadius: 20,
    borderColor: "#000",
    backgroundColor: "#f3fc6f",
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  progressText: {
    fontSize: 10,
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    fontSize: 15,
    marginBottom: 5,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  detailText: {
    paddingRight: 10,
  },
});

export default CourseCard;
