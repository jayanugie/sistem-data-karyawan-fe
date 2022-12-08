import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { Label, TextInput, Button } from "flowbite-react";
import axios from "axios";

const CreatePegawai = () => {
  const [nama, setNama] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [kontrak, setKontrak] = useState("");


  // create pegawai
  const createPegawai = async(e) => {
    if (!nama && !jabatan && !kontrak) {
        alert("Form tidak boleh kosong")
    } else {
        e.preventDefault();
        const result = await axios.post("http://localhost:4000/pegawai", {
            nama: nama,
            jabatan: jabatan,
            kontrak: kontrak
        })
        alert(result.data.message);
        window.location.reload();
    }
  }


  return (
    <div>
      <Navigation />

      <h1 className="flex justify-center my-10 font-bold">
        Tambah Data Karyawan
      </h1>
      <form className="flex flex-col gap-4 container mx-auto w-96" onSubmit={createPegawai}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Nama Pegawai" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Nama Pegawai"
            required={true}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="jabatan" value="Jabatan" />
          </div>
          <TextInput
            id="jabatan"
            type="text"
            placeholder="Jabatan"
            required={true}
            onChange={(e) => setJabatan(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="kontrak" value="Tahun Kontrak" />
          </div>
          <TextInput
            id="kontrak"
            type="number"
            placeholder="Tahun Kontrak"
            required={true}
            onChange={(e) => setKontrak(e.target.value)}
          />
        </div>
        <Button type="submit">Tambah</Button>
      </form>
    </div>
  );
};

export default CreatePegawai;
