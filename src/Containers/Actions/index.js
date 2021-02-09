/**
 * Bảng tin
 */

import React from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context'
import styles from './style';
import MenuCard from './MenuCard';
import datas from './fakeData';
import HeaderList from './HeaderList';
import {lightMode} from '../../Utils/Values';

function Actions() {
  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar barStyle="default" />
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={styles.leftTop}>
            <View style={styles.campaign}>
              <Text style={styles.nameCampaign}>naoX</Text>
              <Icon name="assignment" color={lightMode.blue} size={24}/>
            </View>
            <Text style={styles.unitAnalytics}>Giúp bạn tìm mọi thứ</Text>
          </View>
          <Icon name="notifications" color={lightMode.blue_light} size={30}/>
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
