import { Platform } from "react-native"

const liveHost = "https://us-central1-zaayka-f7aa9.cloudfunctions.net"
const localHost = "http://localhost:5001/zaayka-f7aa9/us-central1"

export const isAndroid = Platform.OS === "android"
export const isDevelopment = process.env.NODE_ENV === "development"
export const isMock = true
export const host = !isDevelopment || isAndroid ? liveHost : localHost