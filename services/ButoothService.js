import BluetoothSerial from 'react-native-bluetooth-serial'

export function send(id) {
  return new Promise((resolve, reject) => {
     BluetoothSerial.write(id)
    .then((res) => {
       resolve(res)
    })
    .catch((err) => reject(err.message))
    })
}