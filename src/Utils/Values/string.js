import {moderateScale} from 'react-native-size-matters';
import {processColor} from 'react-native';
import {lightMode} from './color';

export const AnalysisResults = {
    overview: [
        {
            title: 'Tổng lượng đề cập',
            value: 23726,
            fluctuations: -45.34,
        },
        {
            title: 'Tổng lượng tương tác',
            value: 93635765,
            fluctuations: 21.37,
        },
    ],
    dataChart: [
        {
            type: 'pie',
            value: {
                legend: {
                    enabled: true,
                    textSize: moderateScale(15),
                    form: 'CIRCLE',
                    horizontalAlignment: 'RIGHT',
                    verticalAlignment: 'CENTER',
                    orientation: 'VERTICAL',
                    wordWrapEnabled: true,
                },
                data: {
                    dataSets: [{
                        values: [
                            {value: 65, label: 'Tích cực'},
                            {value: 35, label: 'Tiêu cực'}],
                        label: '',
                        config: {
                            colors: [
                                processColor('rgb(70,163,99)'),
                                processColor('rgb(193,74,74)')],
                            valueTextSize: moderateScale(14, 0.3),
                            valueTextColor: processColor('white'),
                            sliceSpace: 2,
                            selectionShift: moderateScale(0),
                            valueFormatter: '#.#\'%\'',
                            valueLineColor: processColor('green'),
                            valueLinePart1Length: moderateScale(0.5),
                        },
                    }],
                },
                highlights: [{x: 2}],
                description: {
                    text: '',
                    textSize: 0,
                },
            },
        },
        {
            type: 'bar',
            value: {
                legend: {
                    enabled: true,
                    textSize: moderateScale(12),
                    form: 'SQUARE',
                    formSize: 14,
                    xEntrySpace: 10,
                    yEntrySpace: 5,
                    wordWrapEnabled: true,
                },
                data: {
                    dataSets: [{
                        values: [2.7, 3.2, 2.9, 3, 3.1],
                        label: 'TB tích luỹ',
                        config: {
                            drawValues: true,
                            colors: [processColor(lightMode.blue)],
                        },
                    }, {
                        values: [16, 22, 20, 19, 15],
                        label: 'Số tín chỉ',
                        config: {
                            drawValues: true,
                            colors: [processColor(lightMode.green_dark)],
                        },
                    }],
                    config: {
                        barWidth: 0.2,
                        group: {
                            fromX: 0,
                            groupSpace: 0.2,
                            barSpace: 0.2,
                        },
                    },
                },
                xAxis: {
                    valueFormatter: ['Kì I-năm 1', 'Kì II-năm 1', 'Kì I-năm 2', 'Kì II-năm 2', 'Kì I-năm 3'],
                    granularityEnabled: true,
                    granularity: 1,
                    axisMaximum: 5,
                    axisMinimum: 0,
                    centerAxisLabels: true,
                },
                marker: {
                    enabled: true,
                    markerColor: processColor('#3e48ff'),
                    textColor: processColor('white'),
                    markerFontSize: moderateScale(14),
                },
                description: {
                    text: '',
                    textSize: 0,
                },
            },
        },
        {
            type: 'line',
            value: {
                dataSets: [
                    {
                        values: [
                            {
                                y: 3.2,
                                x: 0,
                                marker: '3.2',
                            },
                            {
                                y: 3.15,
                                x: 1,
                                marker: '3.15',
                            },
                            {
                                y: 3.23,
                                x: 2,
                                marker: '3.23',
                            },
                            {
                                y: 2.95,
                                x: 3,
                                marker: '2.95',
                            },
                            {
                                y: 2.99,
                                x: 4,
                                marker: '2.99',
                            },
                            {
                                y: 3.1,
                                x: 5,
                                marker: '3.1',
                            },
                        ],
                        label: 'TB tích luỹ chung',
                        config: {
                            mode: 'CUBIC_BEZIER',
                            drawValues: false,
                            lineWidth: 1.5,
                            drawCircles: true,
                            circleColor: processColor(lightMode.green_dark),
                            drawCircleHole: false,
                            circleRadius: 5,
                            highlightColor: processColor('transparent'),
                            color: processColor(lightMode.green_dark),
                            drawFilled: true,
                            fillGradient: {
                                colors: [processColor('white'), processColor(lightMode.green_dark)],
                                positions: [0, 0.5],
                                angle: 90,
                                orientation: 'TOP_BOTTOM',
                            },
                            fillAlpha: 1000,
                            valueTextSize: 15,
                        },
                    },

                    {
                        values: [
                            {
                                y: 3.0,
                                x: 0,
                                marker: '3.0',
                            },
                            {
                                y: 3.05,
                                x: 1,
                                marker: '3.05',
                            },
                            {
                                y: 3.15,
                                x: 2,
                                marker: '3.15',
                            },
                            {
                                y: 3.3,
                                x: 3,
                                marker: '3.3',
                            },
                            {
                                y: 3.12,
                                x: 4,
                                marker: '3.12',
                            },
                            {
                                y: 2.95,
                                x: 5,
                                marker: '2.95',
                            },
                        ],
                        label: 'TB tích luỹ cá nhân',
                        config: {
                            mode: 'CUBIC_BEZIER',
                            drawValues: false,
                            lineWidth: 1.5,
                            drawCircles: true,
                            circleColor: processColor('#3c739b'),
                            drawCircleHole: false,
                            circleRadius: 5,
                            highlightColor: processColor('transparent'),
                            color: processColor(lightMode.blue),
                            drawFilled: true,
                            fillGradient: {
                                colors: [processColor(lightMode.blue_opa_50), processColor('white')],
                                positions: [0, 0.5],
                                angle: 90,
                                orientation: 'TOP_BOTTOM',
                            },
                            fillAlpha: 1000,
                            valueTextSize: 15,
                        },
                    },
                ],
                marker: {
                    enabled: true,
                    markerColor: processColor('#a2d5ff'),
                    textColor: processColor('black'),
                },
                xAxis: {
                    enabled: true,
                    granularity: 1,
                    drawLabels: true,
                    position: 'BOTTOM',
                    drawAxisLine: true,
                    drawGridLines: false,
                    fontFamily: 'HelveticaNeue-Medium',
                    textSize: moderateScale(11),
                    textColor: processColor('#636363'),
                    valueFormatter: ['Kì I-1', 'Kì II-1', 'Kì III-1', 'Kì I-2', 'Kì II-2', 'Kì III-2'],
                },
                yAxis: {
                    left: {
                        enabled: true,
                    },
                    right: {
                        enabled: true,
                    },
                },
                legend: {
                    enabled: true,
                    textSize: 10,
                    form: 'LINE',
                    wordWrapEnabled: true,
                },
            },
        },
        {
            type: 'stack',
            value: {
                legend: {
                    enabled: true,
                    textSize: moderateScale(11),
                    form: 'SQUARE',
                    formSize: 10,
                    xEntrySpace: 10,
                    yEntrySpace: 5,
                    wordWrapEnabled: true,
                },
                data: {
                    dataSets: [{
                        values: [{y: [3, 2, 1]}, {y: [4, 1, 0]}, {y: [2, 2, 2]}, {y: [2, 1, 2]}],
                        label: '',
                        config: {
                            colors: [processColor('#befffc'), processColor('#83d9ff'), processColor('#709aff')],
                            stackLabels: ['Điểm cao', 'Điểm trung bình', 'Điểm thấp'],
                        },
                    }],
                },
                xAxis: {
                    valueFormatter: ['Kì II-1', 'Kì II-1', 'Kì I-2', 'Kì II-2'],
                    granularityEnabled: true,
                    granularity: 1,
                },
            },
        },
    ],
};

