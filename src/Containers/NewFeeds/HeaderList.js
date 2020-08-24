/**
 * Header List of News
 */

import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './style';
import Filter from './Filter';

function HeaderList() {
  return (
    <View style={styles.headerList}>
      <View style={styles.searchView}>
        <TextInput style={styles.inputSearch} placeholder="Tìm kiếm"></TextInput>
        <TouchableOpacity style={styles.shortButton}>
          <Icon name="sort" color="#7E7E7E" size={24} />
        </TouchableOpacity>
      </View>
      <Filter></Filter>
    </View>
  );
}

export default HeaderList;
