import { NavigationContainer } from '@react-navigation/native';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, Alert, TextInput, ScrollView } from 'react-native';
import  Top  from '../components/Top';
import Product from '../components/Product';


const Index = () => {

  const products=[
    {
      name: "Product 1",
      color: "Black",
      price: 40000,
    },
    {
      name: "Product 2",
      color: "White",
      price: 50000,
    },
    {
      name: "Product 3",
      color: "Blue",
      price: 60000,
    },
  ]

 return(
  <View >
    <Top/>
    <ScrollView>
  {
  products.map((item, index) => (
    <Product key={index} item={item} index={index} />
  ))
  }
</ScrollView>

    
    

    {/* <Link href={"/about"} style={styles.link}>Go to about</Link> */}
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


export default Index;
