/**
 * Card menu
 */
import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';

function MenuCard(index, item) {
  return (
    <View style={styles.menuCard}>
      <Icon name={item.icon} size={30} color='#7F7F7F'/>
      <Text style={styles.nameCard}>{item.title}</Text>
    </View>
  );
}

export default MenuCard;
