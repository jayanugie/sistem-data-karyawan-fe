import React from "react";
import { Navbar } from "flowbite-react"

const Navigation = () => {
  return (
    <div>
      <Navbar fluid={true} rounded={true} className="border">
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Sistem Data Karyawan
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/">
            Pegawai
          </Navbar.Link>
          <Navbar.Link href="/create">Tambah Karyawan</Navbar.Link>
          <Navbar.Link href="/update">Ubah Data</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
