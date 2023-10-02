
"use clients"
import { useState, useEffect } from 'react';
export default function Cursos({ datos }) {
  const [dataEstudiante, setDataEstudiante] = useState([]);

  useEffect(() => {
    if (datos && datos.length > 0) {
      setDataEstudiante(datos);
    }
  }, [datos]);


  const [grupoSeleccionado, setGrupoSeleccionado] = useState('1');

  const estudiantesGrupo1 = dataEstudiante.filter((estudiante) => estudiante.grupo === parseInt(grupoSeleccionado));



  return (
    <>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
   <h2>Grupo</h2> <select name="grupo" id="grupo" value={grupoSeleccionado} onChange={(e) => setGrupoSeleccionado(e.target.value)}
>
  {[...new Set(dataEstudiante.map((estudiante) => estudiante.grupo))]
    .sort((a, b) => parseInt(a) - parseInt(b))
    .map((grupo) => (
      <option key={grupo} value={grupo}>
        {grupo}
      </option>
    ))}
</select>
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="p-4">
            <div className="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="checkbox-all-search" className="sr-only">
                checkbox
              </label>
 
            </div>
          </th>

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

        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td className="w-4 p-4">
            <div className="flex items-center">
              <input
                id="checkbox-table-search-1"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="checkbox-table-search-1" className="sr-only">
                checkbox
              </label>
            </div>
          </td>

          {estudiantesGrupo1.map((el) => (
            <tr key={el.id} className="px-6 py-4">
              <td>{el.id}</td>
              <td className="px-6 py-4">{el.nombres}</td>
              <td className="px-6 py-4">{el.apellidos}</td>
              <td className="px-6 py-4">{el.direccion}</td>
              <td className="px-6 py-4">{el.email}</td>
              <td className="px-6 py-4">{el.grupo}</td>
            </tr>
          ))}

         
          <td className="px-6 py-4">
            <div>
              <button className="bg-transparent border border-white text-white font-bold py-0.5 px-1 rounded-full text-xs hover:bg-white hover:text-blue-500">
                Guardar
              </button>
            </div>
          </td>
        </tr>
      </tbody>

      <button className="gradient-bg w-48 mt-5 flex justify-center gap-4 text-white text-sm items-center p-3 px-4 rounded-2xl">
        GUARDAR TODOS
      </button>
    </table>
    <nav
      className="flex items-center justify-between pt-4"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          1-10
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          1000
        </span>
      </span>
      <ul className="inline-flex -space-x-px text-sm h-8">
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            1
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            2
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          >
            3
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            4
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            5
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
 </div>
</>
  );
}

