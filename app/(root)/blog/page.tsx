import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/common/page-header";
import BlogClient from "./blog-client";

export const metadata: Metadata = {
  title: "Blog & Artikel | SAV Design Studio",
  description: "Temukan artikel dan inspirasi seputar desain interior untuk ruangan Anda.",
  openGraph: {
    title: "Blog & Artikel | SAV Design Studio",
    description: "Temukan artikel dan inspirasi seputar desain interior untuk ruangan Anda.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <Container>
      <PageHeader
        heading="Blog & Artikel"
        subheading="Inspirasi Desain Interior"
        text="Temukan artikel menarik dan inspirasi desain interior untuk mempercantik ruangan Anda."
      />
      <BlogClient />
    </Container>
  );
}
