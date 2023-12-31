import "/css/bg.css"
"use clients"
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Cursos({ datos }) {
  const [dataEstudiante, setDataEstudiante] = useState([]);

  useEffect(() => {
    if (datos && datos.length > 0) {
      setDataEstudiante(datos);
    }
  }, [datos]);

  const [grupoSeleccionado, setGrupoSeleccionado] = useState("1");

  const estudiantesGrupo1 = dataEstudiante.filter(
    (estudiante) => estudiante.grupo === parseInt(grupoSeleccionado)
  );

  return (
    <>
      <div className="gradient-bg flex items-center gap-4 p-3 w-[16rem] rounded-lg mb-5">
        <h2 className="text-white ">SELECCIONE UN GRUPO</h2>{" "}
        <select
          name="grupo"
          id="grupo"
          value={grupoSeleccionado}
          onChange={(e) => setGrupoSeleccionado(e.target.value)}
        >
          {[...new Set(dataEstudiante.map((estudiante) => estudiante.grupo))]
            .sort((a, b) => parseInt(a) - parseInt(b))
            .map((grupo) => (
              <option key={grupo} value={grupo}>
                {grupo}
              </option>
            ))}
        </select>
      </div>
      <div className="relative overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Nombres
              </th>
              <th scope="col" className="px-6 py-3">
                Apellidos
              </th>
              <th scope="col" className="px-6 py-3">
                Direccion
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Grupo
              </th>
              <th scope="col" className="px-6 py-3">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {estudiantesGrupo1.map((el) => (
              <tr
                key={el.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{el.id}</td>
                <td className="px-6 py-4">{el.nombres}</td>
                <td className="px-6 py-4">{el.apellidos}</td>
                <td className="px-6 py-2">{el.direccion}</td>
                <td className="px-6 py-4">{el.email}</td>
                <td className="px-6 py-4">{el.grupo}</td>
                <td className="px-6 py-4">
                  <div>
                    <Link to={`/cursos/evaluacion/${el.id}`}> <button className="bg-transparent border border-white text-white font-bold py-0.5 px-1 rounded-full text-xs hover:bg-white hover:text-blue-500">
                      Evaluar
                    </button></Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
