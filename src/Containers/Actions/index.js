/**
 * Bảng tin
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './style';
import MenuCard from './MenuCard';
import datas from './fakeData';
import HeaderList from './HeaderList';

function Actions() {
  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar barStyle="default" />
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={styles.leftTop}>
            <Text style={styles.nameApp}>naoX</Text>
            <Text style={styles.slogan}>Giúp bạn tìm mọi thứ</Text>
          </View>
          <Icon name="notifications" color="#7E7E7E" size={30} />
        </View>
        <FlatList
          style={styles.list}
          data={datas}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={HeaderList}
          renderItem={({index, item}) => MenuCard(index, item)}
          showsVerticalScrollIndicator={false}/>
      </View>
    </SafeAreaView>
  );
}

export default Actions;
