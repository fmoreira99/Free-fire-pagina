import { Gamepad2, Gift, Star, Shield, AlertTriangle, Users, Sparkles, TrendingUp } from 'lucide-react';
import AdBanner, { NativeBanner } from '../AdBanner';

export default function ArticleRoblox() {
    return (
        <article className="max-w-4xl mx-auto">
            <header className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 text-[10px] font-bold tracking-widest rounded-full bg-gradient-to-r from-neon-blue to-blue-700 text-white font-[var(--font-display)]">METAVERSO</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm font-[var(--font-display)]">Actualizado Febrero 2026</span>
                </div>
                <h1 className="font-[var(--font-display)] text-3xl md:text-5xl font-black leading-tight mb-4">
                    <span className="text-shimmer">Roblox 2026:</span>{' '}
                    <span className="text-white">Códigos Activos, Mejores Experiencias y Guía de Robux Legítimos</span>
                </h1>
                <p className="text-lg text-gray-400 leading-relaxed mb-6">
                    La guía definitiva del metaverso de Roblox: todos los códigos promocionales vigentes, las experiencias más descargadas del año, y los únicos métodos seguros para obtener Robux sin caer en estafas.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2"><Gamepad2 size={14} className="text-neon-blue" /><span>Por <strong className="text-neon-blue">MetaverseExplorer</strong></span></div>
                    <span>•</span><span>16 min de lectura</span><span>•</span><span>203,450 visitas</span>
                </div>
            </header>

            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop" alt="Roblox Gaming" className="w-full h-64 md:h-80 object-cover rounded-2xl mb-10 border border-neon-blue/20" />

            <nav className="glass-card rounded-xl p-6 mb-10">
                <h2 className="font-[var(--font-display)] text-lg font-bold text-neon-blue mb-4 flex items-center gap-2"><Star size={18} /> Tabla de Contenidos</h2>
                <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                    <li className="hover:text-neon-blue transition-colors cursor-pointer">Roblox como Metaverso: Más que un Juego</li>
                    <li className="hover:text-neon-blue transition-colors cursor-pointer">Todos los Códigos Promocionales Activos</li>
                    <li className="hover:text-neon-blue transition-colors cursor-pointer">Códigos UGC y Ítems Gratuitos Limitados</li>
                    <li className="hover:text-neon-blue transition-colors cursor-pointer">Top 10 Experiencias Trending en 2026</li>
                    <li className="hover:text-neon-blue transition-colors cursor-pointer">Cómo Obtener Robux de Forma Legítima</li>
                    <li className="hover:text-neon-blue transition-colors cursor-pointer">Seguridad de Cuenta: Protégete de Estafas</li>
                    <li className="hover:text-neon-blue transition-colors cursor-pointer">Conclusión y Recursos</li>
                </ol>
            </nav>

            {/* Section 1 */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-blue-700 flex items-center justify-center text-sm font-bold">1</div>
                    Roblox como Metaverso: Más que un Juego
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    Roblox no es simplemente "un juego". En 2026, se ha consolidado como un <strong className="text-white">metaverso completo de experiencias</strong> donde la identidad digital del jugador es el activo más valioso. Con más de 70 millones de usuarios activos diarios y una economía interna que genera miles de millones de dólares anuales, Roblox ha trascendido el concepto de entretenimiento para convertirse en una plataforma de creatividad, socialización y emprendimiento digital.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                    Para los jugadores latinoamericanos, Roblox representa una oportunidad única: la <strong className="text-white">personalización del avatar como forma de expresión personal</strong> y la posibilidad de crear contenido que genere ingresos reales. Las búsquedas más importantes están ligadas a códigos promocionales, ítems UGC (Contenido Generado por Usuario) gratuitos y las experiencias más populares del momento.
                </p>
            </section>

            {/* Section 2 - Codes */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-blue-700 flex items-center justify-center text-sm font-bold">2</div>
                    Todos los Códigos Promocionales Activos
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Los <strong className="text-white">Promo Codes generales</strong> de Roblox son códigos que se canjean directamente en <strong className="text-neon-blue">roblox.com/redeem</strong> y otorgan accesorios exclusivos para tu avatar. A diferencia de los códigos de juegos individuales, estos son de la plataforma oficial y sus ítems son permanentes.
                </p>

                <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-neon-blue/30">
                                <th className="text-left py-3 px-4 font-[var(--font-display)] text-neon-blue text-xs tracking-wider uppercase">Código</th>
                                <th className="text-left py-3 px-4 font-[var(--font-display)] text-neon-blue text-xs tracking-wider uppercase">Recompensa</th>
                                <th className="text-left py-3 px-4 font-[var(--font-display)] text-neon-blue text-xs tracking-wider uppercase">Método</th>
                                <th className="text-center py-3 px-3 font-[var(--font-display)] text-neon-blue text-xs tracking-wider uppercase">Valor</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300">
                            {[
                                ['SPIDERCOLA', 'Mascota de hombro', 'roblox.com/redeem', '⭐⭐⭐'],
                                ['TWEETROBLOX', 'Pájaro azul de hombro', 'roblox.com/redeem', '⭐⭐⭐'],
                                ['GLIMMER', 'Sombrero de destello', 'Mansion of Wonder', '⭐⭐'],
                                ['THINGSGOBOOM', 'Accesorio de cintura', 'Mansion of Wonder', '⭐⭐⭐⭐'],
                                ['BOARDWALK', 'Accesorio de cabeza', 'Mansion of Wonder', '⭐⭐'],
                                ['DIY', 'Bastón cinético', 'Island of Move', '⭐'],
                                ['WORLDALIVE', 'Compañero de cristal', 'Island of Move', '⭐⭐⭐⭐'],
                            ].map((row, i) => (
                                <tr key={i} className={`border-b border-dark-600 ${i % 2 === 0 ? 'bg-dark-800/30' : ''} hover:bg-neon-blue/5 transition-colors`}>
                                    <td className="py-3 px-4"><code className="bg-dark-700 px-2 py-1 rounded text-neon-blue font-mono text-xs border border-dark-500">{row[0]}</code></td>
                                    <td className="py-3 px-4 text-white">{row[1]}</td>
                                    <td className="py-3 px-4 text-gray-400">{row[2]}</td>
                                    <td className="py-3 px-3 text-center">{row[3]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="bg-gradient-to-r from-neon-blue/10 to-transparent border-l-4 border-neon-blue pl-6 py-4 rounded-r-xl">
                    <p className="text-neon-blue font-semibold mb-1">🔑 Cómo Canjear</p>
                    <p className="text-gray-400">Visita <strong className="text-white">roblox.com/redeem</strong>, inicia sesión con tu cuenta, introduce el código y presiona "Redeem". El ítem aparecerá automáticamente en tu inventario de avatar.</p>
                </div>
            </section>

            {/* Ad: Mobile Banner */}
            <div className="flex justify-center my-8">
                <AdBanner size="320x50" />
            </div>

            {/* Section 3 - UGC */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-blue-700 flex items-center justify-center text-sm font-bold">3</div>
                    Códigos UGC y Ítems Gratuitos Limitados
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    En 2026, la tendencia de búsqueda se ha desplazado hacia los <strong className="text-white">ítems UGC (Contenido Generado por el Usuario) gratuitos</strong>. Los creadores dentro de Roblox regalan copias limitadas de accesorios valiosos para atraer tráfico a sus mundos. Estos ítems son temporales y muchas veces limitados a las primeras 1,000-5,000 unidades.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Para encontrar estos ítems, la mejor estrategia es seguir a los <strong className="text-white">creadores UGC verificados</strong> en redes sociales (especialmente Twitter/X y Discord) y activar las notificaciones. Cuando un creador anuncia un nuevo ítem gratuito, las copias se agotan en minutos.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { title: 'Accesorios de Cabeza', desc: 'Coronas, sombreros y cascos temáticos que los creadores UGC publican durante eventos especiales. Los más codiciados son los de edición limitada con diseños animados.', rarity: 'Alta demanda' },
                        { title: 'Alas y Capas', desc: 'Los accesorios de espalda como alas de ángel, capas de dragón y mochilas temáticas son los más buscados por la comunidad para personalizar avatares.', rarity: 'Muy alta demanda' },
                        { title: 'Mascotas de Hombro', desc: 'Pequeños compañeros animados que se sientan en el hombro del avatar. Los diseños de gatos, dragones y criaturas fantásticas son los más populares.', rarity: 'Ultra raro' },
                        { title: 'Paquetes de Cuerpo', desc: 'Modificaciones completas del avatar que cambian la forma del cuerpo. Los paquetes anime y robóticos tienen mayor demanda entre la comunidad latina.', rarity: 'Exclusivo' },
                    ].map((item, i) => (
                        <div key={i} className="glass-card rounded-xl p-5">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-[var(--font-display)] text-white font-bold flex items-center gap-2"><Sparkles size={16} className="text-neon-blue" /> {item.title}</h4>
                                <span className="text-xs text-neon-blue font-[var(--font-display)]">{item.rarity}</span>
                            </div>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 4 - Top Experiences */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-blue-700 flex items-center justify-center text-sm font-bold">4</div>
                    Top 10 Experiencias Trending en 2026
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Debido a la inmensa cantidad de juegos en Roblox (más de 40 millones de experiencias), los usuarios buscan <strong className="text-white">recomendaciones curadas</strong>. En 2026, estos son los géneros y experiencias con mayor crecimiento en la comunidad latinoamericana.
                </p>

                <div className="space-y-4">
                    {[
                        { rank: 1, name: 'Turno de Noche', genre: 'Terror Cooperativo', players: '45M+ visitas', desc: 'Un juego de terror cooperativo donde los jugadores deben sobrevivir turnos nocturnos en locaciones embrujadas. La comunicación y el trabajo en equipo son esenciales. El ambiente sonoro y visual genera una tensión increíble incluso en dispositivos móviles.' },
                        { rank: 2, name: 'Brookhaven RP', genre: 'Simulador de Vida', players: '35B+ visitas', desc: 'El mejor roleplay de la plataforma. Los jugadores crean historias de vida con sistemas de empleo, economía interna y una comunidad masiva. Las actualizaciones constantes mantienen el interés con nuevas casas, vehículos y eventos temáticos.' },
                        { rank: 3, name: 'Blox Fruits', genre: 'Acción RPG', players: '40B+ visitas', desc: 'Inspirado en One Piece, los jugadores buscan y consumen frutas del diablo para obtener poderes únicos. El sistema de combate profundo y la progresión constante lo mantienen como uno de los más jugados globalmente.' },
                        { rank: 4, name: 'Tower Defense Simulator', genre: 'Estrategia', players: '5B+ visitas', desc: 'Defensa de torres con mecánicas complejas donde cada unidad importa. Los eventos temporales con jefes exclusivos y unidades limitadas generan una recurrencia masiva entre los jugadores.' },
                        { rank: 5, name: 'Maciofobia', genre: 'Terror Psicológico', players: '12M+ visitas', desc: 'Un horror game creado por desarrolladores latinos que ha capturado la atención de toda la comunidad hispana con sus jumpscares inteligentes y su narrativa envolvente.' },
                    ].map((exp, i) => (
                        <div key={i} className="glass-card rounded-xl p-6 flex gap-4 items-start hover:border-neon-blue/30 transition-colors">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-blue to-blue-700 flex items-center justify-center font-[var(--font-display)] font-black text-white shrink-0">
                                {exp.rank}
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-1 flex-wrap">
                                    <h4 className="font-[var(--font-display)] text-white font-bold text-lg">{exp.name}</h4>
                                    <span className="text-[10px] bg-neon-blue/10 text-neon-blue px-2 py-0.5 rounded-full font-[var(--font-display)] tracking-wider">{exp.genre}</span>
                                    <span className="text-xs text-gray-500">{exp.players}</span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Ad: Medium Rectangle */}
            <div className="flex justify-center my-8">
                <AdBanner size="300x250" />
            </div>

            {/* Section 5 - Robux */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-sm font-bold text-black">5</div>
                    Cómo Obtener Robux de Forma Legítima
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    La búsqueda de <strong className="text-white">"Robux gratis"</strong> sigue siendo masiva en 2026, aunque lamentablemente está plagada de estafas y sitios fraudulentos. Es crucial que los jugadores entiendan cuáles son los métodos legítimos y cuáles son peligrosos.
                </p>

                <div className="bg-gradient-to-r from-red-500/10 to-transparent border-l-4 border-red-500 pl-6 py-4 rounded-r-xl mb-6">
                    <p className="text-red-400 font-semibold mb-1 flex items-center gap-2"><AlertTriangle size={16} /> ⚠️ Advertencia de Seguridad</p>
                    <p className="text-gray-400">NUNCA introduzcas tu contraseña en sitios externos que prometan "Robux gratis". Estos sitios son ESTAFAS diseñadas para robar tu cuenta. Roblox JAMÁS te pedirá tu contraseña fuera de roblox.com.</p>
                </div>

                <h3 className="font-[var(--font-display)] text-xl font-bold text-white mb-4">Métodos Legítimos Verificados</h3>
                <div className="space-y-4 mb-6">
                    {[
                        { method: 'Roblox Premium', desc: 'La suscripción oficial otorga un estipendio mensual de Robux (450-2200 según el plan) más acceso a funciones premium como comercio de ítems limitados. Es el método más directo y seguro.', legit: true },
                        { method: 'Creación de Ropa y Accesorios', desc: 'Si tienes habilidades de diseño, puedes crear camisetas, pantalones y accesorios UGC para vender en el catálogo. Los creadores exitosos generan miles de Robux mensuales. Requiere una inversión inicial de 10 Robux para subir camisetas.', legit: true },
                        { method: 'Desarrollo de Experiencias', desc: 'Crear juegos dentro de Roblox con Roblox Studio (gratuito) y monetizarlos con Game Passes y Developer Products. Los juegos populares generan ingresos significativos que se pueden convertir en Robux y eventualmente en dinero real a través del DevEx.', legit: true },
                        { method: 'Microsoft Rewards', desc: 'En algunos países, puedes acumular puntos de Microsoft Rewards (buscando en Bing, completando encuestas) y canjearlos por tarjetas de regalo de Roblox. Es gratuito pero requiere constancia.', legit: true },
                        { method: 'Programa de Afiliados', desc: 'Compartir links de experiencias de Roblox y ganar Robux cuando nuevos usuarios se registran a través de tu enlace. Funciona bien si tienes un canal de YouTube o redes sociales con audiencia.', legit: true },
                    ].map((item, i) => (
                        <div key={i} className="glass-card rounded-xl p-5 border-l-4 border-green-500/50">
                            <div className="flex items-center gap-2 mb-2">
                                <Shield size={16} className="text-green-400" />
                                <h4 className="font-[var(--font-display)] text-white font-bold">{item.method}</h4>
                                <span className="text-[10px] bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full font-[var(--font-display)]">SEGURO</span>
                            </div>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Ad: Full Banner */}
            <div className="flex justify-center my-8">
                <AdBanner size="468x60" />
            </div>

            {/* Section 6 - Security */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-sm font-bold">6</div>
                    Seguridad de Cuenta: Protégete de Estafas
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    La seguridad de tu cuenta de Roblox es fundamental. Con miles de cuentas comprometidas diariamente en la región, seguir estas prácticas básicas puede salvarte de perder años de progreso y ítems valiosos.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { title: 'Activa 2FA', desc: 'La verificación en dos pasos con una app de autenticación es la protección más fuerte disponible. Configúrala en Configuración → Seguridad.', icon: '🔐' },
                        { title: 'Email Verificado', desc: 'Vincula un email que controles y verifícalo. Esto te permite recuperar tu cuenta si pierdes acceso.', icon: '📧' },
                        { title: 'PIN de Cuenta', desc: 'Configura un PIN de 4 dígitos para proteger la configuración de tu cuenta. Sin este PIN, nadie puede cambiar tu contraseña o email.', icon: '🔢' },
                        { title: 'No Compartas Datos', desc: 'NUNCA compartas tu contraseña, ni siquiera con "amigos" o personas que afirmen ser de Roblox. El soporte oficial jamás pide tu contraseña.', icon: '🚫' },
                    ].map((tip, i) => (
                        <div key={i} className="glass-card rounded-xl p-5 flex items-start gap-4">
                            <span className="text-3xl">{tip.icon}</span>
                            <div>
                                <h4 className="font-[var(--font-display)] text-white font-bold mb-1">{tip.title}</h4>
                                <p className="text-gray-400 text-sm">{tip.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* Native Banner Ad */}
            <div className="flex justify-center my-8">
                <NativeBanner />
            </div>

            {/* Conclusion */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-blue-700 flex items-center justify-center text-sm font-bold">7</div>
                    Conclusión y Recursos
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    Roblox en 2026 ofrece un universo infinito de posibilidades para los jugadores latinoamericanos. Desde la personalización de avatares con ítems UGC gratuitos hasta la creación de experiencias que generan ingresos reales, la plataforma sigue evolucionando y expandiéndose.
                </p>
                <p className="text-gray-300 leading-relaxed">
                    Recuerda visitar esta página regularmente para obtener los <strong className="text-neon-blue">códigos promocionales más recientes</strong>, descubrir nuevas experiencias trending y mantener tu cuenta segura. El metaverso te espera con las puertas abiertas — el único límite es tu creatividad.
                </p>
            </section>

            {/* Author */}
            <div className="glass-card rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue to-blue-800 flex items-center justify-center shrink-0">
                    <Gamepad2 size={28} className="text-white" />
                </div>
                <div>
                    <p className="font-[var(--font-display)] font-bold text-neon-blue mb-1">Escrito por MetaverseExplorer</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Explorador del metaverso de Roblox desde 2017. Creador UGC verificado con más de 50 accesorios publicados. Especializado en descubrimiento de experiencias, seguridad de cuentas y economía de la plataforma.
                    </p>
                </div>
            </div>
        </article>
    );
}
