import { Button } from "./button";
import { useTheme } from "@/lib/provider/themeProvider";
import { FaMoon, FaSun } from "react-icons/fa6";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const theme = localStorage.getItem("vite-ui-theme");

  return (
    <Button
      size="icon"
      className="bg-transparent p-0 hover:cursor-pointer hover:bg-transparent"
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
    >
      {theme === "light" ? (
        <FaSun color="#ffc106" />
      ) : (
        <FaMoon color="#ffc106"  />
      )}
    </Button>
  );
}