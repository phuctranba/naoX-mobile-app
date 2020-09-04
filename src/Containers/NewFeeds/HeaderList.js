/**
 * Header List of News
 */

import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './style';
import FilterDate from '../../Components/FilterDate';

function HeaderList() {
  return (
    <View style={styles.headerList}>
      <View style={styles.searchView}>
        <TextInput style={styles.inputSearch} placeholder="Tìm kiếm"/>
        <TouchableOpacity style={styles.shortButton}>
          <Icon name="sort" color="#7E7E7E" size={24} />
        </TouchableOpacity>
      </View>
      <FilterDate/>
    </View>
  );
}

export default HeaderList;
