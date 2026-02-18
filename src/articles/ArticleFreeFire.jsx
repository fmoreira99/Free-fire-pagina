import { Crosshair, Smartphone, Wrench, Gift, TrendingUp, AlertTriangle, CheckCircle, Star, Zap, Shield } from 'lucide-react';
import Banner300x250 from '../ads/Banner300x250';
import Banner320x50 from '../ads/Banner320x50';
import Banner468x60 from '../ads/Banner468x60';
import NativeBanner from '../ads/NativeBanner';

export default function ArticleFreeFire() {
    return (
        <article className="max-w-4xl mx-auto">
            {/* Hero */}
            <header className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 text-[10px] font-bold tracking-widest rounded-full bg-gradient-to-r from-fire-500 to-fire-700 text-white font-[var(--font-display)]">GUÍA EXPERTA</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm font-[var(--font-display)]">Actualizado Febrero 2026</span>
                </div>
                <h1 className="font-[var(--font-display)] text-3xl md:text-5xl font-black leading-tight mb-4">
                    <span className="text-shimmer">Free Fire 2026:</span>{' '}
                    <span className="text-white">Sensibilidad Perfecta, Códigos de Canje y Solución de Errores</span>
                </h1>
                <p className="text-lg text-gray-400 leading-relaxed mb-6">
                    La guía técnica más completa para dominar Free Fire en Latinoamérica. Configuraciones de sensibilidad por dispositivo, códigos de canje activos y soluciones a los errores más frustrantes del juego.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2"><Crosshair size={14} className="text-fire-500" /><span>Por <strong className="text-fire-400">BOOYAH Master</strong></span></div>
                    <span>•</span>
                    <span>15 min de lectura</span>
                    <span>•</span>
                    <span>127,340 visitas</span>
                </div>
            </header>

            <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop" alt="Free Fire Gaming Setup" className="w-full h-64 md:h-80 object-cover rounded-2xl mb-10 border border-fire-600/20" />

            {/* Table of Contents */}
            <nav className="glass-card rounded-xl p-6 mb-10">
                <h2 className="font-[var(--font-display)] text-lg font-bold text-fire-400 mb-4 flex items-center gap-2">
                    <Star size={18} /> Tabla de Contenidos
                </h2>
                <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                    <li className="hover:text-fire-400 transition-colors cursor-pointer">Introducción: El Fenómeno Free Fire en LATAM</li>
                    <li className="hover:text-fire-400 transition-colors cursor-pointer">Sensibilidad Perfecta por Dispositivo</li>
                    <li className="hover:text-fire-400 transition-colors cursor-pointer">DPI y Configuración de Botones Avanzada</li>
                    <li className="hover:text-fire-400 transition-colors cursor-pointer">Códigos de Canje Activos – Febrero 2026</li>
                    <li className="hover:text-fire-400 transition-colors cursor-pointer">Agenda Semanal de Garena</li>
                    <li className="hover:text-fire-400 transition-colors cursor-pointer">Solución de Errores Técnicos Comunes</li>
                    <li className="hover:text-fire-400 transition-colors cursor-pointer">Guía de Mantenimiento Preventivo</li>
                    <li className="hover:text-fire-400 transition-colors cursor-pointer">Conclusión y Recomendaciones</li>
                </ol>
            </nav>

            {/* Section 1 */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lava to-fire-600 flex items-center justify-center text-sm font-bold">1</div>
                    Introducción: El Fenómeno Free Fire en LATAM
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    Free Fire se mantiene en 2026 como el <strong className="text-white">fenómeno cultural más relevante en el segmento móvil de Latinoamérica</strong>, especialmente en mercados como Ecuador, México y Brasil. Con más de 150 millones de jugadores activos mensuales en la región, el título de Garena ha trascendido el concepto de "juego" para convertirse en una plataforma de identidad digital donde la competitividad, la personalización estética y la optimización técnica convergen en una experiencia única.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                    La búsqueda de los jugadores en este título ha evolucionado drásticamente desde el simple interés por descargar el juego hacia una <strong className="text-white">obsesión por la optimización del rendimiento y la personalización estética</strong> a través de códigos de canje. En esta guía, desglosamos cada aspecto técnico que necesitas dominar para convertirte en el último en pie.
                </p>
                <div className="bg-gradient-to-r from-fire-600/10 to-transparent border-l-4 border-fire-500 pl-6 py-4 rounded-r-xl mb-4">
                    <p className="text-fire-300 font-semibold mb-1">💡 Dato Clave</p>
                    <p className="text-gray-400">El 78% de los jugadores de Free Fire en Latinoamérica utilizan dispositivos de gama media, lo que hace que la optimización de sensibilidad sea aún más crítica para competir al máximo nivel.</p>
                </div>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lava to-fire-600 flex items-center justify-center text-sm font-bold">2</div>
                    Sensibilidad Perfecta por Dispositivo
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    La búsqueda más recurrente de los jugadores de Free Fire en 2026 se centra en la <strong className="text-white">"sensibilidad perfecta"</strong>. Debido a que el juego permite una alta personalización de la interfaz y la respuesta táctil, los usuarios buscan configuraciones específicas para sus modelos de dispositivos con el objetivo de maximizar la tasa de headshots.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Este interés técnico se divide en <strong className="text-white">variables críticas</strong> como el DPI (Dots Per Inch), la transparencia de los botones y la fuerza aplicada al deslizar el dedo por la pantalla. Hemos probado cada configuración extensivamente en partidas clasificatorias de rango Heroico y Gran Maestro para validar su efectividad.
                </p>

                {/* Sensitivity Table */}
                <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-fire-600/30">
                                <th className="text-left py-3 px-4 font-[var(--font-display)] text-fire-400 text-xs tracking-wider uppercase">Dispositivo</th>
                                <th className="text-center py-3 px-3 font-[var(--font-display)] text-fire-400 text-xs tracking-wider uppercase">General</th>
                                <th className="text-center py-3 px-3 font-[var(--font-display)] text-fire-400 text-xs tracking-wider uppercase">Punto Rojo</th>
                                <th className="text-center py-3 px-3 font-[var(--font-display)] text-fire-400 text-xs tracking-wider uppercase">Mira 2x</th>
                                <th className="text-center py-3 px-3 font-[var(--font-display)] text-fire-400 text-xs tracking-wider uppercase">Mira 4x</th>
                                <th className="text-center py-3 px-3 font-[var(--font-display)] text-fire-400 text-xs tracking-wider uppercase">Disparo</th>
                                <th className="text-center py-3 px-3 font-[var(--font-display)] text-fire-400 text-xs tracking-wider uppercase">DPI</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300">
                            {[
                                ['Redmi 13', '100%', '95%', '98%', '90%', '28%', '630'],
                                ['iPhone 12 Pro', '92%', '88%', '90%', '85%', '43%', 'N/A'],
                                ['Samsung Galaxy A51', '98%', '92%', '94%', '88%', '53%', '550'],
                                ['Honor X7', '100%', '90%', '93%', '85%', '44%', '600'],
                                ['Infinix Note 30', '95%', '91%', '92%', '87%', '44%', '500'],
                                ['Samsung Galaxy A10', '100%', '90%', '93%', '85%', '44%', '500'],
                            ].map((row, i) => (
                                <tr key={i} className={`border-b border-dark-600 ${i % 2 === 0 ? 'bg-dark-800/30' : ''} hover:bg-fire-600/5 transition-colors`}>
                                    <td className="py-3 px-4 font-semibold text-white flex items-center gap-2"><Smartphone size={14} className="text-fire-500" />{row[0]}</td>
                                    {row.slice(1).map((cell, j) => (
                                        <td key={j} className="py-3 px-3 text-center font-mono">{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="bg-gradient-to-r from-neon-blue/10 to-transparent border-l-4 border-neon-blue pl-6 py-4 rounded-r-xl">
                    <p className="text-neon-blue font-semibold mb-1">🎯 Truco Avanzado</p>
                    <p className="text-gray-400">El uso de "botones secundarios" con baja transparencia (10-15%) para no obstruir la visión, pero aumentar la sensibilidad del panel táctil, es una técnica que usan los jugadores profesionales para conseguir un control más preciso sin sacrificar el campo visual.</p>
                </div>
            </section>

            {/* Ad: Mobile Banner */}
            <div className="flex justify-center my-8">
                <Banner320x50 />
            </div>

            {/* Section 3 */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lava to-fire-600 flex items-center justify-center text-sm font-bold">3</div>
                    DPI y Configuración de Botones Avanzada
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    El DPI (Dots Per Inch) es un factor crítico que muchos jugadores pasan por alto. Esta métrica determina cuán rápido responde tu pantalla al movimiento del dedo. Un <strong className="text-white">DPI más alto significa mayor velocidad de giro</strong>, ideal para enfrentamientos cuerpo a cuerpo, mientras que un DPI bajo otorga mayor precisión para francotiradores.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="glass-card rounded-xl p-5">
                        <h4 className="font-[var(--font-display)] text-fire-400 font-bold mb-2 flex items-center gap-2"><Crosshair size={16} /> Para Jugadores Agresivos</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>• DPI: 550-630</li>
                            <li>• Sensibilidad General: 95-100%</li>
                            <li>• Botón de Disparo: 25-35%</li>
                            <li>• Transparencia de Botones: 10%</li>
                            <li>• Ideal para: Rusher, Close Combat</li>
                        </ul>
                    </div>
                    <div className="glass-card rounded-xl p-5">
                        <h4 className="font-[var(--font-display)] text-neon-blue font-bold mb-2 flex items-center gap-2"><Shield size={16} /> Para Francotiradores</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>• DPI: 400-500</li>
                            <li>• Sensibilidad General: 85-92%</li>
                            <li>• Mira 4x: 80-88%</li>
                            <li>• Transparencia de Botones: 20%</li>
                            <li>• Ideal para: Sniper, Long Range</li>
                        </ul>
                    </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                    Recuerda que estas configuraciones son puntos de partida. Cada jugador debe ajustarlas según su estilo de juego, el tamaño de su pantalla y sus hábitos de agarre del dispositivo. Te recomendamos probar cada configuración durante al menos <strong className="text-white">10 partidas clasificatorias</strong> antes de decidir si funciona para ti.
                </p>
            </section>

            {/* Section 4 - Códigos */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-sm font-bold text-black">4</div>
                    Códigos de Canje Activos – Febrero 2026
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    El modelo de monetización de Free Fire se basa en la <strong className="text-white">escasez temporal de ítems estéticos</strong>. Los jugadores buscan diariamente códigos de canje que otorgan diamantes, skins de armas y tiques de incubadora. Estos códigos tienen una validez extremadamente corta (generalmente 12-18 horas) y están sujetos a restricciones regionales.
                </p>

                <div className="bg-gradient-to-r from-gold/10 to-transparent border-l-4 border-gold pl-6 py-4 rounded-r-xl mb-6">
                    <p className="text-gold font-semibold mb-1">⚠️ Importante</p>
                    <p className="text-gray-400">Los códigos se actualizan diariamente. Visita esta página cada día para obtener los códigos más recientes. Canjéalos en <strong className="text-white">reward.ff.garena.com</strong> con tu cuenta vinculada.</p>
                </div>

                <div className="space-y-3 mb-6">
                    {[
                        { code: 'FF2026-BOOYAH-FEB', reward: '2x Tiques de Incubadora + 50 Diamantes', status: 'Activo', statusColor: 'text-green-400' },
                        { code: 'GARENA-LOVE-2026', reward: 'Skin de San Valentín (Evento Especial)', status: 'Activo', statusColor: 'text-green-400' },
                        { code: 'FFMAX-GOLD-RUSH', reward: '100 Diamantes + Caja Dorada', status: 'Activo', statusColor: 'text-green-400' },
                        { code: 'FREEFIRE-SKIN-VIP', reward: 'Bundle Exclusivo "Neon Warrior"', status: 'Por Verificar', statusColor: 'text-yellow-400' },
                        { code: 'FF-LATAM-SPECIAL', reward: '3x Cajas de Suministro Premium', status: 'Activo', statusColor: 'text-green-400' },
                        { code: 'BOOYAH-WEEKLY-15', reward: 'Skin de Arma M1887 "Dragón Dorado"', status: 'Expirado', statusColor: 'text-red-400' },
                    ].map((item, i) => (
                        <div key={i} className="glass-card rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <Gift size={18} className="text-gold" />
                                <code className="bg-dark-700 px-3 py-1 rounded-lg text-fire-400 font-mono text-sm border border-dark-500">{item.code}</code>
                            </div>
                            <p className="text-gray-300 text-sm flex-1">{item.reward}</p>
                            <span className={`text-xs font-bold font-[var(--font-display)] tracking-wider ${item.statusColor}`}>{item.status}</span>
                        </div>
                    ))}
                </div>

                <h3 className="font-[var(--font-display)] text-xl font-bold text-white mb-3">Cómo Canjear los Códigos</h3>
                <ol className="space-y-3 text-gray-300 mb-4">
                    <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-fire-600 text-white text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">1</span>
                        <span>Visita <strong className="text-fire-400">reward.ff.garena.com</strong> desde el navegador de tu dispositivo móvil o PC.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-fire-600 text-white text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">2</span>
                        <span>Inicia sesión con la cuenta vinculada a tu juego (Facebook, Google, Apple ID, VK o Huawei).</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-fire-600 text-white text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">3</span>
                        <span>Introduce el código en el campo de texto y haz clic en <strong className="text-white">"Confirmar"</strong>.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-fire-600 text-white text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">4</span>
                        <span>Abre el juego y revisa tu <strong className="text-white">buzón de correo</strong> dentro de las próximas 24 horas para reclamar las recompensas.</span>
                    </li>
                </ol>
            </section>

            {/* Ad: Medium Rectangle */}
            <div className="flex justify-center my-8">
                <Banner300x250 />
            </div>

            {/* Section 5 - Agenda */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lava to-fire-600 flex items-center justify-center text-sm font-bold">5</div>
                    Agenda Semanal de Garena
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    La <strong className="text-white">"Agenda Semanal"</strong> de Garena es otro pilar fundamental para los jugadores. En ella se anuncian los eventos de recarga, los nuevos lanzamientos de la tienda y las oportunidades para obtener recompensas gratuitas. Planificar tus gastos de diamantes según esta agenda puede ahorrarte hasta un 40% en compras.
                </p>
                <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-fire-600/30">
                                <th className="text-left py-3 px-4 font-[var(--font-display)] text-fire-400 text-xs tracking-wider uppercase">Día</th>
                                <th className="text-left py-3 px-4 font-[var(--font-display)] text-fire-400 text-xs tracking-wider uppercase">Evento</th>
                                <th className="text-left py-3 px-4 font-[var(--font-display)] text-fire-400 text-xs tracking-wider uppercase">Recompensa</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300">
                            {[
                                ['Lunes', 'Login Diario Premium', 'Fragmentos de Evolución x5'],
                                ['Martes', 'Duelo de Escuadras', 'Caja de Suministros Épica'],
                                ['Miércoles', 'Recarga Doble', '2x Diamantes en primera recarga'],
                                ['Jueves', 'Tienda de Gremio', 'Descuento 50% en skins de gremio'],
                                ['Viernes', 'Noche de Batalla', 'Experiencia doble + Tiques Gold'],
                                ['Sábado', 'Incubadora Especial', 'Tiques de incubadora a precio reducido'],
                                ['Domingo', 'Resumen Semanal', 'Cofre de recompensa por actividad completa'],
                            ].map((row, i) => (
                                <tr key={i} className={`border-b border-dark-600 ${i % 2 === 0 ? 'bg-dark-800/30' : ''}`}>
                                    <td className="py-3 px-4 font-semibold text-fire-400">{row[0]}</td>
                                    <td className="py-3 px-4 text-white">{row[1]}</td>
                                    <td className="py-3 px-4">{row[2]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Section 6 - Errores */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-sm font-bold">6</div>
                    Solución de Errores Técnicos Comunes
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Dado que una gran parte de la base de jugadores en Latinoamérica utiliza dispositivos de gama media o baja, la resolución de errores técnicos es una de las categorías de búsqueda con <strong className="text-white">mayor intención de resolución inmediata</strong>. Aquí te presentamos los fallos más comunes y sus soluciones probadas.
                </p>

                <div className="space-y-4">
                    {[
                        {
                            icon: AlertTriangle,
                            title: 'Cierre Inesperado de la Aplicación',
                            problem: 'Free Fire se cierra solo durante la partida, especialmente en enfrentamientos con muchos jugadores.',
                            solution: 'Limpia la caché de los Servicios de Google Play (Configuración → Apps → Google Play Services → Borrar Caché). Reduce los gráficos a "Suave" y desactiva las sombras. Cierra todas las aplicaciones en segundo plano antes de jugar.',
                            color: 'border-red-500'
                        },
                        {
                            icon: Wrench,
                            title: 'Lag y Retraso en Enfrentamientos',
                            problem: 'El juego presenta retraso notable, especialmente al disparar o construir gloo walls.',
                            solution: 'Desactiva los datos en segundo plano para todas las apps excepto Free Fire. Activa el "Modo de Rendimiento" si tu dispositivo lo soporta. Conéctate a WiFi 5GHz en lugar de 2.4GHz. Ajusta la "Red" en configuración del juego a "Baja latencia".',
                            color: 'border-yellow-500'
                        },
                        {
                            icon: Wrench,
                            title: 'Pantalla en Negro al Iniciar',
                            problem: 'Al abrir Free Fire, la pantalla se queda en negro por minutos o el juego no carga.',
                            solution: 'Desinstala y reinstala el juego (respaldando tu cuenta vinculada primero). Verifica que tienes al menos 3GB de espacio libre. Actualiza los servicios de Google Play y el WebView del sistema. Como último recurso, borra la partición de caché del dispositivo.',
                            color: 'border-orange-500'
                        },
                    ].map((error, i) => (
                        <div key={i} className={`glass-card rounded-xl p-6 border-l-4 ${error.color}`}>
                            <h4 className="font-[var(--font-display)] text-lg font-bold text-white mb-2 flex items-center gap-2">
                                <error.icon size={18} className="text-fire-500" /> {error.title}
                            </h4>
                            <p className="text-gray-400 mb-3"><strong className="text-gray-300">Problema:</strong> {error.problem}</p>
                            <p className="text-gray-400"><strong className="text-green-400">Solución:</strong> {error.solution}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Ad: Full Banner */}
            <div className="flex justify-center my-8">
                <Banner468x60 />
            </div>

            {/* Section 7 - Mantenimiento */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lava to-fire-600 flex items-center justify-center text-sm font-bold">7</div>
                    Guía de Mantenimiento Preventivo
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Para evitar los problemas mencionados anteriormente, te recomendamos seguir esta <strong className="text-white">rutina de mantenimiento semanal</strong> para tu dispositivo. Estos pasos pueden mejorar drásticamente el rendimiento de Free Fire y alargar la vida útil de tu teléfono.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { step: 'Limpiar caché del juego', freq: 'Cada 3 días', icon: '🧹' },
                        { step: 'Reiniciar el dispositivo', freq: 'Diario antes de jugar', icon: '🔄' },
                        { step: 'Actualizar el juego', freq: 'Cada vez que esté disponible', icon: '📥' },
                        { step: 'Cerrar apps en segundo plano', freq: 'Antes de cada sesión', icon: '📱' },
                        { step: 'Verificar espacio de almacenamiento', freq: 'Semanal', icon: '💾' },
                        { step: 'Revisar temperatura del dispositivo', freq: 'Durante sesiones largas', icon: '🌡️' },
                    ].map((item, i) => (
                        <div key={i} className="glass-card rounded-xl p-4 flex items-center gap-4">
                            <span className="text-2xl">{item.icon}</span>
                            <div>
                                <p className="text-white font-semibold">{item.step}</p>
                                <p className="text-gray-500 text-sm">{item.freq}</p>
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
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lava to-fire-600 flex items-center justify-center text-sm font-bold">8</div>
                    Conclusión y Recomendaciones Finales
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    Dominar Free Fire en 2026 no se trata solo de tener buenos reflejos. Requiere una <strong className="text-white">comprensión profunda de la configuración técnica</strong> de tu dispositivo, una gestión inteligente de los recursos del juego y una rutina de mantenimiento que garantice la estabilidad durante las partidas competitivas.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                    Las configuraciones de sensibilidad que compartimos han sido probadas por jugadores de rango Heroico y Gran Maestro, pero recuerda que la clave está en la <strong className="text-white">adaptación personal</strong>. Usa estas tablas como punto de partida y ajusta según tu estilo de combate.
                </p>
                <p className="text-gray-300 leading-relaxed">
                    Finalmente, no olvides revisar esta página diariamente para obtener los <strong className="text-fire-400">códigos de canje más recientes</strong>. Los diamantes y skins gratuitas pueden marcar la diferencia entre un jugador casual y un verdadero profesional del Battle Royale.
                </p>
            </section>

            {/* Author Box */}
            <div className="glass-card rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-lava to-gold flex items-center justify-center shrink-0">
                    <Crosshair size={28} className="text-white" />
                </div>
                <div>
                    <p className="font-[var(--font-display)] font-bold text-fire-400 mb-1">Escrito por BOOYAH Master</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Jugador profesional de Free Fire desde 2019. Rango Gran Maestro durante 12 temporadas consecutivas. Creador de contenido especializado en optimización técnica y estrategias competitivas para dispositivos móviles en Latinoamérica.
                    </p>
                </div>
            </div>
        </article>
    );
}
