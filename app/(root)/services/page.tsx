import { Metadata } from "next";
import { ServiceList } from "@/components/pages/services/components/ServiceList";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/common/page-header";

export const metadata: Metadata = {
  title: "Layanan Interior Design | SAV Design Studio",
  description: "Temukan berbagai layanan desain interior profesional untuk rumah, kantor, dan ruang komersial Anda.",
};

export default function ServicesPage() {
  return (
    <>
      <Container>
        <PageHeader
          heading="Layanan Interior Design"
          subheading="Solusi desain interior profesional untuk setiap ruangan"
          text="Kami menyediakan berbagai layanan desain interior yang dapat disesuaikan dengan kebutuhan dan budget Anda. Dari konsultasi awal hingga implementasi, tim kami siap membantu mewujudkan ruangan impian Anda."
        />
        <ServiceList />
      </Container>
    </>
  );
}
