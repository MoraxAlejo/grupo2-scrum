import "/css/evaluacion.css"
import "/css/bg.css"
import { useRef } from "react";
import { createEval } from "../../api/scrum-api";
import { useNavigate, useParams } from "react-router-dom";

export default function New() {
    const { id } = useParams();

    const navigate = useNavigate();
    const nombre_de_evalucion = useRef(null);
    const descripcion = useRef(null);
    const logica = useRef(null);
    const razonamiento = useRef(null);
    const aptitud = useRef(null);
    const asistencia_a_clases = useRef(null);
    const trabajos_presentados = useRef(null);
    const evaluciones = useRef(null);
    const id_evaluador = useRef(2);

    const test = async (event) => {
        event.preventDefault();

        const evaluacion = {
            nombre_de_evaluacion: nombre_de_evalucion.current.value,
            descripcion: descripcion.current.value,
            logica: logica.current.value,
            razonamiento: razonamiento.current.value,
            aptitud: aptitud.current.value,
            asistencia_a_clases: asistencia_a_clases.current.value,
            trabajos_presentados: trabajos_presentados.current.value,
            evaluaciones: evaluciones.current.value,
            id_evaluador: id_evaluador.current,
            id_estudiante: id,
        };

        await createEval(evaluacion);
        navigate("/");
    };
    return (
        <div className="flex flex-col justify-center items-center pb-10 rounded-lg">
            <p className="texto text-white text-3xl text-center gradient-bg p-3 px-4 w-[600px]">Evalua al alumno rellenando los campos</p>
            <div className="modal w-[600px]">
                <form onSubmit={test} className="form">
                    <div className="credit-card-info--form ">
                        <p className="text-center bg-slate-100 py-2">Detalles de la evaluación</p>
                        <div className="flex gap-3 justify-between mb-6">
                            <div className="input_container">
                                <label className="input_label">Nombre de evaluación:</label>
                                <input ref={nombre_de_evalucion} className="input_field" type="text" name="asistencia" title="Inpit title" placeholder="Agrega un nombre" />
                            </div>
                            <div className="input_container">
                                <label className="input_label">Descripcion:</label>
                                <input ref={descripcion} className="input_field" type="text" name="proyectos" title="Inpit title" placeholder="Agrega una descripcion" />
                            </div>
                        </div>
                        <hr />
                        <p className="text-center bg-slate-100 py-2">Indicadores para la evaluación</p>
                        <div className="flex gap-3 justify-between">
                        
                            <div className="input_container">
                                <label className="input_label">Logica:</label>
                                <input ref={logica} className="input_field" type="text" name="proyectos" title="Inpit title" placeholder="Descripcion de la logica" />
                            </div>
                            <div className="input_container">
                                <label className="input_label">Razonamiento:</label>
                                <input ref={razonamiento} className="input_field" type="text" name="proyectos" title="Inpit title" placeholder="Descripcion del razonamiento" />
                            </div>
                        </div>
                        <div className="input_container">
                            <label className="input_label">Aptitud:</label>
                            <input ref={aptitud} className="input_field" type="text" name="proyectos" title="Inpit title" placeholder="Descripcion de las aptitudes" />
                        </div>
                        <div className="flex gap-3 justify-between">
                            <div className="input_container">
                                <label className="input_label">Asistencia clases:</label>
                                <input ref={asistencia_a_clases} className="input_field" type="number" name="proyectos" title="Inpit title" placeholder=" %  De las asistencias" />
                            </div>
                            <div className="input_container">
                                <label className="input_label">Evaluaciones:</label>
                                <input ref={trabajos_presentados} className="input_field" type="number" name="proyectos" title="Inpit title" placeholder="Cantidad de evaluaciones" />
                            </div>
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

