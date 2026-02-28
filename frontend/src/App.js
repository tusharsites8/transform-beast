import { useState, useEffect } from "react";
import "@/App.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Dumbbell, 
  Users, 
  Clock, 
  MapPin, 
  Phone, 
  Check, 
  Star, 
  Flame, 
  Zap, 
  Trophy,
  ChevronRight,
  Menu,
  X,
  Calculator,
  MessageCircle,
  Instagram,
  Facebook,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster, toast } from "sonner";

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = "Hi! I'm interested in joining Iron Beast Gym.";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

// Section wrapper component
const Section = ({ children, className = "", id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={`py-20 md:py-32 px-4 md:px-8 lg:px-12 ${className}`}
    >
      {children}
    </motion.section>
  );
};

// Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Plans", href: "#pricing" },
    { name: "Gallery", href: "#gallery" },
    { name: "BMI", href: "#bmi" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "backdrop-blur-xl bg-black/80 border-b border-white/10" : ""
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2" data-testid="logo">
            <Dumbbell className="w-8 h-8 text-red-600" />
            <span className="font-bold text-xl uppercase tracking-wider" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Iron Beast
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm uppercase tracking-widest transition-colors animated-underline"
                data-testid={`nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-join-btn"
            >
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider px-6 py-2 rounded-none transform -skew-x-6 transition-all hover:scale-105 red-glow">
                <span className="skew-fix">Join Now</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-zinc-950 border-t border-zinc-800"
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-300 hover:text-white text-lg uppercase tracking-wider py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider py-4 rounded-none">
                Join Now
              </Button>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1700784795176-7ff886439d79?q=85&w=1920&auto=format&fit=crop"
          alt="Iron Beast Gym"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-red-500 uppercase tracking-[0.3em] text-sm md:text-base mb-6"
        >
          Best Gym in Chandrapur
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-none mb-8"
          style={{ fontFamily: 'Oswald, sans-serif' }}
        >
          Transform Your Body.
          <br />
          <span className="text-red-600">Transform Your Life.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          The premier hardcore training facility in Chandrapur. Forged in iron, built for beasts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-join-btn"
          >
            <Button className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider py-6 px-10 text-lg rounded-none transform -skew-x-6 transition-all hover:scale-105 red-glow">
              <span className="skew-fix flex items-center gap-2">
                Join The Pack <ArrowRight size={20} />
              </span>
            </Button>
          </a>
          <a href="#services" data-testid="hero-explore-btn">
            <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold uppercase tracking-wider py-6 px-10 text-lg rounded-none transform -skew-x-6 transition-all">
              <span className="skew-fix">Explore Services</span>
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-3 bg-red-600 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  const stats = [
    { icon: Clock, value: "3+", label: "Years Experience" },
    { icon: Users, value: "15+", label: "Certified Trainers" },
    { icon: Trophy, value: "500+", label: "Active Members" },
  ];

  return (
    <Section id="about" className="bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div variants={fadeInUp} className="relative">
            <img
              src="https://images.unsplash.com/photo-1670004810567-f4328dcc983e?q=85&w=1080&auto=format&fit=crop"
              alt="Modern gym equipment"
              className="w-full h-[400px] md:h-[500px] object-cover"
              data-testid="about-image"
            />
            <div className="absolute -bottom-6 -right-6 bg-red-600 p-6 hidden md:block">
              <p className="text-4xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>3+</p>
              <p className="text-sm uppercase tracking-wider">Years Strong</p>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.p variants={fadeInUp} className="text-red-500 uppercase tracking-[0.2em] text-sm mb-4">
              About Us
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Forged In <span className="text-red-600">Iron</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 text-lg leading-relaxed mb-8">
              At Iron Beast Gym, we don't just build muscles – we forge champions. Located in the heart of Chandrapur, 
              our state-of-the-art facility features modern equipment, certified personal trainers, and a community 
              that pushes you beyond your limits.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-4 mb-10">
              {["Certified & Experienced Trainers", "Modern Premium Equipment", "Personalized Training Programs", "Nutrition Guidance"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-600 flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-4 bg-zinc-900 border border-zinc-800" data-testid={`stat-${i}`}>
                  <stat.icon className="w-6 h-6 text-red-500 mx-auto mb-2" />
                  <p className="text-2xl md:text-3xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>{stat.value}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

// Services Section
const ServicesSection = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "Personal Training",
      desc: "1-on-1 coaching sessions tailored to smash your fitness goals and push beyond your limits.",
    },
    {
      icon: Flame,
      title: "Weight Loss Program",
      desc: "High-intensity interval training and cardio programs designed to shred fat fast.",
    },
    {
      icon: Zap,
      title: "Muscle Gain Program",
      desc: "Hypertrophy-focused training programs for serious mass and strength gains.",
    },
    {
      icon: Trophy,
      title: "Diet Guidance",
      desc: "Custom nutrition plans that fuel your workouts and optimize your results.",
    },
  ];

  return (
    <Section id="services" className="bg-[#09090b]">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <p className="text-red-500 uppercase tracking-[0.2em] text-sm mb-4">What We Offer</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Our <span className="text-red-600">Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-zinc-900/50 border border-zinc-800 p-8 hover:border-red-600 transition-all duration-300 group card-hover"
              data-testid={`service-${i}`}
            >
              <div className="w-14 h-14 bg-red-600/10 flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                <service.icon className="w-7 h-7 text-red-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="text-center mt-12">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I want to know more about your services.")}`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="services-cta"
          >
            <Button className="bg-transparent border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white font-bold uppercase tracking-wider py-4 px-8 rounded-none transform -skew-x-6 transition-all">
              <span className="skew-fix flex items-center gap-2">
                Enquire Now <ChevronRight size={18} />
              </span>
            </Button>
          </a>
        </motion.div>
      </div>
    </Section>
  );
};

