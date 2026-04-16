"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();


  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <span className="loading loading-spinner loading-xl"></span>
    </div>
  );
}