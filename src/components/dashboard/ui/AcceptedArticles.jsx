import { useState } from "react";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

import { AddModal } from "../components";

export const AcceptedArticles = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="bg-neutral-300 min-h-[calc(100vh-56px)] flex flex-col">
      {modal && <AddModal toggle={() => setModal(false)} />}

      <div className="bg-neutral-200 rounded-lg shadow-sm mx-auto my-10 w-max p-8 h-max flex items-center justify-center">
        <button
          onClick={() => setModal(!modal)}
          className="bg-green-500 p-3 rounded-md text-neutral-100 font-bold"
        >
          Agregar artículo
        </button>
      </div>
      <div className="px-8 md:px-12 lg:px-20">
        <Table>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Título</Th>
              <Th>Fecha</Th>
              <Th>Contenido</Th>
              <Th>Imagen</Th>
              <Th>Arquitecto/Ing.</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Tablescon</Td>
              <Td>9 April 2019</Td>
              <Td>East Annex</Td>
              <Td>Tablescon</Td>
              <Td>9 April 2019</Td>
              <Td>East Annex</Td>
            </Tr>
            <Tr>
              <Td>Capstone Data</Td>
              <Td>19 May 2019</Td>
              <Td>205 Gorgas</Td>
              <Td>Capstone Data</Td>
              <Td>19 May 2019</Td>
              <Td>205 Gorgas</Td>
            </Tr>
            <Tr>
              <Td>Tuscaloosa D3</Td>
              <Td>29 June 2019</Td>
              <Td>Github</Td>
              <Td>Tuscaloosa D3</Td>
              <Td>29 June 2019</Td>
              <Td>Github</Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    </div>
  );
};
