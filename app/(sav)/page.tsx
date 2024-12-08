import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { 
  BookOpen, 
  Image, 
  Settings,
  Users
} from "lucide-react";

const adminModules = [
  {
    title: "Blog Posts",
    description: "Manage blog posts and articles",
    icon: BookOpen,
    href: "/blog"
  },
  {
    title: "Portfolio",
    description: "Manage portfolio projects",
    icon: Image,
    href: "/portfolio"
  },
  {
    title: "Partner Applications",
    description: "Review and manage partner applications",
    icon: Users,
    href: "/partners"
  },
  {
    title: "Settings",
    description: "Configure website settings",
    icon: Settings,
    href: "/settings"
  }
];

export default function AdminDashboard() {
  return (
    <Container>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminModules.map((module) => {
            const Icon = module.icon;
            return (
              <Link key={module.href} href={module.href}>
                <Card className="p-6 hover:bg-accent transition-colors cursor-pointer">
                  <div className="space-y-4">
                    <Icon className="w-8 h-8" />
                    <div>
                      <h2 className="text-xl font-semibold">{module.title}</h2>
                      <p className="text-muted-foreground">{module.description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
