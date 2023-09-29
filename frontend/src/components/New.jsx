import "/css/new.css"
import "/css/bg.css"


export default function New() {
    return (
        <div>
            <form className=" flex flex-col items-center bg-white pb-4">
                <p className="gradient-bg text-white w-full p-4 pl-8">Llena los campos para agregar estudiante </p>
                <div className="flex justify-center gap-10">
                    <div>
                        <p className="pt-6 pb-3">Nombre:</p>
                        <div className="input-container w-[460px]">
                            <input className="input w-[460px]" id="nombre" name="nombre" type="text" />
                            <label className="label" htmlFor="nombre">Ingresa tu nombre</label>
                            <div className="topline"></div>
                            <div className="underline"></div>
                        </div>
                    </div>
                    <div>
                        <p className="pt-6 pb-3">Apellido:</p>
                        <div className="input-container w-[460px]">
                            <input className="input w-[460px]" id="apellido" name="apellido" type="text" />
                            <label className="label" htmlFor="apellido">Ingresa tu apellido</label>
                            <div className="topline"></div>
                            <div className="underline"></div>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="pt-6 pb-3">Direccion:</p>
                    <div className="input-container w-[960px]">
                        <input className="input w-[960px]" id="direccion" name="direccion" type="text" />
                        <label className="label" htmlFor="direccion">Ingresa una direccion</label>
                        <div className="topline"></div>
                        <div className="underline"></div>
                    </div>
                </div>
                <div>
                    <p className="pt-6 pb-3">Correo:</p>
                    <div className="input-container w-[960px]">
                        <input className="input w-[960px]" id="correo" name="correo" type="email" />
                        <label className="label" htmlFor="correo">Ingresa tu correo</label>
                        <div className="topline"></div>
                        <div className="underline"></div>
                    </div>
                </div>

                <div className="flex gap-10">
                    <div>
                        <p className="pt-6 pb-2">Contraseña:</p>
                        <div className="input-container w-[460px]">
                            <input required="" className="input w-[460px]" id="contrasena" name="contrasena" type="text" />
                            <label className="label" htmlFor="contrasena">Ingresa una contraseña</label>
                            <div className="topline"></div>
                            <div className="underline"></div>
                        </div>
                    </div>
                    <div>
                        <p className="pt-6 pb-2">Asignar urso:</p>
                        <div className="input-container w-[460px]">
                            <input className="input w-[460px]" id="cursos" name="cursos" type="text" />
                            <label className="label" htmlFor="cursos">Elegir curso </label>
                            <div className="topline"></div>
                            <div className="underline"></div>
                        </div>
                    </div>
                </div>
                <button type="submit" className="gradient-bg w-44 mt-5 flex justify-center gap-4 text-white text-lg items-center p-3 px-4 rounded-2xl"><img width={30} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADdElEQVR4nO2aTU8UQRCGx4CAwci3eNQjgah/QgVFAW+g3jByEQh6BTyrJxMSf4cGjSZqFCXitxcFF08qByPeRAiYxxS8Ezu6O7s79Mos4U0m2Wz3Vr01XdVdXbVBsIVNCqAW6ASuAOPANPAdWNJjn99rzOZ0ADVBEgBUAGeAu8Av8scKcAc4DZRvhAE7gAvAnENqEbgPDGtlmuyNA9v11Og7GxsBHug3Ib4AQ/Zy/pcRx4CPDoHnQC9QFUNWNXAWeOHImwXaCu1G1x2FL4HDHuW3Aq8d+WPeVwfYI+KGH8B5oMSrkjU9JcAAsOCsdqMv4fu03GjXafEiOFrnfmBGOlPGYb0CGxyBz4B6b2yz664BHku3xeSe9cRE6E6TQKV3ttk5VAJPHTfLP2acwDZ3qi0I09x41DleMRZniw0Du+AxkWPMLIhTaz6HXXhOnA8SAmDQCf7sLgZcdM4J71tsXAClwBtxG8w2uVypguFQkDAAR8VtLnJVlLyt7hBBAgFsc3bSnqiJlsUaej0qt+1z0qO8c+J4O+o+saKMtMqj4lV4PiiXgOW0PIEu6bznS2khDDEADyX2ePA3gKsaHA6Sb8glib2cbtCuoIYTRWBIl8TeSDf4QYNNRWBIs8ROpxuc12BtERhSL7Ff0w3aTmAoiyF4gviYiKGvXL9dTJIhj3wbMl9ErtUQ5VqbJtjHNdhRBIacjNp+wwNxpNgPxE4N3i+iFKU9UzIWJo3VSTWEteQ2TBp3ZZpkBWXDWY+KJ+JssZkA9InjrahJpzTpRZDci9UrcezOdtB81sQjQcIAtIvbp6xtCJX2keVJKz68Fbf+XCuMYa13IEgI+POCZ3JuCll/Qj+yotj+grPMzucg8FOc8mtlqD8RvoG6grHMLa9Kicu1OAIqVDhGlZCNKGLvBKbEYSp2n1Fvw7qzYVuhwTvb6IPviXTPrrvho0ZPynGzA97YRsdESjotK9/rS3Cj42YLKiiXehH+7xY75AS2udNu30oqnA0AFZTbPJ7Y1soIz4nVwC5o713d13DZUS32XJx/MSgO+py0I3Qlb93iXFZn0ElnUEZq6fWo6k7N6jaV6bHPLboUjWpuWCcI047+jfoHhOVmPVZQ1hUgXyzrZtq9IQakgxWUrRZrtzbgpnqP35w/1djnd3Y91ZzjGe8TWwiKH78BmFs3aLUPAL8AAAAASUVORK5CYII=" />Agregar</button>
            </form>
        </div>
    )
}
