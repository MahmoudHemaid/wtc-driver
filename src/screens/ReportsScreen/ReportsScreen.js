import React from 'react';
import {StyleSheet, View} from 'react-native';
import Screen from '../Screen';
import {Colors, Layout, Styles, Fonts, Shadow} from '@app/constants';
import faker from 'faker';
import {StyledText} from '@app/components';
import {BarChart as BarChart2} from 'react-native-chart-kit';
import {BarChart} from 'react-native-svg-charts';
import {Text} from 'react-native-svg';

const data2 = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 22],
    },
  ],
};

export default function ReportsScreen(props) {
  const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const data = [20, 80, 100, 55, 66, 88, 66];

  const CUT_OFF = 0;
  const Labels = ({x, y, bandwidth, data}) =>
    data.map((value, index) => (
      <Text
        key={index}
        x={x(index) + bandwidth / 2}
        y={value < CUT_OFF ? y(value) + 10 : y(value) - 10}
        fontSize={12}
        fill={value >= CUT_OFF ? 'white' : 'black'}
        alignmentBaseline={'middle'}
        textAnchor={'middle'}>
        {value}
      </Text>
    ));

  const XAxis = ({x, y, bandwidth, data}) =>
    data.map((value, index) => (
      <Text
        key={index}
        x={x(index) + bandwidth / 2}
        y={y(0) + 10}
        fontSize={12}
        fill={'white'}
        alignmentBaseline={'middle'}
        textAnchor={'middle'}>
        {labels[index]}
      </Text>
    ));

  return (
    <Screen style={styles.container}>
      <View>
        <BarChart2
          data={data2}
          width={Layout.window.width}
          height={220}
          fromZero={true}
          showValuesOnTopOfBars={true}
          withHorizontalLabels={false}
          withInnerLines={false}
          style={{
            paddingRight: 0,
            borderBottomRightRadius: 18,
          }}
          horizontalOffset={0}
          chartConfig={{
            backgroundGradientFromOpacity: 0,
            backgroundGradientToOpacity: 0,
            decimalPlaces: 0,
            barPercentage: 1 / data2.datasets.length,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            scrollableDotStrokeColor: '#fff',
          }}
        />
      </View>
      <View style={{flex: 1}}>
        <BarChart
          start={0}
          style={{width: '100%', height: 200}}
          data={data}
          svg={{fill: Colors.lightColor}}
          contentInset={{
            top: 20,
            left: Layout.padding.normal,
            right: Layout.padding.normal,
            bottom: 20,
          }}
          xMin={0}
          spacingInner={0.4}
          yMin={0}>
          <Labels />
          <XAxis />
        </BarChart>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
