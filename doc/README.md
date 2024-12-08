### Dokumentasi Lengkap untuk Website SAV Atelier

#### **Tujuan Website**

- Menyediakan informasi tentang layanan interior desain yang ditawarkan oleh SAV Atelier.
- Menampilkan portofolio proyek desain untuk menarik klien potensial.
- Mempermudah klien untuk mengajukan konsultasi atau pemesanan layanan.
- Meningkatkan citra profesional SAV Atelier melalui desain web yang modern dan fungsional.

---

#### **Fitur Utama**

1. **Halaman Beranda (Landing Page):**

   - Deskripsi singkat tentang SAV Atelier.
   - Call-to-action (CTA) seperti “Lihat Portofolio” atau “Ajukan Konsultasi.”
   - Highlight proyek unggulan atau testimoni klien.

2. **Portofolio:**

   - Galeri gambar proyek desain sebelumnya.
   - Filter berdasarkan kategori (residensial, komersial, dll).
   - Detail proyek seperti deskripsi, lokasi, tahun, dan foto.

3. **Layanan:**

   - Daftar layanan interior desain.
   - Penjelasan tiap layanan.
   - Estimasi harga atau opsi “Ajukan Penawaran.”

4. **Tentang Kami:**

   - Profil SAV Atelier.
   - Visi, misi, dan nilai perusahaan.
   - Tim desainer utama dengan foto dan deskripsi singkat.

5. **Blog/Artikel:**

   - Tips desain interior.
   - Tren terbaru dalam desain.
   - Konten edukatif untuk menarik pengunjung.

6. **Form Konsultasi:**

   - Formulir untuk klien yang ingin mengajukan konsultasi desain.
   - Input seperti nama, email, deskripsi kebutuhan, dan anggaran.

7. **Kontak:**

   - Informasi kontak (email, telepon, alamat kantor).
   - Google Maps integrasi untuk lokasi.
   - Form kontak.

8. **Admin Dashboard (Opsional):**

   - Mengelola konten portofolio.
   - Menambahkan artikel blog.
   - Melihat dan merespons formulir konsultasi klien.

---

#### **Teknologi yang Digunakan**

1. **Frontend:**

   - Framework: Next.js (versi terbaru).
   - CSS: Tailwind CSS.
   - Komponen UI: ShadCN/UI Libraries.

2. **Backend:**

   - Server: Node.js.
   - Database: PostgreSQL untuk data terstruktur.
   - Media Storage: AWS S3 untuk gambar dan file.

3. **Deployment:**

   - Hosting: VPS atau layanan seperti Vercel.
   - CDN: Cloudflare untuk kecepatan akses.

4. **Integrasi Tambahan:**

   - Email: Nodemailer untuk notifikasi.
   - API: Stripe/PayPal untuk pembayaran.
   - Analytics: Google Analytics untuk pelacakan data pengunjung.

---

#### **Struktur Database**

1. **Tabel “Users”**

   - id (primary key)
   - name
   - email
   - role (admin, client)

2. **Tabel “Projects”**

   - id (primary key)
   - name
   - description
   - category
   - clientId (foreign key ke “Users”)

3. **Tabel “Services”**

   - id (primary key)
   - name
   - description
   - price\_estimate

4. **Tabel “Consultations”**

   - id (primary key)
   - clientId (foreign key ke “Users”)
   - description
   - budget
   - status

5. **Tabel “BlogPosts”**

   - id (primary key)
   - title
   - content
   - createdAt
   - authorId (foreign key ke “Users”)

---

#### **Alur Kerja**

1. **Pengguna:**

   - Mengunjungi situs, melihat layanan, portofolio, atau membaca blog.
   - Mengisi formulir konsultasi jika tertarik.

2. **Admin:**

   - Meninjau permintaan konsultasi.
   - Menambahkan/memodifikasi portofolio dan artikel.

3. **Sistem:**

   - Memproses data dari formulir.
   - Menyimpan data klien di database.
   - Mengirimkan notifikasi email otomatis.

---

#### **Wireframe Sederhana**

1. **Landing Page:**

   - Header: Logo, menu navigasi, CTA.
   - Hero Section: Gambar besar dengan teks.
   - Proyek unggulan.
   - Footer: Kontak, link media sosial, copyright.

2. **Portofolio Page:**

   - Grid layout untuk gambar proyek.
   - Sidebar filter kategori.

3. **Form Konsultasi:**

   - Input form: nama, email, kebutuhan desain, anggaran.
   - Tombol submit dengan validasi input.

---

