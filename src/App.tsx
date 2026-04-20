/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  ShieldCheck, 
  Truck, 
  Leaf,
  Facebook,
  Instagram,
  Youtube,
  Phone,
  MapPin,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Mock Data ---

const CATEGORIES = [
  { id: 1, name: 'Honey & Sweeteners', image: 'https://picsum.photos/seed/honey/400/400' },
  { id: 2, name: 'Pure Oils', image: 'https://picsum.photos/seed/oil/400/400' },
  { id: 3, name: 'Organic Spices', image: 'https://picsum.photos/seed/spices/400/400' },
  { id: 4, name: 'Daily Essentials', image: 'https://picsum.photos/seed/rice/400/400' },
  { id: 5, name: 'Dry Fruits', image: 'https://picsum.photos/seed/nuts/400/400' },
];

const PRODUCTS = [
  { 
    id: 1, 
    name: 'Sundarban Natural Honey', 
    category: 'Honey', 
    price: 850, 
    originalPrice: 950,
    rating: 4.8, 
    reviews: 124,
    image: 'https://picsum.photos/seed/honeyjar/600/600',
    tag: 'Best Seller'
  },
  { 
    id: 2, 
    name: 'Premium Homemade Ghee', 
    category: 'Daily Essentials', 
    price: 1450, 
    originalPrice: 1600,
    rating: 4.9, 
    reviews: 89,
    image: 'https://picsum.photos/seed/ghee/600/600',
    tag: 'Award Winning'
  },
  { 
    id: 3, 
    name: 'Mustard Oil (Wood Pressed)', 
    category: 'Pure Oils', 
    price: 320, 
    originalPrice: 350,
    rating: 4.7, 
    reviews: 215,
    image: 'https://picsum.photos/seed/mustardoil/600/600'
  },
  { 
    id: 4, 
    name: 'Organic Moringa Powder', 
    category: 'Organic Spices', 
    price: 450, 
    originalPrice: 500,
    rating: 4.6, 
    reviews: 56,
    image: 'https://picsum.photos/seed/moringa/600/600'
  }
];

const FEATURES = [
  { 
    icon: <Leaf className="w-6 h-6" />, 
    title: '100% Organic', 
    description: 'Sourced directly from farmers ensuring pure quality.' 
  },
  { 
    icon: <ShieldCheck className="w-6 h-6" />, 
    title: 'Chemical Free', 
    description: 'No preservatives or artificial coloring added.' 
  },
  { 
    icon: <Truck className="w-6 h-6" />, 
    title: 'Fast Delivery', 
    description: 'Fresh products delivered to your doorstep quickly.' 
  }
];

