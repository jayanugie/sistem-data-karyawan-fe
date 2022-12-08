import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { Label, TextInput, Button } from "flowbite-react";
import axios from "axios";

const UpdatePegawai = () => {
  const [editNama, setEditNama] = useState("");
  const [editJabatan, setEditJabatan] = useState("");
  const [editKontrak, setEditKontrak] = useState("");

  // edit pegawai
  const editData = async (id) => {
    if (!editNama && !editJabatan && !editKontrak) {
      alert("Data tidak boleh kosong");
    } else {
      const result = await axios.put(
        `http://localhost:4000/pegawai/update/${id}`,
        {
            //
        }
      );
      alert(result.data.message);
      window.location.reload();
    }
  };

  return (
    <div>
      <Navigation />
      <h1 className="flex justify-center my-10 font-bold">
        Ubah Data Karyawan
      </h1>
      <form
        className="flex flex-col gap-4 container mx-auto w-96"
        onSubmit={editData}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Nama Pegawai" />
          </div>
          <TextInput
            value={editNama}
            id="name"
            type="text"
            placeholder="Nama Pegawai"
            required={true}
            onChange={(e) => setEditNama(e.target.value)}
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
            onChange={(e) => setEditJabatan(e.target.value)}
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
            onChange={(e) => setEditKontrak(e.target.value)}
          />
        </div>
        <Button type="submit">Tambah</Button>
      </form>
    </div>
  );
};

export default UpdatePegawai;
