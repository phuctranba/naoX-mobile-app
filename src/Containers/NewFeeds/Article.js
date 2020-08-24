/**
 * Thẻ nội dung
 */
import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './style';

function Article(index, item) {
  return (
    <View style={styles.article}>
      <View style={styles.viewAvatar}>
        <Image style={styles.avatar} source={{uri: item.avatar}}/>
        <Text style={styles.titleArticle}>{item.title}</Text>
      </View>
      <Text style={styles.contentArticle}>{item.content}</Text>
    </View>
  );
}

export default Article;
