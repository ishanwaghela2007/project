import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Courses = ({ courses }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Our Courses</Text>
      {courses.map((course, index) => (
        <View key={index} style={styles.courseCard}>
          <Text style={styles.courseTitle}>{course.title}</Text>
          <Text style={styles.courseDescription}>{course.description}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  courseCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 12,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  courseDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default Courses;
