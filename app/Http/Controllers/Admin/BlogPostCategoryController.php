<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CreateCategoryRequest;
use App\Http\Requests\Admin\UpdateCategoryRequest;
use App\Http\Resources\Admin\CategoryResource;
use App\Models\Category;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;
use Thefeqy\ModelStatus\Status;

class BlogPostCategoryController extends Controller
{
    private string $baseRoute = 'admin.blog-posts.categories';

    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $categories = Category::forBlogPosts()->paginate(12);

        return Inertia::render('Admin/Category/Index', [
            'title' => 'Blog Posts Categories',
            'baseRoute' => $this->baseRoute,
            'categories' => CategoryResource::collection($categories),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Admin/Category/Create', ['baseRoute' => $this->baseRoute]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateCategoryRequest $request): RedirectResponse
    {
        Category::create($request->safe()->merge([
            'status' => $request->input('status', Status::inactive()),
            'category_type' => $request->getCategoryType(),
        ])->all());

        return redirect()
            ->route("{$this->baseRoute}.index")
            ->with('message', 'Category created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category): Response
    {
        $category = Category::forBlogPosts()->findOrFail($category->id);

        return Inertia::render('Admin/Category/Show', ['baseRoute' => $this->baseRoute, 'category' => new CategoryResource($category)]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category): Response
    {
        $category = Category::forBlogPosts()->findOrFail($category->id);

        return Inertia::render('Admin/Category/Edit', ['baseRoute' => $this->baseRoute, 'category' => new CategoryResource($category)]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, Category $category): RedirectResponse
    {
        $category = Category::forBlogPosts()->findOrFail($category->id);
        $category->update($request->safe()->merge([
            'status' => $request->input('status', Status::inactive()),
        ])->all());

        return redirect()
            ->route("{$this->baseRoute}.index")
            ->with('message', 'Category updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category): RedirectResponse
    {
        $category->forBlogPosts()->delete();

        return redirect()
            ->route("{$this->baseRoute}.index")
            ->with('message', 'Category deleted successfully.');
    }
}
