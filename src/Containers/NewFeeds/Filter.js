import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

function Filter() {
  const datas = [
    {id: 0, content: '1 ngày', isSelect: true},
    {id: 1, content: '2 ngày', isSelect: false},
    {id: 2, content: '3 ngày', isSelect: false},
    {id: 3, content: '4 ngày', isSelect: false},
    {id: 4, content: '5 ngày', isSelect: false},
    {id: 5, content: '6 ngày', isSelect: false},
    {id: 6, content: '7 ngày', isSelect: false},
  ];

  return (
    <View style={styles.filterDate}>
      <FlatList
        style={styles.dateList}
        data={datas}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({index, item}) => filterButton(index, item)}
      />
      <TouchableOpacity style={styles.fliterButton}>
        <Icon name="caret-right" size={24} color="#7F7F7F" />
        <Text style={styles.titleButton}>Tuỳ chỉnh</Text>
      </TouchableOpacity>
    </View>
  );
}

function filterButton(index, item) {
  return (
    <TouchableOpacity
      style={[
        styles.fliterButton,
        {
          backgroundColor: item.isSelect ? 'white' : 'rgba(255,255,255,0)',
          paddingRight: 4,
        },
      ]}>
      <Text style={styles.titleButton}>{item.content}</Text>
    </TouchableOpacity>
  );
}

export default Filter;
