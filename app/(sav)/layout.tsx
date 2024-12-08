import { AuthProvider } from '@/lib/auth';
import { withAuth } from '@/lib/auth';

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-background">
        {children}
      </div>
    </AuthProvider>
  );
}

export default withAuth(AdminLayout);
