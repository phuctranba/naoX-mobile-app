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
import {SafeAreaView} from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './style';
import Article from './Article';
import datas from './fakeData';
import HeaderList from './HeaderList';
import {lightMode} from '../../Utils/Values';

function News() {
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={styles.leftTop}>
            <View style={styles.campaign}>
              <Text style={styles.nameCampaign}>Tên chiến dịch</Text>
              <Icon name="assignment" color={lightMode.blue} size={24}/>
            </View>
            <Text style={styles.unitAnalytics}>Tên đơn vị phân tích</Text>
          </View>
          <Icon name="notifications" color={lightMode.blue_light} size={30}/>
        </View>
        <FlatList
          style={styles.list}
          data={datas}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={HeaderList}
          renderItem={({index, item}) => Article(index, item)}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

export default News;
