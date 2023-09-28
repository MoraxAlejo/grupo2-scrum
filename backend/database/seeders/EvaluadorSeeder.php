<?php

namespace Database\Seeders;

use App\Models\Evaluador;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EvaluadorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Evaluador::factory(10)->create();
    }
}
