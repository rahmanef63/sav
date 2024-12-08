import {AdminBlogs} from '@/components/pages/admin/blogs'
import {AdminPartnerApplications} from '@/components/pages/admin/partner-applications'
import {AdminPortfolios} from '@/components/pages/admin/portfolios'

export default function AdminPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="container mx-auto space-y-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        <div className="grid gap-8">
          <AdminBlogs />
          <AdminPartnerApplications />
          <AdminPortfolios />
        </div>
      </div>
    </main>
  )
}
