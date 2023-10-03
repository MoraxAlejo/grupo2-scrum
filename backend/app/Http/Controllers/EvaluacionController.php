<?php

namespace App\Http\Controllers;

use App\Models\Evaluacion;
use Exception;
use Illuminate\Http\Request;

class EvaluacionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $evaluacion = new Evaluacion();
        return $evaluacion->all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'id_estudiante' => 'required|integer',
                'nombre_de_evaluacion' => 'required|string',
                'descripcion' => 'required|string',
                'logica' => 'required|string',
                'razonamiento' => 'required|string',
                'aptitud' => 'required|string',
                'asistencia_a_clases' => 'required|integer',
                'trabajos_presentados' => 'required|integer',
                'evaluaciones' => 'required|integer',
            ]);

            $evaluacion = new Evaluacion();
            $evaluacion->id_estudiante = $request->id_estudiante;
            $evaluacion->id_evaluador = $request->id_evaluador;

            return $request;
            // $evaluacion->save();
            // return  $evaluacion;
        } catch (Exception $e) {
            return json_encode($e);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $evaluacion = new Evaluacion();
        return $evaluacion->find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id, Request $request)
    {
        try {

            // $request->validate(Docente::rules(), ['nombre.required' => 'El nombre es requerido']);
            $evaluacion = Evaluacion::find($id);
            $evaluacion->id_estudiante = $request->id_estudiante;
            $evaluacion->id_evaluador = $request->id_evaluador;

            $evaluacion->save();
            return  $evaluacion;
        } catch (Exception $e) {
            return json_encode($e);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $evaluacion = Evaluacion::find($id);
        $evaluacion->delete();
        return $evaluacion;
    }
}
