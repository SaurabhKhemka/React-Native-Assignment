import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: 20,
  },
  btn: {
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    margin: 5,
    width: wp('80%'),
    backgroundColor: 'rgb(27, 169,76)',
  },
  btnText: {
    fontSize: 18,
  },
});