// --- Components ---

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Header Bar */}
      <header className="bg-primary text-white py-3 px-4 md:px-10 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-sans text-xl font-black transition-transform hover:rotate-12">
            P
          </div>
          <span className="font-sans text-xl md:text-2xl font-extrabold tracking-tight">
            Prakriti
          </span>
        </div>

        {/* Search Box */}
        <div className="hidden lg:flex bg-white/10 border border-white/20 rounded-lg px-4 py-2 w-[400px] items-center gap-3 backdrop-blur-sm">
          <Search className="w-4 h-4 text-white/60" />
          <input 
            type="text" 
            placeholder="খুঁজুন (যেমন: মধু, ঘি, তেল...)" 
            className="bg-transparent border-none outline-none text-sm text-white placeholder:text-white/60 w-full"
          />
        </div>

        <div className="flex items-center gap-4 md:gap-8 font-bold text-sm">
          <div className="hidden sm:block cursor-pointer hover:text-secondary transition-colors">লগইন</div>
          <div className="bg-secondary text-primary px-4 py-2 rounded-lg cursor-pointer flex items-center gap-2 hover:bg-white transition-all shadow-sm">
            <ShoppingBag className="w-5 h-5" />
            <span>কার্ট (০)</span>
          </div>
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Nav Bar */}
      <nav className={`bg-white border-b border-border px-4 md:px-10 transition-all duration-300 hidden lg:flex items-center gap-8 h-12`}>
        {['Home', 'Shop', 'Categories', 'Our Story', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className={`text-sm font-bold h-full flex items-center px-2 transition-all border-b-2 border-transparent hover:text-primary hover:border-primary ${item === 'Home' ? 'text-primary border-primary' : 'text-accent/70'}`}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-4 gap-4">
              {['Home', 'Shop', 'Categories', 'Our Story', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-lg font-bold border-b border-gray-100 pb-2 text-accent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProductCard({ product }: { product: any; key?: any }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-4 overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full group"
      id={`product-${product.id}`}
    >
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-50 mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 bg-secondary text-primary text-[10px] uppercase font-black tracking-widest px-2 py-1 rounded-full shadow-sm">
            {product.tag}
          </span>
        )}
        <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full text-accent hover:text-red-500 transition-colors shadow-sm opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
          <Heart className="w-4 h-4" />
        </button>
      </div>
      
      <div className="flex flex-col flex-grow">
        <span className="text-gray-400 text-[11px] font-bold uppercase tracking-widest mb-1">
          {product.category}
        </span>
        <h3 className="text-base font-extrabold text-primary mb-1 leading-tight flex-grow group-hover:text-primary-light transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1 mb-4">
          <Star className="w-3 h-3 text-secondary fill-secondary" />
          <span className="text-[11px] font-bold text-accent">{product.rating}</span>
          <span className="text-[11px] text-gray-400 ml-1">({product.reviews} reviews)</span>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-black text-primary">৳{product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">৳{product.originalPrice}</span>
            )}
          </div>
          <button className="w-9 h-9 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary transition-all shadow-md group-hover:scale-105">
            <span className="text-xl font-bold">+</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function CategoryCard({ category }: { category: any; key?: any }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center gap-4 cursor-pointer group"
      id={`category-${category.id}`}
    >
      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-md transition-all group-hover:shadow-lg group-hover:border-secondary">
        <img 
          src={category.image} 
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </div>
      <span className="text-sm sm:text-base font-extrabold text-center text-primary group-hover:text-secondary transition-colors uppercase tracking-tight">
        {category.name}
      </span>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center mt-24 md:mt-32 px-4 md:px-10" id="home">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary to-primary-light rounded-b-[40px]">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
        </div>

        <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <span className="inline-block px-4 py-1 bg-secondary text-primary rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-sm">
              ১০০% খাঁটি ও নির্ভেজাল
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 drop-shadow-md">
              সুস্থ থাকুন দেশীয়<br /> 
              প্রাকৃতিক খাবারের সাথে
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-lg mb-10 leading-relaxed font-medium">
              সরাসরি কৃষকের মাঠ থেকে সংগৃহীত সর্বোচ্চ মানের পণ্য পৌঁছে দিচ্ছি আপনার দোরগোড়ায়।
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-10 py-4 bg-secondary text-primary font-black rounded-xl hover:bg-white transition-all shadow-lg transform hover:-translate-y-1 active:translate-y-0">
                এখনই কিনুন
              </button>
              <div className="flex items-center gap-3 text-white/80 font-bold cursor-pointer hover:text-white transition-all pl-2">
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                  <Youtube className="w-5 h-5" />
                </div>
                <span>আমাদের কথা শুনুন</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-[450px] h-[450px] bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 group">
              <div className="text-[180px] drop-shadow-2xl animate-float group-hover:scale-110 transition-transform duration-500">🍯</div>
              {/* Spinning badge */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-secondary rounded-full flex items-center justify-center p-2 animate-spin-slow shadow-xl">
                 <div className="w-full h-full rounded-full border-2 border-dashed border-primary/20 flex items-center justify-center text-primary font-black text-[10px] text-center leading-tight">
                  FRESH<br/>FROM<br/>FARM
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-4 md:px-10" id="shop">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">জনপ্রিয় পণ্যসমূহ</h2>
              <p className="text-accent/60 max-w-lg font-medium">সেরা মানের প্রাকৃতিক পণ্য যা আপনার পুষ্টির চাহিদা পূরণ করবে।</p>
            </div>
            <button className="flex items-center gap-2 bg-white px-6 py-3 border border-border rounded-xl text-primary font-bold hover:bg-primary hover:text-white transition-all shadow-sm">
              সবগুলো দেখুন <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="pb-24 px-4 md:px-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between items-center bg-white p-8 rounded-[32px] border border-border shadow-sm gap-8 transition-shadow hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <div className="font-bold text-accent text-sm">সারাদেশে ক্যাশ অন ডেলিভারি</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div className="font-bold text-accent text-sm">হেল্পলাইন: ০৯৬৩৮-০০০০০</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="font-bold text-accent text-sm">নিরাপদ পেমেন্ট গেটওয়ে</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-white px-4 md:px-10" id="categories">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">সবগুলো ক্যাটাগরি</h2>
            <p className="text-accent/60 font-medium">আপনার নিত্যপ্রয়োজনীয় সব খাঁটি পণ্য খুঁজে নিন এখান থেকে।</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {CATEGORIES.map(cat => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section / Story */}
      <section className="py-24 bg-bg-paper px-4 md:px-10 overflow-hidden" id="our-story">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                <img 
                  src="https://picsum.photos/seed/harvest/800/1000" 
                  className="w-full h-full object-cover"
                  alt="Harvesting"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary rounded-[2rem] z-20 flex items-center justify-center p-6 shadow-xl border-4 border-white">
                 <div className="text-primary text-center">
                    <div className="text-4xl font-black mb-1">১২+</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest leading-tight">বছরের বিশ্বস্ততা</div>
                 </div>
              </div>
            </div>
            <div>
              <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs mb-4 block">আমাদের সম্পর্কে</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-primary mb-8 leading-[1.1]">
                প্রকৃতির শ্রেষ্ঠ উপহার <br /> পৌঁছে দিচ্ছি আপনার কাছে
              </h2>
              <p className="text-lg text-accent/70 mb-8 leading-relaxed font-medium">
                ঘরের বাজার এর লক্ষ্য হলো বাংলাদেশের প্রতিটি ঘরে খাঁটি ও বিষমুক্ত খাবার পৌঁছে দেওয়া। 
                আমরা সরাসরি কৃষকদের থেকে পণ্য সংগ্রহ করি এবং নিজস্ব তদারকির মাধ্যমে মান নিয়ন্ত্রণ করি।
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                  <div className="text-3xl font-black text-primary mb-1">১০০%</div>
                  <div className="text-xs text-accent/60 font-bold uppercase tracking-wider">প্রাকৃতিক উৎস</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                  <div className="text-3xl font-black text-primary mb-1">০%</div>
                  <div className="text-xs text-accent/60 font-bold uppercase tracking-wider">ভেজাল ও কেমিক্যাল</div>
                </div>
              </div>
              <button className="px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-secondary hover:text-primary transition-all shadow-md">
                আমাদের সম্পর্কে আরও জানুন
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-secondary px-4 md:px-10 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold text-primary mb-6">
              বিশেষ অফার পেতে যুক্ত হোন
            </h2>
            <p className="text-primary/70 text-xl mb-10 max-w-2xl mx-auto font-medium">
              আপনার ইমেইল দিয়ে সাবস্ক্রাইব করুন এবং আমাদের নতুন পণ্য ও অফার সম্পর্কে সবার আগে জানুন।
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="আপনার ইমেইল লিখুন"
                className="flex-grow px-6 py-4 rounded-xl bg-white text-accent outline-none focus:ring-4 ring-primary/20 transition-all font-bold placeholder:text-gray-400 border border-transparent focus:border-primary shadow-sm"
              />
              <button className="px-8 py-4 bg-primary text-white font-black rounded-xl hover:bg-white hover:text-primary transition-all shadow-lg">
                সাবস্ক্রাইব
              </button>
            </form>
          </div>
        </div>
        
        {/* Background Decors */}
        <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
          <Leaf className="w-64 h-64 text-primary rotate-45" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white pt-24 pb-12 px-4 md:px-10 mt-12" id="contact">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-sans text-xl font-black italic">
                  P
                </div>
                <span className="font-sans text-2xl font-black tracking-tight">Prakriti</span>
              </div>
              <p className="text-white/60 leading-relaxed mb-8 font-medium">
                সরাসরি কৃষকের মাঠ থেকে সংগৃহীত সর্বোচ্চ মানের পণ্য পৌঁছে দিচ্ছি আপনার দোরগোড়ায়।
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-extrabold mb-8 decoration-secondary decoration-4 underline-offset-8 underline">লিঙ্কসমূহ</h4>
              <ul className="space-y-4 font-bold text-sm">
                {['Shop All', 'Categories', 'Our Story', 'Wholesale', 'Privacy Policy'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-white/60 hover:text-secondary transition-colors flex items-center gap-2 group">
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-extrabold mb-8">ক্যাটাগরি</h4>
              <ul className="space-y-4 font-medium text-sm">
                {['সুন্দরবনের মধু', 'গাওয়া ঘি', 'খাঁটি তেল', 'দেশী মসলা', 'ড্রাই ফ্রুটস'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-white/60 hover:text-secondary transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-extrabold mb-8">যোগাযোগ</h4>
              <ul className="space-y-6 text-sm font-medium">
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="text-white/60">House 24, Road 7, Block C, Banani, Dhaka, Bangladesh</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="text-white/60">+৮৮০ ১৭০০-০০০০০০</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 text-secondary font-black flex-shrink-0">@</div>
                  <span className="text-white/60">support@prakriti.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10 text-center">
            <p className="text-white/40 text-xs font-bold leading-relaxed">
              &copy; {new Date().getFullYear()} Prakriti - Pure & Organic. Developed with care for a healthier Bangladesh.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
