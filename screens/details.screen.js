import React, { useState, useEffect, useContext } from 'react';

import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { List } from 'react-native-paper';
import { colors, DefaultText, SubText } from '../constants';
// import {Favourite} from '../components/Restaurants/component/favourite.component';
import { Favourite } from '../components/Favourites/component/favourite.component';
import axios from 'axios';


export const DetailsScreen = ({ route, navigation }) => {
  let product;
  useEffect(() => {
    getProducts();
  }, []);
  const api = axios.create({
    baseURL: 'http://192.168.1.35:8000/api/v1/',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })
  const token = '2|H0tnK2hkUdtvMzErNQPNRPXlJdsW9m6x7NnD1xoE'
  const getProducts = async () => {
    const res = await api.get('products', {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    if (res) {
      console.log(res.data.data)
      product = res.data.data
      console.log(product.name)
    }
    else {
      console.log(res + 'no funciona tu huevada')
    }

  }
  const { restaurant } = route.params;
  const [isBreakfastOpen, setIsBreakfastOpen] = useState(false);
  const [isLunchOpen, setIsLunchOpen] = useState(false);
  const [isDinnerOpen, setIsDinnerOpen] = useState(false);

  const renderRating = rating => {
    const arrRating = Array.from(new Array(Math.ceil(rating)));

    const mappedRating = arrRating.map((item, index) => {
      return (
        <FontAwesome
          key={index}
          name="star"
          size={20}
          color={colors.yellow}
          style={{
            marginRight: 10,
          }}
        />
      );
    });

    return mappedRating;
  };

  return (
    <SafeAreaView>
      {/* back icon */}
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={40} />
        </TouchableOpacity>
      </View>

      {/* show item poistion on map 
        using google map
      */}
      <View style={styles.container}>
        <View>
          <Favourite restaurant={restaurant} />
          <Image
            source={{
              uri: restaurant.photos[0],
            }}
            style={styles.img}
          />
          <DefaultText> {restaurant.name} </DefaultText>
          <SubText> {restaurant.vicinity} </SubText>
          <View
            style={{
              flexDirection: 'row',
            }}>
            {renderRating(restaurant.rating)}
          </View>
        </View>

        <ScrollView>
          <List.Accordion
            title="Informacion"
            expanded={isBreakfastOpen}
            onPress={() => setIsBreakfastOpen(!isBreakfastOpen)}>
            <List.Item title="Telefono: 098213798217" />
            <List.Item title="Direccion: calle20 y calle 2" />
          </List.Accordion>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

// create theme for fonts and spacings
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  img: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
});
