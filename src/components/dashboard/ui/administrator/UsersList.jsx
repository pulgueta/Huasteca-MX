import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { queryData, updateData, DeleteDoc } from "../../../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { FaTimes, FaCheck } from 'react-icons/fa'

export const UsersList = () => {
  const navigate = useNavigate();
  const rol = localStorage.getItem("rol") ?? "";
  const [data, setData] = useState([]);
  const [dataPending, setDataPending] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [disabledPending, setDisabledPending] = useState(true);
  const [selectedRows, setSelectedRows] = useState({});
  const [pending, setPending] = React.useState(true);
  const [reload, setReload] = useState(false);

  const acceptedColumns = [
    {
      name: "Nombre",
      selector: (row) => `${row.name} ${row.dadSurname} ${row.momSurname}`,
      sortable: true,
    },
    {
      name: "Teléfono",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Estudios",
      selector: (row) => row.studiesLevel,
      sortable: true,
    },
    {
      name: "Invitado por",
      selector: (row) => row.invites,
      sortable: true,
    },
    {
      name: "Experiencia",
      selector: (row) => row.experience + ' años',
      sortable: true,
    },
    {
      name: "Editar rol",
      sortable: false,
      selector: "null",
      cell: row => [
        <select className="p-2" value={row.rol} onChange={async (e) => { await updateData('users', row.id, { rol: e.target.value }); setReload(true) }}>
          <option value="" disabled>Sin rol</option>
          <option value="Admin">Administrador</option>
          <option value="generator">Generador de contenido</option>
          <option value="usuario">Usuario común</option>
        </select>
      ]
    },
  ];

  const pendingColumns = [
    {
      name: "Nombre",
      selector: (row) => `${row.name} ${row.dadSurname} ${row.momSurname}`,
      sortable: true,
    },
    {
      name: "Teléfono",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Estudios",
      selector: (row) => row.studiesLevel,
      sortable: true,
    },
    {
      name: "Invitado por",
      selector: (row) => row.studiesLevel,
      sortable: true,
    },
    {
      name: "Experiencia",
      selector: (row) => row.invites,
      sortable: true,
    },
    {
      name: "Acción",
      sortable: false,
      selector: "null",
      cell: (row) => [
        <i
          key={row.id}
          onClick={async () => { await updateData('users', row.id, { state: 'accepted', rol: '' }); setReload(true) }}
          className="mr-5"
        >
          <FaCheck className='text-2xl' />
        </i>,
        <i
          key={row.id}
          onClick={async () => { await DeleteDoc('users', row.id); setReload(true) }}
        >
          <FaTimes className='text-2xl' />
        </i>
      ]
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

  useEffect(() => {
    const getData = async () => {
      if (reload) {
        setReload(false);
      }
      const docs = await queryData("users");
      const data = docs;
      const array = [];
      const arrayPending = [];
      data.forEach((element) => {
        if (element.data().state === "accepted") {
          array.push({
            id: element.id,
            ...element.data(),
          });
        } else if (element.data().state === "pendingAccepted") {
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

    if (rol === "Admin") {
      getData();
    } else {
      navigate("/perfil");
    }
  }, [navigate, reload, rol]);

  const handleChange = (state) => {
    if (state.selectedRows.length > 0 && state.selectedRows.length < 2) {
      setDisabled(false);
      setSelectedRows(state.selectedRows[0]);
    } else {
      setDisabled(true);
      setSelectedRows(null);
    }
  };

  const handleChangePending = (state) => {
    if (state.selectedRows.length > 0 && state.selectedRows.length < 2) {
      setDisabledPending(false);
      setSelectedRows(state.selectedRows[0]);
    } else {
      setDisabledPending(true);
      setSelectedRows(null);
    }
  };

  const handleViewData = () => {
    window.open(selectedRows.file);
  };

  const handleChangeState = async () => {
    const oldData = selectedRows;
    oldData.state = "pendingAccepted";
    await updateData("users", oldData.id, oldData);
    setReload(true);
  };

  return (
    <div className="min-h-[calc(100vh-56px)] bg-neutral-300 flex items-start justify-center">
      <div className="w-screen m-10 border-solid border-2 border-gray-400 divide-y-2 divide-gray-400">
        <div>
          <div className="my-10 text-3xl font-bold text-center drop-shadow">
            <h1>Administración de usuarios</h1>
          </div>
          <div className="my-10 text-xl font-bold text-center drop-shadow">
            <h1>Aceptados</h1>
          </div>
          <div>
            <button
              disabled={disabled ? true : false}
              className={`${disabled ? "bg-slate-400" : "bg-huasteca-brown"
                } h-full py-2 px-4 mx-10 rounded-md text-neutral-100 font-bold`}
              onClick={handleViewData}
            >
              Carta motivo
            </button>
          </div>
          <div className="m-10">
            <DataTable
              customStyles={customStyles}
              columns={acceptedColumns}
              data={data}
              onSelectedRowsChange={(state) => handleChange(state)}
              pagination
              selectableRows
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
          <div>
            <button
              disabled={disabledPending ? true : false}
              className={`${disabledPending ? "bg-slate-400" : "bg-huasteca-brown"
                } h-full py-2 px-4 ml-10 mr-5 rounded-md text-neutral-100 font-bold`}
              onClick={handleViewData}
            >
              Carta motivo
            </button>
            <button
              disabled={disabledPending ? true : false}
              className={`${disabledPending ? "bg-slate-400" : "bg-huasteca-brown"
                } h-full py-2 px-4 rounded-md text-neutral-100 font-bold`}
              onClick={handleChangeState}
            >
              Estado
            </button>
          </div>
          <div className="m-10">
            <DataTable
              customStyles={customStyles}
              columns={pendingColumns}
              data={dataPending}
              onSelectedRowsChange={(state) => handleChangePending(state)}
              pagination
              selectableRows
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
