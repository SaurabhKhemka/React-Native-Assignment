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
    width: 100,
    margin: 10,
  },
  selectedOperation: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    margin: 5,
    width: wp('15%'),
    backgroundColor: 'rgb(27, 169,76)',
  },
  btnText: {
    fontSize: 18,
  },
  totalOperations: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  reset: {
    flex: 1,
    flexDirection: 'row',
  },
  resultContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  total: {
    color: 'rgb(27, 169,76)',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
