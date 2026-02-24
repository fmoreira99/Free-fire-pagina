import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Zap, Shield, Crown, X } from 'lucide-react';

// --- CONFIGURACIÓN DE PREMIOS MÍTICO ---
const REWARDS_DATA = [
    { id: 1, name: 'Premio Especial 1', image: '/rewards/01c5668b3bb93c5c73658acc2dfb2823.png?v=7', color: '#FFD700', link: 'https://omg10.com/4/10193937' },
    { id: 2, name: 'Premio Especial 2', image: '/rewards/0d3e888a3e44e38bcf1bf78a7a500f8b.png?v=7', color: '#CC66FF', link: 'https://omg10.com/4/10615693' },
    { id: 3, name: '142 1420727 Armas De Free Fire M4A1 Hd Png Download', image: '/rewards/142-1420727_armas-de-free-fire-m4a1-hd-png-download.png?v=7', color: '#FF1A1A', link: 'https://omg10.com/4/10193957' },
    { id: 4, name: 'Premio Especial 4', image: '/rewards/22fcc223f1d2144fb38b02146e0b8118.png?v=7', color: '#00D4FF', link: 'https://omg10.com/4/10193949' },
    { id: 5, name: '2E9C951Ed880Xm8', image: '/rewards/2e9c951ed880XM8.png?v=7', color: '#FFB800', link: 'https://omg10.com/4/10193955' },
    { id: 6, name: 'Premio Especial 6', image: '/rewards/5f26973dc155019654ed4d86cdac2a45.png?v=7', color: '#8B00FF', link: 'https://omg10.com/4/10193950' },
    { id: 7, name: 'Premio Especial 7', image: '/rewards/7755f31db2a8e7dc21e4ab09a8e3d910.png?v=7', color: '#00FF88', link: 'https://omg10.com/4/10193953' },
    { id: 8, name: 'Premio Especial 8', image: '/rewards/796494dc5f4793d90db07ab22cafdc61.png?v=7', color: '#FF6B00', link: 'https://omg10.com/4/10193956' },
    { id: 9, name: 'Premio Especial 9', image: '/rewards/8011eaac73283d9e6dc63e7aa319d406.png?v=7', color: '#FFD700', link: 'https://omg10.com/4/10193951' },
    { id: 10, name: 'Premio Especial 10', image: '/rewards/872c428c4aae92528ef78c2615fe45fd.png?v=7', color: '#CC66FF', link: 'https://omg10.com/4/10147861' },
    { id: 11, name: 'Premio Especial 11', image: '/rewards/87c930cbb42948e28fbcdfe7301a0700.png?v=7', color: '#FF1A1A', link: 'https://www.effectivegatecpm.com/rcbsrwxv58?key=4252999d93bfecfc4aa4dcf8f91fc03b' },
    { id: 12, name: 'Dragon Lv7A', image: '/rewards/Dragon_LV7A.png?v=7', color: '#00D4FF', link: 'https://www.effectivegatecpm.com/wqgi71hemu?key=34a9f666596b818861f49f84becb685e' },
    { id: 13, name: 'Free Fire Andrew Character', image: '/rewards/Free-Fire-Andrew-Character.png?v=7', color: '#FFB800', link: 'https://www.effectivegatecpm.com/ttb74c8tq8?key=af1a97f37f5a027bd3d0829a26a90e6e' },
    { id: 14, name: 'Free Fire Andrew Character', image: '/rewards/Free-Fire-Andrew-Character.webp?v=7', color: '#8B00FF', link: 'https://www.effectivegatecpm.com/pedjvcva?key=5509ba6b1262369b745cbbc664af8c5d' },
    { id: 15, name: 'Free Fire Png Descarga Gratis 18', image: '/rewards/Free-Fire-PNG-Descarga gratis (18).png?v=7', color: '#00FF88', link: 'https://www.effectivegatecpm.com/r4495dauq?key=0f15c64a0e85e948409ee9ae93dbff2b' },
    { id: 16, name: 'Free Fire Png Descarga Gratis 18', image: '/rewards/Free-Fire-PNG-Descarga gratis (18).webp?v=7', color: '#FF6B00', link: 'https://www.effectivegatecpm.com/rgtfqwe9?key=17ef86cb7dfb7aaf61b51b12f8f1cdc5' },
    { id: 17, name: 'Gemini Generated Image Bu2Jawbu2Jawbu2J', image: '/rewards/Gemini_Generated_Image_bu2jawbu2jawbu2j.png?v=7', color: '#FFD700', link: 'https://www.effectivegatecpm.com/d1rfhq04x?key=4f4f9fdf2187e0f0c444b4be9a4a33d0' },
    { id: 18, name: 'Otho Aspecto Catrin De Oro', image: '/rewards/Otho-Aspecto-Catrin-de-Oro.png?v=7', color: '#CC66FF', link: 'https://www.effectivegatecpm.com/w0u5v8geyf?key=9cc891f6d793faf25e8f4f4b71b85fb1' },
    { id: 19, name: 'Otho Aspecto Catrin De Oro', image: '/rewards/Otho-Aspecto-Catrin-de-Oro.webp?v=7', color: '#FF1A1A', link: 'https://www.effectivegatecpm.com/b3yjr1t700?key=9a9698f66a79ca46b2bee9d3e44f0562' },
    { id: 20, name: 'Otho Aspecto Papel Picado', image: '/rewards/Otho-Aspecto-Papel-Picado.png?v=7', color: '#00D4FF', link: 'https://omg10.com/4/10193937' },
    { id: 21, name: 'Otho Aspecto Papel Picado', image: '/rewards/Otho-Aspecto-Papel-Picado.webp?v=7', color: '#FFB800', link: 'https://omg10.com/4/10615693' },
    { id: 22, name: 'Sw Hand Cannon Render', image: '/rewards/SW_Hand_Cannon_Render.png?v=7', color: '#8B00FF', link: 'https://omg10.com/4/10193957' },
    { id: 23, name: 'A42Ed7790Ad0Icon Slot Rgs50', image: '/rewards/a42ed7790ad0Icon_slot_RGS50.png?v=7', color: '#00FF88', link: 'https://omg10.com/4/10193949' },
    { id: 24, name: 'Premio Especial 24', image: '/rewards/aadbdd7891efd4c4f6e84c713b3c80bf.png?v=7', color: '#FF6B00', link: 'https://omg10.com/4/10193955' },
    { id: 25, name: 'Premio Especial 25', image: '/rewards/bc2841b06a25d96a6f4bf2b05d9d47f7.png?v=7', color: '#FFD700', link: 'https://omg10.com/4/10193950' },
    { id: 26, name: 'Premio Especial 26', image: '/rewards/d5c0af0ac8632385f2cdb0500874b2a5.png?v=7', color: '#CC66FF', link: 'https://omg10.com/4/10193953' },
    { id: 27, name: 'Df51Nxs 22Ded7D4 60E3 498A 965C Fcd12B2A59Ea', image: '/rewards/df51nxs-22ded7d4-60e3-498a-965c-fcd12b2a59ea.png?v=7', color: '#FF1A1A', link: 'https://omg10.com/4/10193956' },
    { id: 28, name: 'Premio Especial 28', image: '/rewards/f0e9f3b4e99d48d1f8fc7361751a8f8f.png?v=7', color: '#00D4FF', link: 'https://omg10.com/4/10193951' },
    { id: 29, name: 'Free Fire Joseph Png Oer7Svt6Ssk1Nnpl', image: '/rewards/free-fire-joseph-png-oer7svt6ssk1nnpl.png?v=7', color: '#FFB800', link: 'https://omg10.com/4/10147861' },
    { id: 30, name: 'Free Fire Joseph Png Oer7Svt6Ssk1Nnpl', image: '/rewards/free-fire-joseph-png-oer7svt6ssk1nnpl.webp?v=7', color: '#8B00FF', link: 'https://www.effectivegatecpm.com/rcbsrwxv58?key=4252999d93bfecfc4aa4dcf8f91fc03b' },
    { id: 31, name: 'Free Fire Luqueta Png 6Uqo5Bf864Mwgnhw', image: '/rewards/free-fire-luqueta-png-6uqo5bf864mwgnhw.png?v=7', color: '#00FF88', link: 'https://www.effectivegatecpm.com/wqgi71hemu?key=34a9f666596b818861f49f84becb685e' },
    { id: 32, name: 'Free Fire Miguel Whole Body Png Cd37V3Bcmgne4Hpx', image: '/rewards/free-fire-miguel-whole-body-png-cd37v3bcmgne4hpx.png?v=7', color: '#FF6B00', link: 'https://www.effectivegatecpm.com/ttb74c8tq8?key=af1a97f37f5a027bd3d0829a26a90e6e' },
    { id: 33, name: 'Free Fire Miguel Whole Body Png Cd37V3Bcmgne4Hpx', image: '/rewards/free-fire-miguel-whole-body-png-cd37v3bcmgne4hpx.webp?v=7', color: '#FFD700', link: 'https://www.effectivegatecpm.com/pedjvcva?key=5509ba6b1262369b745cbbc664af8c5d' },
    { id: 34, name: 'Free Fire Moco Png Ckzw2Kw0H9Tl2B6E 1', image: '/rewards/free-fire-moco-png-ckzw2kw0h9tl2b6e (1).png?v=7', color: '#CC66FF', link: 'https://www.effectivegatecpm.com/r4495dauq?key=0f15c64a0e85e948409ee9ae93dbff2b' },
    { id: 35, name: 'Free Fire Moco Png Ckzw2Kw0H9Tl2B6E 1', image: '/rewards/free-fire-moco-png-ckzw2kw0h9tl2b6e (1).webp?v=7', color: '#FF1A1A', link: 'https://www.effectivegatecpm.com/rgtfqwe9?key=17ef86cb7dfb7aaf61b51b12f8f1cdc5' },
    { id: 36, name: 'Free Fire Moco Png Ckzw2Kw0H9Tl2B6E', image: '/rewards/free-fire-moco-png-ckzw2kw0h9tl2b6e.png?v=7', color: '#00D4FF', link: 'https://www.effectivegatecpm.com/d1rfhq04x?key=4f4f9fdf2187e0f0c444b4be9a4a33d0' },
    { id: 37, name: 'Free Fire Moco Png Ckzw2Kw0H9Tl2B6E', image: '/rewards/free-fire-moco-png-ckzw2kw0h9tl2b6e.webp?v=7', color: '#FFB800', link: 'https://www.effectivegatecpm.com/w0u5v8geyf?key=9cc891f6d793faf25e8f4f4b71b85fb1' },
    { id: 38, name: 'Free Fire Operation Chrono Png Un5Elg0Wvfp3F80T', image: '/rewards/free-fire-operation-chrono-png-un5elg0wvfp3f80t.png?v=7', color: '#8B00FF', link: 'https://www.effectivegatecpm.com/b3yjr1t700?key=9a9698f66a79ca46b2bee9d3e44f0562' },
    { id: 39, name: 'Free Fire Shani Png 74Uns6L0P8Va3Xil', image: '/rewards/free-fire-shani-png-74uns6l0p8va3xil.png?v=7', color: '#00FF88', link: 'https://omg10.com/4/10193937' },
    { id: 40, name: 'Free Fire Shani Png 74Uns6L0P8Va3Xil', image: '/rewards/free-fire-shani-png-74uns6l0p8va3xil.webp?v=7', color: '#FF6B00', link: 'https://omg10.com/4/10615693' },
    { id: 41, name: 'Images 1', image: '/rewards/images (1).png?v=7', color: '#FFD700', link: 'https://omg10.com/4/10193957' },
    { id: 42, name: 'Images 2', image: '/rewards/images (2).png?v=7', color: '#CC66FF', link: 'https://omg10.com/4/10193949' },
    { id: 43, name: 'Images', image: '/rewards/images.png?v=7', color: '#FF1A1A', link: 'https://omg10.com/4/10193955' },
    { id: 44, name: 'Png Transparent Crossfire Gun Barrel Ranged Weapon Firearm Weapon Ak47 Ammunition Weapon', image: '/rewards/png-transparent-crossfire-gun-barrel-ranged-weapon-firearm-weapon-ak47-ammunition-weapon.png?v=7', color: '#00D4FF', link: 'https://omg10.com/4/10193950' },
    { id: 45, name: 'Png Transparent Trigger H1Z1 Firearm Playerunknown S Battlegrounds Gun Hideout', image: '/rewards/png-transparent-trigger-h1z1-firearm-playerunknown-s-battlegrounds-gun-hideout.png?v=7', color: '#FFB800', link: 'https://omg10.com/4/10193953' },
    { id: 46, name: 'Pngtree The Flaming Sword Symbolizes Victory Png Image 15098329', image: '/rewards/pngtree-the-flaming-sword-symbolizes-victory-png-image_15098329.png?v=7', color: '#8B00FF', link: 'https://omg10.com/4/10193956' },
    { id: 47, name: 'Unnamed 1', image: '/rewards/unnamed (1).png?v=7', color: '#00FF88', link: 'https://omg10.com/4/10193951' },
    { id: 48, name: 'Unnamed 2', image: '/rewards/unnamed (2).png?v=7', color: '#FF6B00', link: 'https://omg10.com/4/10147861' },
    { id: 49, name: 'Unnamed', image: '/rewards/unnamed.png?v=7', color: '#FFD700', link: 'https://www.effectivegatecpm.com/rcbsrwxv58?key=4252999d93bfecfc4aa4dcf8f91fc03b' },
    { id: 50, name: 'Vibrant Modern A Steampunk Weapon A Rifle With Intricate Brass And Copper Details Glowing Orange Energy Swirling Within The Barrel Illuminated By A Dramatic Red Light', image: '/rewards/vibrant-modern-a-steampunk-weapon-a-rifle-with-intricate-brass-and-copper-details-glowing-orange-energy-swirling-within-the-barrel-illuminated-by-a-dramatic-red-light.png?v=7', color: '#CC66FF', link: 'https://www.effectivegatecpm.com/wqgi71hemu?key=34a9f666596b818861f49f84becb685e' }
];

