
import React, { useState, useEffect } from 'react';
import { 
  Dumbbell, 
  Trophy, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Menu, 
  X, 
  ArrowLeft,
  Users,
  Timer,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'عن الصالة', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'المدربين', href: '#trainers' },
    { name: 'موقعنا', href: '#location' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-yellow-500/30' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group">
            <div className="bg-yellow-400 p-2 rounded-lg transform group-hover:rotate-12 transition-transform">
              <Dumbbell className="text-black w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-yellow-400">DRAGON <span className="text-white">GYM</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="font-bold hover:text-yellow-400 transition-colors uppercase text-sm tracking-widest">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-yellow-400 text-black px-6 py-2 rounded-full font-black hover:bg-yellow-300 transition-all transform hover:scale-105">
              اشترك الآن
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-yellow-500/50 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-bold py-2 border-b border-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-yellow-400 text-black py-4 rounded-xl font-black mt-2">اشترك الآن</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/60 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920" 
            alt="Gym Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-20 mt-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 bg-yellow-400/10 border border-yellow-400/30 w-fit px-4 py-1 rounded-full">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              <span className="text-yellow-400 font-bold text-sm tracking-widest">أقوى صالة في العبيدي</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              أطلق <span className="text-yellow-400">التنين</span> <br />الذي بداخلك
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              تحت إشراف <span className="text-yellow-400 font-bold">الكابتن مراد ادهم</span>. نوفر لك أفضل المعدات وأقوى البرامج التدريبية للوصول إلى هدفك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 text-black px-10 py-4 rounded-xl font-black text-lg hover:bg-yellow-300 transition-all flex items-center justify-center gap-2 group">
                ابدأ رحلتك اليوم
                <ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
              </button>
              <button className="border-2 border-white/20 hover:border-yellow-400 px-10 py-4 rounded-xl font-black text-lg backdrop-blur-sm transition-all">
                تعرف علينا
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
          <ChevronDown className="text-yellow-400 w-8 h-8" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-yellow-400 py-12 relative z-30">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem number="500+" label="عضو نشط" />
          <StatItem number="50+" label="آلة حديثة" />
          <StatItem number="10+" label="سنوات خبرة" />
          <StatItem number="24/7" label="متاح دائماً" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <div className="absolute -top-4 -right-4 w-full h-full border-4 border-yellow-400 rounded-2xl z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1000" 
              alt="Captain Murad" 
              className="relative z-10 rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-black mb-6">بإدارة الكابتن <span className="text-yellow-400">مراد ادهم</span></h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              تأسست دراغون جيم لتكون الوجهة الأولى لعشاق الرياضة في القائم - العبيدي. نؤمن أن الرياضة ليست مجرد تمرين، بل هي نمط حياة. 
              كابتن مراد أدهم يضع خبرته الطويلة في متناول يديك لضمان أداء صحيح ونتائج ملموسة.
            </p>
            <ul className="space-y-4">
              <FeatureItem text="خطط تدريبية مخصصة لكل لاعب" />
              <FeatureItem text="أنظمة غذائية علمية ومدروسة" />
              <FeatureItem text="بيئة محفزة وحماسية للتدريب" />
              <FeatureItem text="أحدث الأجهزة العالمية" />
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">خدمات <span className="text-yellow-400">دراجون</span></h2>
            <p className="text-gray-400">كل ما تحتاجه لبناء جسم مثالي في مكان واحد</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Dumbbell className="w-10 h-10" />}
              title="بناء الأجسام"
              desc="أجهزة حديثة وأوزان حرة تناسب جميع المستويات من المبتدئين إلى المحترفين."
            />
            <ServiceCard 
              icon={<Timer className="w-10 h-10" />}
              title="كارديو وحرق دهون"
              desc="منطقة مخصصة للتمارين الهوائية وأجهزة الركض الأحدث لخسارة الوزن بفعالية."
            />
            <ServiceCard 
              icon={<Trophy className="w-10 h-10" />}
              title="تجهيز بطولات"
              desc="إشراف مباشر من الكابتن مراد لتجهيز اللاعبين للمشاركة في البطولات المحلية والدولية."
            />
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">كادر <span className="text-yellow-400">التدريب</span></h2>
            <p className="text-gray-400">نخبة من المدربين المحترفين</p>
          </div>
          <div className="flex justify-center">
            <div className="max-w-md bg-zinc-900 rounded-3xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400 transition-colors">
              <img src="https://images.unsplash.com/photo-1567013127542-490d757e51fe?auto=format&fit=crop&q=80&w=800" alt="Murad Adham" className="w-full h-80 object-cover" />
              <div className="p-8 text-center">
                <h3 className="text-2xl font-black text-yellow-400 mb-1">مراد ادهم</h3>
                <p className="text-gray-400 mb-4">المدير الفني والمدرب الرئيسي</p>
                <div className="flex justify-center gap-4">
                  <Instagram className="text-white hover:text-yellow-400 cursor-pointer" />
                  <Facebook className="text-white hover:text-yellow-400 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="bg-black p-8 md:p-16 rounded-[3rem] border border-yellow-400/20 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-black mb-4">زرنا في <span className="text-yellow-400">العبيدي</span></h2>
              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 p-3 rounded-xl">
                  <MapPin className="text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">العنوان</h4>
                  <p className="text-gray-400">الانبار - القائم - العبيدي - الشارع العام</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 p-3 rounded-xl">
                  <Phone className="text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">اتصل بنا</h4>
                  <p className="text-gray-400">واتساب: 07800000000</p>
                </div>
              </div>
              <button className="bg-white text-black px-8 py-4 rounded-xl font-black hover:bg-yellow-400 transition-colors w-full md:w-auto">
                فتح الموقع في الخريطة
              </button>
            </div>
            <div className="flex-1 w-full h-[400px] bg-zinc-800 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all border border-white/10">
               {/* Placeholder for Map */}
               <div className="w-full h-full flex flex-col items-center justify-center text-gray-500">
                  <MapPin size={48} className="mb-4 opacity-20" />
                  <p className="text-sm">خريطة تفاعلية (الانبار - القائم - العبيدي)</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <div className="bg-yellow-400 p-2 rounded-lg">
                <Dumbbell className="text-black w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-yellow-400">DRAGON <span className="text-white">GYM</span></span>
            </div>
            <div className="flex gap-8 text-gray-400 font-bold">
              <a href="#" className="hover:text-yellow-400">سياسة الخصوصية</a>
              <a href="#" className="hover:text-yellow-400">الشروط والأحكام</a>
              <a href="#" className="hover:text-yellow-400">تواصل معنا</a>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all cursor-pointer">
                <Instagram size={20} />
              </div>
              <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all cursor-pointer">
                <Facebook size={20} />
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Dragon Gym. جميع الحقوق محفوظة لإدارة الكابتن مراد ادهم.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* Helper Components */
const StatItem: React.FC<{ number: string; label: string }> = ({ number, label }) => (
  <div className="text-center group">
    <div className="text-black text-4xl md:text-5xl font-black mb-1 group-hover:scale-110 transition-transform">{number}</div>
    <div className="text-black/70 font-bold text-sm uppercase tracking-widest">{label}</div>
  </div>
);

const FeatureItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-center gap-3">
    <div className="bg-yellow-400 p-1 rounded-full">
      <ShieldCheck className="text-black w-4 h-4" />
    </div>
    <span className="text-white font-medium">{text}</span>
  </li>
);

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-black p-10 rounded-[2rem] border border-white/5 hover:border-yellow-400 transition-all group">
    <div className="bg-yellow-400/10 p-4 rounded-2xl w-fit mb-6 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
      {icon}
    </div>
    <h3 className="text-2xl font-black mb-4 group-hover:text-yellow-400 transition-colors">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

export default App;
