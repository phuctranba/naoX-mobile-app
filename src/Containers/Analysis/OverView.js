import {Text, TouchableOpacity} from 'react-native';
import {convertNumber} from '../../Utils/Functions/convent_big_number';
import {Task_Colors} from '../../Utils/Values';
import React from 'react';

export default function Overview(index, data,styles, moveToDetail) {

    return(
        <TouchableOpacity activeOpacity={0.7} style={styles.touchopaOverview} key={index.toString()} onPress={()=>moveToDetail()}>

            <Text style={styles.titleOverview}>{data.title}</Text>
            <Text style={styles.valueOverview}>{convertNumber(data.value)}</Text>
            <Text style={[styles.fluctuationsOverview,{
                color:(data.fluctuations>0?Task_Colors.task_success:(data.fluctuations<0?Task_Colors.task_danger:Task_Colors.task_info_dark))
            }]}>
                {(data.fluctuations>0?"▲"+data.fluctuations+"%":(data.fluctuations<0?"▼"+Math.abs(data.fluctuations)+"%":"~~~"))}
            </Text>

        </TouchableOpacity>
    )
}
