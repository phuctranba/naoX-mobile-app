/**
 * Header của List
 */

 import React from 'react';
 import {View, Text} from 'react-native';
import styles from './style';

function HeaderList() {
  return (
    <View style={styles.headerList}>
      <Text style={styles.nameUser}>Trần Văn Bưởi</Text>
      <Text style={styles.mail}>admin@gmail.com</Text>
      <View style={styles.statistical}>
        <View style={styles.columnStatistical}>
          <Text style={styles.numberText}>6</Text>
          <Text style={styles.text}>Chiến dịch đã chạy</Text>
        </View>
        <View style={styles.verticalLine}></View>
        <View style={styles.columnBoard}>
          <Text style={styles.text}>Đơn vị phân tích</Text>
          <Text style={styles.numberText}>24</Text>
        </View>
      </View>
      <Text style={styles.text}>123,456,789 kết quả được phân tích</Text>
    </View>
  );
}

export default HeaderList;
