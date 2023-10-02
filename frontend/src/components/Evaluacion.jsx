import "/css/evaluacion.css"
import "/css/bg.css"
import { useRef } from "react";
import { createEval } from "../../api/scrum-api";
import { useNavigate } from "react-router-dom";

export default function New() {
    const navigate = useNavigate();
    const nombre_de_evalucion = useRef(null);
    const descripcion = useRef(null);
    const logica = useRef(null);
    const razonamiento = useRef(null);
    const aptitud = useRef(null);
    const asistencia_a_clases = useRef(null);
    const trabajos_presentados = useRef(null);
    const evaluciones = useRef(null);
    const id_evaluador = useRef(null);
  
    const test = async (event) => {
      event.preventDefault();
  
      const evalucion = {
        nombre_de_evalucion: nombre_de_evalucion.current.value,
        descripcion: descripcion.current.value,
        logica: logica.current.value,
        razonamiento: razonamiento.current.value,
        aptitud: aptitud.current.value,
        asistencia_a_clases: asistencia_a_clases.current.value,
        trabajos_presentados: trabajos_presentados.current.value,
        evaluciones: evaluciones.current.value,
        id_evaluador: id_evaluador.current.value = 2
    };
    console.log(evalucion);
  
      await createEval(evalucion);
      navigate("/");
    };
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="text-white text-3xl text-center gradient-bg p-3 px-4 w-[600px]">Evalua al alumno rellenando los campos</p>
            <div className="modal w-[600px]">
                <form onSubmit={test} className="form">
                    <div className="credit-card-info--form ">
                        <div className="input_container">
                            <label className="input_label">Nombre de evaluacion:</label>
                            <input ref={nombre_de_evalucion} className="input_field" type="text" name="asistencia" title="Inpit title" placeholder="Porcentaje total de la asistencia" />
                        </div>
                        <div className="input_container">
                            <label className="input_label">Descripcion:</label>
                            <input ref={descripcion} className="input_field" type="text" name="proyectos" title="Inpit title" placeholder="Cantidad de proyectos entregados" />
                        </div>
                        <div className="input_container">
                            <label className="input_label">Logica:</label>
                            <input ref={logica} className="input_field" type="text" name="proyectos" title="Inpit title" placeholder="Cantidad de proyectos entregados" />
                        </div>
                        <div className="input_container">
                            <label className="input_label">Razonamiento:</label>
                            <input ref={razonamiento} className="input_field" type="number" name="proyectos" title="Inpit title" placeholder="Cantidad de proyectos entregados" />
                        </div>
                        <div className="input_container">
                            <label className="input_label">Aptitud:</label>
                            <input ref={aptitud} className="input_field" type="text" name="proyectos" title="Inpit title" placeholder="Cantidad de proyectos entregados" />
                        </div>
                        <div className="input_container">
                            <label className="input_label">Asistencia clases:</label>
                            <input ref={asistencia_a_clases} className="input_field" type="number" name="proyectos" title="Inpit title" placeholder="Cantidad de proyectos entregados" />
                        </div>
                        <div className="input_container">
                            <label className="input_label">Evaluciones:</label>
                            <input ref={trabajos_presentados} className="input_field" type="number" name="proyectos" title="Inpit title" placeholder="Cantidad de proyectos entregados" />
                        </div>
                        <div className="input_container">
                            <label className="input_label">Trabajos presentados:</label>
                            <input ref={evaluciones} className="input_field" type="number" name="proyectos" title="Inpit title" placeholder="Cantidad de proyectos entregados" />
                        </div>
                    </div>
                    <button type="submit" className="purchase--btn gradient-bg">Evaluar</button>
                </form>
            </div>
        </div>
    )
}

