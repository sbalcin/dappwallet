import {CardStyleInterpolators} from '@react-navigation/stack';

const styles: any = {};

styles.noAnim = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
};

export default styles;