#### **Diagram yang Akan Dibuat**

1. **Flow Chart:**

   1. Website Deployment Architecture:

      ```
      // Best Practice Diagram for SAV Atelier Website

// Nodes and groups
SystemFlow [shape: rectangle, icon:file-text, label: "SAV Atelier Website System"]

Pages [color: blue, label: "Halaman Frontend (Next.js)"] {
  LandingPage [shape: rectangle, icon:home, color:blue, label:"Beranda"]
  AboutPage [shape: rectangle, icon:info, color:blue, label:"Tentang Kami"]
  ServicesPage [shape: rectangle, icon:list, color:blue, label:"Layanan Interior"]
  PortfolioPage [shape: rectangle, icon:gallery, color:blue, label:"Portofolio"]
  PartnerPage [shape: rectangle, icon:user-plus, color:blue, label:"Pendaftaran Mitra"]
  BlogPage [shape: rectangle, icon:file-text, color:blue, label:"Blog"]
  ConsultationForm [shape: rectangle, icon:form, color:blue, label:"Form Konsultasi"]
  ContactPage [shape: rectangle, icon:mail, color:blue, label:"Kontak"]
  AdminDashboard [shape: rectangle, icon:tool, color:blue, label:"Admin Dashboard"]
}

Processes [color: green, label: "Proses Backend (Node.js)"] {
  SubmitApplication [shape: diamond, icon:form, color:green, label:"Ajukan Pendaftaran Mitra"]
  ReviewApplication [shape: oval, icon:check-circle, color:green, label:"Tinjau Pendaftaran Mitra"]
  UploadPortfolio [shape: diamond, icon:upload, color:green, label:"Unggah Portofolio Mitra"]
  WriteBlogPost [shape: diamond, icon:pencil, color:green, label:"Tulis Artikel Blog"]
  ModerateContent [shape: oval, icon:shield, color:green, label:"Moderasikan Konten (Admin)"]
  SubmitConsultation [shape: diamond, icon:send, color:green, label:"Kirim Permintaan Konsultasi"]
}

DataStorage [color: purple, label: "Penyimpanan Data (PostgreSQL)"] {
  Users [shape: cylinder, icon:database, color:purple, label:"Tabel Users (Admin/Mitra/Klien)"]
  Applications [shape: cylinder, icon:database, color:purple, label:"Tabel Applications (Status Mitra)"]
  Portfolios [shape: cylinder, icon:database, color:purple, label:"Tabel Portfolios (Proyek)"]
  Categories [shape: cylinder, icon:list, color:purple, label:"Tabel Categories (Kategori Portofolio)"]
  BlogPosts [shape: cylinder, icon:database, color:purple, label:"Tabel BlogPosts (Artikel Desain)"]
}

// Relationships

// Alur Pengunjung Umum
SystemFlow > LandingPage
LandingPage > AboutPage
LandingPage > ServicesPage
LandingPage > PortfolioPage
LandingPage > BlogPage
LandingPage > ConsultationForm
LandingPage > ContactPage
LandingPage > PartnerPage

// Alur Pendaftaran Mitra
PartnerPage > SubmitApplication
SubmitApplication > Applications
Applications > ReviewApplication
ReviewApplication > AdminDashboard
ReviewApplication > PartnerPage: "Diterima (Mitra Resmi)"
AdminDashboard > PortfolioPage
PortfolioPage > UploadPortfolio
UploadPortfolio > Portfolios
Portfolios > Categories

// Alur Blog
AdminDashboard > BlogPage
BlogPage > WriteBlogPost
WriteBlogPost > BlogPosts

// Alur Konsultasi
ConsultationForm > SubmitConsultation
SubmitConsultation > Users: "Data Klien (role=klien)"
// Jika diperlukan, admin dapat menindaklanjuti di AdminDashboard

// Moderasi Konten
AdminDashboard > ModerateContent
ModerateContent > Applications: "Tinjau & Setujui/Tolak Mitra"
ModerateContent > Portfolios: "Validasi Portofolio"
ModerateContent > BlogPosts: "Validasi Artikel Blog"

// Diagram ini menampilkan:
// - Halaman depan hingga halaman spesifik (Tentang Kami, Layanan, Portofolio, Blog, Kontak)
// - Proses pendaftaran mitra dari submit, review hingga diterima, kemudian mengunggah portofolio
// - Alur penulisan blog oleh mitra melalui AdminDashboard
// - Pengajuan konsultasi oleh klien
// - Moderasi konten oleh admin
// - Penyimpanan data terstruktur dalam tabel database
// - Label, warna, dan ikon yang memudahkan pemahaman

      ```

   2. CMS Architecture: Diagram untuk sistem:

      ```
      // Nodes and groups
      CMS Architecture [shape: oval, icon: server]

      Frontend [color: blue] {
        Website [icon: monitor, color: blue]
        Admin Dashboard [icon: tool, color: blue]
      }

      Backend [color: green] {
        API Gateway [icon: aws-api-gateway, color: green]
        Auth Service [shape: diamond, icon: lock]
        CMS Logic [icon: database]
      }

      Storage [color: purple] {
        MediaStorage [icon: folder, color: purple]
        Database [icon: database]
      }

      Notifications [color: yellow] {
        EmailService [icon: mail, color: yellow]
        PushNotification [icon: bell, color: yellow]
      }

      // Relationships
      Frontend > API Gateway
      API Gateway > Auth Service
      API Gateway > CMS Logic
      CMS Logic > MediaStorage
      CMS Logic > Database
      CMS Logic > EmailService
      CMS Logic > PushNotification
      ```

