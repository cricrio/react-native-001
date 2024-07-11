import { Divider as PDivider } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export const Divider = () => <PDivider style={styles.divider} />;

const styles = StyleSheet.create({
  divider: {
    paddingVertical: 5,
  },
});
