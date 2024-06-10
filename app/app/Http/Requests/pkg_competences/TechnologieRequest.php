<?php
namespace App\Http\Requests\pkg_competences;

use Illuminate\Foundation\Http\FormRequest;

class TechnologieRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nom' => 'required|string|max:40', 
            'description' => 'nullable|string|max:255',
            'categorie_technologies_id' => 'required|integer|not_in:null',
            'competence_id' => 'required|integer|not_in:null',
        ];
    }

    /**
     * Get custom error messages for validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'nom.required' => 'Le nom est requis.',
            'nom.string' => 'Le nom doit être une chaîne de caractères.',
            'nom.max' => 'Le nom ne peut pas dépasser 40 caractères.',
            'description.string' => 'La description doit être une chaîne de caractères.',
            'description.max' => 'La description ne peut pas dépasser 255 caractères.',
            'categorie_technologies_id.required' => 'La catégorie de technologie est requise.',
            'categorie_technologies_id.integer' => 'La catégorie de technologie doit être un identifiant valide.',
            'categorie_technologies_id.not_in' => 'La catégorie de technologie ne doit pas être nulle.',
            'competence_id.required' => 'La compétence est requise.',
            'competence_id.integer' => 'La compétence doit être un identifiant valide.',
            'competence_id.not_in' => 'La compétence ne doit pas être nulle.',
        ];
    }
}
