import {
  CameraView,
  useCameraPermissions,
  type BarcodeScanningResult,
} from 'expo-camera';
import { useState } from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const BarCodeScanner = ({
  onScan,
  children,
}: {
  onScan: (code: BarcodeScanningResult) => void;
  children: React.ReactNode;
}) => {
  return (
    <CameraView
      style={styles.camera}
      onBarcodeScanned={(result: BarcodeScanningResult) => {
        onScan(result);
      }}
      barcodeScannerSettings={{
        barcodeTypes: [
          'qr',
          'pdf417',
          'ean13',
          'code128',
          'code39',
          'upc_a',
          'upc_e',
          'ean8',
          'itf14',
          'codabar',
        ],
      }}
    >
      {children}
    </CameraView>
  );
};

export default function App() {
  const [barCode, setBarCode] = useState('');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title='grant permission' />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner onScan={(code) => setBarCode(code.data)}>
        <Text style={styles.text}>{barCode}</Text>
      </BarCodeScanner>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
