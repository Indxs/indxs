import {
    Dispatch,
    SetStateAction,
    useCallback,
    useEffect, useRef,
    useState,
} from 'react'
import { Category, Package } from '@/types'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import axios from 'axios'
import lodash from 'lodash'

interface HeroProps {
    categories: Category[]
    setPackagesData: Dispatch<SetStateAction<Package[]>>
    packagesRef: React.RefObject<HTMLDivElement>
}

export default function HeroSection({
    categories,
    setPackagesData,
    packagesRef,
}: HeroProps) {
    const [search, setSearch] = useState('')
    const searchElement = useRef<HTMLInputElement | null>(null)

    const fetchResults = useCallback(
        lodash.debounce(async (searchTerm: string) => {
            try {
                const response = await axios.get(route('search'), {
                    params: { term: searchTerm },
                })
                setPackagesData(response.data)

                if (window.innerWidth < 768 && packagesRef?.current && searchTerm) {
                    packagesRef.current.scrollIntoView({
                        behavior: 'smooth',
                    })

                    searchElement.current?.blur();
                }
            } catch (error) {
                console.error(error)
            }
        }, 300),
        [],
    )

    useEffect(() => {
        if (search.trim()) {
            fetchResults(search);
        }
    }, [search, fetchResults])

    return (
        <section className="bg-muted/50 py-24 pt-48 text-center">
            <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-6xl font-extrabold text-transparent">
                Explore & Discover Open-Source Packages
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
                Your go-to index for Laravel, PHP, and various open-source
                development tools.
            </p>
            {/* Categories */}
            <div className="mx-auto mt-8 flex max-w-7xl flex-wrap justify-center gap-4 px-6">
                {categories.map((category) => (
                    <span
                        key={category.id}
                        className="rounded-lg bg-muted px-4 py-2 text-muted-foreground shadow-sm"
                    >
                        {category.name}
                    </span>
                ))}
            </div>
            {/* Search Bar */}
            <div className="mx-auto mt-10 w-full max-w-6xl px-6">
                <div className="relative flex h-20 w-full items-center rounded-xl bg-card px-6 shadow-lg">
                    <Search
                        className="text-muted-foreground"
                        size={28}
                    />
                    <Input
                        type="text"
                        placeholder="Search packages..."
                        ref={searchElement}
                        className="h-full w-full !border-none bg-transparent pl-4 text-lg !outline-none !ring-0 hover:!border-none hover:!outline-none hover:!ring-0 focus:!border-none focus:!outline-none focus:!ring-0 active:!ring-0"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
        </section>
    )
}
