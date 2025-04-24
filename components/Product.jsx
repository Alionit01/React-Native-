import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';  // Import useDispatch
import { addToCart } from './redux/action';

const Product = ({ item }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
     
        dispatch(addToCart(item)) 
    };

    return (
        <View style={{ padding: 10, borderBottomWidth: 2 }}>
            <Text style={{ fontSize: 24 }}>{item?.name}</Text>
            <Text style={{ fontSize: 24 }}>{item?.color}</Text>
            <Text style={{ fontSize: 24 }}>{item?.price}</Text>
            <Button title="Add to cart" onPress={() => handleAddToCart(item)} color="grey" />
        </View>
    );
};

export default Product;
