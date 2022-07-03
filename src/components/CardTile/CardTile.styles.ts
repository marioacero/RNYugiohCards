import { StyleSheet } from 'react-native';
import { COLORS } from 'src/utils/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.tabBarBackground,
    height: 80,
    marginVertical: 2,
    flexDirection: 'row',
    width: '100%',
    flex: 1,
  },
  text: {
    color: COLORS.lightGray,
    fontSize: 11,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  textName: {
    color: COLORS.cian,
    paddingBottom: 8,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    paddingRight: 60,
  },
  imageContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '70%',
  },
  nameTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoContainer: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingRight: 8,
    width: '30%',
  },
  atk: {
    flexWrap: 'wrap',
    textAlign: 'center',
    width: '100%',
    color: COLORS.lightGray,
    fontSize: 10,
  },
  levelText: {
    textAlign: 'center',
    width: '100%',
    color: 'white',
    fontWeight: 'bold',
  },
  raceText: {
    textAlign: 'center',
    width: '100%',
    color: COLORS.whiteSand,
  },
  typeContainer: {
    flexDirection: 'row',
  },
  chevron: {
    paddingTop: 16,
    marginRight: 8,
  },
  image: {
    width: 60,
    height: 60,
  },
});

export default styles;
