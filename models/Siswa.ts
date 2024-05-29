import mongoose, { Document, Schema } from "mongoose"
export interface ISiswa extends Document {
    nis: number;
    nama: string;
    kelas: string;
    pilihan: number;
}

const siswaSchema: Schema = new mongoose.Schema({
    nis: {
        type: Number,
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
        type: Number,
        required: true,
    },
});

const Siswa = mongoose.models.Siswa || mongoose.model<ISiswa>("Siswa", siswaSchema)

export default Siswa;