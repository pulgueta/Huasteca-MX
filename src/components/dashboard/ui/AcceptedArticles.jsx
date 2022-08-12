import { useState, useEffect } from "react";

import DataTable from 'react-data-table-component';

import { AddModal } from "../components";
import { queryData } from "../../../utils/firebase";

import { Toaster } from "react-hot-toast";

export const AcceptedArticles = () => {
  const [modal, setModal] = useState(false);
  const [dataArticles, setDataArticles] = useState([])

  useEffect(() => {
    const getData = async () => {
      const docs = await queryData('articles')
      const data = docs
      const array = []
      data.forEach(element => {
        if (element.data().state === 'Activo') {
          array.push({
            id: element.id,
            ...element.data()
          })
        }
      });
      setDataArticles(array)
    }
    getData()
  }, [])

  const columns = [
    // {
    //   name: 'Validar',
    //   // selector: row => row.mainImage,
    //   cell: () => <button className='bg-huasteca-brown py-2 px-4 mx-auto rounded-md text-neutral-100 font-bold float-right' onClick={() => console.log('first')}>Validar</button>,
    //   ignoreRowClick: true,
    //   allowOverflow: true,
    //   button: true,
    // },
    {
      name: '#Id',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Título',
      selector: row => row.title,
      sortable: true,
    },
    {
      name: 'Categoria',
      selector: row => row.category,
      sortable: true,
    },
    {
      name: 'Fecha',
      selector: row => row.date,
      sortable: true,
    },
    {
      name: 'Contenido',
      selector: row => row.articleContent,
      sortable: true,
    },
    {
      name: 'Arquitecto/Ing.',
      selector: row => row.involved,
      sortable: true,
    },
    {
      name: 'Descripción',
      selector: row => row.description,
      sortable: true,
    },
    {
      name: 'Estado',
      selector: row => row.state,
      sortable: true,
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: '60px', // override the row height
        backgroundColor: '#e5e5e5',
        maxWidth: '1696px'
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
        backgroundColor: '#404040',
        color: 'white',
        maxWidth: '1696px'
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
        maxWidth: '1696px'
      },
    },
  };

  return (
    <div className="bg-neutral-300 min-h-[calc(100vh-56px)] flex flex-col">
      <Toaster />
      {modal && <AddModal toggle={() => setModal(false)} />}

      <div className="bg-neutral-200 rounded-lg shadow-sm mx-auto my-10 w-max p-8 h-max flex items-center justify-center">
        <button
          onClick={() => setModal(!modal)}
          className="bg-green-500 p-3 rounded-md text-neutral-100 font-bold"
        >
          Agregar artículo
        </button>
      </div>
      <div className="w-screen px-4 md:px-14 lg:px-28">
        <DataTable
          customStyles={customStyles}
          columns={columns}
          data={dataArticles}
        />
      </div>
    </div>
  );
};
