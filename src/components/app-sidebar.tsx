"use client"

import * as React from "react"

// import { SearchForm } from "~/components/search-form"
// import { VersionSwitcher } from "~/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail
} from "~/components/ui/sidebar"

import Image from "next/image"
import Link from "next/link"
import cbsLogo from "~/assets/cbs-logo.png"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const currentPath = usePathname();

  const menu = [
    { title: "Overview", url: "/dashboard", isActive: currentPath === "/dashboard" },
    { title: "My Blogs", url: "/dashboard/my-blogs", isActive: currentPath === "/dashboard/my-blogs" },
    { title: "Social Accounts", url: "/dashboard/social-accounts", isActive: currentPath === "/dashboard/social-accounts" },
    // { title: "Queue", url: "/dashboard/queue", isActive: currentPath === "/dashboard/queue" },
  ]

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link href="/dashboard">
          <Image src={cbsLogo} alt="CBS" width={449} height={212} className="m-auto max-w-24" />
        </Link>
        {/* <SearchForm /> */}
      </SidebarHeader>
      <SidebarContent className="mt-12">
        <SidebarMenu>
          {menu.map((item) => ((
            <SidebarMenuItem key={item.title}>
              <Button asChild variant={item.isActive ? "default" : "ghost"} className="w-full mt-1 justify-start rounded-none">
                <Link href={item.url}>{item.title}</Link>
              </Button>
            </SidebarMenuItem>
          )))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
