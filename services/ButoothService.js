import BluetoothSerial from 'react-native-bluetooth-serial';

// eslint-disable-next-line import/prefer-default-export
export function send(id) {
  return new Promise((resolve, reject) => {
    BluetoothSerial.write(id)
      .then((res) => {
        console.log(res, id);
        resolve(res);
      })
      .catch((err) => reject(err.message));
  });
}
