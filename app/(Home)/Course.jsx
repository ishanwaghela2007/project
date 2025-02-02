    import React, { useState, useEffect } from 'react';
    import { View, Text, StyleSheet, Dimensions } from 'react-native';

    const { width, height } = Dimensions.get('window');

    export default function Course() {
    // Assuming courses is fetched or passed as props, initializing with an empty array
    const [courses, setCourses] = useState([]);

    // Example: You might fetch data in useEffect
    useEffect(() => {
        // This is just an example; replace with actual data fetching logic
        const fetchCourses = async () => {
        // Simulate a network request with a set timeout
        setTimeout(() => {
            setCourses([
            { title: 'Course 1', description: 'Description of Course 1' },
            { title: 'Course 2', description: 'Description of Course 2' },
            ]);
        }, 1000);
        };

        fetchCourses();
    }, []);

    return (
        <View style={styles.container}>
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Our Courses</Text>
            {/* Conditional rendering to ensure courses is an array before calling map */}
            {Array.isArray(courses) && courses.length > 0 ? (
            courses.map((course, index) => (
                <View key={index} style={styles.courseCard}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <Text style={styles.courseDescription}>{course.description}</Text>
                </View>
            ))
            ) : (
            <Text style={styles.noCourses}>No courses available</Text>
            )}
        </View>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    courseCard: {
        backgroundColor: '#f8f8f8',
        padding: 10,
        marginVertical: 10,
        borderRadius: 8,
    },
    courseTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    courseDescription: {
        fontSize: 14,
        color: '#777',
    },
    noCourses: {
        fontSize: 16,
        color: '#888',
    },
    });
