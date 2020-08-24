import { ViewStyle } from "react-native";

// đổ bóng shadow cho một đối tượng
export const SHADOW: ViewStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.1,
  shadowRadius: 2.22,

  elevation: 3,
};

// custom hàng căn giữa trục y
export const ROW_LEFT: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
}

// custom hàng căn giữa 2 trục
export const ROW_CENTER: ViewStyle = {
    ...ROW_LEFT,
    justifyContent: 'center',
}

// custom cột căn giữa 2 trục
export const COLUMN_CENTER: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center',
}