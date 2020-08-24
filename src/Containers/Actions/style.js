import {StyleSheet} from 'react-native';
import { greaterThan } from 'react-native-reanimated';
import * as STYLE from '../../Utils/Values/general_style';

const styles = StyleSheet.create({
  // Style Actions
  safeView: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 16,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  }, 
  nameApp: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 4,
    color: '#7E7E7E',
  },
  slogan: {
    paddingTop: 4,
    fontSize: 16,
    color: '#7E7E7E',
  },
  list: {
    paddingTop: 8,
  },

  // Style menu card
  menuCard: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
    marginHorizontal: 2,
    backgroundColor: 'white',
    borderRadius: 5,
    ...STYLE.SHADOW,
    ...STYLE.ROW_LEFT
  },
  nameCard: {
      color: '#4d4d4d',
      fontSize: 18,
      marginLeft: 8,
  },

  //Style phần header list
  headerList: {
    backgroundColor: 'white',
    ...STYLE.SHADOW,
    padding: 16,
    marginBottom: 16,
  },
  nameUser: {
    color: '#7F7F7F',
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  mail: {
    color: '#7F7F7F',
    fontSize: 13,
    marginBottom: 8,
  },
  statistical: {
    ...STYLE.ROW_CENTER,
    justifyContent: 'space-around',
    paddingBottom: 16
  },
  verticalLine: {
    backgroundColor: '#7F7F7F',
    width: 1,
    height: '100%'
  },
  columnStatistical: {
    ...STYLE.COLUMN_CENTER,
  },
  numberText: {
    fontSize: 30,
    color: '#7F7F7F',
    fontWeight: 'bold',
  },
  text: {
    color: '#7F7F7F',
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center'
  }
});

export default styles;
