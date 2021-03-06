import {StyleSheet} from 'react-native';
import {greaterThan} from 'react-native-reanimated';

import * as STYLE from '../../Utils/Values/general_style';
import {lightMode} from '../../Utils/Values';

const styles = StyleSheet.create({
  // Styles News
  safeView: {
    flex: 1,
    // backgroundColor: '#e1e7ed',
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 16,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  leftTop: {},
  campaign: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  nameCampaign: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 4,
    color: lightMode.blue,
  },
  notification: {},
  unitAnalytics: {
    fontSize: 16,
    color: lightMode.blue,
  },

  // Styles list
  list: {
    paddingTop: 8,
  },
  headerList: {
    marginBottom: 16,
  },
  searchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  inputSearch: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginRight: 16,
    paddingHorizontal: 8,
    flex: 1,
  },
  shortButton: {
    marginVertical: 2,
    marginRight: 2,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 5,
    ...STYLE.SHADOW,
    justifyContent: 'center',
    alignItems: 'center',
  },
  article: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
    marginHorizontal: 2,
    backgroundColor: 'white',
    borderRadius: 5,
    ...STYLE.SHADOW,
  },
  viewAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 8,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(126, 126, 126, 0.5)',
  },
  titleArticle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#4d4d4d',
  },
  contentArticle: {
    color: '#4d4d4d',
  },
});

export default styles;
