import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { queryData, DeleteDoc, updateData } from "../../../../utils/firebase";
import { FaTimes, FaCheck, FaLocationArrow } from 'react-icons/fa'

export const ProblemList = () => {

  const navigate = useNavigate();
  const rol = localStorage.getItem("rol") ?? "";
  const [data, setData] = useState([]);
  // const [dataPending, setDataPending] = useState([]);
  const [pending, setPending] = useState(true);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const getData = async () => {
      if (reload) {
        setReload(false);
      }
      const docs = await queryData("cityReports");
      const data = docs;
      const array = [];
      // const arrayPending = [];
      data.forEach((element) => {
        if (element.data().state === "pending") {
          array.push({
            id: element.id,
            ...element.data(),
          });
        }
      });
      setData(array);
      // setDataPending(arrayPending);
      setPending(false);
    };

    if (rol === "Admin") {
      getData();
    } else {
      navigate("/perfil");
    }
  }, [navigate, reload, rol])

  const columns = [
    {
      name: "#",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Coordenadas",
      selector: (row) => `${row.lat}, ${row.lng}`,
      sortable: true,
    },
    {
      name: "Descripción",
      selector: (row) => row.problem,
      sortable: true,
      wrap: true,
      grow: 3
    },
    {
      name: "Id autor",
      selector: (row) => row.reportingUser === 'No user' ? 'Usuario publico' : row.reportingUser,
      sortable: true,
      wrap: true,
      grow: 2
    },
    {
      name: "Fecha",
      selector: (row) => row.date ? row.date : 'No hay fecha',
      sortable: true,
    },
    {
      name: "Ubicación",
      sortable: false,
      selector: "null",
      cell: (row) => [
        <i
          key={row.id}
          onClick={async () => navigate(`/perfil/admin/lista-problemas/${row.lat}/${row.lng}`)}
          className="mr-5"
        >
          <FaLocationArrow className='text-2xl' />
        </i>
      ]
    },
    {
      name: "Imagen principal",
      selector: "Imagen",
      ignoreRowClick: true,
      cell: row =>
        row.images && row.images.length > 0 ? <img src={row.images[0]} alt='' /> : ""
    },
    {
      name: "Acción",
      sortable: false,
      selector: "null",
      cell: (row) => [
        <i
          key={row.id}
          onClick={async () => { await updateData('cityReports', row.id, { state: 'accepted' }); setReload(true) }}
          className="mr-5"
        >
          <FaCheck className='text-2xl' />
        </i>,
        <i
          key={row.id}
          onClick={async () => { await DeleteDoc('cityReports', row.id); setReload(true) }}
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
        display: 'flex',
        justifyContent: 'center'
      },
    },
    cells: {
      style: {
        margingLeft: "8px", // override the cell padding for head cells
        margingRight: "8px",
        display: 'flex',
        justifyContent: 'center'
      },
    },
  };


  return (
    <div className="min-h-[calc(100vh-56px)] bg-neutral-300 flex items-start justify-center">
      <div className="w-screen m-10 border-solid border-2 border-gray-400 divide-y-2 divide-gray-400">
        <div>
          <div className="my-10 text-3xl font-bold text-center drop-shadow">
            <h1>Problemas de la ciudad</h1>
          </div>
          <div className="m-10">
            <DataTable
              customStyles={customStyles}
              columns={columns}
              data={data}
              pagination
              highlightOnHover
              pointerOnHover
              progressPending={pending}
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
