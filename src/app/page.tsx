
"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

            <Hero
              headline="Tu Sitio Web Vende Más"
              subheadline="Creamos y rediseñamos sitios web enfocados en maximizar tus ventas online, con herramientas inteligentes y optimización profesional."
              cta1="Empieza Gratis"
            />

            <How
              step1Title="Consulta Inicial"
              step1Desc="Agenda una llamada para discutir tus necesidades."
              step2Title="Creación a Medida"
              step2Desc="Diseñamos tu sitio enfocado en conversiones."
              step3Title="Optimización Continua"
              step3Desc="Mejoramos tu sitio basándonos en resultados reales."
            />

            <Aboutus
              headline="Transforma tu presencia online con [companyName]"
              subheadline="Descripción"
              beneficio1="Inicio sin costos"
              beneficio2="Lanzamos tu sitio con una plataforma inicial gratuita, perfecta para nuevos emprendedores."
              beneficiotitulo1="Rediseño inteligente"
              beneficiotitulo2="Reestructuramos sitios existentes para enfocarlos en la funcionalidad y ventas, no solo en la estética."
            />

            <Services
              heading="Acelera Tus Ventas Online"
              description="Sitios web inicialmente gratuitos y rediseños orientados a maximizar ventas, no solo estética."
              services={[{"name":"Diseño Web a Medida","icon":"custom-design","description":"Sitios creados para convertir visitas en ventas."},{"name":"Plataforma Gratuita","icon":"free-platform","description":"Arranca sin costos con tecnología de punta."},{"name":"Optimización de Conversión","icon":"optimization","description":"Mejoras continuas basadas en análisis de datos."}]}
            />
<BeforeAndAfter />

            <Faq
              faqs={[]}
            />

            <BookAppointment
              heading="¿Tu negocio online no despega por un sitio web ineficiente?"
              description="Hablemos hoy y transformemos tu presencia online con un diseño que realmente vende."
            />
<Footer />
    </main>
  );
}
    