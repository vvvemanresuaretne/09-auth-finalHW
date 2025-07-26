"use client";

import { checkSession, getMe } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const setUser = useAuthStore((state) => state.setUser);
  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated
  );

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const isAuthenticated = await checkSession();
        if (isAuthenticated.success) {
          const user = await getMe();
          if (user) setUser(user);
        } else {
          clearIsAuthenticated();
        }
      } catch (error) {
        clearIsAuthenticated();
        console.error("Auth check failed:", error);
      }
    };
    fetchUser();
  }, [setUser, clearIsAuthenticated]);

  return children;
};

export default AuthProvider;
