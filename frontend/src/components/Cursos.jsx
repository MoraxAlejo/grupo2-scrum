
import { useState, useEffect } from 'react';
export default function Cursos({ datos }) {
  const [dataEstudiante, setDataEstudiante] = useState([]);

  useEffect(() => {
    setDataEstudiante(datos); // Asigna los datos de la API a dataEstudiante
  }, [datos]);

  // Filtra los estudiantes del grupo 1
  const estudiantesGrupo1 = dataEstudiante.filter((estudiante) => estudiante.grupo === 2);

  return (
    <div>
      <h1>Cursos</h1>
      <div id="container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Dirección</th>
              <th>Email</th>
              <th>Grupo</th>
            </tr>
          </thead>
          <tbody>
            {estudiantesGrupo1.map((el) => (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.nombres}</td>
                <td>{el.apellidos}</td>
                <td>{el.direccion}</td>
                <td>{el.email}</td>
                <td>{el.grupo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

