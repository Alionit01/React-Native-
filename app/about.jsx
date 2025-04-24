import { View, Text , StyleSheet} from 'react-native'
import React from 'react'


const About = () => {
  return (
    <View style ={styles.container}>
      <Text style={styles.text}>About</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    text:{
      fontSize: 20,
    },
    link: {
      marginTop: 20,
      fontSize: 18,
      color: "blue",
    },
  
  })

export default About