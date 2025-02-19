import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main className=" bg-body-background min-h-[100dvh]">
          <Navbar />
          <div>{children}</div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
