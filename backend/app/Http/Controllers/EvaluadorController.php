<?php

namespace App\Http\Controllers;

use App\Models\Evaluador;
use Illuminate\Http\Request;

class EvaluadorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $evaluador = new Evaluador();
        return $evaluador->all(); 
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $evaluador = new Evaluador();
        $evaluador->nombres = $request->nombres;
        $evaluador->apellidos = $request->apellidos;
        $evaluador->direccion = $request->direccion;
        $evaluador->email = $request->email;
        $evaluador->password = $request->password;
        $evaluador->save();
        return $evaluador;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $evaluador = new Evaluador();
        return $evaluador->find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request)
    {
        $evaluador = Evaluador::find($id);
        $evaluador->nombres = $request->nombres;
        $evaluador->apellidos = $request->apellidos;
        $evaluador->direccion = $request->direccion;
        $evaluador->email = $request->email;
        $evaluador->password = $request->password;
        $evaluador->save();
        return $evaluador;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $evaluador = Evaluador::find($id);
        $evaluador->delete();
        return $evaluador;
    }
}
