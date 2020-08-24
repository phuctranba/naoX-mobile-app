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
import Article from './Article';
import datas from './fakeData';
import HeaderList from './HeaderList';

function News() {
  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar barStyle="default" />
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={styles.leftTop}>
            <View style={styles.campaign}>
              <Text style={styles.nameCampaign}>Tên chiến dịch</Text>
              <Icon name="assignment" color="#7E7E7E" size={24} />
            </View>
            <Text style={styles.unitAnalytics}>Tên đơn vị phân tích</Text>
          </View>
          <Icon name="notifications" color="#7E7E7E" size={30} />
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
