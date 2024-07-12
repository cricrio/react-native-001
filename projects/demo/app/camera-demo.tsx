import { BarCodeScanner } from '@/components/BarCodeScanner';
import {
  CameraView,
  useCameraPermissions,
  type BarcodeScanningResult,
  type CameraCapturedPicture,
} from 'expo-camera';
import { useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [picture, setPicture] = useState<CameraCapturedPicture>();
  const [cameraReady, setCameraReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const cameraRef = useRef<CameraView>();

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
      {picture ? (
        <Image
          source={picture}
          height={picture.height}
          width={picture.width}
        ></Image>
      ) : (
        <CameraView
          style={{ flex: 1 }}
          onCameraReady={() => setCameraReady(true)}
          ref={cameraRef}
        >
          {loading ? (
            <ActivityIndicator />
          ) : cameraReady ? (
            <TouchableOpacity
              onPress={async () => {
                if (cameraRef.current) {
                  setLoading(true);
                  const picture = await cameraRef.current.takePictureAsync();
                  setLoading(false);
                  setPicture(picture);
                }
              }}
            >
              <Text> Take picture</Text>
              <Text>{JSON.stringify(picture, null, 2)}</Text>
            </TouchableOpacity>
          ) : (
            <Text>Camera not ready</Text>
          )}
        </CameraView>
      )}
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