export const AnalysisResultsDetail = [
    {
        type: 'pie',
        value: {
            legend: {
                enabled: false,
                textSize: moderateScale(15),
                form: 'CIRCLE',
                horizontalAlignment: 'RIGHT',
                verticalAlignment: 'CENTER',
                orientation: 'VERTICAL',
                wordWrapEnabled: true,
            },
            data: {
                dataSets: [{
                    values: [
                        {value: 65, label: 'Tích cực'},
                        {value: 20, label: 'Trung tính'},
                        {value: 15, label: 'Tiêu cực'}],
                    label: '',
                    config: {
                        colors: [
                            processColor('rgb(70,163,99)'),
                            processColor('rgb(116,116,116)'),
                            processColor('rgb(193,74,74)')],
                        valueTextSize: moderateScale(10, 0.3),
                        valueTextColor: processColor('white'),
                        sliceSpace: 2,
                        selectionShift: 0,
                        valueFormatter: '#.#\'%\'',
                        valueLineColor: processColor('green'),
                        valueLinePart1Length: moderateScale(0.5),
                    },
                }],
            },
            highlights: [{x: 2}],
            description: {
                text: '',
                textSize: 0,
            },
        },
    },
    {
        type: 'bar',
        value: {
            legend: {
                enabled: true,
                textSize: moderateScale(12),
                form: 'SQUARE',
                formSize: 14,
                xEntrySpace: 10,
                yEntrySpace: 5,
                wordWrapEnabled: true,
            },
            data: {
                dataSets: [{
                    values: [2.7, 3.2, 2.9, 3, 3.1],
                    label: 'TB tích luỹ',
                    config: {
                        drawValues: true,
                        colors: [processColor(lightMode.blue)],
                    },
                }, {
                    values: [16, 22, 20, 19, 15],
                    label: 'Số tín chỉ',
                    config: {
                        drawValues: true,
                        colors: [processColor(lightMode.green_dark)],
                    },
                }],
                config: {
                    barWidth: 0.2,
                    group: {
                        fromX: 0,
                        groupSpace: 0.2,
                        barSpace: 0.2,
                    },
                },
            },
            xAxis: {
                valueFormatter: ['Kì I-năm 1', 'Kì II-năm 1', 'Kì I-năm 2', 'Kì II-năm 2', 'Kì I-năm 3'],
                granularityEnabled: true,
                granularity: 1,
                axisMaximum: 5,
                axisMinimum: 0,
                centerAxisLabels: true,
            },
            marker: {
                enabled: true,
                markerColor: processColor('#3e48ff'),
                textColor: processColor('white'),
                markerFontSize: moderateScale(14),
            },
            description: {
                text: '',
                textSize: 0,
            },
        },
    },
    {
        type: 'line',
        value: {
            dataSets: [
                {
                    values: [
                        {
                            y: 3.2,
                            x: 0,
                            marker: '3.2',
                        },
                        {
                            y: 3.15,
                            x: 1,
                            marker: '3.15',
                        },
                        {
                            y: 3.23,
                            x: 2,
                            marker: '3.23',
                        },
                        {
                            y: 2.95,
                            x: 3,
                            marker: '2.95',
                        },
                        {
                            y: 2.99,
                            x: 4,
                            marker: '2.99',
                        },
                        {
                            y: 3.1,
                            x: 5,
                            marker: '3.1',
                        },
                    ],
                    label: 'TB tích luỹ chung',
                    config: {
                        mode: 'CUBIC_BEZIER',
                        drawValues: false,
                        lineWidth: 1.5,
                        drawCircles: true,
                        circleColor: processColor(lightMode.green_dark),
                        drawCircleHole: false,
                        circleRadius: 5,
                        highlightColor: processColor('transparent'),
                        color: processColor(lightMode.green_dark),
                        drawFilled: true,
                        fillGradient: {
                            colors: [processColor('white'), processColor(lightMode.green_dark)],
                            positions: [0, 0.5],
                            angle: 90,
                            orientation: 'TOP_BOTTOM',
                        },
                        fillAlpha: 1000,
                        valueTextSize: 15,
                    },
                },

                {
                    values: [
                        {
                            y: 3.0,
                            x: 0,
                            marker: '3.0',
                        },
                        {
                            y: 3.05,
                            x: 1,
                            marker: '3.05',
                        },
                        {
                            y: 3.15,
                            x: 2,
                            marker: '3.15',
                        },
                        {
                            y: 3.3,
                            x: 3,
                            marker: '3.3',
                        },
                        {
                            y: 3.12,
                            x: 4,
                            marker: '3.12',
                        },
                        {
                            y: 2.95,
                            x: 5,
                            marker: '2.95',
                        },
                    ],
                    label: 'TB tích luỹ cá nhân',
                    config: {
                        mode: 'CUBIC_BEZIER',
                        drawValues: false,
                        lineWidth: 1.5,
                        drawCircles: true,
                        circleColor: processColor('#3c739b'),
                        drawCircleHole: false,
                        circleRadius: 5,
                        highlightColor: processColor('transparent'),
                        color: processColor(lightMode.blue),
                        drawFilled: true,
                        fillGradient: {
                            colors: [processColor(lightMode.blue_opa_50), processColor('white')],
                            positions: [0, 0.5],
                            angle: 90,
                            orientation: 'TOP_BOTTOM',
                        },
                        fillAlpha: 1000,
                        valueTextSize: 15,
                    },
                },
            ],
            marker: {
                enabled: true,
                markerColor: processColor('#a2d5ff'),
                textColor: processColor('black'),
            },
            xAxis: {
                enabled: true,
                granularity: 1,
                drawLabels: true,
                position: 'BOTTOM',
                drawAxisLine: true,
                drawGridLines: false,
                fontFamily: 'HelveticaNeue-Medium',
                textSize: moderateScale(11),
                textColor: processColor('#636363'),
                valueFormatter: ['Kì I-1', 'Kì II-1', 'Kì III-1', 'Kì I-2', 'Kì II-2', 'Kì III-2'],
            },
            yAxis: {
                left: {
                    enabled: true,
                },
                right: {
                    enabled: true,
                },
            },
            legend: {
                enabled: true,
                textSize: 10,
                form: 'LINE',
                wordWrapEnabled: true,
            },
        },
    },
    {
        type: 'stack',
        value: {
            legend: {
                enabled: true,
                textSize: moderateScale(11),
                form: 'SQUARE',
                formSize: 10,
                xEntrySpace: 10,
                yEntrySpace: 5,
                wordWrapEnabled: true,
            },
            data: {
                dataSets: [{
                    values: [{y: [3, 2, 1]}, {y: [4, 1, 0]}, {y: [2, 2, 2]}, {y: [2, 1, 2]}],
                    label: '',
                    config: {
                        colors: [processColor('#befffc'), processColor('#83d9ff'), processColor('#709aff')],
                        stackLabels: ['Điểm cao', 'Điểm trung bình', 'Điểm thấp'],
                    },
                }],
            },
            xAxis: {
                valueFormatter: ['Kì II-1', 'Kì II-1', 'Kì I-2', 'Kì II-2'],
                granularityEnabled: true,
                granularity: 1,
            },
        },
    },
];

