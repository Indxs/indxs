import * as React from 'react'
import { BookOpen, Bot, Gauge, Settings2, SquareTerminal } from 'lucide-react'

import { NavMain } from '@/components/nav-main'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from '@/components/ui/sidebar'
import { Link, usePage } from '@inertiajs/react'
import { NavAdmin } from '@/components/nav-admin'

// This is sample data.
const data = {
    navMain: [
        {
            title: 'Dashboard',
            url: route('dashboard'),
            route: 'dashboard',
            icon: Gauge,
            isActive: route().current('dashboard'),
        },
        {
            title: 'Playground',
            url: '#',
            icon: SquareTerminal,
            isActive: false,
            items: [
                {
                    title: 'History',
                    url: '#',
                },
                {
                    title: 'Starred',
                    url: '#',
                },
                {
                    title: 'Settings',
                    url: '#',
                },
            ],
        },
        {
            title: 'Models',
            url: '#',
            icon: Bot,
            items: [
                {
                    title: 'Genesis',
                    url: '#',
                },
                {
                    title: 'Explorer',
                    url: '#',
                },
                {
                    title: 'Quantum',
                    url: '#',
                },
            ],
        },
        {
            title: 'Documentation',
            url: '#',
            icon: BookOpen,
            items: [
                {
                    title: 'Introduction',
                    url: '#',
                },
                {
                    title: 'Get Started',
                    url: '#',
                },
                {
                    title: 'Tutorials',
                    url: '#',
                },
                {
                    title: 'Changelog',
                    url: '#',
                },
            ],
        },
        {
            title: 'Settings',
            url: '#',
            icon: Settings2,
            items: [
                {
                    title: 'General',
                    url: '#',
                },
                {
                    title: 'Team',
                    url: '#',
                },
                {
                    title: 'Billing',
                    url: '#',
                },
                {
                    title: 'Limits',
                    url: '#',
                },
            ],
        },
    ],
}

export function AdminSidebar({
    ...props
}: React.ComponentProps<typeof Sidebar>) {
    const admin = usePage().props.auth.admin
    return (
        <Sidebar
            collapsible="offcanvas"
            {...props}
        >
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            size="lg"
                            asChild
                        >
                            <Link
                                href={route('homepage')}
                                target="_blank"
                            >
                                <div className="flex flex-col gap-0.5 leading-none">
                                    <img
                                        className="w-3/4"
                                        src={asset(
                                            'assets/images/Indxs-logo.png',
                                        )}
                                        alt=""
                                    />
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavAdmin admin={admin} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
