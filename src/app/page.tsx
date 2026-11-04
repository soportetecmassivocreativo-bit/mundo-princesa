"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./page.module.css";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.fromTo(
        ".hero-element",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      );

      // Dashboard Cards Stagger Animation
      gsap.fromTo(
        ".stat-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: dashboardRef.current,
            start: "top 70%",
          },
        }
      );

      // Balance Banner Animation
      gsap.fromTo(
        ".balance-banner",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".balance-banner",
            start: "top 80%",
          },
        }
      );

      // Showcase Cards Animation
      gsap.fromTo(
        ".showcase-card",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: showcaseRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Mundo Princesa Logo" width={180} height={60} style={{ objectFit: 'contain' }} priority />
        </div>
        <ul className={styles.navLinks}>
          <li className={styles.navLink}>Dashboard</li>
          <li className={styles.navLink}>Servicios</li>
          <li className={styles.navLink}>Productos</li>
          <li className={styles.navLink}>Configuración</li>
        </ul>
        <div className={styles.navActions}>
          <button className={styles.btnPrimary}>Cerrar Sesión</button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className={styles.hero} ref={heroRef}>
          <div className={styles.heroContent}>
            <h1 className={`${styles.heroTitle} hero-element`}>
              Resumen financiero completo de tu empresa
            </h1>
            <p className={`${styles.heroSubtitle} hero-element`}>
              Controla los ingresos, gastos y el flujo de efectivo con el toque premium que Mundo Princesa merece.
            </p>
            <button className={`${styles.btnPrimary} hero-element`}>Ver Reporte Detallado</button>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className={styles.dashboard} ref={dashboardRef}>
          <div className={styles.statsGrid}>
            {/* Card 1 */}
            <div className={`${styles.statCard} ${styles.greenCard} stat-card`}>
              <div className={styles.statHeader}>
                <div className={styles.statIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                </div>
                <span className={styles.statBadge}>Sin registros</span>
              </div>
              <div className={styles.statValue}>$0,00</div>
              <div className={styles.statLabel}>Facturas Totales</div>
            </div>

            {/* Card 2 */}
            <div className={`${styles.statCard} ${styles.redCard} stat-card`}>
              <div className={styles.statHeader}>
                <div className={styles.statIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg>
                </div>
                <span className={styles.statBadge}>Sin registros</span>
              </div>
              <div className={styles.statValue}>$0,00</div>
              <div className={styles.statLabel}>Gastos Totales</div>
            </div>

            {/* Card 3 */}
            <div className={`${styles.statCard} ${styles.blueCard} stat-card`}>
              <div className={styles.statHeader}>
                <div className={styles.statIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
                </div>
                <span className={styles.statBadge}>3 pendientes</span>
              </div>
              <div className={styles.statValue}>$0,00</div>
              <div className={styles.statLabel}>Nómina Pagada</div>
            </div>

            {/* Card 4 */}
            <div className={`${styles.statCard} ${styles.purpleCard} stat-card`}>
              <div className={styles.statHeader}>
                <div className={styles.statIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <span className={styles.statBadge}>3 total</span>
              </div>
              <div className={styles.statValue}>2</div>
              <div className={styles.statLabel}>Personal Activo</div>
            </div>
          </div>

          <div className={`${styles.balanceBanner} balance-banner`}>
            <div>
              <div className={styles.balanceLabel}>Balance Bancario</div>
              <div className={styles.balanceAmount}>$0,00</div>
              <div className={styles.balanceChange}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                +0.0% comparado con el mes anterior
              </div>
            </div>
            <div className={styles.balanceStats}>
              <div className={styles.balanceStatItem}>
                <div className={styles.balanceStatLabel}>Facturas</div>
                <div className={styles.balanceStatValue}>$0</div>
              </div>
              <div className={styles.balanceStatItem}>
                <div className={styles.balanceStatLabel}>Egresos</div>
                <div className={styles.balanceStatValue}>$0</div>
              </div>
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section className={styles.showcase} ref={showcaseRef}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Colecciones Premium</h2>
            <p className={styles.sectionSubtitle}>Explora nuestros últimos lanzamientos</p>
          </div>
          <div className={styles.showcaseGrid}>
            <div className={`${styles.showcaseCard} showcase-card`}>
              <div className={styles.showcaseImg} style={{ background: 'linear-gradient(135deg, #fce4e4, #f8b4b4)' }}></div>
              <div className={styles.showcaseContent}>
                <h3 className={styles.showcaseTitle}>Glow Like Never Before</h3>
                <p className={styles.showcaseDesc}>Tratamientos faciales rejuvenecedores.</p>
              </div>
            </div>
            <div className={`${styles.showcaseCard} showcase-card`}>
              <div className={styles.showcaseImg} style={{ background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)' }}></div>
              <div className={styles.showcaseContent}>
                <h3 className={styles.showcaseTitle}>Spring Beauty Sale</h3>
                <p className={styles.showcaseDesc}>Hasta 40% de descuento en seleccionados.</p>
              </div>
            </div>
            <div className={`${styles.showcaseCard} showcase-card`}>
              <div className={styles.showcaseImg} style={{ background: 'linear-gradient(135deg, #f3e5f5, #e1bee7)' }}></div>
              <div className={styles.showcaseContent}>
                <h3 className={styles.showcaseTitle}>Featured Product</h3>
                <p className={styles.showcaseDesc}>Descubre la nueva línea de cosméticos.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerLogo}>Mundo Princesa</div>
        <p className={styles.footerText}>© {new Date().getFullYear()} Mundo Princesa Inc. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
