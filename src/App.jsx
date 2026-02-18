import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Flame, Crosshair, Swords, User, ChevronLeft, ChevronRight, Trophy, Shield, Zap, Menu, X, Target, ArrowLeft, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { articles } from './data';
import Banner300x250 from './ads/Banner300x250';
import Banner728x90 from './ads/Banner728x90';
import Banner468x60 from './ads/Banner468x60';
import Banner320x50 from './ads/Banner320x50';
import Banner160x600 from './ads/Banner160x600';
import Banner160x300 from './ads/Banner160x300';
import NativeBanner from './ads/NativeBanner';
import './index.css';

/* ─── Lazy Article Components ─── */
const ArticleFreeFire = lazy(() => import('./articles/ArticleFreeFire'));
const ArticleClashRoyale = lazy(() => import('./articles/ArticleClashRoyale'));
const ArticleRoblox = lazy(() => import('./articles/ArticleRoblox'));
const ArticleHonorOfKings = lazy(() => import('./articles/ArticleHonorOfKings'));
const ArticlePokemonGO = lazy(() => import('./articles/ArticlePokemonGO'));

const articleComponents = {
  ArticleFreeFire,
  ArticleClashRoyale,
  ArticleRoblox,
  ArticleHonorOfKings,
  ArticlePokemonGO,
};

const ITEMS_PER_PAGE = 6;

/* ─── Particle Background ─── */
function ParticleField() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? '#ff4500' : i % 3 === 1 ? '#ffd700' : '#ff6b35',
            opacity: 0.3,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Logo Component ─── */
