import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

export const MemberAdmin = () => {
  return (
    <div className="min-h-[calc(100vh-56px)] flex flex-col items-center justify-start bg-neutral-300">
      <h1 className="text-2xl py-10 drop-shadow-sm font-bold text-center">
        Administración de miembros
      </h1>
      <div className="w-4/5 text-center">
        <Table>
          <Thead>
            <Tr>
              <Th>Nombre</Th>
              <Th>Apellido P aterno</Th>
              <Th>Apellido Materno</Th>
              <Th>Teléfono</Th>
              <Th>Nivel estudio</Th>
              <Th>Experiencia laboral</Th>
              <Th>Carta motivos</Th>
              <Th>Invitado por</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Fernando</Td>
              <Td>Herrera</Td>
              <Td>Moreno</Td>
              <Td>3014492053</Td>
              <Td>Ing. de Sistemas</Td>
              <Td>15 años</Td>
              <Td>Ver</Td>
              <Td>Juan de la Torre</Td>
              <Td>✅/❎</Td>
            </Tr>
            <Tr>
            <Td>Fernando</Td>
              <Td>Herrera</Td>
              <Td>Moreno</Td>
              <Td>3014492053</Td>
              <Td>Ing. de Sistemas</Td>
              <Td>15 años</Td>
              <Td>Ver</Td>
              <Td>Juan de la Torre</Td>
              <Td>✅/❎</Td>
            </Tr>
            <Tr>
            <Td>Fernando</Td>
              <Td>Herrera</Td>
              <Td>Moreno</Td>
              <Td>3014492053</Td>
              <Td>Ing. de Sistemas</Td>
              <Td>15 años</Td>
              <Td>Ver</Td>
              <Td>Juan de la Torre</Td>
              <Td>✅/❎</Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    </div>
  );
};
