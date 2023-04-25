import { StyleSheet, StatusBar } from 'react-native';
import { colors, commonStyles, fonts } from '../../constants';

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: colors.appCommonColor,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  imageView: {
    flex: 1,
    width: null,
    height: null,
  },
  details: {
    margin: 15
  },
  title1: {
    fontSize: 13,
    color: colors.gray,
    fontWeight: '900',
    marginTop: 15,
  },
  title: {
    fontSize: 13,
    color: colors.gray,
    marginTop: 10,
  },
  bgImage: {
    flex: 1,
    width: null,
    height: null,
  },
  logo: {
    width: 60,
    height: 60,
  },
  distance: {
    fontSize: 13,
    color: colors.gray,
    marginTop: 6,
  },
  validTime: {
    fontSize: 13,
    fontWeight: fonts.FontWeight.bold,
    color: colors.buttonBg,
    marginTop: 3,
  },
  headerText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
  },
  BtmImagesView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 70
  },
  BottomView: {
    backgroundColor: colors.appCommonColor,
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  InnerView: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
  },
  InnerText: {
    fontSize: 14,
    color: colors.white,
    fontWeight: '600',
  },
  SlideBtn: {
    marginTop: 20,
    height: 60,
    backgroundColor: colors.appCommonColor,
    justifyContent: 'center',
    borderRadius: 10,
    width: '100%'
  },
  SlideBtnText: {
    paddingHorizontal: 10,
    color: colors.white,
    fontSize: 13,
    fontWeight: '900',
    alignSelf: 'center'
  },
  ShowCodeView: {
    borderRadius: 15,
    marginTop: 20,
    height: 60,
    borderColor: colors.appCommonColor,
    justifyContent: 'center',
    borderWidth: 1,
    width: '100%',
    alignItems: 'center'
  },
  ShowCodeView1: {
    borderRadius: 15,
    marginTop: 20,
    height: 60,
    borderColor: colors.appCommonColor,
    justifyContent: 'center',
    borderWidth: 1,
    width: '80%',
    alignItems: 'center'
  },
  ShowCodeBtnText: {
    color: colors.gray,
    fontSize: 14,
    fontWeight: '900',
  },

  "main": {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'hsla(0, 0%, 0%, 1)',
  },
  "row": {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  "pane": {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 50,
    borderTopColor: 'transparent',
    backgroundColor: 'hsla(38, 100%, 73%, 1)',
  },
  "paneText": {
    fontSize: 20,
    color: 'black'
  },
  "buttonsContainer": {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: 0,
    paddingBottom: 3,
  },
  "button": {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '94%',
    marginBottom: 3,
    padding: 10,
    backgroundColor: 'hsla(38, 100%, 50%, 1)'
  },
  "buttonText": {
    fontSize: 20,
    color: '#FFF'
  },
  text: {
    backgroundColor: 'whitesmoke',
    padding: 20,
  },
  rowRight: {
    height: 40,
    backgroundColor: 'green'
  },
  rowLeft: {

  }
});

export default styles;