// Pricing Section
const PricingSection = () => {
  const plans = [
    {
      name: "Monthly",
      price: "₹1,500",
      period: "/month",
      features: ["Full Gym Access", "General Trainer Support", "Locker Room Access", "Basic Fitness Assessment"],
      popular: false,
    },
    {
      name: "Quarterly",
      price: "₹4,000",
      period: "/3 months",
      features: ["Full Gym Access", "Dedicated Trainer", "Locker Room Access", "Personalized Diet Chart", "Monthly Progress Tracking"],
      popular: true,
    },
    {
      name: "Yearly",
      price: "₹12,000",
      period: "/year",
      features: ["Full Gym Access", "Personal Trainer (1 Month)", "Locker Room Access", "Custom Diet Plan", "Free Iron Beast T-Shirt", "Priority Support"],
      popular: false,
    },
  ];

  return (
    <Section id="pricing" className="bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <p className="text-red-500 uppercase tracking-[0.2em] text-sm mb-4">Investment</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Membership <span className="text-red-600">Plans</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`relative bg-zinc-900 border ${plan.popular ? 'border-red-600' : 'border-zinc-800'} p-8 flex flex-col hover:scale-105 transition-transform duration-300`}
              data-testid={`pricing-${plan.name.toLowerCase()}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 px-4 py-1 text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold uppercase tracking-wide mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>{plan.price}</span>
                  <span className="text-gray-500 text-sm">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-300">
                    <Check size={16} className="text-red-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I'm interested in the ${plan.name} plan.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`pricing-${plan.name.toLowerCase()}-btn`}
              >
                <Button className={`w-full ${plan.popular ? 'bg-red-600 hover:bg-red-700' : 'bg-zinc-800 hover:bg-zinc-700'} text-white font-bold uppercase tracking-wider py-4 rounded-none transition-all`}>
                  Choose Plan
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

// Gallery Section
const GallerySection = () => {
  const images = [
    "https://images.unsplash.com/photo-1734668484998-c943d1fcb48a?q=85&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1710253705023-c5c6445c9fad?q=85&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1656769539039-9bed78f00463?q=85&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1742560306866-7a973878b378?q=85&w=800&auto=format&fit=crop",
  ];

  return (
    <Section id="gallery" className="bg-[#09090b]">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <p className="text-red-500 uppercase tracking-[0.2em] text-sm mb-4">Real Results</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Transformation <span className="text-red-600">Gallery</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="relative overflow-hidden aspect-square group"
              data-testid={`gallery-${i}`}
            >
              <img
                src={img}
                alt={`Transformation ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-bold uppercase tracking-wider text-sm">Before & After</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p variants={fadeInUp} className="text-center text-gray-500 mt-8 text-sm">
          *Actual member transformations. Results may vary.
        </motion.p>
      </div>
    </Section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Lost 15kg in 4 months",
      text: "Iron Beast Gym completely transformed my life. The trainers here are incredibly supportive and knowledgeable. I never thought I could achieve this kind of physique!",
      rating: 5,
    },
    {
      name: "Priya Deshmukh",
      role: "Fitness Enthusiast",
      text: "Best gym in Chandrapur, hands down! The equipment is top-notch and the environment is so motivating. The personal training program helped me reach my goals faster than I expected.",
      rating: 5,
    },
    {
      name: "Amit Patil",
      role: "Gained 8kg muscle",
      text: "The muscle gain program at Iron Beast is phenomenal. The diet guidance combined with the training plan gave me results I couldn't get anywhere else. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <Section id="testimonials" className="bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <p className="text-red-500 uppercase tracking-[0.2em] text-sm mb-4">Success Stories</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
            What Members <span className="text-red-600">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-zinc-900 p-8 border-l-4 border-red-600 relative testimonial-quote"
              data-testid={`testimonial-${i}`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} size={16} className="fill-red-500 text-red-500" />
                ))}
              </div>
              <p className="text-gray-300 italic leading-relaxed mb-6">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-red-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

