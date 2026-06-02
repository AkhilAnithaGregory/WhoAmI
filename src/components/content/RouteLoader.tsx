import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import loadingAnimation from "../../../public/json/loading.json";
import Lottie from "lottie-react";

export default function RouteLoader() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const previousPath = useRef(pathname);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (previousPath.current === pathname) return;

    previousPath.current = pathname;

    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed h-screen w-screen inset-0 z-9999 flex items-center justify-center bg-linear-to-r from-blue-500 via-blue-400 to-purple-500 animate-gradient">
        
      <div className="sm:w-96 sm:h-96">
        <Lottie animationData={loadingAnimation} />
      </div>
    </div>
  );
}
