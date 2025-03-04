import { Head, useForm } from '@inertiajs/react'
import AdminAuthenticatedLayout from '@/Layouts/AdminAuthenticatedLayout'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import InputError from '@/components/input-error'
import useSlugify from '@/hooks/use-slugify'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import Image from '@/components/image'
import { useImageUpload } from '@/hooks/use-image-upload'
import { ColorPicker } from '@/components/ui/color-picker'
import { Index } from '@/types'

interface EditIndexProps {
    index: Index
}

const Edit = ({ index }: EditIndexProps) => {
    const { slugify } = useSlugify()
    const { post, data, setData, processing, errors, isDirty, reset } =
        useForm<{
            name: string
            slug: string
            description: string
            color_code: string | null
            active: boolean
            icon: File | null
            _method: 'PUT'
        }>({
            name: index.name,
            slug: index.slug,
            description: index.description,
            color_code: index.color_code,
            active: index.status.value === 'active',
            icon: null,
            _method: 'PUT',
        })

    const { preview, handleImageUpload } = useImageUpload(index.icon, setData)

    const handleIndexUpdate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        post(route('admin.indexes.update', index.id), {
            preserveScroll: true,
            onSuccess: () => {
                reset()
            },
        })
    }

    return (
        <AdminAuthenticatedLayout
            breadcrumbs={[
                { title: 'Indexes', link: route('admin.indexes.index') },
                {
                    title: `Edit: ${index.name}`,
                },
            ]}
        >
            <Head title={`Indexes | Edit: ${index.name}`} />

            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="min-h-[100vh] flex-1 rounded-xl bg-gray-50 shadow dark:bg-gray-900 md:min-h-min">
                    <div className="p-6 text-gray-900 dark:text-gray-100">
                        <form onSubmit={handleIndexUpdate}>
                            <div className="grid grid-cols-8 gap-4">
                                <div className="col-span-8 lg:col-span-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Basic Data</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex flex-col justify-center gap-4">
                                            <div className="flex flex-col gap-1">
                                                <Label htmlFor="name">
                                                    Name{' '}
                                                    <span
                                                        className="text-xl text-red-900"
                                                        title="Required"
                                                    >
                                                        *
                                                    </span>
                                                </Label>
                                                <Input
                                                    id="name"
                                                    type="text"
                                                    placeholder="Index Name"
                                                    value={data.name}
                                                    onChange={(e) =>
                                                        setData(
                                                            'name',
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={errors.name}
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <Label htmlFor="slug">
                                                    Slug
                                                </Label>
                                                <Input
                                                    id="slug"
                                                    type="text"
                                                    placeholder="Slug"
                                                    value={slugify(data.name)}
                                                    disabled={true}
                                                />
                                                <InputError
                                                    message={errors.slug}
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <Label htmlFor="description">
                                                    Description
                                                </Label>
                                                <Textarea
                                                    id="description"
                                                    placeholder="Description .."
                                                    value={data.description}
                                                    onChange={(e) =>
                                                        setData(
                                                            'description',
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={errors.description}
                                                />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="col-span-8 lg:col-span-2">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>
                                                Status & Media
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex flex-col justify-center gap-4">
                                            <div className="flex flex-col gap-1">
                                                <Label htmlFor="active">
                                                    Color Scheme{' '}
                                                </Label>
                                                <ColorPicker
                                                    onChange={(v) => {
                                                        setData('color_code', v)
                                                    }}
                                                    value={data.color_code}
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <Label htmlFor="active">
                                                    Status{' '}
                                                    <span
                                                        className="text-xl text-red-900"
                                                        title="Required"
                                                    >
                                                        *
                                                    </span>
                                                </Label>
                                                <Switch
                                                    checked={data.active}
                                                    onCheckedChange={(
                                                        checked,
                                                    ) => {
                                                        setData(
                                                            'active',
                                                            checked,
                                                        )
                                                    }}
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <Label htmlFor="icon">
                                                    Icon{' '}
                                                    <span
                                                        className="text-xl text-red-900"
                                                        title="Required"
                                                    >
                                                        *
                                                    </span>
                                                </Label>
                                                <Input
                                                    id="icon"
                                                    type="file"
                                                    className="cursor-pointer"
                                                    onChange={(e) =>
                                                        handleImageUpload(
                                                            e,
                                                            'icon',
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={errors.icon}
                                                />
                                                {preview && (
                                                    <Image
                                                        src={preview as string}
                                                        width={50}
                                                        height={50}
                                                    />
                                                )}
                                            </div>
                                        </CardContent>
                                        <CardFooter className="flex justify-start gap-4">
                                            {/*Reset button*/}
                                            <Button
                                                disabled={
                                                    !isDirty || processing
                                                }
                                                type="button"
                                                onClick={() => reset()}
                                                className="my-3 bg-green-600"
                                            >
                                                Reset
                                            </Button>
                                            <Button
                                                disabled={
                                                    !isDirty || processing
                                                }
                                                type="submit"
                                                className="my-3"
                                            >
                                                {processing ? (
                                                    <span className="loading-xl loading loading-dots"></span>
                                                ) : (
                                                    'Update'
                                                )}
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminAuthenticatedLayout>
    )
}

export default Edit