// BMI Calculator Section
const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      toast.error("Please enter both height and weight");
      return;
    }
    
    const heightInM = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    
    if (heightInM <= 0 || weightInKg <= 0) {
      toast.error("Please enter valid values");
      return;
    }

    const bmiValue = weightInKg / (heightInM * heightInM);
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) {
      setCategory("Underweight");
    } else if (bmiValue < 25) {
      setCategory("Normal");
    } else if (bmiValue < 30) {
      setCategory("Overweight");
    } else {
      setCategory("Obese");
    }

    toast.success("BMI calculated successfully!");
  };

  const getCategoryColor = () => {
    switch (category) {
      case "Underweight": return "text-blue-400";
      case "Normal": return "text-green-400";
      case "Overweight": return "text-yellow-400";
      case "Obese": return "text-red-400";
      default: return "text-white";
    }
  };

  return (
    <Section id="bmi" className="bg-[#09090b]">
      <div className="max-w-3xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <p className="text-red-500 uppercase tracking-[0.2em] text-sm mb-4">Know Your Body</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
            BMI <span className="text-red-600">Calculator</span>
          </h2>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-zinc-900 border border-zinc-800 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm text-gray-400 uppercase tracking-wider mb-2">Height (cm)</label>
              <Input
                type="number"
                placeholder="e.g., 175"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="bg-zinc-950 border-zinc-800 focus:border-red-600 text-white placeholder:text-zinc-600 rounded-none p-4 h-14"
                data-testid="bmi-height-input"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 uppercase tracking-wider mb-2">Weight (kg)</label>
              <Input
                type="number"
                placeholder="e.g., 70"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="bg-zinc-950 border-zinc-800 focus:border-red-600 text-white placeholder:text-zinc-600 rounded-none p-4 h-14"
                data-testid="bmi-weight-input"
              />
            </div>
          </div>

          <Button
            onClick={calculateBMI}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider py-6 rounded-none transform -skew-x-6 transition-all hover:scale-[1.02] red-glow"
            data-testid="bmi-calculate-btn"
          >
            <span className="skew-fix flex items-center justify-center gap-2">
              <Calculator size={20} />
              Calculate BMI
            </span>
          </Button>

          {bmi && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-center p-6 bg-zinc-950 border border-zinc-800"
              data-testid="bmi-result"
            >
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Your BMI</p>
              <p className="text-5xl font-bold mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>{bmi}</p>
              <p className={`text-xl font-bold uppercase ${getCategoryColor()}`}>{category}</p>
              <p className="text-gray-500 text-sm mt-4">
                {category === "Normal" 
                  ? "Great job! Keep maintaining your healthy lifestyle."
                  : "Join Iron Beast Gym to achieve your ideal body weight!"}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </Section>
  );
};

// Map & Contact Section
const ContactSection = () => {
  return (
    <Section id="contact" className="bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <p className="text-red-500 uppercase tracking-[0.2em] text-sm mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Find <span className="text-red-600">Us</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <motion.div variants={fadeInUp} className="h-[400px] lg:h-full min-h-[400px]" data-testid="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59760.45067549896!2d79.2483!3d19.9615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d12d5e0b0b0b%3A0x1f2e3d4c5b6a7890!2sChandrapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Iron Beast Gym Location"
              className="map-dark"
            ></iframe>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="bg-zinc-900 border border-zinc-800 p-8">
              <h3 className="text-2xl font-bold uppercase tracking-wide mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="font-bold text-white mb-1">Address</p>
                    <p className="text-gray-400">Near Central Bus Stand, Main Road, Chandrapur, Maharashtra 442401</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="font-bold text-white mb-1">Phone</p>
                    <a href="tel:+919876543210" className="text-gray-400 hover:text-red-500 transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="font-bold text-white mb-1">Business Hours</p>
                    <p className="text-gray-400">Monday - Saturday: 6:00 AM - 10:00 PM</p>
                    <p className="text-gray-400">Sunday: 7:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              data-testid="contact-whatsapp-btn"
            >
              <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-6 rounded-full flex items-center justify-center gap-3 transition-all whatsapp-pulse text-lg">
                <MessageCircle size={24} />
                Chat on WhatsApp
              </Button>
            </a>

            {/* Social Links */}
            <div className="flex gap-4 justify-center">
              <a
                href="#"
                className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors"
                data-testid="social-instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors"
                data-testid="social-facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-6 h-6 text-red-600" />
            <span className="font-bold text-lg uppercase tracking-wider" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Iron Beast Gym
            </span>
          </div>
          <p className="text-gray-500 text-sm text-center">
            © 2024 Iron Beast Gym, Chandrapur. All rights reserved. | Best Gym in Chandrapur
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-red-500 text-sm transition-colors">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-red-500 text-sm transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="noise-bg">
      <Toaster position="top-center" richColors />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <GallerySection />
        <TestimonialsSection />
        <BMICalculator />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
