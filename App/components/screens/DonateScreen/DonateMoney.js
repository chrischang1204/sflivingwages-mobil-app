//Import Necessary Packges
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import DropDownItem from 'react-native-drop-down-item';
import DonateNav from './DonateNav';



const IC_ARR_DOWN = require('./icons/ic_arr_down.png');
const IC_ARR_UP = require('./icons/ic_arr_up.png');

//type Props = {};
export default class DonateMoney extends React.Component {
  state = {
    contents: [
      {
        title: 'PayPal',
        body: 'A PayPal account is not required. You can also use your credit card or bank account to donate through PayPal. \n \nClick on the button below to be taken to our PayPal site.',
      },
      {
        title: 'Checks',
        body: 'Mail to:\n \nSan Francisco Living Wage Coalition, 2940 16th Street, #301 San Francisco, California, 94103',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ alignSelf: 'stretch' }}>
        <DonateNav
					navigate={this.props.navigation.navigate}

				/>
          {
            this.state.contents
              ? this.state.contents.map((param, i) => {
                return (
                  <DropDownItem 
                    key={i}
                    style={styles.dropDownItem}
                    contentVisible={false}
                    invisibleImage={IC_ARR_DOWN}
                    visibleImage={IC_ARR_UP}
                    header={
                      <View style={styles.header}>
                        <Text style={{
                          fontSize: 20,
                          color: '#0088dc',
                        }}>{param.title}</Text>
                      </View>
                    }
                  >
                    <Text style={[
                      styles.txt,
                      {
                        fontSize: 16,
                        color: '#100c08',
                        paddingHorizontal: 12,
                      },
                    ]}>
                      {param.body}
                    </Text>
                  </DropDownItem>
                );
              })
              : null
          }
          <View style={{ height: 96 }}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingTop: 0,
  },
  header: {
    width: '100%',
    paddingVertical: 0,
    paddingHorizontal: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  // headerTxt: {
  //   fontSize: 20,
  //   color: 'rgb(74,74,74)',
  //   marginRight: 60,
  //   flexWrap: 'wrap',
  // },
  txt: {
    //fontSize: 14,
  },
  dropDownItem: {
    marginTop: 30,
  },
});