const DIAMOND_AMOUNTS = [100, 310, 520, 1060, 2180, 5600];
const RARITIES = ['MÍTICO', 'LEGENDARIO', 'ÉPICO', 'SORPRESA', 'SECRETO', 'SORPRESA GARENA', 'VETERANO', 'ESPECIAL'];

// --- COMPONENTE DE CUENTA REGRESIVA AISLADO (PARA EVITAR RE-RENDERS) ---
const IsolatedCountdown = () => {
    const [countdown, setCountdown] = useState({ hours: 0, minutes: 45, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prev => {
                let { hours, minutes, seconds } = prev;
                if (seconds > 0) seconds--;
                else if (minutes > 0) { minutes--; seconds = 59; }
                else if (hours > 0) { hours--; minutes = 59; seconds = 59; }
                return { hours, minutes, seconds };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex justify-center items-center gap-4 md:gap-11">
            {[{ val: countdown.hours, label: 'HORAS' }, { val: countdown.minutes, label: 'MIN' }, { val: countdown.seconds, label: 'SEG' }].map((unit, idx) => (
                <div key={idx} className="flex items-center gap-4 md:gap-11">
                    <div className="flex flex-col items-center">
                        <div className="bg-black/80 border-2 border-white/10 p-7 md:p-12 rounded-3xl min-w-[95px] md:min-w-[190px] shadow-2xl">
                            <span className="block font-['Orbitron'] text-4xl md:text-8xl font-black text-white leading-none tabular-nums tracking-tighter">
                                {String(unit.val).padStart(2, '0')}
                            </span>
                        </div>
                        <span className="mt-5 text-[9px] md:text-xs font-black text-white/40 tracking-[0.5em] uppercase">{unit.label}</span>
                    </div>
                    {idx < 2 && <span className="text-2xl md:text-7xl font-black text-[#FF6B00] animate-pulse">:</span>}
                </div>
            ))}
        </div>
    );
};

// --- TARJETA DE PREMIO OPTIMIZADA ---
const RewardCard = memo(({ reward, rarity, onClaim, isClaimed }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -10 }}
            className="bg-[#0f0f1d] border-2 border-white/5 p-8 clip-reward relative overflow-hidden group hover:border-[#FF6B00]/40 transition-colors duration-300 shadow-2xl flex flex-col items-center"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

            <div className="w-44 h-44 flex items-center justify-center relative mb-8">
                {/* Glow estático detrás */}
                <div className="absolute inset-0 rounded-full opacity-30 blur-[40px] pointer-events-none" style={{ backgroundColor: reward.color }} />

                {reward.icon ? (
                    <div className="relative z-10 floating-animation">
                        <reward.icon size={100} fill={reward.color} stroke={reward.color} className="drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]" />
                    </div>
                ) : (
                    <img
                        src={reward.image}
                        alt={reward.name}
                        className="w-full h-full object-contain relative z-10 floating-animation drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                    />
                )}
            </div>

            <div className="text-center relative z-10 w-full mt-auto">
                <h4 className="font-['Orbitron'] font-black text-lg mb-2 uppercase group-hover:text-[#FF6B00] transition-colors line-clamp-1">{reward.name}</h4>
                <p className="text-white/40 text-[10px] font-bold mb-8 tracking-[0.3em] uppercase">RAREZA: {rarity}</p>

                <button
                    onClick={() => onClaim(reward)}
                    className={`w-full py-4 font-['Orbitron'] font-black text-[11px] tracking-[0.4em] uppercase transition-all clip-badge relative overflow-hidden group/btn ${isClaimed ? 'bg-white/5 text-white/20 cursor-not-allowed' : 'bg-gradient-to-r from-[#FF6B00] to-[#FF3D00] text-white hover:shadow-[0_0_25px_rgba(255,107,0,0.4)]'}`}
                >
                    <span className="relative z-10">{isClaimed ? 'CANJEADO' : 'RECLAMAR'}</span>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-150%] group-hover/btn:translate-x-[150%] transition-transform duration-1000 skew-x-[-30deg]" />
                </button>
            </div>
        </motion.div>
    );
});

