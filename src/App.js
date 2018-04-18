import React, { Component } from 'react';
import { Animated, AppRegistry, Image, StyleSheet, Text, View } from 'react-native';

import { siteWideHorizontalPadding } from './styles';
import JobSection from './sections/JobSection';
import SkillSection from './sections/SkillSection';
import Footer from './Footer';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "space-between",
    height: "100%",
  },
  header: {
    paddingHorizontal: siteWideHorizontalPadding,
    height: 80,
    backgroundColor: "black",
    justifyContent: "center",
  },
  center: {
    flex: 1,
    paddingHorizontal: siteWideHorizontalPadding,
  },
  headerText: {
    fontSize: 32,
    color: "white",
  },
  sectionHeaderText: {
    fontSize: 28,
    marginBottom: 5,
  },
});

const jobsSections = [
  {
    companyName: "NC Smart Call",
    jobTitle: "Software Developer",
  },
  {
    companyName: "Push Interactions",
    jobTitle: "Mobile Software Engineer",
  },
  {
    companyName: "Research in Motion",
    jobTitle: "Applications Developer, Intern",
  }
]

const skillsSections = [
  {
    title: "Python",
    details: "I've worked with Python for over 4 years now.",
  },
  {
    title: "Javascript",
    details: "I've worked with Javascript for over 1 year now.",
  }
]

class App extends Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Brennan Rauert</Text>
        </View>
        <View style={styles.center}>
          <View>
            <Text style={styles.sectionHeaderText}>Skills</Text>
            { skillsSections.map(section => <SkillSection  {...section} />) }
          </View>
          <View>
            <Text style={styles.sectionHeaderText}>Work Experience</Text>
            { jobsSections.map(section => <JobSection  {...section} />) }
          </View>
        </View>
        <Footer />
      </View>
    );
  }
}

export default App;
