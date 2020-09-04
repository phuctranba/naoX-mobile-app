import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {lightMode} from '../../Utils/Values';
import {moderateScale} from 'react-native-size-matters';
import * as STYLE from '../../Utils/Values/general_style';

function FilterDate() {
    const styles = style(lightMode);
    const datas = [
        {id: 0, content: '3 ngày', isSelect: true},
        {id: 1, content: '7 ngày', isSelect: false},
        {id: 2, content: '15 ngày', isSelect: false},
        {id: 3, content: '1 tháng', isSelect: false},
        {id: 4, content: '3 tháng', isSelect: false},
        {id: 5, content: '6 tháng', isSelect: false},
    ];

    return (
        <View style={styles.filterDate}>
            <FlatList
                style={styles.dateList}
                data={datas}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({index, item}) => filterButton(index, item, styles)}
            />
            <View style={styles.viewButtonOption}>
                <Icon name="caret-right" size={moderateScale(20,0.3)} color={lightMode.blue}/>
                <TouchableOpacity activeOpacity={0.7} style={styles.fliterButtonOption}>
                    <Text style={styles.titleButtonOption}>Tuỳ chỉnh</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function filterButton(index, item, styles) {
    return (
        <TouchableOpacity
            style={[
                styles.fliterButton,
                {
                    backgroundColor: item.isSelect ? 'white' : 'rgba(255,255,255,0)',
                },
                item.isSelect?STYLE.SHADOW:null
            ]}>
            <Text style={styles.titleButton}>{item.content}</Text>
        </TouchableOpacity>
    );
}

export default FilterDate;
