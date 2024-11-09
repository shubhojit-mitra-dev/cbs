import * as React from "react"

// import { SearchForm } from "~/components/search-form"
// import { VersionSwitcher } from "~/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "~/components/ui/sidebar"

import Link from "next/link"
import Image from "next/image"
import cbsLogo from "~/assets/cbs-logo.png"


const data = {
  navMain: [
    {
      title: "My Dashboard",
      urls: "#",
      isActive: true,
      items: [
        { title: "Overview", url: "/dashboard", isActive: false },
        { title: "My Blogs", url: "/dashboard/my-blogs", isActive: false },
        { title: "Social Accounts", url: "/dashboard/social-accounts", isActive: false },
        { title: "Queue", url: "/dashboard/queue", isActive: false },
      ],
    }
    
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        {/* <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        /> */}
        <a href="#" className="">
          <Image src={cbsLogo} alt="CBS" className="w-32 h-32 m-auto" />
        </a>
        {/* <SearchForm /> */}
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <Link className="mt-2" href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
