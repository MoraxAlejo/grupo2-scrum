import "/css/evaluacion.css"
import "/css/bg.css"

export default function Evaluacion() {
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="text-white text-3xl text-center gradient-bg p-3 px-4 w-[600px]">Evalua al alumno rellenando los campos</p>
            <div className="modal w-[600px]">
                <form className="form">
                    <div className="credit-card-info--form">
                        <div className="input_container">
                            <label className="input_label">Evalua la asistencia:</label>
                            <input className="input_field" type="number" name="asistencia" title="Inpit title" placeholder="Porcentaje total de la asistencia" />
                        </div>
                        <div className="input_container">
                            <label className="input_label">Evalua los proyectos entregados:</label>
                            <input className="input_field" type="number" name="proyectos" title="Inpit title" placeholder="Cantidad de proyectos entregados" />
                        </div>
                        <div className="input_container">
                            <label className="input_label">Evaluaciones:</label>
                            <input className="input_field" type="number" name="proyectos" title="Inpit title" placeholder="Cantidad de proyectos entregados" />
                        </div>
                    </div>
                    <button className="purchase--btn gradient-bg">Evaluar</button>
                </form>
            </div>
        </div>
    )
}