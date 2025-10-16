import { MapPin, Phone, Clock, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MoroccanPattern, OrnamentalDivider } from './MoroccanPattern';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import React from 'react';

export function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1750859537685-24f071b0ae8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NhbiUyMGFyY2hpdGVjdHVyZSUyMGludGVyaW9yfGVufDF8fHx8MTc2MDYzMzg5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Moroccan interior"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90"></div>
          <MoroccanPattern className="absolute inset-0 w-full h-full text-accent opacity-30" />
        </motion.div>

        <motion.div style={{ opacity }} className="relative z-10 text-center px-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto relative">
              <div className="absolute inset-0 bg-accent/20 blur-xl"></div>
              <div className="relative w-full h-full border-2 border-accent rotate-45">
                <div className="absolute inset-2 border border-accent/50"></div>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-7xl md:text-9xl tracking-[0.3em] text-accent mb-4"
          >
            LALA
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-6 mb-8"
          >
            <div className="w-16 h-px bg-accent"></div>
            <p className="text-2xl tracking-[0.5em] text-background">CAFÉ</p>
            <div className="w-16 h-px bg-accent"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl text-background/80 tracking-widest mb-12 italic"
          >
            Taste of North Africa
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Star className="text-accent mx-auto" size={32} fill="currentColor" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-background/60"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-xs tracking-widest"
          >
            SCROLL
            <div className="w-px h-12 bg-background/40 mx-auto mt-2"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="relative py-32 px-6 lg:px-12 bg-background overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <MoroccanPattern className="w-full h-full text-primary" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <OrnamentalDivider className="w-64 h-10 mx-auto mb-8 text-accent" />
            
            <h2 className="text-5xl md:text-6xl tracking-[0.2em] text-primary mb-8">
              A Journey
            </h2>
            
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed mb-6 italic">
              Where centuries-old traditions meet contemporary elegance
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Each dish tells a story of heritage, crafted with passion and presented with artistry. 
              Experience the soul of North Africa through flavors that transcend time.
            </p>

            <OrnamentalDivider className="w-64 h-10 mx-auto mt-8 text-accent" />
          </motion.div>
        </div>
      </section>

      {/* Featured Showcase */}
      <section className="relative py-32 px-6 lg:px-12 bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
        <div className="absolute inset-0">
          <MoroccanPattern className="w-full h-full text-accent opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl tracking-[0.3em] text-accent mb-6">SIGNATURE</h2>
            <p className="text-background/80 tracking-widest">Culinary Masterpieces</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Large Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative aspect-[4/5] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1577639179478-8889f84601c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWdpbmUlMjBkaXNoJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NjA2MzM4OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Tagine"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl tracking-wider text-accent mb-2">Royal Tagine</h3>
                  <p className="text-background/90 tracking-wide">Slow-cooked to perfection</p>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-accent"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-accent"></div>
            </motion.div>

            {/* Right Column - Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: 'Couscous',
                  subtitle: 'Handcrafted',
                  image: 'https://images.unsplash.com/photo-1542627501-cadbb5b43ad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VzY291cyUyMG1vcm9jY2FufGVufDF8fHx8MTc2MDYzMzg5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                },
                {
                  title: 'Tea Ceremony',
                  subtitle: 'Traditional',
                  image: 'https://images.unsplash.com/photo-1601831753677-01f960be19eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NhbiUyMHRlYSUyMGNlcmVtb255fGVufDF8fHx8MTc2MDYzMzg5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                },
                {
                  title: 'Spices',
                  subtitle: 'Authentic',
                  image: 'https://images.unsplash.com/photo-1758745464235-ccb8c1253074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NhbiUyMHNwaWNlcyUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MDYzMzg5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                },
                {
                  title: 'Pastries',
                  subtitle: 'Delicate',
                  image: 'https://images.unsplash.com/photo-1648711809837-5c93747cd492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtsYXZhJTIwcGFzdHJ5fGVufDF8fHx8MTc2MDYzMzg5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="relative group cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden relative">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="text-xl tracking-wider text-accent mb-1">{item.title}</h3>
                      <p className="text-sm text-background/80 tracking-wide">{item.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6 lg:px-12 bg-background overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <MoroccanPattern className="w-full h-full text-primary" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <OrnamentalDivider className="w-64 h-10 mx-auto mb-8 text-accent" />
            <h2 className="text-5xl tracking-[0.3em] text-primary mb-6">VISIT</h2>
            <p className="text-muted-foreground tracking-widest">We Await Your Presence</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: MapPin,
                title: 'Location',
                lines: ['123 Heritage Street', 'London, W1 4XY'],
              },
              {
                icon: Clock,
                title: 'Hours',
                lines: ['Tuesday – Sunday', '12:00 PM – 10:00 PM'],
              },
              {
                icon: Phone,
                title: 'Reservations',
                lines: ['+44 20 1234 5678', 'info@lalacafe.co.uk'],
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="relative text-center p-8 bg-card border border-border hover:border-accent transition-all duration-500 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                      <item.icon className="text-accent" size={32} />
                    </div>
                    <h3 className="text-2xl tracking-widest text-primary mb-4">{item.title}</h3>
                    {item.lines.map((line, i) => (
                      <p key={i} className="text-muted-foreground tracking-wide">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 bg-gradient-to-r from-primary via-secondary to-primary overflow-hidden">
        <div className="absolute inset-0">
          <MoroccanPattern className="w-full h-full text-accent opacity-10" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <OrnamentalDivider className="w-48 h-8 mx-auto mb-6 text-accent" />
          <p className="text-background/60 tracking-widest mb-2">© 2025 Lala Café</p>
          <p className="text-sm text-background/40 tracking-wider">Crafted with Passion</p>
        </div>
      </footer>
    </div>
  );
}
