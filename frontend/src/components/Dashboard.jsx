"use client"
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "/css/bg.css"
import Cursos from "./Cursos";
import New from "./New";
import Evaluacion from "./Evaluacion";

export default function Dashboard() {
    // llamada a la api
    const [datos, setDatos] = useState();
    useEffect(() => {
        const promesa = fetch("http://127.0.0.1:8000/api/estudiantes")
        Promise.all([promesa]).then(async (values) => {
            const data = await values[0].json();
            if (data.cod === '404') {
                alert(data.message);
            } else {
                setDatos(data);
            }
        })
    }, []);


    //funcion para abrir el menu del logout 

    const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    const drawerClass = isDrawerOpen ? 'hidden' : '';

    //funcion para abrir el menu  
    const [openMenu, setOpenMenu] = useState(true);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <div className="h-screen flex ">
            <BrowserRouter>
                <section className={`gradient-bg h-screen w-[20%] flex flex-col items-center gap-16 pt-16 relative ${openMenu ? '' : 'hidden'}`}>
                    <div className=" flex flex-col justify-center items-center gap-4">
                        <img width="80" height="80" src="https://img.icons8.com/cotton/80/user-male-circle.png" alt="user-male-circle" />
                        <h1 className="text-white text-4xl">Evaluador</h1>
                    </div>
                    <ul className="flex flex-col gap-7 text-white">
                        <NavLink className={({ isActive }) => (isActive ? " border-b-2 border-white " : null)} to="/">
                            <li className="flex items-center gap-5 pb-4">
                                <img width="30" height="30" src="/home.svg" alt="plus-math" />
                                <h2>Home</h2>
                            </li>
                        </NavLink>
                        <NavLink className={({ isActive }) => (isActive ? " border-b-2 border-white " : null)} to="/cursos">
                            <li className="flex items-center gap-5 pb-4">
                                <img width="30" height="30" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABmElEQVR4nO3Yv04UQRzA8UVoFHoStLrKgkYpqXgCIw9gwT2ABTyApa0VkcQCHoIQQigksYDEGAvlFYyUEJSEfMiEIdksd+cd7t3tXOZb3v0mM9/9/dnJFkUmk8lkMjWAQ+lx1EkkSYpuIkUiyCINQ85Iw5BCRvAC3/ENU8mJ4BE28Dce56RHbDNFMI/d0itiB7NJieA1zuIRfuNVH2uaI4LH+FDKwgGe9rm2fhEs4muoabT6XLOE07jtH6x3a+yRiOANzktPNZTISo/4KbwtNfTPMKUesG89IqERsV1pzrtmDYdsd1jzrHLL3sSTQSVqE8HzOOcDl+EJx9+n8b500I+Yif+tDtrQQxXBGi5i+I/QHx1i2qXSCVn6VJLbx8K/9hmaSJwwW5VSmusRv4xfpfgrvAsvvaIG/IdImEhiNtb63KyF4zjRBm7oYYl8iX1xr5TGgTqavQnIIg1DzkjDkDNSDPQR7xovJ0EkcDgpInuTIHI98tJyextNnaNkv8JXSe6OVSWLND4jqVOEjpc+n8ddGZlMphgNN6hg3FjAPsDmAAAAAElFTkSuQmCC" />
                                <h2>Cursos</h2>
                            </li>
                        </NavLink>
                        <NavLink className={({ isActive }) => (isActive ? " border-b-2 border-white " : null)} to="/new">
                            <li className="flex items-center gap-5 pb-4">
                                <img width="30" height="30" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAATklEQVR4nO3Tyw0AIAgD0O6/GOpS9Wj0RMDfoW8ASkoA5AaSjUM5GTSBgrxU3fvqOP9JVnFvnIUfgurGHMvc0LdxloLCVF3Y8mcWnyTw6/WgPCvfsn3/AAAAAElFTkSuQmCC" />
                                <h2>New</h2>
                            </li>
                        </NavLink>
                    </ul>
                </section>
                <section className={`bg-slate-100 px-10 pt-7 ${openMenu ? 'w-[85%]' : 'w-full'} ${openMenu ? '' : 'px-28'}`}>
                    <button id="closemenu" onClick={toggleMenu} className="cursor-pointer absolute left-2 top-0"><img src={`${openMenu ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAElEQVR4nO3YMStGYRQH8OOKgYFJycxnYTHL++7KB6BMisHHsChmZVVGZWSwGH0FCT8p5brZ3nrfznV+9ay3/6nnPs85T0QppZRSyuRhBac4RhOZYBmPfqxHFljCfSv8C1YjAyzirhX+FZuRARZw2wr/hq3IAPO4aYV/xzAywByuW+E/sBMZYBZXnfC7kQFmcOm3vcgA0zjvhD+IROHPOuEPIwM03+1B2xP2x7SGmBqlgK8PTNpglAIG2Qto/thCzzgZ09oeaQul/4k7RVykPEY7t3DOi6wXrUQvmrletNO9GGh6MVJ2hvqHzlC/FsmfVTYi8cPWUbqHrVJKKaX8V59yOcdT9n9lFgAAAABJRU5ErkJggg==' : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtElEQVR4nO3YPQrCQBRF4VPpfiytLSyMC1BSGLNVK7GwcQFWgrV/hUYCU4hoIYGY+7gfvAUcZpiZBMzMzMzMOmgIbNKMELYDqjQ3IEPU/iVEOmYG3D/ETBC0+BIzRZBj1FYmQ5BjfpEDx7elb3MuwJiGesD5jxFVmmvTe6YPnCKE1ObAQX1rtamI8HQpItwlS0d0RBnhBVxGiMiBh/rpFOpTdxshojYAVsBa/XeQmZmZmaHlCeC06ncEGe4qAAAAAElFTkSuQmCC'}`} /></button>
                    <div className="flex justify-between pb-7">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <h1 className="text-4xl">Dashboard Evaluador</h1>
                                }
                            />
                            <Route
                                path="/cursos"
                                element={
                                    <h1 className="text-4xl">Clases Evaluador</h1>
                                }
                            />
                            <Route
                                path="/new"
                                element={
                                    <h1 className="text-4xl">Agregar Estudiante</h1>
                                }

                            />

                            <Route
                                path="/cursos/evaluacion/:id"
                                element={
                                    <h1 className="text-4xl">Evaluacion</h1>
                                }
                            />
                        </Routes>
                        <button onClick={toggleDrawer} className="cursor-pointer"><img width="35" height="35" src="https://img.icons8.com/ios-filled/50/menu--v6.png" alt="menu--v6" /></button>
                        <div id="drawer" className={`gradient-bg absolute cursor-pointer right-10 top-[95px] w-44 flex justify-center text-white text-lg items-center p-3 px-4 rounded-2xl  ${drawerClass}`}>
                            <img width={20} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAASUlEQVR4nM3SOwoAIAxEwb25rbdeCwXRpMgP8fU7EAiwoiNosQpANL4AOOtZQEfoAyTCC6CtngVa5oQ9DgDn2AnIMb76REulwACmgKKMtjSqQgAAAABJRU5ErkJggg==" />
                            Logout
                        </div>
                    </div>
                    <Routes>
                        <Route path="/" element=
                            {<div className="bg-white w-[50rem] font-semibold text-sm p-4 rounded-md">
                                <p>Bienvenido, a la izquierda selecciona una seccion.</p>
                            </div>}
                        />
                        <Route path="/cursos" element={<Cursos datos={datos} />} />
                        <Route path="/cursos/evaluacion/:id" element={<Evaluacion />} />
                        <Route path="/new" element={<New />} />
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}
