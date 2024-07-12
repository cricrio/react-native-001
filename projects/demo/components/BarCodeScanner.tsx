import { CameraView, type BarcodeScanningResult } from 'expo-camera';

export const BarCodeScanner = ({
  onScan,
  children,
}: {
  onScan: (code: BarcodeScanningResult) => void;
  children: React.ReactNode;
}) => {
  return (
    <CameraView
      style={{ flex: 1 }}
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
      autofocus='on'
    >
      {children}
    </CameraView>
  );
};
