import { Config } from 'ziggy-js'

export interface User {
    id: number
    name: string
    email: string
    email_verified_at?: string
}

export type BreadcrumbType = {
    title: string
    link?: string
}
export interface Admin {
    id: number
    name: string
    email: string
}

export type Index = {
    id: number | string
    name: string
    description: string
    slug: string
    icon: string
    color_code: string
    status: 'active' | 'inactive'
    created_at: string
    updated_at: string
}

export type Category = {
    id: number
    name: string
    slug: string
    meta_title: string
    meta_description: string
    status: 'active' | 'inactive'
    created_at: string
    updated_at: string
}

type Package = {
    id: number
    index_id: number
    index: Index
    categories: Category[]
    name: string
    slug: string
    description?: string
    repository_url: string
    language?: string
    stars: number
    forks: number
    open_issues: number
    owner?: string
    owner_avatar?: string
    status: 'active' | 'inactive'
    created_at: string
    updated_at: string
}

export type LinkType = {
    active: boolean
    label: string
    url: string | null
}

export type MetaType = {
    current_page: number
    from: number
    last_page: number
    links: LinkType[]
}

export type LinksType = {
    first: string
    last: string
    prev: string
    next: string
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        admin: Admin
        user: User
    }
    ziggy: Config & { location: string }
}

export type ComboboxData = {
    value: string
    label: string
}

export interface SelectOption {
    value: string | number;
    label: string;
}
