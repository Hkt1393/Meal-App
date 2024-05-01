import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidlinebasewidth = 350;
const guidlinebaseheight = 680;

const scale = size => (width / guidlinebasewidth) * size;
const verticalScale = size => (height / guidlinebaseheight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export {scale, verticalScale, moderateScale};
