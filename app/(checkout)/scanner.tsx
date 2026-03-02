// src/app/(checkout)/scanner.tsx

import { CameraView } from 'expo-camera';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default function QRScanner() {
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert(
      "Código Scaneado",
      `Tipo: ${type}\nContenido: ${data}`,
      [{ text: "OK", onPress: () => setScanned(false) }]
    );
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={StyleSheet.absoluteFillObject}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeSettings={{
          barcodeTypes: [
            "qr",      // Códigos QR
            "ean13",   // Productos retail
            "code128", // Logística/Envíos
            "upc_a"    // Estándar americano
          ],
        }}
      />
      {scanned && (
        <View style={styles.overlay}>
           <Text style={styles.text}>Procesando...</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: '#000000aa',
    padding: 20,
    borderRadius: 10
  },
  text: { color: 'white', fontWeight: 'bold' }
});