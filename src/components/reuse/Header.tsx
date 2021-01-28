import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {windowWidth} from '../../utils/dimesnions';
const Header = () => {
  return (
    <View style={styles.conatainer}>
      <View style={styles.barStyle}>
        <View>
          <Text>1</Text>
        </View>
        <View>
          <Text style={styles.heading}>WalliesHd</Text>
        </View>
        <View>
          <Text style={styles.versionInfo}>v1.0</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: {
    width: windowWidth,
    backgroundColor: '#4630EB',
    height: 50,
    // SHADOW
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  barStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  heading: {
    color: 'white',
  },
  versionInfo: {
    color: 'white',
    opacity: 0.4,
  },
});

export default Header;
