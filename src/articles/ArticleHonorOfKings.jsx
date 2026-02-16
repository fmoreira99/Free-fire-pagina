import { Crown, Swords, Star, Gift, Coins, Shield, Users, TrendingUp, Zap } from 'lucide-react';

export default function ArticleHonorOfKings() {
    return (
        <article className="max-w-4xl mx-auto">
            <header className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 text-[10px] font-bold tracking-widest rounded-full bg-gradient-to-r from-gold to-gold-dark text-black font-[var(--font-display)]">MOBA MOBILE</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm font-[var(--font-display)]">Actualizado Febrero 2026</span>
                </div>
                <h1 className="font-[var(--font-display)] text-3xl md:text-5xl font-black leading-tight mb-4">
                    <span className="text-shimmer">Honor of Kings 2026:</span>{' '}
                    <span className="text-white">Guía Completa de Monedas, Códigos de Regalo y Estrategia Competitiva</span>
                </h1>
                <p className="text-lg text-gray-400 leading-relaxed mb-6">
                    Todo lo que necesitas saber sobre Honor of Kings, el MOBA móvil más lucrativo del mundo. Monedas, progresión de héroes, códigos de regalo activos y la estrategia para dominar el competitivo en Latinoamérica.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2"><Crown size={14} className="text-gold" /><span>Por <strong className="text-gold">GloryKnight</strong></span></div>
                    <span>•</span><span>20 min de lectura</span><span>•</span><span>156,890 visitas</span>
                </div>
            </header>

            <img src="https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?q=80&w=1200&auto=format&fit=crop" alt="Honor of Kings MOBA" className="w-full h-64 md:h-80 object-cover rounded-2xl mb-10 border border-gold/20" />

            <nav className="glass-card rounded-xl p-6 mb-10">
                <h2 className="font-[var(--font-display)] text-lg font-bold text-gold mb-4 flex items-center gap-2"><Star size={18} /> Tabla de Contenidos</h2>
                <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                    <li className="hover:text-gold transition-colors cursor-pointer">Honor of Kings: El Nuevo Gigante MOBA</li>
                    <li className="hover:text-gold transition-colors cursor-pointer">Sistema de Monedas y Progresión</li>
                    <li className="hover:text-gold transition-colors cursor-pointer">Códigos de Regalo y Canje</li>
                    <li className="hover:text-gold transition-colors cursor-pointer">Top 10 Héroes del Meta Actual</li>
                    <li className="hover:text-gold transition-colors cursor-pointer">Arcanas: Guía de Configuración Óptima</li>
                    <li className="hover:text-gold transition-colors cursor-pointer">Estrategia de Carriles y Rotaciones</li>
                    <li className="hover:text-gold transition-colors cursor-pointer">Métodos de Recarga con Descuento</li>
                    <li className="hover:text-gold transition-colors cursor-pointer">Conclusión</li>
                </ol>
            </nav>

            {/* Section 1 */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-sm font-bold text-black">1</div>
                    Honor of Kings: El Nuevo Gigante MOBA
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    Con su lanzamiento global que consolidó su posición como el <strong className="text-white">juego móvil con mayores ingresos en enero de 2026</strong>, Honor of Kings (HoK) se ha convertido en una prioridad para los creadores de contenido de gaming. Tras su éxito masivo en Brasil — donde alcanzó el top 1 de descargas en apenas 72 horas — el juego ha captado el interés de todo el mercado latinoamericano.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                    Lo que distingue a Honor of Kings de otros MOBAs como Mobile Legends o Wild Rift es su <strong className="text-white">enfoque en la accesibilidad sin sacrificar la profundidad competitiva</strong>. Las partidas duran entre 12 y 18 minutos, los héroes son intuitivos pero tienen un techo de habilidad alto, y el sistema de matchmaking prioriza partidas equilibradas sobre tiempos de espera cortos.
                </p>
                <div className="bg-gradient-to-r from-gold/10 to-transparent border-l-4 border-gold pl-6 py-4 rounded-r-xl">
                    <p className="text-gold font-semibold mb-1">🌟 Récord de la Industria</p>
                    <p className="text-gray-400">Honor of Kings generó más de $300 millones de dólares en ingresos durante enero 2026, convirtiéndose en el juego móvil más lucrativo del mes a nivel global.</p>
                </div>
            </section>

            {/* Section 2 - Currencies */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-sm font-bold text-black">2</div>
                    Sistema de Monedas y Progresión
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    La economía de Honor of Kings se basa en <strong className="text-white">tres monedas principales</strong> que los jugadores deben gestionar inteligentemente para maximizar su progresión.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {[
                        { name: 'Starstones', icon: '⭐', color: 'text-neon-blue', desc: 'Moneda principal para desbloquear héroes y mejorar las páginas de Arcanas. Se obtienen jugando partidas, completando misiones diarias y participando en eventos temporales. Esenciales para el balance de poder inicial en las partidas.', tips: ['Juega 5 partidas diarias para máximo ingreso', 'Completa todas las misiones semanales', 'No gastes en héroes que no necesitas'] },
                        { name: 'Diamonds', icon: '💎', color: 'text-neon-purple', desc: 'Moneda secundaria obtenida a través de logros, eventos diarios y recompensas de temporada. Se utilizan para utilidades menores, sorteos de ítems raros y compras de temporada en la tienda.', tips: ['Ahorra para eventos con descuento', 'Prioriza sorteos con probabilidad incrementada', 'Canjea en la tienda de eventos temporales'] },
                        { name: 'Tokens', icon: '🪙', color: 'text-gold', desc: 'La moneda premium del juego. Se adquiere con dinero real o a través de socios oficiales de recarga. Permite comprar skins exclusivas, pases de batalla y contenido premium.', tips: ['Busca descuentos en LootBar o GamsGo', 'Espera a eventos de recarga doble', 'Compra el Pase de Batalla para máximo valor'] },
                    ].map((currency, i) => (
                        <div key={i} className="glass-card rounded-xl p-5">
                            <div className="text-center mb-3">
                                <span className="text-3xl">{currency.icon}</span>
                                <h4 className={`font-[var(--font-display)] ${currency.color} font-bold text-lg mt-1`}>{currency.name}</h4>
                            </div>
                            <p className="text-gray-400 text-sm mb-3">{currency.desc}</p>
                            <ul className="space-y-1">
                                {currency.tips.map((tip, j) => (
                                    <li key={j} className="text-gray-500 text-xs flex items-start gap-1"><span className="text-fire-500 mt-0.5">•</span> {tip}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 3 - Codes */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-sm font-bold text-black">3</div>
                    Códigos de Regalo y Canje
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Al ser un juego relativamente nuevo para muchos en la región, existe una <strong className="text-white">alta demanda de tutoriales sobre cómo y dónde canjear</strong> los códigos de regalo. Los códigos de HoK suelen otorgar "Everything Boxes", fragmentos de héroes y cartas de prueba de skins.
                </p>
                <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gold/30">
                                <th className="text-left py-3 px-4 font-[var(--font-display)] text-gold text-xs tracking-wider uppercase">Código</th>
                                <th className="text-left py-3 px-4 font-[var(--font-display)] text-gold text-xs tracking-wider uppercase">Recompensa</th>
                                <th className="text-center py-3 px-4 font-[var(--font-display)] text-gold text-xs tracking-wider uppercase">Vigencia</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300">
                            {[
                                ['HAPPY2026', 'Paquete de bienvenida de año', 'Febrero 2026'],
                                ['FROSTGIFT', 'Ítems estacionales de invierno', 'Febrero 2026'],
                                ['LOVEGGZ', '200 Dragon Tokens', 'Especial San Valentín'],
                                ['HOKFANS', '2 Skin Fragments + 1 Hero Pearl', 'Permanente (Nuevos)'],
                                ['GLORYUP', 'Starstones adicionales', 'Promocional'],
                            ].map((row, i) => (
                                <tr key={i} className={`border-b border-dark-600 ${i % 2 === 0 ? 'bg-dark-800/30' : ''} hover:bg-gold/5 transition-colors`}>
                                    <td className="py-3 px-4"><code className="bg-dark-700 px-2 py-1 rounded text-gold font-mono text-xs border border-dark-500">{row[0]}</code></td>
                                    <td className="py-3 px-4 text-white">{row[1]}</td>
                                    <td className="py-3 px-4 text-center text-gray-400">{row[2]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <h3 className="font-[var(--font-display)] text-xl font-bold text-white mb-3">Cómo Canjear Códigos en Honor of Kings</h3>
                <ol className="space-y-3 text-gray-300 mb-4">
                    {[
                        'Abre Honor of Kings y pulsa tu icono de perfil en la esquina superior.',
                        'Ve a Configuración → Centro de Canje o busca la opción "Gift Code" en el menú.',
                        'Introduce el código exactamente como aparece en la tabla (respeta mayúsculas).',
                        'Presiona "Canjear" y revisa tu buzón de correo dentro del juego para reclamar las recompensas.',
                    ].map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="w-6 h-6 rounded-full bg-gold text-black text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">{i + 1}</span>
                            <span>{step}</span>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Section 4 - Heroes */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-sm font-bold text-black">4</div>
                    Top 10 Héroes del Meta Actual
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    El meta de Honor of Kings en febrero 2026 favorece a los héroes con <strong className="text-white">alta movilidad y capacidad de impacto en peleas de equipo</strong>. Estos son los 10 héroes con mejor rendimiento en clasificatoria de Diamante y superior.
                </p>
                <div className="space-y-3">
                    {[
                        { name: 'Musashi', role: 'Jungla', tier: 'S+', desc: 'El asesino más dominante del meta. Su movilidad y burst damage lo hacen imparable en manos expertas.' },
                        { name: 'Ying Zheng', role: 'Mago', tier: 'S', desc: 'Control masivo de área con damage sostenido. Domina las peleas de equipo desde la retaguardia.' },
                        { name: 'Lu Bu', role: 'Guerrero', tier: 'S', desc: 'El tanque-bruiser que puede 1v2 con facilidad. Su regeneración lo hace extremadamente difícil de eliminar.' },
                        { name: 'Marco Polo', role: 'Tirador', tier: 'S', desc: 'DPS físico móvil con daño verdadero. Requiere posicionamiento preciso pero recompensa con un output devastador.' },
                        { name: 'Yaria', role: 'Soporte', tier: 'S', desc: 'La mejor soporte del momento. Curación masiva, CC y escudos que mantienen al equipo vivo en peleas críticas.' },
                        { name: 'Sun Wukong', role: 'Jungla', tier: 'A+', desc: 'Versatilidad extrema entre assassin y bruiser. Sus clones confunden al enemigo y generan presión en múltiples carriles.' },
                        { name: 'Diaochan', role: 'Maga', tier: 'A+', desc: 'Control de zona con su ultimate que congela toda un área. Contra-pick perfecto contra composiciones melee.' },
                        { name: 'Arthur', role: 'Tanque', tier: 'A', desc: 'El tanque más accesible y consistente. Ideal para principiantes que quieren impactar sin mecánicas complejas.' },
                        { name: 'Shangguan Wan Er', role: 'Maga Asesina', tier: 'A', desc: 'Maga de burst con movilidad. Entra, elimina y Sale. Requiere timing preciso en sus habilidades.' },
                        { name: 'Garo', role: 'Guerrero', tier: 'A', desc: 'Control de carril sólido con buena escala a late game. Su ataque reforzado rompe escudos con facilidad.' },
                    ].map((hero, i) => (
                        <div key={i} className="glass-card rounded-xl p-4 flex items-center gap-4 hover:border-gold/30 transition-colors">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-[var(--font-display)] font-bold text-sm ${hero.tier.includes('S') ? 'bg-gradient-to-br from-gold to-gold-dark text-black' : 'bg-dark-600 text-gray-300'}`}>
                                {i + 1}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-[var(--font-display)] text-white font-bold">{hero.name}</span>
                                    <span className="text-[10px] bg-dark-600 px-2 py-0.5 rounded-full text-gray-400 font-[var(--font-display)]">{hero.role}</span>
                                    <span className={`text-[10px] font-bold font-[var(--font-display)] ${hero.tier.includes('S') ? 'text-gold' : 'text-neon-blue'}`}>{hero.tier}</span>
                                </div>
                                <p className="text-gray-500 text-sm mt-0.5">{hero.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 5 - Arcanas */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-sm font-bold text-black">5</div>
                    Arcanas: Guía de Configuración Óptima
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    Las Arcanas son el sistema de <strong className="text-white">runas/potenciadores pasivos</strong> que otorgan estadísticas base adicionales antes de que la partida comience. Configurar correctamente tus páginas de Arcana puede darte una ventaja de hasta un 15% en estadísticas respecto a un jugador sin Arcanas.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {[
                        { role: 'Asesino / Jungla', arcanas: 'Penetración Física + Velocidad de Ataque + Daño Físico', priority: 'Onslaught + Guerrilla + Eagle Eye' },
                        { role: 'Mago / Control', arcanas: 'Penetración Mágica + Velocidad de Movimiento + Poder Mágico', priority: 'Sap + Void + Devour' },
                        { role: 'Tirador / ADC', arcanas: 'Daño Físico + Velocidad de Ataque + Golpe Crítico', priority: 'Atrocity + Guerrilla + Eagle Eye' },
                        { role: 'Tanque / Soporte', arcanas: 'HP Máximo + Defensa Física + Regeneración', priority: 'Indomitable + Benevolence + Valiance' },
                    ].map((config, i) => (
                        <div key={i} className="glass-card rounded-xl p-5">
                            <h4 className="font-[var(--font-display)] text-gold font-bold mb-2">{config.role}</h4>
                            <p className="text-gray-400 text-sm mb-2"><strong className="text-gray-300">Stats prioritarios:</strong> {config.arcanas}</p>
                            <p className="text-gray-400 text-sm"><strong className="text-neon-blue">Arcanas recomendadas:</strong> {config.priority}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-sm font-bold text-black">6</div>
                    Estrategia de Carriles y Rotaciones
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    A diferencia de otros MOBAs, Honor of Kings tiene un <strong className="text-white">ritmo de juego más rápido</strong> con primeros objetivos de mapa apareciendo a los 2 minutos. Entender las rotaciones tempranas es clave para ganar ventaja desde el inicio.
                </p>
                <div className="space-y-3">
                    {[
                        { phase: 'Minutos 0-3: Fase de Líneas', desc: 'El jungla debe limpiar su primer circuito y gankear el carril central o el carril corto. El soporte debe rotar al río para obtener visión y proteger al tirador. El carril largo (offlane) debe enfocarse en sobrevivir y acumular experiencia.' },
                        { phase: 'Minutos 3-8: Fase de Objetivos', desc: 'El Dragón aparece a los 3 minutos. El equipo debe priorizar el primer dragón para obtener buffs de equipo. Las rotaciones grupales al carril central comienzan y las primeras torres caen. El jungla debe controlar los objetivos neutrales.' },
                        { phase: 'Minutos 8-15: Fase de Equipo', desc: 'Las peleas de equipo deciden el juego. El Lord (equivalente al Barón de LoL) aparece y se convierte en el objetivo principal. La composición de equipo importa más que las estadísticas individuales. Posicionamiento y timing son la clave. Un buen engage puede decide toda la partida.' },
                    ].map((phase, i) => (
                        <div key={i} className="glass-card rounded-xl p-6 border-l-4 border-gold/50">
                            <h4 className="font-[var(--font-display)] text-gold font-bold mb-2">{phase.phase}</h4>
                            <p className="text-gray-400">{phase.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 7 - Recharge */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-sm font-bold text-black">7</div>
                    Métodos de Recarga con Descuento
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    Los jugadores que buscan invertir en Honor of Kings pueden ahorrar significativamente utilizando <strong className="text-white">socios oficiales de recarga</strong> en lugar de la tienda interna del juego. Estos servicios ofrecen descuentos de entre 5% y 20% en Tokens.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { platform: 'LootBar', discount: 'Hasta 15% descuento', desc: 'Plataforma oficial asociada con recarga directa a tu cuenta. Pagos con tarjeta, PayPal y métodos locales.' },
                        { platform: 'GamsGo', discount: 'Hasta 12% descuento', desc: 'Servicio de recarga con bonos adicionales por primera compra. Soporte en español disponible.' },
                        { platform: 'Codashop', discount: 'Hasta 10% descuento', desc: 'Plataforma reconocida en gaming móvil. Recarga directa sin necesidad de login. Pagos locales disponibles.' },
                        { platform: 'Google Play / App Store', discount: 'Precio base', desc: 'Método más directo pero sin descuentos. Útil si tienes saldo de tarjetas de regalo.' },
                    ].map((item, i) => (
                        <div key={i} className="glass-card rounded-xl p-5">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-[var(--font-display)] text-white font-bold">{item.platform}</h4>
                                <span className="text-xs text-green-400 font-[var(--font-display)]">{item.discount}</span>
                            </div>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-sm font-bold text-black">8</div>
                    Conclusión
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    Honor of Kings se ha posicionado como el <strong className="text-white">MOBA móvil de referencia para 2026</strong> en Latinoamérica. Su combinación de accesibilidad, profundidad competitiva y un sistema de recompensas generoso lo convierten en una experiencia imprescindible para cualquier jugador móvil.
                </p>
                <p className="text-gray-300 leading-relaxed">
                    Ya sea que busques escalar en clasificatoria, coleccionar skins o simplemente disfrutar de partidas casuales con amigos, esta guía te proporciona las herramientas necesarias para maximizar tu experiencia. Recuerda canjear los <strong className="text-gold">códigos de regalo</strong> antes de que expiren y configurar tus Arcanas correctamente para obtener la ventaja desde el minuto cero.
                </p>
            </section>

            {/* Author */}
            <div className="glass-card rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shrink-0">
                    <Crown size={28} className="text-black" />
                </div>
                <div>
                    <p className="font-[var(--font-display)] font-bold text-gold mb-1">Escrito por GloryKnight</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Ex-profesional de MOBAs móviles con experiencia en Arena of Valor y Honor of Kings. Rango King of Kings durante 8 temporadas. Analista de meta y coach competitivo especializado en el mercado latinoamericano.
                    </p>
                </div>
            </div>
        </article>
    );
}