export default function RewardsGenerator() {
    const [playerID, setPlayerID] = useState('');
    const [claimedIds, setClaimedIds] = useState([]);
    const [modal, setModal] = useState({ active: false, icon: null, image: '', name: '', desc: '', color: '' });
    const [toast, setToast] = useState({ show: false, text: '' });
    const [idError, setIdError] = useState(false);

    // Estados estables para premios
    const [regularRewards, setRegularRewards] = useState([]);
    const [extraRewards, setExtraRewards] = useState([]);
    const [randomRarities, setRandomRarities] = useState({});

    // Inicialización de datos solo una vez
    useEffect(() => {
        const linksPool = REWARDS_DATA.map(r => r.link);
        const generatedExtra = [];

        for (let i = 0; i < 32; i++) {
            const types = [
                { color: '#00E5FF', prefix: '💎 ', base: 'DIAMANTES', icon: Zap },
                { color: '#FF9100', prefix: '🔑 ', base: 'CÓDIGO', icon: Star },
                { color: '#D500F9', prefix: '📦 ', base: 'CAJA MISTERIOSA', icon: Shield }
            ];
            const type = types[Math.floor(Math.random() * types.length)];

            let name = "";
            if (type.base === 'DIAMANTES') {
                name = `${type.prefix}${DIAMOND_AMOUNTS[Math.floor(Math.random() * DIAMOND_AMOUNTS.length)]} ${type.base}`;
            } else if (type.base === 'CÓDIGO') {
                name = `${type.prefix}${type.base} #${Math.floor(1000 + Math.random() * 8999)}`;
            } else {
                name = `${type.prefix}${type.base}`;
            }

            generatedExtra.push({
                id: 400 + i,
                name: name,
                color: type.color,
                link: linksPool[Math.floor(Math.random() * linksPool.length)],
                isExtra: true,
                icon: type.icon
            });
        }

        setRegularRewards(REWARDS_DATA);
        setExtraRewards(generatedExtra);

        const rr = {};
        [...REWARDS_DATA, ...generatedExtra].forEach(r => {
            rr[r.id] = RARITIES[Math.floor(Math.random() * RARITIES.length)];
        });
        setRandomRarities(rr);
    }, []);

    const handleClaim = (reward) => {
        if (!playerID || playerID.length < 5) {
            setToast({ show: true, text: '⚠️ INGRESA TU ID DE JUGADOR' });
            setIdError(true);
            setTimeout(() => {
                setToast({ show: false, text: '' });
                setIdError(false);
            }, 3000);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        if (claimedIds.includes(reward.id)) return;
        setClaimedIds(prev => [...prev, reward.id]);
        window.open(reward.link, '_blank');
        setModal({
            active: true,
            icon: reward.icon || null,
            image: reward.image || '',
            name: reward.name,
            color: reward.color,
            desc: `¡REGISTRO COMPLETADO! Procesaremos el envío a tu ID ${playerID} en un máximo de 24 horas.`
        });
    };

    return (
        <div className="rewards-generator-root bg-[#0A0A0F] text-white min-h-screen font-['Exo_2',_sans-serif] relative pb-20 overflow-x-hidden">
            <style jsx>{`
                .clip-badge { clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%); }
                .clip-reward { clip-path: polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px)); }
                
                /* Animación fluida de flotación con CSS (Más estable que JS) */
                @keyframes float-y {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(3deg); }
                }
                .floating-animation {
                    animation: float-y 4s ease-in-out infinite;
                    will-change: transform;
                }
                
                .shimmer-text {
                    animation: shimmer 3s infinite linear;
                    background: linear-gradient(90deg, #FF6B00, #FFD700, #FF6B00);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                @keyframes shimmer { to { background-position: 200% center; } }

                .input-error {
                    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both, pulse-red 2s infinite;
                    border-color: #FF1A1A !important;
                    box-shadow: 0 0 30px rgba(255, 26, 26, 0.5);
                }

                @keyframes shake {
                    10%, 90% { transform: translate3d(-1px, 0, 0); }
                    20%, 80% { transform: translate3d(2px, 0, 0); }
                    30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
                    40%, 60% { transform: translate3d(4px, 0, 0); }
                }

                @keyframes pulse-red {
                    0% { box-shadow: 0 0 0 0 rgba(255, 26, 26, 0.7); }
                    70% { box-shadow: 0 0 0 20px rgba(255, 26, 26, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(255, 26, 26, 0); }
                }

                /* Partículas del Modal */
                @keyframes float-particle {
                    0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
                    20% { opacity: 0.5; }
                    50% { transform: translateY(-40px) translateX(20px) scale(1.2); opacity: 0.8; }
                    80% { opacity: 0.5; }
                    100% { transform: translateY(-100px) translateX(-20px) scale(0.8); opacity: 0; }
                }
                .particle {
                    position: absolute;
                    background: white;
                    border-radius: 50%;
                    pointer-events: none;
                    filter: blur(1px);
                    animation: float-particle linear infinite;
                }
            `}</style>

            <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,107,0,0.1),transparent_70%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12">
                {/* ID SECTION */}
                <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-black/60 backdrop-blur-3xl border-2 border-[#FF6B00]/40 p-10 clip-reward text-center mb-16">
                    <h2 className="font-['Orbitron'] text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase">ID DE <span className="text-[#FF6B00]">JUGADOR</span></h2>
                    <input
                        type="text"
                        placeholder="EJ: 123456789"
                        value={playerID}
                        onChange={(e) => setPlayerID(e.target.value.replace(/[^0-9]/g, ''))}
                        className={`w-full max-w-xl bg-white/5 border-2 px-10 py-6 text-center font-['Orbitron'] text-3xl tracking-[0.5em] text-[#FFD700] outline-none clip-badge transition-all duration-300 ${idError ? 'input-error border-[#FF1A1A]' : 'border-[#FF6B00]/30'}`}
                    />
                </motion.div>

                {/* COUNTDOWN (Isolated component) */}
                <div className="mb-24">
                    <IsolatedCountdown />
                </div>

                {/* MYTHIC SECTION */}
                <h3 className="font-['Orbitron'] font-black text-2xl md:text-4xl tracking-[0.4em] text-center mb-16 uppercase italic">RECOMPENSAS <span className="shimmer-text">MÍTICAS</span></h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-28">
                    {regularRewards.map(r => (
                        <RewardCard
                            key={r.id}
                            reward={r}
                            rarity={randomRarities[r.id]}
                            onClaim={handleClaim}
                            isClaimed={claimedIds.includes(r.id)}
                        />
                    ))}
                </div>

                {/* SURPRISE SECTION */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-20">
                    {extraRewards.map(r => (
                        <RewardCard
                            key={r.id}
                            reward={r}
                            rarity={randomRarities[r.id]}
                            onClaim={handleClaim}
                            isClaimed={claimedIds.includes(r.id)}
                        />
                    ))}
                </div>
            </div>

            {/* MODAL HORIZONTAL */}
            <AnimatePresence>
                {modal.active && (
                    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            className="bg-[#0f0f1d] border-2 border-[#FF6B00] clip-reward max-w-2xl w-full shadow-[0_0_60px_rgba(255,107,0,0.4)] relative overflow-hidden flex flex-col md:flex-row group"
                        >
                            {/* SISTEMA DE PARTÍCULAS DINÁMICAS */}
                            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                {[...Array(12)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="particle"
                                        style={{
                                            width: Math.random() * 4 + 1 + 'px',
                                            height: Math.random() * 4 + 1 + 'px',
                                            left: Math.random() * 100 + '%',
                                            top: Math.random() * 100 + 80 + '%',
                                            animationDuration: Math.random() * 3 + 4 + 's',
                                            animationDelay: Math.random() * 5 + 's',
                                            background: i % 2 === 0 ? '#FF6B00' : '#FFFFFF',
                                            boxShadow: i % 2 === 0 ? '0 0 10px #FF6B00' : '0 0 10px #FFFFFF'
                                        }}
                                    />
                                ))}
                            </div>

                            {/* BOTÓN CERRAR CON EFECTO DE CORTE NEÓN */}
                            <button
                                onClick={() => setModal({ ...modal, active: false })}
                                className="absolute top-4 right-4 z-[1100] p-2 bg-black/40 border border-[#FF6B00]/40 rounded-full text-[#FF6B00] hover:text-white hover:border-white transition-all duration-300 hover:rotate-90 group/close shadow-[0_0_10px_rgba(255,107,0,0.2)]"
                            >
                                <div className="absolute inset-0 bg-[#FF6B00] opacity-0 group-hover/close:opacity-20 blur-md transition-opacity" />
                                <X size={20} className="relative z-10" />
                                {/* Animación de 'Corte' Neón (Línea que atraviesa) */}
                                <div className="absolute -left-full top-1/2 w-[300%] h-[1px] bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent -translate-y-1/2 group-hover/close:left-full transition-all duration-700 pointer-events-none" />
                            </button>

                            {/* Brillo de fondo interno decorativo */}
                            <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#FF6B00]/10 blur-[80px] rounded-full pointer-events-none" />

                            {/* Columna Izquierda: Imagen del Premio */}
                            <div className="w-full md:w-2/5 bg-white/5 flex items-center justify-center p-8 relative border-b-2 md:border-b-0 md:border-r-2 border-[#FF6B00]/20">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/10 to-transparent opacity-50" />
                                <div className="relative w-32 h-32 md:w-44 md:h-44 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl animate-pulse" />
                                    {modal.icon ? (
                                        <modal.icon size={100} fill={modal.color} stroke={modal.color} className="drop-shadow-[0_0_30px_rgba(255,255,255,0.4)] animate-pulse relative z-10" />
                                    ) : (
                                        <img src={modal.image} className="w-full h-full object-contain animate-pulse relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]" />
                                    )}
                                </div>
                            </div>

                            {/* Columna Derecha: Contenido y Botón */}
                            <div className="w-full md:w-3/5 p-8 flex flex-col justify-center text-left relative z-10">
                                <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-black text-white mb-2 uppercase tracking-tighter">
                                    ¡SOLICITADO!
                                </h2>

                                <div className="inline-block bg-white/5 border border-white/10 p-3 mb-4 text-[#FFD700] font-black text-sm uppercase tracking-widest clip-badge shadow-[inset_0_0_15px_rgba(255,215,0,0.1)]">
                                    {modal.name}
                                </div>

                                <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-6">
                                    {modal.desc}
                                </p>

                                <button
                                    onClick={() => setModal({ ...modal, active: false })}
                                    className="w-full py-4 bg-gradient-to-r from-[#FF6B00] to-[#FF3D00] text-white font-['Orbitron'] font-black text-xs tracking-[0.4em] uppercase clip-badge shadow-[0_5px_15px_rgba(255,107,0,0.2)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] transition-all transform hover:scale-[1.02] active:scale-95"
                                >
                                    ENTENDIDO
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* TOAST */}
            <AnimatePresence>
                {toast.show && (
                    <motion.div initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }} className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[1100] bg-[#FF1A1A] px-12 py-5 clip-badge text-white font-black tracking-widest text-sm shadow-2xl">{toast.text}</motion.div>
                )}
            </AnimatePresence>
        </div >
    );
}
