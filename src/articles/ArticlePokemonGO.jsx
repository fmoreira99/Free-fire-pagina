import { Bug, Star, Zap, Shield, Trophy, TrendingUp, Users, Sparkles, Target } from 'lucide-react';
import AdBanner, { NativeBanner } from '../AdBanner';

export default function ArticlePokemonGO() {
    return (
        <article className="max-w-4xl mx-auto">
            <header className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 text-[10px] font-bold tracking-widest rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 text-white font-[var(--font-display)]">AR & COLECCIÓN</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm font-[var(--font-display)]">Actualizado Febrero 2026</span>
                </div>
                <h1 className="font-[var(--font-display)] text-3xl md:text-5xl font-black leading-tight mb-4">
                    <span className="text-shimmer">Pokémon GO 2026:</span>{' '}
                    <span className="text-white">Farmeo de Polvos Estelares, IVs Perfectos y Guía de Competitivo</span>
                </h1>
                <p className="text-lg text-gray-400 leading-relaxed mb-6">
                    La guía científica definitiva para Pokémon GO: maximiza tu farmeo de polvos estelares, aprende a evaluar IVs para PvP, domina el sistema de referidos y alcanza el nivel 50 con eficiencia.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2"><Bug size={14} className="text-emerald-400" /><span>Por <strong className="text-emerald-400">TrainerElite</strong></span></div>
                    <span>•</span><span>17 min de lectura</span><span>•</span><span>142,670 visitas</span>
                </div>
            </header>

            <img src="https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=1200&auto=format&fit=crop" alt="Pokémon GO AR Gaming" className="w-full h-64 md:h-80 object-cover rounded-2xl mb-10 border border-emerald-500/20" />

            <nav className="glass-card rounded-xl p-6 mb-10">
                <h2 className="font-[var(--font-display)] text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2"><Star size={18} /> Tabla de Contenidos</h2>
                <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                    <li className="hover:text-emerald-400 transition-colors cursor-pointer">Pokémon GO en 2026: Precisión Estadística</li>
                    <li className="hover:text-emerald-400 transition-colors cursor-pointer">Farmeo de Polvos Estelares: Tabla Completa</li>
                    <li className="hover:text-emerald-400 transition-colors cursor-pointer">Guía de IVs: Hundos y PvP Optimal</li>
                    <li className="hover:text-emerald-400 transition-colors cursor-pointer">Gran Liga y Ultra Liga: Mejores Equipos</li>
                    <li className="hover:text-emerald-400 transition-colors cursor-pointer">Sistema de Referidos y Códigos</li>
                    <li className="hover:text-emerald-400 transition-colors cursor-pointer">Medallas de Platino y Ruta al Nivel 50+</li>
                    <li className="hover:text-emerald-400 transition-colors cursor-pointer">Calendario de Eventos Febrero 2026</li>
                    <li className="hover:text-emerald-400 transition-colors cursor-pointer">Conclusión</li>
                </ol>
            </nav>

            {/* Section 1 */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-sm font-bold">1</div>
                    Pokémon GO en 2026: La Era de la Precisión Estadística
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    Pokémon GO ha mutado en 2026 hacia un juego de <strong className="text-white">alta precisión estadística</strong>. Los entrenadores ya no solo buscan "atrapar a todos", sino optimizar cada recurso mediante el conocimiento de mecánicas de fondo que muchos jugadores casuales desconocen.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                    Con la expansión del sistema de niveles hasta el 70, nuevas medallas de platino como requisitos de progresión, y un meta de PvP cada vez más competitivo, el juego demanda un <strong className="text-white">enfoque científico</strong> para progresar eficientemente. En esta guía cubrimos cada aspecto clave que un entrenador serio necesita dominar.
                </p>
                <div className="bg-gradient-to-r from-emerald-500/10 to-transparent border-l-4 border-emerald-500 pl-6 py-4 rounded-r-xl">
                    <p className="text-emerald-400 font-semibold mb-1">🔬 Dato Científico</p>
                    <p className="text-gray-400">El sistema de IVs (Individual Values) tiene 4,096 combinaciones posibles (16×16×16). Solo 1 de cada 4,096 Pokémon tiene IVs perfectos (15/15/15), lo que hace que los "Hundos" sean extremadamente valiosos.</p>
                </div>
            </section>

            {/* Section 2 - Stardust */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-sm font-bold">2</div>
                    Farmeo de Polvos Estelares: Tabla Completa
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Los Polvos Estelares son el <strong className="text-white">recurso más valioso y escaso</strong> en Pokémon GO. Se necesitan literalmente millones de polvos para potenciar un equipo competitivo de PvP. La clave es saber qué Pokémon otorgan más polvo al ser capturados y priorizarlos en tu sesión de juego.
                </p>

                <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-emerald-500/30">
                                <th className="text-left py-3 px-4 font-[var(--font-display)] text-emerald-400 text-xs tracking-wider uppercase">Pokémon</th>
                                <th className="text-center py-3 px-4 font-[var(--font-display)] text-emerald-400 text-xs tracking-wider uppercase">Polvos al Capturar</th>
                                <th className="text-center py-3 px-4 font-[var(--font-display)] text-emerald-400 text-xs tracking-wider uppercase">Prioridad</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300">
                            {[
                                ['Audino', '2,100', '🔴 Máxima — SIEMPRE capturar'],
                                ['Cloyster', '1,000', '🟠 Muy alta'],
                                ['Shellder', '1,000', '🟠 Muy alta'],
                                ['Chimecho', '1,000', '🟠 Muy alta'],
                                ['Staryu', '750', '🟡 Alta'],
                                ['Meowth Alola', '750', '🟡 Alta'],
                                ['Paras', '500', '🟢 Estándar+'],
                                ['Meowth', '500', '🟢 Estándar+'],
                                ['Combee', '500', '🟢 Estándar+'],
                                ['Pokémon Base', '100', '⚪ Estándar'],
                            ].map((row, i) => (
                                <tr key={i} className={`border-b border-dark-600 ${i % 2 === 0 ? 'bg-dark-800/30' : ''}`}>
                                    <td className="py-3 px-4 text-white font-semibold">{row[0]}</td>
                                    <td className="py-3 px-4 text-center font-mono text-emerald-400 font-bold">{row[1]}</td>
                                    <td className="py-3 px-4 text-center text-sm">{row[2]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h3 className="font-[var(--font-display)] text-xl font-bold text-white mb-3">Multiplicadores de Polvo</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { name: 'Star Piece', mult: '×1.5 durante 30 min', tip: 'Usar durante Spotlight Hour o Community Day para máximo rendimiento' },
                        { name: 'Clima Favorable', mult: '×1.25 extra', tip: 'Los Pokémon capturados con bonus climático otorgan polvo adicional' },
                        { name: 'Huevos + Aventura', mult: 'Variable', tip: 'Eclosionar huevos de 10km otorga 1,600-3,200 polvos. Siempre camina con incubadoras activas' },
                    ].map((item, i) => (
                        <div key={i} className="glass-card rounded-xl p-5">
                            <h4 className="font-[var(--font-display)] text-emerald-400 font-bold mb-1">{item.name}</h4>
                            <p className="text-white text-sm font-mono mb-1">{item.mult}</p>
                            <p className="text-gray-500 text-xs">{item.tip}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Ad: Mobile Banner */}
            <div className="flex justify-center my-8">
                <AdBanner size="320x50" />
            </div>

            {/* Section 3 - IVs */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-sm font-bold">3</div>
                    Guía de IVs: Hundos y PvP Optimal
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    Los IVs (Individual Values) son los valores invisibles de <strong className="text-white">Ataque, Defensa y Salud</strong> que cada Pokémon posee de forma única. Van de 0 a 15 en cada estadística. Para raids y PvE, quieres IVs perfectos (15/15/15, conocidos como "Hundos"). Pero para PvP, la cosa cambia radicalmente.
                </p>
                <div className="bg-gradient-to-r from-neon-blue/10 to-transparent border-l-4 border-neon-blue pl-6 py-4 rounded-r-xl mb-6">
                    <p className="text-neon-blue font-semibold mb-1">🧠 Concepto Clave: IVs para PvP</p>
                    <p className="text-gray-400">En la Gran Liga (1500 CP) y Ultra Liga (2500 CP), los IVs óptimos son típicamente <strong className="text-white">0/15/15 (Ataque bajo, Defensa y Salud máximos)</strong>. Esto es porque un ataque más bajo permite subir al Pokémon a un nivel más alto antes de alcanzar el CP máximo de la liga, resultando en más estadísticas totales.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="glass-card rounded-xl p-5 border-l-4 border-emerald-500">
                        <h4 className="font-[var(--font-display)] text-emerald-400 font-bold mb-2 flex items-center gap-2"><Trophy size={16} /> Para Raids / PvE</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>• IVs ideales: <strong className="text-white">15/15/15</strong> (Hundo)</li>
                            <li>• Prioriza Ataque alto para DPS máximo</li>
                            <li>• Busca "3 estrellas" en la evaluación</li>
                            <li>• No inviertas en Pokémon con menos de 96% IVs</li>
                            <li>• Lucky Pokémon tienen mínimo 12/12/12</li>
                        </ul>
                    </div>
                    <div className="glass-card rounded-xl p-5 border-l-4 border-neon-blue">
                        <h4 className="font-[var(--font-display)] text-neon-blue font-bold mb-2 flex items-center gap-2"><Shield size={16} /> Para PvP</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>• IVs ideales: <strong className="text-white">0/15/15</strong> o cercano</li>
                            <li>• Usa herramientas como PvPoke o PoGo Ranking</li>
                            <li>• Cada Pokémon tiene IVs ideales diferentes</li>
                            <li>• Las intercambios con Lucky Friends NO dan buenos IVs PvP</li>
                            <li>• Los Pokémon de investigación tienen mínimo 10/10/10 (evitar para PvP)</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 4 - PvP Teams */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-sm font-bold">4</div>
                    Gran Liga y Ultra Liga: Mejores Equipos
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    El PvP de Pokémon GO (Combates GO) se ha convertido en uno de los aspectos más competitivos del juego. Elegir el equipo correcto requiere entender el <strong className="text-white">triángulo de tipos, cobertura de carga, y alineación de leads</strong>.
                </p>
                <h3 className="font-[var(--font-display)] text-xl font-bold text-white mb-4">Gran Liga (1500 CP)</h3>
                <div className="space-y-3 mb-8">
                    {[
                        { team: 'Medicham (Lead) + Registeel + Sableye', style: 'ABB Balance', desc: 'El equipo más consistente del meta. Medicham cubre la mayoría de amenazas como lead, Registeel presiona escudos, y Sableye limpia en el cierre.' },
                        { team: 'Galarian Stunfisk (Lead) + Azumarill + Trevenant', style: 'Bulk + Control', desc: 'Máxima durabilidad. G-Stunfisk atrapa amenazas de acero, Azumarill presiona con Play Rough, y Trevenant controla fantasmas y aguas.' },
                        { team: 'Lickitung (Lead) + Lanturn + Annihilape', style: 'Safe Swap', desc: 'Lickitung es el lead más seguro del meta. Lanturn cubre voladores y aguas, mientras Annihilape proporciona presión fantasma/lucha.' },
                    ].map((team, i) => (
                        <div key={i} className="glass-card rounded-xl p-6 border-l-4 border-emerald-500/50">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full font-[var(--font-display)]">{team.style}</span>
                            </div>
                            <h4 className="font-[var(--font-display)] text-white font-bold mb-2">{team.team}</h4>
                            <p className="text-gray-400 text-sm">{team.desc}</p>
                        </div>
                    ))}
                </div>

                <h3 className="font-[var(--font-display)] text-xl font-bold text-white mb-4">Ultra Liga (2500 CP)</h3>
                <div className="space-y-3">
                    {[
                        { team: 'Giratina Altered (Lead) + Cresselia + Registeel', style: 'Tanque Triple', desc: 'El equipo más resistente de Ultra Liga. Giratina presiona con Shadow Claw, Cresselia cura y debuffea, Registeel cierra con Focus Blast.' },
                        { team: 'Talonflame (Lead) + Walrein + Cobalion', style: 'Agresivo', desc: 'Talonflame genera presión inmediata con Incinerate. Walrein proporciona cobertura de hielo y Cobalion añade acero/lucha.' },
                    ].map((team, i) => (
                        <div key={i} className="glass-card rounded-xl p-6 border-l-4 border-neon-purple/50">
                            <div className="flex items-center gap-2 mb-1"><span className="text-[10px] bg-neon-purple/10 text-neon-purple px-2 py-0.5 rounded-full font-[var(--font-display)]">{team.style}</span></div>
                            <h4 className="font-[var(--font-display)] text-white font-bold mb-2">{team.team}</h4>
                            <p className="text-gray-400 text-sm">{team.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Ad: Medium Rectangle */}
            <div className="flex justify-center my-8">
                <AdBanner size="300x250" />
            </div>

            {/* Section 5 - Referrals */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-sm font-bold text-black">5</div>
                    Sistema de Referidos y Códigos
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    El sistema de referidos de Pokémon GO permite que entrenadores nuevos (o aquellos que regresan tras más de 90 días de inactividad) <strong className="text-white">reciban recompensas significativas</strong> al usar un código de referido de otro jugador.
                </p>
                <div className="glass-card rounded-xl p-6 mb-6">
                    <h4 className="font-[var(--font-display)] text-gold font-bold mb-3">Recompensas del Sistema de Referidos</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                            { reward: '100 Poké Balls', icon: '🔴' },
                            { reward: '1 Incubadora', icon: '🥚' },
                            { reward: '30 Great Balls', icon: '🔵' },
                            { reward: '1 Star Piece', icon: '⭐' },
                        ].map((item, i) => (
                            <div key={i} className="bg-dark-800/50 rounded-lg p-3 text-center">
                                <span className="text-2xl">{item.icon}</span>
                                <p className="text-white text-sm font-semibold mt-1">{item.reward}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                    Para compartir tu código de referido: ve a <strong className="text-white">Perfil → Amigos → Invitar</strong>. Tu código único aparecerá y podrás copiarlo para compartirlo. Ambos jugadores reciben recompensas cuando el referido completa ciertos hitos de progresión.
                </p>
            </section>

            {/* Section 6 - Medals */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-sm font-bold">6</div>
                    Medallas de Platino y Ruta al Nivel 50+
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    A partir del nivel 40, la progresión requiere completar <strong className="text-white">requisitos específicos de medallas y tareas</strong> además de acumular XP. Las medallas de platino son especialmente importantes ya que muchas son requisito obligatorio para avanzar entre los niveles 41-50.
                </p>
                <div className="space-y-3 mb-6">
                    {[
                        { medal: 'Coleccionista', req: 'Capturar 50,000 Pokémon', tip: 'Usa Gotcha/Go Plus para captura automática. Star Piece + Incienso en eventos = máxima eficiencia. Apunta a 200+ capturas por sesión con Auto-catch.', level: 'Req. Nivel 42' },
                        { medal: 'Excursionista', req: 'Caminar 10,000 km', tip: 'La Sincronización de Aventuras cuenta pasos sin tener el juego abierto. Vincula con Google Fit o Apple Health para tracking 24/7.', level: 'Req. Nivel 44' },
                        { medal: 'Científico', req: 'Evolucionar 2,000 Pokémon', tip: 'Guarda Pokémon baratos de evolucionar (Pidgey, Weedle). Usa Lucky Egg durante sesiones masivas de evolución para XP doble.', level: 'Req. Nivel 45' },
                        { medal: 'Pikachu Fan', req: 'Capturar 1,000 Pikachu', tip: 'Los eventos de Pikachu con sombrero son frecuentes. Activa señuelos durante Spotlight Hour de Pikachu. Los nidos de Pikachu rotan cada 2 semanas.', level: 'Req. Nivel 48' },
                    ].map((item, i) => (
                        <div key={i} className="glass-card rounded-xl p-6 flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shrink-0">
                                <Trophy size={18} className="text-white" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 flex-wrap mb-1">
                                    <h4 className="font-[var(--font-display)] text-white font-bold">{item.medal}</h4>
                                    <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full font-[var(--font-display)]">{item.level}</span>
                                </div>
                                <p className="text-gray-400 text-sm mb-1"><strong className="text-gray-300">Requisito:</strong> {item.req}</p>
                                <p className="text-gray-500 text-sm"><strong className="text-emerald-400">Tip:</strong> {item.tip}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Ad: Full Banner */}
            <div className="flex justify-center my-8">
                <AdBanner size="468x60" />
            </div>

            {/* Section 7 - Events */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-sm font-bold">7</div>
                    Calendario de Eventos Febrero 2026
                </h2>
                <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-emerald-500/30">
                                <th className="text-left py-3 px-4 font-[var(--font-display)] text-emerald-400 text-xs tracking-wider uppercase">Fecha</th>
                                <th className="text-left py-3 px-4 font-[var(--font-display)] text-emerald-400 text-xs tracking-wider uppercase">Evento</th>
                                <th className="text-left py-3 px-4 font-[var(--font-display)] text-emerald-400 text-xs tracking-wider uppercase">Destacado</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300">
                            {[
                                ['Feb 1-14', 'Festival del Amor', 'Luvdisc shiny, polvos ×2, huevos temáticos'],
                                ['Feb 8', 'Community Day', 'Pokémon destacado con movimiento exclusivo + polvo ×3'],
                                ['Feb 14', 'Raid Day Especial', 'Jefe legendario con shiny rate incrementado'],
                                ['Feb 15-20', 'Semana de Aventura', 'Huevos 5km con Pokémon raros, incubadora gratis'],
                                ['Feb 22', 'Spotlight Hour', 'Pokémon especial + caramelos ×2 por transferencia'],
                                ['Feb 25-28', 'GO Battle Weekend', 'Sets de combate extra + recompensas de polvo incrementadas'],
                            ].map((row, i) => (
                                <tr key={i} className={`border-b border-dark-600 ${i % 2 === 0 ? 'bg-dark-800/30' : ''}`}>
                                    <td className="py-3 px-4 text-emerald-400 font-semibold font-mono">{row[0]}</td>
                                    <td className="py-3 px-4 text-white">{row[1]}</td>
                                    <td className="py-3 px-4">{row[2]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>


            {/* Native Banner Ad */}
            <div className="flex justify-center my-8">
                <NativeBanner />
            </div>

            {/* Conclusion */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-sm font-bold">8</div>
                    Conclusión
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    Pokémon GO en 2026 no es el mismo juego casual que debutó hace una década. Es un ecosistema complejo de <strong className="text-white">estadísticas, optimización de recursos y competitividad</strong> que recompensa al jugador informado. Dominar el farmeo de polvos estelares, entender los IVs para PvP y participar estratégicamente en eventos puede transformar completamente tu experiencia.
                </p>
                <p className="text-gray-300 leading-relaxed">
                    La comunidad latina de Pokémon GO sigue creciendo, con grupos locales en cada ciudad organizando raids y encuentros. Únete a tu comunidad local, comparte esta guía con tus amigos entrenadores y recuerda: <strong className="text-emerald-400">cada Pokémon capturado es un paso más hacia la maestría</strong>.
                </p>
            </section>

            {/* Author */}
            <div className="glass-card rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-800 flex items-center justify-center shrink-0">
                    <Bug size={28} className="text-white" />
                </div>
                <div>
                    <p className="font-[var(--font-display)] font-bold text-emerald-400 mb-1">Escrito por TrainerElite</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Entrenador de Pokémon GO desde el Day 1 (julio 2016). Nivel 50 verificado con más de 350,000 Pokémon capturados. Campeón regional de Combates GO en múltiples temporadas. Especializado en análisis de IVs y optimización de recursos.
                    </p>
                </div>
            </div>
        </article>
    );
}
