import {StyleSheet} from 'react-native';
import {Colors} from 'utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollview: {
    flexGrow: 1,
    marginHorizontal: 15,
    paddingTop: 20,
  },
  textItem: {marginLeft: 10, color: Colors.foreground, flex: 3},
  title: {
    fontSize: 35,
    fontFamily: 'RobotoSlab-Bold',
    color: Colors.foreground,
    marginTop: 0,
    marginLeft: 20,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'RobotoSlab-Bold',
    color: Colors.lighter,
    marginVertical: 10,
  },
  item: {
    backgroundColor: Colors.card,
    padding: 20,
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
