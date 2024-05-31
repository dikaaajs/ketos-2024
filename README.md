## Kalo mau debug, buka file debug.rest

### tes API
http://localhost:3000/api/tes

### login
GET http://localhost:3000/api/account?u=asd123&p=123123

### cek hasil pemilihan
GET http://localhost:3000/api/hasil

### cari siswa pake NIS
GET http://localhost:3000/api/siswa?nis=222311444

### update kolom ketos
PATCH http://localhost:3000/api/siswa?nis=222311444
Content-Type: application/json

{
    "pilihan": "1"
}