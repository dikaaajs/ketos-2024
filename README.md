### tes API
http://localhost:3000/api/tes

### cek hasil pemilihan
GET http://localhost:3000/api/hasil

### cari siswa pake NIS
GET http://localhost:3000/api/siswa?nis=222311444

### debug pencarian siswa
GET http://localhost:3000/api/siswa?nis

### update kolom ketos
PATCH http://localhost:3000/api/siswa?nis=222311444
Content-Type: application/json

{
    "pilihan": "1"
}

### debug PATCH request
PATCH http://localhost:3000/api/siswa?nis=222311444
Content-Type: application/json

{
    
}

### debug PATCH request
PATCH http://localhost:3000/api/siswa?nis
Content-Type: application/json

{
    
}
