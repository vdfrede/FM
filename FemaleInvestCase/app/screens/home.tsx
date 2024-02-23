import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import CourseCard from "../../components/courseCard";
import axios from "axios";

interface Lesson {
  id: string;
  name: string;
  duration: number;
}
interface Course {
  id: string;
  coverImage: string;
  progress: number;
  name: string;
  lessons: Lesson[];
  duration: number;
}

const HomeScreen = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [startedCourses, setStartedCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:3000/courses");

        const coursesWithProgress = response.data.filter(
          (course: { progress: number }) => course.progress > 0
        );
        const remaining = response.data.filter(
          (course: { progress: number }) => course.progress <= 0
        );
        setStartedCourses(coursesWithProgress);
        setCourses(remaining);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.heading}>Continue Learning</Text>
        <FlatList
          data={startedCourses}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={({ item }) => <CourseCard {...item} />}
          ItemSeparatorComponent={() => <View style={styles.scrollGap} />}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.heading}> You might also like</Text>
        <FlatList
          data={courses}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={({ item }) => <CourseCard {...item} />}
          ItemSeparatorComponent={() => <View style={styles.scrollGap} />}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

interface Styles {
  container: ViewStyle;
  heading: TextStyle;
  scrollGap: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 20,
    paddingVertical: 20,
  },
  scrollGap: {
    width: 20,
  },
});
