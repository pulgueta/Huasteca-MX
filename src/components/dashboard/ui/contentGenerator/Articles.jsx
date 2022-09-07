import { useEffect, useState } from "react";

import DataTable from "react-data-table-component";

import { queryData, updateData, DeleteDoc } from "../../../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaTimes, FaCheck } from 'react-icons/fa'

export const Articles = () => {
  const navigate = useNavigate();
  const rol = localStorage.getItem("rol") ?? "";
  const [data, setData] = useState([]);
  const [dataPending, setDataPending] = useState([]);
  const [pending, setPending] = useState(true);
  const [reload, setReload] = useState(false);

  const acceptedColumns = [
    {
      name: "#",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Título",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Fecha",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Contenido",
      selector: (row) => row.articleContent,
      sortable: true,
      wrap: true,
      grow: 3
    },
    {
      name: "Imagen principal",
      selector: "Imagen",
      ignoreRowClick: true,
      cell: row =>
        row.mainImage ? <img src={row.mainImage} alt='' /> : ""
    },
    {
      name: "Autores",
      selector: (row) => row.involved,
      sortable: true,
      wrap: true,
    },
    {
      name: "Acción",
      sortable: false,
      selector: "null",
      cell: row => [
        <i
          key={row.id}
          onClick={async () => { await DeleteDoc('articles', row.id); setReload(true) }}
          className="mr-5"
        >
          <FaTrashAlt className='text-2xl' />
        </i>,
      ]
    },
  ];

  const pendingColumns = [
    {
      name: "#",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Título",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Fecha",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Contenido",
      selector: (row) => row.articleContent,
      sortable: true,
      wrap: true,
      grow: 3
    },
    {
      name: "Imagen principal",
      selector: "Imagen",
      ignoreRowClick: true,
      cell: row =>
        row.mainImage ? <img src={row.mainImage} alt='' /> : ""
    },
    {
      name: "Autores",
      selector: (row) => row.involved,
      sortable: true,
      wrap: true,
    },
    {
      name: "Acción",
      sortable: false,
      selector: "null",
      cell: (row) => [
        <i
          key={row.id}
          onClick={async () => { await updateData('articles', row.id, { state: 'Activo' }); setReload(true) }}
          className="mr-5"
        >
          <FaCheck className='text-2xl' />
        </i>,
        <i
          key={row.id}
          onClick={async () => { await DeleteDoc('articles', row.id); setReload(true) }}
        >
          <FaTimes className='text-2xl' />
        </i>
      ]
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: "200px", // override the row height
        maxHeight: '200px',
        minWidth: '100%',
        maxWidth: '100px',
        overflow: 'hidden'
      },
    },
    headCells: {
      style: {
        margingLeft: "8px", // override the cell padding for head cells
        margingRight: "8px",
        margingBottom: '8px',
        backgroundColor: "#404040",
        color: "white",
      },
    },
    cells: {
      style: {
        margingLeft: "8px", // override the cell padding for head cells
        margingRight: "8px",
      },
    },
  };

  useEffect(() => {
    const getData = async () => {
      if (reload) {
        setReload(false);
      }
      const docs = await queryData("articles");
      const data = docs;
      const array = [];
      const arrayPending = [];
      data.forEach((element) => {
        if (element.data().state === "Activo") {
          array.push({
            id: element.id,
            ...element.data(),
          });
        } else if (element.data().state === "Pendiente") {
          arrayPending.push({
            id: element.id,
            ...element.data(),
          });
        }
      });
      setData(array);
      setDataPending(arrayPending);
      setPending(false);
    };

    if (rol === "generator") {
      getData();
    } else {
      navigate("/perfil");
    }
  }, [navigate, reload, rol]);

  return (
    <div className="min-h-[calc(100vh-56px)] bg-neutral-300 flex items-start justify-center">
      <div className="w-screen m-10 border-solid border-2 border-gray-400 divide-y-2 divide-gray-400">
        <div>
          <div className="my-10 text-3xl font-bold text-center drop-shadow">
            <h1>Artículos</h1>
          </div>
          <div className="my-10 text-xl font-bold text-center drop-shadow">
            <h1>Aceptados</h1>
          </div>
          <div className="m-10">
            <DataTable
              customStyles={customStyles}
              columns={acceptedColumns}
              data={data}
              pagination
              highlightOnHover
              pointerOnHover
              progressPending={pending}
            />
          </div>
        </div>
        <div>
          <div className="my-10 text-xl font-bold text-center drop-shadow">
            <h1>Pendientes</h1>
          </div>
          <div className="m-10">
            <DataTable
              customStyles={customStyles}
              columns={pendingColumns}
              data={dataPending}
              pagination
              highlightOnHover
              pointerOnHover
              progressPending={pending}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
