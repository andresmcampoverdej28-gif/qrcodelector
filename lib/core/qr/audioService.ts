// src/lib/core/qr/audioService.ts (Hypothetical)
import { Audio } from 'expo-av';

async function playSuccessSound() {
  const { sound } = await Audio.Sound.createAsync(
     require('./assets/success_beep.mp3')
  );
  await sound.playAsync();
}