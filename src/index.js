import { NativeModules } from "react-native";

const IdenfyReactNative = NativeModules.IdenfyReactNative;

export function start(config) {
  return IdenfyReactNative.start(config);
}

export function startFaceReAuth(config) {
  return IdenfyReactNative.startFaceReAuth(config);
}
