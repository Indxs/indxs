<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CreateIndexRequest;
use App\Models\Index;
use DB;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Thefeqy\ModelStatus\Enums\Status;

class IndexController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Index/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateIndexRequest $request)
    {
        DB::beginTransaction();
        try {
            $index = Index::create($request->safe()->merge(['status' => $request->get('status', Status::INACTIVE)])->all());
            $index->addMediaFromRequest('icon')
                ->toMediaCollection('icon');

            DB::commit();

            return redirect()
                ->route('admin.indexes.index')
                ->with('message', 'Index created successfully');
        } catch (\Exception $e) {
            // Delete media uploaded if an error occurs
            if (isset($index))
                $index->getFirstMedia('icon')->delete();
            DB::rollBack();
            throw $e;
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
