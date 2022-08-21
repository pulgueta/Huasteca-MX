import DataTable from "react-data-table-component";

const columns = [
  {
    name: "#",
    selector: (row) => `${row.name} ${row.dadSurname} ${row.momSurname}`,
    sortable: true,
  },
  {
    name: "Coordenadas",
    selector: (row) => row.phone,
    sortable: true,
  },
  {
    name: "Título",
    selector: (row) => row.studiesLevel,
    sortable: true,
  },
  {
    name: "Nombre autor",
    selector: (row) => row.invites,
    sortable: true,
  },
  {
    name: "Fecha",
    selector: (row) => row.invites,
    sortable: true,
  },
  {
    name: "Imagen",
    selector: (row) => row.invites,
    sortable: true,
  },
  {
    name: "Acción",
    selector: (row) => row.invites,
    sortable: true,
  },
];

const customStyles = {
  rows: {
    style: {
      minHeight: "60px", // override the row height
    },
  },
  headCells: {
    style: {
      margingLeft: "8px", // override the cell padding for head cells
      margingRight: "8px",
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

export const Cultural = () => {
  return (
    <div className="min-h-[calc(100vh-56px)] bg-neutral-300 flex items-start justify-center">
      <div className="w-screen m-10 border-solid border-2 border-gray-400 divide-y-2 divide-gray-400">
        <div>
          <div className="my-10 text-3xl font-bold text-center drop-shadow">
            <h1>Recorridos culturales</h1>
          </div>
          
          {/* <div>
            <button
              disabled={disabled ? true : false}
              className={`${
                disabled ? "bg-slate-400" : "bg-huasteca-brown"
              } h-full py-2 px-4 mx-10 rounded-md text-neutral-100 font-bold`}
              onClick={handleViewData}
            >
              Carta motivo
            </button>
          </div> */}
          <div className="m-10">
            <DataTable
              customStyles={customStyles}
              columns={columns}
                data={columns}
              //   onSelectedRowsChange={(state) => handleChange(state)}
              pagination
              selectableRows
              highlightOnHover
              pointerOnHover
              //   progressPending={pending}
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
