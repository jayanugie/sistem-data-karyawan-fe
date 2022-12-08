import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { Table } from "flowbite-react";
import axios from "axios";

const Pegawai = () => {
  const [dataPegawai, setDataPegawai] = useState(null);

  // get data
  const getData = async () => {
    const get = await axios.get("http://localhost:4000/pegawai");
    const result = get.data;
    setDataPegawai(result);
  };

  // delete data
  const deleteData = async (id, e) => {
    e.preventDefault();
    const result = await axios.delete(
      `http://localhost:4000/pegawai/delete/${id}`
    );
    alert(result.data.message);
    window.location.reload();
  };

  console.log(dataPegawai);

  useEffect(() => {
    getData();
  }, []);

  if (!dataPegawai) return null;

  return (
    <div>
      <Navigation />
      <h1 className="flex justify-center my-10 font-bold">Tabel Pegawai</h1>

      <Table className="container mx-auto w-96 border mb-52">
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Nama Pegawai</Table.HeadCell>
          <Table.HeadCell>Jabatan</Table.HeadCell>
          <Table.HeadCell>Kontrak (tahun)</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {dataPegawai.map((data, i) => {
            return (
              <Table.Row
                key={i}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {data.id}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {data.nama}
                </Table.Cell>
                <Table.Cell>{data.jabatan}</Table.Cell>
                <Table.Cell>{data.kontrak}</Table.Cell>
                <Table.Cell>
                  <button className="font-semibold text-red-600" onClick={(e) => deleteData(data.id, e)}>Delete</button>
                </Table.Cell>
                <Table.Cell>
                  <a
                    href="/update"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Pegawai;
