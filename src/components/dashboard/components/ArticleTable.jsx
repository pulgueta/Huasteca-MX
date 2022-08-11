import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

export const ArticleTable = () => {
  return (
    <div className="w-screen px-4 md:px-14 lg:px-24">
      <h1 className="text-xl font-bold text-center my-10 drop-shadow">
        Artículos en espera
      </h1>
      <div className="text-center">
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
              <Td>45</Td>
              <Td>9 April 2019</Td>
              <Td>East Annex</Td>
              <Td>Tablescon</Td>
              <Td>9 April 2019</Td>
              <Td>East Annex</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>19 May 2019</Td>
              <Td>205 Gorgas</Td>
              <Td>Capstone Data</Td>
              <Td>19 May 2019</Td>
              <Td>205 Gorgas</Td>
            </Tr>
            <Tr>
              <Td>1000</Td>
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
