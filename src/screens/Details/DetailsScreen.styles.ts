import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from 'src/utils/colors';

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 16,
  },
  title: {
    color: COLORS.cian,
    textAlign: 'center',
    paddingBottom: 16,
    fontSize: 24,
  },
  levelText: {
    color: COLORS.monster,
    fontSize: 14,
    fontWeight: 'bold',
  },
  image: {
    width: Dimensions.get('screen').width,
    height: 270,
  },
  imageContainer: {
    height: 270,
    flex: 1,
  },
  typeContainer: {
    paddingTop: 8,
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  chevron: {
    paddingTop: 16,
    marginRight: 8,
  },
  textType: {
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  attributeContainer: {
    alignItems: 'center',
    width: '100%',
  },
  descContainer: {
    width: '100%',
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  descText: {
    color: COLORS.lightGray,
    fontStyle: 'italic',
    textAlign: 'justify',
  },
  levelContainer: {
    width: '100%',
    flexDirection: 'row-reverse',
    marginRight: -24,
  },
  stats: {
    paddingHorizontal: 16,
  },
  statsText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.trap,
  },
  setText: {
    color: COLORS.lightGray,
    fontStyle: 'italic',
  },
  setTitle: {
    color: COLORS.whiteSand,
  },
  cardSetContainer: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 16,
  },
  favoriteContainer: {
    position: 'absolute',
    zIndex: 1000,
    top: 6,
    right: 16,
  },
});

export default styles;
