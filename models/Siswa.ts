import mongoose, { Document, Schema } from "mongoose"
export interface ISiswa extends Document {
    nis: string;
    nama: string;
    kelas: string;
    pilihan: string;
}

const siswaSchema: Schema = new mongoose.Schema({
    nis: {
        type: String,
        required: true,
    },
    nama: {
        type: String,
        required: true,
    },
    kelas: {
        type: String,
        required: true,
    },
    pilihan: {
        type: String,
        required: true,
    },
});

const Siswa = mongoose.models.Siswa || mongoose.model<ISiswa>("Siswa", siswaSchema)

export default Siswa;