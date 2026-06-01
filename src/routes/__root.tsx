import { createRootRoute, Outlet } from "@tanstack/react-router";
import "./__root.css";
import Header from "@/components/common/header";
import { ThemeProvider } from "@/lib/provider/themeProvider";
import { Footer } from "@/components/common/footer";

const RootLayout = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size-[60px_60px]" />
       <div className="fixed left-1/4 -z-10 top-1/4 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="fixed bottom-1/4 -z-10 right-1/4 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="max-w-7xl mx-auto p-2 space-y-5">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export const Route = createRootRoute({ component: RootLayout });
