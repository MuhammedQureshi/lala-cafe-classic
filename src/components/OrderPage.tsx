import { ExternalLink, Truck, Clock, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MoroccanPattern, OrnamentalDivider } from './MoroccanPattern';
import { motion } from 'motion/react';

export function OrderPage() {
  const deliveryServices = [
    {
      name: "Uber Eats",
      description: "Swift & Reliable",
      url: "https://www.ubereats.com",
      gradient: "from-emerald-600 to-emerald-400",
    },
    {
      name: "Deliveroo",
      description: "Premium Delivery",
      url: "https://www.deliveroo.co.uk",
      gradient: "from-cyan-600 to-cyan-400",
    },
    {
      name: "Just Eat",
      description: "Order with Ease",
      url: "https://www.just-eat.co.uk",
      gradient: "from-orange-600 to-orange-400",
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1577639179478-8889f84601c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWdpbmUlMjBkaXNoJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NjA2MzM4OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Tagine dish"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-secondary/85 to-primary/95"></div>
          <MoroccanPattern className="absolute inset-0 w-full h-full text-accent opacity-20" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Truck className="text-accent mx-auto mb-8" size={56} />
          </motion.div>
          <h1 className="text-6xl md:text-8xl tracking-[0.4em] text-accent mb-6">ORDER</h1>
          <OrnamentalDivider className="w-80 h-12 mx-auto text-accent" />
          <p className="mt-6 text-xl text-background/80 tracking-widest italic">
            Delivered to Your Doorstep
          </p>
        </motion.div>
      </section>

      {/* Delivery Services */}
      <section className="relative py-32 px-6 lg:px-12 bg-background overflow-hidden">
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
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed mb-12">
              Experience the authentic flavors of North Africa without leaving your home. 
              Select your preferred delivery partner below.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {deliveryServices.map((service, index) => (
              <motion.a
                key={service.name}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                
                <div className="relative bg-card border-2 border-border hover:border-accent p-10 transition-all duration-500 h-full">
                  <div className="text-center space-y-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-full mx-auto shadow-2xl`}
                    ></motion.div>

                    <div>
                      <h3 className="text-3xl tracking-widest text-primary mb-2">{service.name}</h3>
                      <p className="text-sm text-muted-foreground tracking-wide">{service.description}</p>
                    </div>

                    <div className="pt-4">
                      <div className="inline-flex items-center gap-3 text-accent group-hover:gap-5 transition-all duration-300">
                        <span className="tracking-widest">Order Now</span>
                        <ExternalLink size={20} className="group-hover:rotate-45 transition-transform duration-300" />
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 w-12 h-12 border-r border-t border-accent/20 group-hover:border-accent transition-colors duration-300"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 border-l border-b border-accent/20 group-hover:border-accent transition-colors duration-300"></div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Collection Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 bg-gradient-to-br from-primary to-secondary overflow-hidden group"
          >
            <div className="absolute inset-0">
              <MoroccanPattern className="w-full h-full text-accent opacity-10" />
            </div>
            
            <div className="relative z-10 text-center space-y-6">
              <OrnamentalDivider className="w-56 h-10 mx-auto text-accent" />
              
              <h3 className="text-3xl tracking-[0.3em] text-accent">COLLECTION</h3>
              
              <p className="text-xl text-background/90 max-w-2xl mx-auto">
                Prefer to collect? Call us at{' '}
                <span className="text-accent tracking-wider">+44 20 1234 5678</span>
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 pt-4">
                <div className="flex items-center gap-3 text-background/80">
                  <Clock size={20} className="text-accent" />
                  <span className="tracking-wide">Ready in 20-30 min</span>
                </div>
                <div className="flex items-center gap-3 text-background/80">
                  <span className="text-accent text-xl">•</span>
                  <span className="tracking-wide">10% Discount</span>
                </div>
              </div>

              <OrnamentalDivider className="w-56 h-10 mx-auto text-accent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="relative py-24 px-6 lg:px-12 bg-muted overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <MoroccanPattern className="w-full h-full text-primary" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-6"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                <Clock className="text-accent" size={32} />
              </div>
              <div>
                <h3 className="text-2xl tracking-widest text-primary mb-3">Delivery Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="tracking-wide">Tuesday – Sunday</p>
                  <p className="tracking-wide">12:00 PM – 9:30 PM</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-6"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                <MapPin className="text-accent" size={32} />
              </div>
              <div>
                <h3 className="text-2xl tracking-widest text-primary mb-3">Delivery Area</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="tracking-wide">Central & West London</p>
                  <p className="tracking-wide">5 miles radius</p>
                </div>
              </div>
            </motion.div>
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
