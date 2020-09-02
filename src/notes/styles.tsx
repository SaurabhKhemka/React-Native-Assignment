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
  view: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 16,
    backgroundColor: '#f3f7f7',
    width: wp('35%'),
    margin: 10,
  },
  btn: {
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    margin: 5,
    width: wp('45%'),
    backgroundColor: 'rgb(27, 169,76)',
  },
  btnText: {
    fontSize: 18,
  },
  tabContainer: {
    flex: 1,
    flexDirection: 'row',
    width: wp('90%'),
  },
  tab: {
    alignContent: 'center',
    justifyContent: 'center',
    width: wp('30%'),
  },
  headerView: {
    flex: 1,
    flexDirection: 'row',
    width: wp('90%'),
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
  },
  data: {
    width: wp('45%'),
    fontSize: 14,
    textAlign: 'center',
    color: '#000',
    padding: 20,
  },
});
