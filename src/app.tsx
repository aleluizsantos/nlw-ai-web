import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "./components/header";
import { Aside } from "./components/aside";
import { Section } from "./components/section";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-6 flex gap-6">
          <Section />
          <Aside />
        </main>
      </div>
    </ThemeProvider>
  );
}
