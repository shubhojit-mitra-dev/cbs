import { AppSidebar } from "~/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb"
import { Separator } from "~/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar"
import { NavUser } from "~/components/nav-user"

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
      <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex bg-inherit h-16 shrink-0 items-center gap-2 border-b px-4 justify-between sticky top-0">
          <SidebarTrigger className="-ml-1" />
          {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}
          {/* <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb> */}
          <div className="">
            <NavUser />
          </div>
        </header>
        <div className="flex flex-1 p-4">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
