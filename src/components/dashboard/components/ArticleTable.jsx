// import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import DataTable from 'react-data-table-component';

export const ArticleTable = () => {

  const columns = [
    {
      name: '#Id',
      selector: row => row.id,
    },
    {
      name: 'Título',
      selector: row => row.title,
    },
    {
      name: 'Fecha',
      selector: row => row.date,
    },
    {
      name: 'Contenido',
      selector: row => row.content,
    },
    {
      name: 'Imagen',
      selector: row => row.image,
    },
    {
      name: 'Arquitecto/Ing.',
      selector: row => row.autor,
    },
  ];

  const data = [
    {
      id: 1,
      title: 'Beetlejuice',
      date: 'Beetlejuice',
      content: '1988',
      image: 'Beetlejuice',
      autor: '1988',
    },
    {
      id: 2,
      title: 'Beetlejuice',
      date: 'Beetlejuice',
      content: '1988',
      image: 'Beetlejuice',
      autor: '1988',
    },
    {
      id: 3,
      title: 'Beetlejuice',
      date: 'Beetlejuice',
      content: '1988',
      image: 'Beetlejuice',
      autor: '1988',
    },
    {
      id: 4,
      title: 'Beetlejuice',
      date: 'Beetlejuice',
      content: '1988',
      image: 'Beetlejuice',
      autor: '1988',
    },
    {
      id: 5,
      title: 'Beetlejuice',
      date: 'Beetlejuice',
      content: '1988',
      image: 'Beetlejuice',
      autor: '1988',
    },
    {
      id: 6,
      title: 'Beetlejuice',
      date: 'Beetlejuice',
      content: '1988',
      image: 'Beetlejuice',
      autor: '1988',
    },
    {
      id: 7,
      title: 'Beetlejuice',
      date: 'Beetlejuice',
      content: '1988',
      image: 'Beetlejuice',
      autor: '1988',
    }
  ]

  const customStyles = {
    rows: {
      style: {
        minHeight: '60px', // override the row height
        backgroundColor: '#e5e5e5'
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
        backgroundColor: '#404040',
        color: 'white'
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };

  const handleChange = (state) => {
    console.log('state.selectedRows :>> ', state.selectedRows);
  }

  return (
    <div className="w-screen px-10">
      <DataTable
        customStyles={customStyles}
        columns={columns}
        data={data}
        selectableRows
        onSelectedRowsChange={handleChange}
      />
    </div>
  );
};
