import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string, name?: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const STORAGE_KEY = 'aetheria-auth-user';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window === 'undefined') return null;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) as User : null;
  });

  useEffect(() => {
    if (!user) {
      window.localStorage.removeItem(STORAGE_KEY);
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }, [user]);

  const login = (email: string, password: string, name?: string) => {
    const normalizedEmail = email.trim().toLowerCase();
    setUser({
      name: name?.trim() || normalizedEmail.split('@')[0] || 'Seller',
      email: normalizedEmail,
    });
  };

  const logout = () => {
    setUser(null);
  };

  const value = useMemo(
    () => ({ user, login, logout, isAuthenticated: Boolean(user) }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
}
