<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Evaluador>
 */
class EvaluadorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'nombres' =>fake()->name(),
            'apellidos' =>fake()->lastName(),
            'direccion'=>fake()->address(),
            'email'=>fake()->email(),
            'password'=>fake()->password()
        ];
    }
}
