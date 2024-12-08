import { createContext, useContext, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();

  // TODO: Replace with proper auth logic
  const isAuthenticated = typeof window !== 'undefined' && !!localStorage.getItem('auth_token');

  const login = (token: string) => {
    localStorage.setItem('auth_token', token);
    router.refresh();
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function withAuth<P extends object>(Component: React.ComponentType<P>) {
  return function ProtectedRoute(props: P) {
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    if (typeof window !== 'undefined' && !isAuthenticated) {
      router.replace('/login');
      return null;
    }

    return <Component {...props} />;
  };
}
