// import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import DataTable from 'react-data-table-component';

export const ArticleTable = () => {

  const columns = [
    {
      name: 'Event',
      selector: row => row.Event,
    },
    {
      name: 'Date',
      selector: row => row.Date,
    },
    {
      name: 'Location',
      selector: row => row.Location,
    },
    {
      name: 'Date2',
      selector: row => row.Date2,
    },
    {
      name: 'Location2',
      selector: row => row.Location2,
    },
  ];

  const data = [
    {
      id: 1,
      Event: 'Beetlejuice',
      Location: 'Beetlejuice',
      Date: '1988',
      Location2: 'Beetlejuice',
      Date2: '1988',
    },
    {
      id: 2,
      Event: 'Beetlejuice',
      Location: 'Beetlejuice',
      Date: '1988',
      Location2: 'Beetlejuice',
      Date2: '1988',
    },
    {
      id: 3,
      Event: 'Beetlejuice',
      Location: 'Beetlejuice',
      Date: '1988',
      Location2: 'Beetlejuice',
      Date2: '1988',
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
        backgroundColor: '#e5e5e5'
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