2. **Cloud Architecture:**

   1. Website Deployment Architecture & CMS Architecture::

      ```
      // Nodes and groups
      CMSArchitecture [shape: oval, icon: server]
      CloudDeployment [shape: oval, icon: cloud]

      Frontend [color: blue] {
        Website [icon: monitor, color: blue]
        AdminDashboard [icon: tool, color: blue]
      }

      Backend [color: green] {
        APIGateway [icon: aws-api-gateway, color: green]
        AuthService [shape: diamond, icon: lock]
        CMSLogic [icon: database]
      }

      Storage [color: purple] {
        MediaStorage [icon: folder, color: purple]
        RelationalDatabase [icon: database, color: purple]
      }

      Notifications [color: yellow] {
        EmailService [icon: mail, color: yellow]
        NotificationService [icon: bell, color: yellow]
      }

      // Relationships
      CloudDeployment > Website
      CloudDeployment > AdminDashboard
      CMSArchitecture > Website
      CMSArchitecture > AdminDashboard
      Website > APIGateway
      AdminDashboard > APIGateway
      APIGateway > AuthService
      APIGateway > CMSLogic
      CMSLogic > MediaStorage
      CMSLogic > RelationalDatabase
      CMSLogic > EmailService
      CMSLogic > NotificationService

      ```

   3. Entity Relationship Diagram (ERD):

   Hubungan antar tabel database untuk data pengguna, proyek, layanan, dan konsultasi.

   ```
   // Nodes and groups
   users [icon: user, color: blue] {
     id string pk
     name string
     email string
     role string
   }

   projects [icon: home, color: green] {
     id string pk
     name string
     description text
     category string
     clientId string fk
   }

   services [icon: list, color: purple] {
     id string pk
     name string
     description text
     price_estimate number
   }

   consultations [icon: form, color: orange] {
     id string pk
     clientId string fk
     description text
     budget number
     status string
   }

   blog_posts [icon: file-text, color: yellow] {
     id string pk
     title string
     content text
     createdAt timestamp
     authorId string fk
   }

   // Relationships
   users.id <> projects.clientId
   users.id <> consultations.clientId
   users.id <> blog_posts.authorId
   projects.id > services.id

   ```

   4. Sequence Diagram:

   Proses login pengguna dan pemesanan layanan.

   1. something\`\`\`

      ```
      // Sequence Diagram - Login Proses
      Client [icon: monitor, color: blue]
      Server [icon: server, color: green]
      AuthService [icon: lock, color: orange]

      Client > Server: Request Login
      activate Server
      Server > AuthService: Validate Credentials
      AuthService > Server: Success/Failure Response
      Server --> Client: Login Status
      deactivate Server

      ```

   2. Alur data untuk pengelolaan portofolio dari admin ke server.

      ```
      // Sequence Diagram - Portofolio Management
      AdminDashboard [icon: tool, color: blue]
      Server [icon: server, color: green]
      Database [icon: database, color: purple]
      MediaStorage [icon: folder, color: yellow]

      AdminDashboard > Server: Add/Update Portfolio Data
      activate Server
      Server > MediaStorage: Store Media Files
      Server > Database: Save Portfolio Metadata
      Database --> Server: Success Confirmation
      Server --> AdminDashboard: Success Response
      deactivate Server

      ```

&#x20;&#x20;

---

Dokumentasi ini dapat dijadikan acuan untuk mulai membuat diagram dan mengembangkan website SAV Atelier secara terstruktur dan efisien.
