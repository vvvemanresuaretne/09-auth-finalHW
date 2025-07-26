"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, [router]);
  return <>{children}</>;
};

export default AuthLayout;
