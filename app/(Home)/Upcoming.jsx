import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Upcoming = ({ upcomingCourses }) => {
  if (!upcomingCourses || upcomingCourses.length === 0) {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Courses</Text>
        <Text style={styles.noCourses}>No upcoming courses available</Text>
      </View>
    );
  }

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Upcoming Courses</Text>
      {upcomingCourses.map((course, index) => (
        <View key={index} style={styles.courseCard}>
          <Text style={styles.courseTitle}>{course.title}</Text>
          <Text style={styles.courseStartDate}>Starting on: {course.startDate}</Text>
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
  courseStartDate: {
    fontSize: 14,
    color: '#555',
  },
  noCourses: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
});

export default Upcoming;
