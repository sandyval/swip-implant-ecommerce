'use client';

import { useEffect } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

export default function ValidarAutenticidadPage() {
    useEffect(() => {
        const selectors = '.reveal, .reveal-left, .reveal-right';
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        document.querySelectorAll<HTMLElement>(selectors).forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('visible');
            } else {
                observer.observe(el);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="bg-gray-950 text-white overflow-x-hidden mt-[60px]">

                {/* ── HERO — two columns ── */}
                <section className="bg-background relative min-h-screen px-4 py-8 overflow-hidden">
                    <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-10 lg:gap-16 min-h-[calc(100vh-128px)]">
                        {/* LEFT — Video */}
                        <div className="w-full lg:w-1/2 reveal-left">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-green-500/10 border border-white/10">
                                <div className="scanline" />
                                <video
                                    className="w-full h-auto block"
                                    src="https://mmcbv4.b-cdn.net/implant-labs/src/uv_validation.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                />
                                <span className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-green-600 rounded-tl" />
                                <span className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-green-600 rounded-tr" />
                                <span className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-green-600 rounded-bl" />
                                <span className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-green-600 rounded-br" />
                            </div>
                        </div>

                        {/* RIGHT — Info */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center">

                            {/* Shield badge */}
                            <div className="shield-animate flex flex-col items-start mb-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="badge-glow w-14 h-14 rounded-full bg-green-500/10 border-2 border-green-500 flex items-center justify-center shrink-0">
                                        <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                        </svg>
                                    </div>
                                    <span className="text-green-600 text-xs font-semibold tracking-widest uppercase">Sistema de Verificación Oficial</span>
                                </div>
                            </div>

                            {/* Headline */}
                            <h1 className="text-2xl md:text-5xl font-black text-foreground leading-tight mb-4 reveal">
                                Valida la <span className="text-green-600">Autenticidad</span><br />
                                de tu Producto
                            </h1>

                            {/* Description */}
                            <div className="mb-5 text-foreground text-base md:text-lg leading-relaxed reveal delay-100">
                                Ahora mejoramos nuestro candado de seguridad <strong className="text-bold">ÚNICO y EXCLUSIVO</strong>, el cual permitirá ser 100% efectivos en validar la Autenticidad de su producto y evitar adquiera un producto <b className="text-red-400">FALSO, PIRATA o CLON</b>
                            </div>

                            <p className="text-base font-semibold text-green-600 mb-8 reveal delay-200">
                                <strong>¡Nuevo QR Holográfico con autenticación de dos pasos!</strong>
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-3 reveal delay-300">
                                <div className="bg-white/5 border border-border rounded-xl p-4 text-center">
                                    <div className="text-2xl font-black text-green-600 mb-1">100%</div>
                                    <div className="text-xs text-foreground uppercase tracking-wide">Verificación segura</div>
                                </div>
                                <div className="bg-white/5 border border-border rounded-xl p-4 text-center">
                                    <div className="text-2xl font-black text-green-600 mb-1">2FA</div>
                                    <div className="text-xs text-foreground uppercase tracking-wide">Doble autenticación</div>
                                </div>
                                <div className="bg-white/5 border border-border rounded-xl p-4 text-center">
                                    <div className="text-2xl font-black text-green-600 mb-1">24/7</div>
                                    <div className="text-xs text-foreground uppercase tracking-wide">Disponible siempre</div>
                                </div>
                            </div>
                            <div className="container mx-auto max-w-4xl">
                                <div className="flex flex-col gap-6 mx-auto">

                                    {/* Iframe validator */}
                                    <div className="w-full border border-border bg-background p-6 rounded-xl mt-4 mb-4">
                                        <div className="flex flex-col justify-center">
                                            <div className="relative reveal-left">
                                                <img
                                                    className="w-1/2 rounded-xl block mx-auto"
                                                    alt="Holograma horizontal"
                                                    src="https://mmcb.b-cdn.net/media/attachments/4/d/2/8/cdc69b4c903d5f9a5c2c9a64b250fa87f038cc06ad4e2b8ad5b8915098b0/qr-validate.png"
                                                />
                                                <div className="shimmer-overlay" />
                                            </div>
                                            <iframe
                                                className="embed-responsive-item w-full"
                                                style={{ minHeight: '160px', border: 0 }}
                                                src="https://truster.divasy.io?project=6c54f55a-6422-4ecf-a2ed-9e9545869df7&lang=es&old=true"
                                                frameBorder={0}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ── ALERT ── */}
                <section className="bg-background border-t dark:bg-red-950  bg-red-50 py-14 px-4">
                    <div className="container mx-auto max-w-3xl text-center">
                        <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                            </svg>
                            Advertencia de seguridad
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black mb-4 text-foreground">
                            ¡Cuidado con productos <span className="text-red-400">FALSOS</span>!
                        </h3>
                        <p className="text-foreground mb-6 leading-relaxed">
                            Hemos detectado sitios web falsos y cuentas no autorizadas que intentan clonar nuestra plataforma y vender réplicas de los productos de Implant Labs. Las falsificaciones <strong className="text-foreground">no cuentan con los estándares de calidad laboratoriales</strong> y pueden poner en grave riesgo la salud de tu ganado.
                        </p>
                        <div className="bg-background border border-border rounded-xl p-4 text-sm text-left space-y-2  delay-200">
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                <span className="text-foreground"><strong className="text-foreground">Sitio Web Oficial:</strong> https://www.implantlabs-alfa.com/</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                <span className="text-foreground">Compra exclusivamente a través de canales verificados</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                <span className="text-foreground">No nos hacemos responsables por productos adquiridos fuera de esta plataforma</span>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}