function Logo({ onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="flex items-center gap-3 cursor-pointer select-none"
    >
      <div className="relative">
        <Flame size={36} className="text-lava drop-shadow-[0_0_10px_rgba(255,69,0,0.6)]" />
        <motion.div
          className="absolute -inset-1 rounded-full bg-lava/20"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
      <div>
        <h1 className="font-[var(--font-display)] text-xl md:text-2xl font-black tracking-wider">
          <span className="text-shimmer">FREE FIRE</span>
        </h1>
        <p className="text-[10px] tracking-[0.3em] text-fire-400/70 font-[var(--font-display)] uppercase -mt-1">
          Battle Zone
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Ad Slot ─── */
function AdSlot({ size = '300x250' }) {
  let AdComponent;
  switch (size) {
    case '728x90': AdComponent = Banner728x90; break;
    case '468x60': AdComponent = Banner468x60; break;
    case '300x250': AdComponent = Banner300x250; break;
    case '320x50': AdComponent = Banner320x50; break;
    case '160x600': AdComponent = Banner160x600; break;
    case '160x300': AdComponent = Banner160x300; break;
    default: AdComponent = Banner300x250;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-10 flex items-center justify-center"
    >
      <AdComponent />
    </motion.div>
  );
}

/* ─── Sticky Side Ads ─── */
function StickySideAds({ refreshKey }) {
  return (
    <div key={refreshKey}>
      {/* Left Skyscraper */}
      <div className="hidden 2xl:flex fixed left-4 top-1/2 -translate-y-1/2 z-40 flex-col gap-4">
        <Banner160x600 />
      </div>

      {/* Right Skyscraper */}
      <div className="hidden 2xl:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col gap-4">
        <Banner160x600 />
        <Banner160x300 />
      </div>
    </div>
  );
}

/* ─── Article Card ─── */
function ArticleCard({ article, index, onReadMore }) {
  const fireConfetti = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    confetti({
      particleCount: 60,
      spread: 55,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight
      },
      colors: ['#ff4500', '#ffd700', '#ff6b35', '#f97316'],
      disableForReducedMotion: true
    });
  };

  const categoryColors = {
    'GUÍAS': 'from-fire-500 to-fire-700',
    'MAPAS': 'from-emerald-500 to-emerald-700',
    'TIPS': 'from-neon-blue to-blue-700',
    'ESPORTS': 'from-neon-purple to-purple-800',
    'ARMAS': 'from-red-500 to-red-800',
    'NOTICIAS': 'from-gold to-gold-dark',
  };

  const hasFullArticle = !!article.component;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.08, type: 'spring', stiffness: 200, damping: 20 }}
      whileHover={{
        rotateY: 3,
        rotateX: -2,
        scale: 1.02,
      }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      className="glass-card rounded-2xl overflow-hidden group relative"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />

        {/* Category badge */}
        <span className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-bold tracking-widest rounded-full bg-gradient-to-r ${categoryColors[article.category] || 'from-gray-500 to-gray-700'} text-white font-[var(--font-display)] shadow-lg`}>
          {article.category}
        </span>

        {/* Featured badge */}
        {article.featured && (
          <span className="absolute top-4 right-4 px-2 py-1 text-[9px] font-bold tracking-widest rounded-full bg-gold/90 text-black font-[var(--font-display)]">
            ⭐ DESTACADO
          </span>
        )}

        {/* Date & Read Time */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2 text-xs text-white/70">
          {article.readTime && (
            <span className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1">
              <Clock size={10} /> {article.readTime}
            </span>
          )}
          <span className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1">
            <Target size={12} /> {article.date}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-[var(--font-display)] text-base font-bold text-white mb-2 leading-snug line-clamp-2 group-hover:text-fire-400 transition-colors duration-300">
          {article.title}
        </h3>
        <p className="text-sm text-gray-400 mb-4 line-clamp-2 leading-relaxed">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-fire-400/70">
            <Crosshair size={14} />
            <span className="text-xs font-semibold tracking-wider uppercase">{article.author}</span>
          </div>
          <button
            onClick={(e) => {
              fireConfetti(e);
              if (hasFullArticle && onReadMore) {
                onReadMore(article.id);
              }
            }}
            className="btn-fire px-4 py-2 text-[11px] rounded-lg tracking-wider"
          >
            LEER {hasFullArticle ? 'ARTÍCULO' : 'MÁS'}
          </button>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-[2px] bg-gradient-to-r from-lava to-transparent" />
      <div className="absolute top-0 left-0 w-[2px] h-8 bg-gradient-to-b from-lava to-transparent" />
      <div className="absolute bottom-0 right-0 w-8 h-[2px] bg-gradient-to-l from-fire-500 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[2px] h-8 bg-gradient-to-t from-fire-500 to-transparent" />
    </motion.article>
  );
}

/* ─── Pagination ─── */
function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-3 mt-14">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 flex items-center justify-center rounded-lg border border-fire-600/40 text-fire-400 disabled:opacity-20 disabled:cursor-not-allowed hover:bg-fire-600/20 hover:border-fire-500 transition-all"
      >
        <ChevronLeft size={20} />
      </motion.button>

      {Array.from({ length: totalPages }, (_, i) => (
        <motion.button
          key={i + 1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onPageChange(i + 1)}
          className={`w-10 h-10 flex items-center justify-center rounded-lg font-[var(--font-display)] text-sm font-bold transition-all ${currentPage === i + 1
            ? 'bg-gradient-to-br from-lava to-fire-600 text-white shadow-lg shadow-lava/30'
            : 'border border-dark-500 text-gray-400 hover:border-fire-600/40 hover:text-fire-400'
            }`}
        >
          {i + 1}
        </motion.button>
      ))}

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 flex items-center justify-center rounded-lg border border-fire-600/40 text-fire-400 disabled:opacity-20 disabled:cursor-not-allowed hover:bg-fire-600/20 hover:border-fire-500 transition-all"
      >
        <ChevronRight size={20} />
      </motion.button>
    </div>
  );
}

/* ─── About Section ─── */
function AboutSection() {
  const stats = [
    { icon: Trophy, label: 'Victorias', value: '1,247' },
    { icon: Shield, label: 'Rango', value: 'Heroico' },
    { icon: Crosshair, label: 'K/D Ratio', value: '4.82' },
    { icon: Swords, label: 'Partidas', value: '3,891' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto"
    >
      <div className="glass-card rounded-3xl overflow-hidden relative">
        {/* Banner */}
        <div className="h-40 bg-gradient-to-r from-lava/30 via-fire-600/20 to-gold/20 relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent" />
        </div>

        {/* Avatar */}
        <div className="relative -mt-16 flex justify-center">
          <div className="w-28 h-28 rounded-full border-4 border-lava bg-dark-700 flex items-center justify-center animate-fire-glow">
            <Flame size={48} className="text-lava" />
          </div>
        </div>

        <div className="px-8 pb-10 pt-4 text-center">
          <h2 className="font-[var(--font-display)] text-3xl font-black text-shimmer mb-1">
            FIRE BLOGGER
          </h2>
          <p className="text-fire-400/60 font-[var(--font-display)] text-sm tracking-widest uppercase mb-6">
            Content Creator • Pro Player
          </p>
          <p className="text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
            Jugador profesional de Free Fire con más de 5 años de experiencia.
            Creador de contenido especializado en guías, estrategias y noticias
            del mundo competitivo de Garena Free Fire.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-dark-800/50 border border-fire-600/10 rounded-xl p-4 hover:border-fire-600/30 transition-colors"
              >
                <stat.icon size={22} className="text-fire-500 mx-auto mb-2" />
                <p className="font-[var(--font-display)] text-lg font-bold text-white">{stat.value}</p>
                <p className="text-[11px] text-gray-500 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Hero Section ─── */
function HeroSection({ onExplore }) {
  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { x: 0.5, y: 0.6 },
      colors: ['#ff4500', '#ffd700', '#ff6b35', '#f97316', '#ea580c'],
      disableForReducedMotion: true,
      zIndex: 2000,
    });
  };

  return (
    <section className="relative py-20 md:py-32 text-center overflow-hidden">
      <div className="absolute inset-0 hero-bg" />
      <div className="absolute inset-0 scanline-overlay" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto px-6"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="inline-flex items-center gap-2 bg-lava/10 border border-lava/20 rounded-full px-5 py-2 mb-8"
        >
          <Flame size={16} className="text-lava" />
          <span className="text-fire-300 font-[var(--font-display)] text-xs tracking-[0.2em] uppercase">Temporada 15 activa</span>
        </motion.div>

        <h2 className="font-[var(--font-display)] text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1]">
          <span className="text-shimmer">DOMINA</span>{' '}
          <span className="text-white">EL CAMPO</span>
          <br />
          <span className="text-white">DE </span>
          <span className="text-shimmer">BATALLA</span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Guías, estrategias, noticias y todo lo que necesitas para convertirte en el último en pie. ¡BOOYAH!
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => { handleConfetti(); onExplore(); }}
          className="btn-fire px-10 py-4 rounded-xl text-sm tracking-[0.2em] font-[var(--font-display)]"
        >
          🔥 EXPLORAR ARTÍCULOS
        </motion.button>
      </motion.div>
    </section>
  );
}

/* ─── Article Detail View ─── */
function ArticleDetail({ articleId, onBack }) {
  const article = articles.find(a => a.id === articleId);
  if (!article || !article.component) return null;

  const Component = articleComponents[article.component];
  if (!Component) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 md:px-8 py-8"
    >
      {/* Back Button */}
      <motion.button
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.95 }}
        onClick={onBack}
        className="flex items-center gap-2 text-fire-400 font-[var(--font-display)] text-sm tracking-wider uppercase mb-8 bg-transparent border-none cursor-pointer hover:text-fire-300 transition-colors"
      >
        <ArrowLeft size={18} />
        Volver a Artículos
      </motion.button>

      {/* Ad Slot Top – Leaderboard */}
      <AdSlot size="728x90" />

      {/* Article Content */}
      <Suspense fallback={
        <div className="flex items-center justify-center py-32">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          >
            <Flame size={32} className="text-lava" />
          </motion.div>
        </div>
      }>
        <Component />
      </Suspense>

      {/* Ad Slot Bottom – Rectangle */}
      <AdSlot size="300x250" />

      {/* Native Banner Ad */}
      <div className="my-10 flex items-center justify-center">
        <NativeBanner />
      </div>

      {/* Related Articles */}
      <div className="mt-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Swords size={20} className="text-fire-500" />
            <h3 className="font-[var(--font-display)] text-xl font-bold text-white">Artículos Relacionados</h3>
          </div>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-fire-600/30 to-transparent" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles
            .filter(a => a.id !== articleId && a.component)
            .slice(0, 3)
            .map((a, i) => (
              <ArticleCard key={a.id} article={a} index={i} onReadMore={(id) => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onBack();
                setTimeout(() => onBack(id), 100);
              }} />
            ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main App ─── */
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState('articles');
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  const filteredArticles = articles.filter(a =>
    a.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const currentArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => { setCurrentPage(1); }, [searchTerm]);

  const tabs = [
    { id: 'home', label: 'Inicio', icon: Flame },
    { id: 'articles', label: 'Artículos', icon: Swords },
    { id: 'about', label: 'Autor', icon: User },
  ];

  const handleLogoClick = () => {
    confetti({ particleCount: 80, spread: 70, origin: { x: 0.1, y: 0.1 }, colors: ['#ff4500', '#ffd700', '#ff6b35'] });
    setActiveTab('home');
    setSelectedArticleId(null);
  };

  const handleReadMore = (articleId) => {
    setSelectedArticleId(articleId);
    setActiveTab('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToArticles = () => {
    setSelectedArticleId(null);
    setActiveTab('articles');
  };

  return (
    <div className="min-h-screen relative">
      <ParticleField />
      <StickySideAds refreshKey={activeTab + (selectedArticleId || '')} />

      {/* ═══ HEADER ═══ */}
      <header className="sticky top-0 z-50 bg-dark-900/80 backdrop-blur-xl border-b border-fire-600/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Logo onClick={handleLogoClick} />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {tabs.map(tab => (
              <motion.button
                key={tab.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setActiveTab(tab.id); setSelectedArticleId(null); }}
                className={`flex items-center gap-2 px-5 py-2 rounded-lg font-[var(--font-display)] text-xs tracking-widest uppercase transition-all duration-300 border-none cursor-pointer bg-transparent ${(activeTab === tab.id || (tab.id === 'articles' && activeTab === 'article'))
                  ? 'text-lava bg-lava/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </motion.button>
            ))}
          </nav>

          {/* Search */}
          <div className="hidden md:flex items-center relative">
            <Search className="absolute left-3 text-fire-500/50" size={16} />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setActiveTab('articles'); setSelectedArticleId(null); }}
              className="bg-dark-700/60 border border-dark-500 focus:border-fire-500/50 text-white pl-10 pr-4 py-2 rounded-xl text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-fire-500/30 w-56 transition-all font-[var(--font-body)]"
            />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-gray-400 bg-transparent border-none cursor-pointer"
          >
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-dark-800/95 backdrop-blur-xl border-t border-dark-600"
            >
              <div className="p-4 flex flex-col gap-2">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => { setActiveTab(tab.id); setSelectedArticleId(null); setMobileMenu(false); }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-[var(--font-display)] text-xs tracking-widest uppercase transition-all border-none cursor-pointer ${activeTab === tab.id
                      ? 'bg-lava/10 text-lava'
                      : 'bg-transparent text-gray-400'
                      }`}
                  >
                    <tab.icon size={18} />
                    {tab.label}
                  </button>
                ))}
                <div className="relative mt-2">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-fire-500/50" size={16} />
                  <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value); setActiveTab('articles'); setSelectedArticleId(null); setMobileMenu(false); }}
                    className="w-full bg-dark-700/60 border border-dark-500 text-white pl-10 pr-4 py-3 rounded-xl text-sm placeholder-gray-500 focus:outline-none focus:border-fire-500/50 font-[var(--font-body)]"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ═══ MAIN ═══ */}
      <main className="relative z-10">
        {activeTab === 'home' && (
          <>
            <HeroSection onExplore={() => setActiveTab('articles')} />

            {/* Featured section */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
              <div className="flex items-center gap-4 mb-10">
                <div className="flex items-center gap-2">
                  <Trophy size={22} className="text-gold" />
                  <h3 className="font-[var(--font-display)] text-2xl font-bold text-white">Artículos Destacados</h3>
                </div>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-fire-600/30 to-transparent" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {articles.filter(a => a.featured).slice(0, 3).map((article, i) => (
                    <ArticleCard key={article.id} article={article} index={i} onReadMore={handleReadMore} />
                  ))}
                </AnimatePresence>
              </div>

              <div className="text-center mt-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab('articles')}
                  className="btn-fire px-8 py-3 rounded-xl text-xs tracking-[0.2em] font-[var(--font-display)]"
                >
                  VER TODOS LOS ARTÍCULOS →
                </motion.button>
              </div>
            </section>
          </>
        )}

        {activeTab === 'articles' && (
          <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
            <div className="flex items-center gap-4 mb-10">
              <Swords size={22} className="text-lava" />
              <h3 className="font-[var(--font-display)] text-2xl font-bold text-white">
                {searchTerm ? `Resultados: "${searchTerm}"` : 'Todos los Artículos'}
              </h3>
              <span className="ml-auto text-xs text-gray-500 font-[var(--font-display)]">
                {filteredArticles.length} artículos
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {currentArticles.map((article, i) => (
                  <ArticleCard key={article.id} article={article} index={i} onReadMore={handleReadMore} />
                ))}
              </AnimatePresence>
            </div>

            {filteredArticles.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Crosshair size={48} className="mx-auto text-fire-600/30 mb-4" />
                <p className="text-gray-500 font-[var(--font-display)] tracking-widest uppercase">
                  No se encontraron artículos
                </p>
              </motion.div>
            )}

            <AdSlot size="468x60" />

            {/* Native Banner Ad */}
            <div className="my-6 flex items-center justify-center">
              <NativeBanner />
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </section>
        )}

        {activeTab === 'article' && selectedArticleId && (
          <ArticleDetail
            articleId={selectedArticleId}
            onBack={handleBackToArticles}
          />
        )}

        {activeTab === 'about' && (
          <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
            <AboutSection />
          </section>
        )}
      </main>

      {/* Native Banner before footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 my-8 flex items-center justify-center">
        <NativeBanner />
      </div>

      {/* ═══ FOOTER ═══ */}
      <footer className="relative z-10 border-t border-dark-600 mt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Flame size={18} className="text-lava/40" />
            <span className="text-gray-600 text-sm font-[var(--font-display)] tracking-wider">
              FREE FIRE BLOG © {new Date().getFullYear()}
            </span>
          </div>
          <div className="flex items-center gap-4 text-gray-600 text-xs font-[var(--font-display)] tracking-wider">
            <span className="animate-pulse text-fire-500">●</span>
            <span>SISTEMA ONLINE</span>
            <span className="text-dark-500">|</span>
            <span>v2.0.0</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
