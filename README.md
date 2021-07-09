# validatorNPWP
Validasi nomor npwp anda <br>
Referensi list kode KPP dan Alamat: https://blog.rivaekaputra.com/2015/10/27/kode-kpp-dan-alamat/

## Fitur
- Mengecek nomor npwp anda valid atau tidak
- Mendapatkan beberapa informasi mengenai npwp anda

## Instalasi
```sh
npm install npwp
```

## Penggunaan
```javascript
// import validator npwp
const npwp = require('npwp');

// argumen pertama harus string dengan format 'xx.xxx.xxx.x-xxx.xxx'
// argumen kedua opsional, jika dikosongkan akan mengembalikan true atau false
npwp('09.254.294.3-407.000');
// jika argumen kedua true, akan mengembalikan beberapa informasi npwp
npwp('09.254.294.3-407.000', true);
```

## Lisensi
MIT
