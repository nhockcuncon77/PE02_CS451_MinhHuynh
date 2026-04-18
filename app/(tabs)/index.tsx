import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, SafeAreaView } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Logo Section */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Archery_Target_80cm.svg/1200px-Archery_Target_80cm.svg.png' }} 
            style={styles.logo}
          />
        </View>

        {/* Input Section */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Which course did you like?</Text>
          <TextInput
            style={styles.input}
            placeholder="ex. CS624"
          />
        </View>

        {/* Core Requirements */}
        <Text style={styles.header}>Core Requirements (24 Credits)</Text>
        <View style={styles.listSection}>
          <Text style={styles.courseText}>CS504 Software Engineering</Text>
          <Text style={styles.courseText}>CS506 Programming for Computing</Text>
          <Text style={styles.courseText}>CS519 Cloud Computing</Text>
          <Text style={styles.courseText}>CS533 Computer Architecture</Text>
          <Text style={styles.courseText}>CS547 Secure Systems and Programs</Text>
          <Text style={styles.courseText}>CS622 Discrete Math and Algorithms for Computing</Text>
          <Text style={styles.courseText}>DS510 Artificial Intelligence for Data Science</Text>
          <Text style={styles.courseText}>DS620 Machine Learning & Deep Learning</Text>
        </View>

        {/* Depth of Study */}
        <Text style={styles.header}>Depth of Study (6 Credits)</Text>
        <View style={styles.listSection}>
          <Text style={styles.courseText}>CS624 Full-Stack Development - Mobile App</Text>
          <Text style={styles.courseText}>CS628 Full-Stack Development - Web Application</Text>
        </View>

        {/* Electives */}
        <Text style={styles.header}>Electives (6 Credits)</Text>
        <View style={styles.listSection}>
          <Text style={styles.courseText}>CS680 Computer Science Internship</Text>
        </View>

        {/* Capstone */}
        <Text style={styles.header}>Capstone (3 Credits)</Text>
        <View style={styles.listSection}>
          <Text style={styles.courseText}>CS687 Computer Science Capstone</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 20,
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '60%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
  },
  header: {
    backgroundColor: '#FFEE00',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '90%',
    paddingVertical: 5,
    marginTop: 10,
  },
  listSection: {
    width: '90%',
    alignItems: 'center',
    marginBottom: 10,
  },
  courseText: {
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 1,
    color: '#333',
  },
});