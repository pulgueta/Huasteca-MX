/* eslint-disable react/jsx-no-target-blank */
// import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import DataTable from 'react-data-table-component';
import { useState } from 'react';

export const ArticleTable = ({ dataArticles }) => {

  const [disabled, setDisabled] = useState(true)
  const [selectedRows, setSelectedRows] = useState({})
  const [link, setLink] = useState('')

  const handleViewData = (prop) => {
    if (prop === 'mainImage') return setLink(selectedRows[prop])
    console.log('selectedRows[prop]', selectedRows[prop])
  }

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
        maxWidth: '1728px'
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
        backgroundColor: '#404040',
        color: 'white',
        maxWidth: '1728px'
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
        maxWidth: '1728px'
      },
    },
  };

  const handleChange = (state) => {
    setSelectedRows(state.selectedRows[0])
    if (state.selectedRows.length > 0 && state.selectedRows.length < 2) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  return (
    <div className="w-screen px-4 md:px-14 lg:px-24">
      <h1 className="text-xl font-bold text-center my-10 drop-shadow">
        Artículos en espera
      </h1>
      <span>
        <a href={link} target="_blank">
          <button type='button' disabled={disabled} className={`${disabled ? 'bg-slate-400' : 'bg-huasteca-brown'} py-2 px-4 mx-auto rounded-md text-neutral-100 font-bold float-right`} onClick={() => handleViewData('mainImage')}>
            Ver Imagen pricipal
          </button>
        </a>
      </span>
      <button type='button' disabled={disabled} className={`${disabled ? 'bg-slate-400' : 'bg-huasteca-brown'} py-2 px-4 mr-2 mx-auto rounded-md text-neutral-100 font-bold float-right`} onClick={() => handleViewData('images')}>
        Ver Imagenes
      </button>
      <h1 className="text-lg font-medium text-left my-5 drop-shadow">
        Selecciona el articulo con el que quieres interactuar
      </h1>
      <DataTable
        customStyles={customStyles}
        columns={columns}
        data={dataArticles}
        selectableRows
        onSelectedRowsChange={(state) => handleChange(state)}
      />
    </div>
  );
};