export const FakeDataPreview = [
    {
        avatar: 'https://im4.ezgif.com/tmp/ezgif-4-7583d9b70f58.png',
        user_name: 'Trần Bá Phúc',
        time_posted: '20/07/2020',
        content: 'Mong ad duyệt hộ bài giùm mình với ạ!!!\n' +
            '.......\n' +
            'Mình có đặt đồ ăn trên Now, mình có post bài review món ăn nhưng bị bên Now gỡ bỏ do vi phạm những quán bán chạy ảnh hưởng tới doanh thu của Now. Rất độc tài và coi thường sức khoẻ khách hàng miễn đem về lợi nhuận cho họ thì họ sẵn sàng bịt mồm...\n' +
            '..... Chuyện là mình có đặt suất cơm gà bento 30k. Mình thấy quán trang trí suất ăn khá bắt mắt, đùi gà to tướng. Điều này là điểm ưu đánh vào tâm lý khách hàng.',
        images: [],
        react_count: 34,
        react_type: {
            like: 12,
            love: 43,
            support: 4,
            haha: 7,
            wow: 1,
            sorry: 7,
            anger: 0,
        },
        cmt_count: 345,
        share_count: 23,
    },
    {
        avatar: 'https://im4.ezgif.com/tmp/ezgif-4-7583d9b70f58.png',
        user_name: 'Trần Bá Phúc',
        time_posted: '20/07/2020',
        content: 'Mong ad duyệt hộ bài giùm mình với ạ!!!\n' +
            '.......\n' +
            'Mình có đặt đồ ăn trên Now, mình có post bài review món ăn nhưng bị bên Now gỡ bỏ do vi phạm những quán bán chạy ảnh hưởng tới doanh thu của Now. Rất độc tài và coi thường sức khoẻ khách hàng miễn đem về lợi nhuận cho họ thì họ sẵn sàng bịt mồm...\n' +
            '..... Chuyện là mình có đặt suất cơm gà bento 30k. Mình thấy quán trang trí suất ăn khá bắt mắt, đùi gà to tướng. Điều này là điểm ưu đánh vào tâm lý khách hàng.',
        images: [],
        react_count: 34,
        react_type: {
            like: 12,
            love: 43,
            support: 4,
            haha: 7,
            wow: 1,
            sorry: 7,
            anger: 0,
        },
        cmt_count: 345,
        share_count: 23,
    },
    {
        avatar: 'https://im4.ezgif.com/tmp/ezgif-4-7583d9b70f58.png',
        user_name: 'Trần Bá Phúc',
        time_posted: '20/07/2020',
        content: 'Mong ad duyệt hộ bài giùm mình với ạ!!!\n' +
            '.......\n' +
            'Mình có đặt đồ ăn trên Now, mình có post bài review món ăn nhưng bị bên Now gỡ bỏ do vi phạm những quán bán chạy ảnh hưởng tới doanh thu của Now. Rất độc tài và coi thường sức khoẻ khách hàng miễn đem về lợi nhuận cho họ thì họ sẵn sàng bịt mồm...\n' +
            '..... Chuyện là mình có đặt suất cơm gà bento 30k. Mình thấy quán trang trí suất ăn khá bắt mắt, đùi gà to tướng. Điều này là điểm ưu đánh vào tâm lý khách hàng.',
        images: [],
        react_count: 34,
        react_type: {
            like: 12,
            love: 43,
            support: 4,
            haha: 7,
            wow: 1,
            sorry: 7,
            anger: 0,
        },
        cmt_count: 345,
        share_count: 23,
    },
    {
        avatar: 'https://im4.ezgif.com/tmp/ezgif-4-7583d9b70f58.png',
        user_name: 'Trần Bá Phúc',
        time_posted: '20/07/2020',
        content: 'Mong ad duyệt hộ bài giùm mình với ạ!!!\n' +
            '.......\n' +
            'Mình có đặt đồ ăn trên Now, mình có post bài review món ăn nhưng bị bên Now gỡ bỏ do vi phạm những quán bán chạy ảnh hưởng tới doanh thu của Now. Rất độc tài và coi thường sức khoẻ khách hàng miễn đem về lợi nhuận cho họ thì họ sẵn sàng bịt mồm...\n' +
            '..... Chuyện là mình có đặt suất cơm gà bento 30k. Mình thấy quán trang trí suất ăn khá bắt mắt, đùi gà to tướng. Điều này là điểm ưu đánh vào tâm lý khách hàng.',
        images: [],
        react_count: 34,
        react_type: {
            like: 12,
            love: 43,
            support: 4,
            haha: 7,
            wow: 1,
            sorry: 7,
            anger: 0,
        },
        cmt_count: 345,
        share_count: 23,
    },
    {
        avatar: 'https://im4.ezgif.com/tmp/ezgif-4-7583d9b70f58.png',
        user_name: 'Trần Bá Phúc',
        time_posted: '20/07/2020',
        content: 'Mong ad duyệt hộ bài giùm mình với ạ!!!\n' +
            '.......\n' +
            'Mình có đặt đồ ăn trên Now, mình có post bài review món ăn nhưng bị bên Now gỡ bỏ do vi phạm những quán bán chạy ảnh hưởng tới doanh thu của Now. Rất độc tài và coi thường sức khoẻ khách hàng miễn đem về lợi nhuận cho họ thì họ sẵn sàng bịt mồm...\n' +
            '..... Chuyện là mình có đặt suất cơm gà bento 30k. Mình thấy quán trang trí suất ăn khá bắt mắt, đùi gà to tướng. Điều này là điểm ưu đánh vào tâm lý khách hàng.',
        images: [],
        react_count: 34,
        react_type: {
            like: 12,
            love: 43,
            support: 4,
            haha: 7,
            wow: 1,
            sorry: 7,
            anger: 0,
        },
        cmt_count: 345,
        share_count: 23,
    },
];
