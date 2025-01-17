<form action="{{ $dataToEdit ? route('Module.update', $dataToEdit->id) : route('Module.store') }}" method="POST">
    @csrf
    @if ($dataToEdit)
        @method('PUT')
    @endif
    <div class="card-body">
        <div class="form-group">
            <label for="nom">{{ __('N°') }} <span
                    class="text-danger">*</span></label>
            <input name="N" type="text" class="form-control" id="N" placeholder="Entrez le N°"
                value="{{ $dataToEdit ? $dataToEdit->N : old('N') }}">
            @error('N')
                <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>


        <div class="form-group">
            <label for="nom">{{ __('app.name') }} <span
                    class="text-danger">*</span></label>
            <input name="nom" type="text" class="form-control" id="nom" placeholder="Entrez le nom"
                value="{{ $dataToEdit ? $dataToEdit->nom : old('nom') }}">
            @error('nom')
                <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>

        <div class="form-group">
            <label for="inputDescription">{{ __('app.description') }}</label>
            <textarea name="description" id="editor" class="form-control" rows="7" placeholder="Entrez la description">
                {{ $dataToEdit ? $dataToEdit->description : old('description') }}
            </textarea>
            @error('description')
                <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>
    </div>

    <div class="card-footer">
        <a href="{{ route('Appreciation.index') }}" class="btn btn-default">{{ __('app.cancel') }}</a>
        <button type="submit" class="btn btn-info ml-2">{{ $dataToEdit ? __('app.edit') : __('app.add') }}</button>
    </div>

</form>
