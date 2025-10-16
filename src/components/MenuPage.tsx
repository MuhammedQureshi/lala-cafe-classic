import { ImageWithFallback } from './figma/ImageWithFallback';
import { MoroccanPattern, OrnamentalDivider } from './MoroccanPattern';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function MenuPage() {
  const menuSections = [
    {
      title: "Starters",
      subtitle: "Begin Your Journey",
      items: [
        { name: "Harira Soup", description: "Traditional lentil & chickpea symphony", price: "£8" },
        { name: "Zaalouk", description: "Charred eggplant with Moroccan spices", price: "£9" },
        { name: "Briouats", description: "Crispy filo parcels of spiced lamb", price: "£10" },
        { name: "Mezze Platter", description: "Curated selection of North African treasures", price: "£14" },
      ]
    },
    {
      title: "Main Courses",
      subtitle: "The Heart of Our Story",
      items: [
        { name: "Lamb Tagine", description: "Slow-cooked with apricots, almonds & saffron", price: "£24" },
        { name: "Chicken Tagine", description: "Free-range with preserved lemons & olives", price: "£22" },
        { name: "Royal Couscous", description: "Handrolled semolina, seven vegetables", price: "£20" },
        { name: "Merguez", description: "House-made lamb sausages, harissa aioli", price: "£21" },
        { name: "Sea Bass Chermoula", description: "Grilled with cilantro & paprika marinade", price: "£26" },
      ]
    },
    {
      title: "Desserts",
      subtitle: "Sweet Traditions",
      items: [
        { name: "Baklava", description: "Layered filo, honey & Sicilian pistachios", price: "£8" },
        { name: "M'hanncha", description: "Almond serpent with orange blossom water", price: "£9" },
        { name: "Chebakia", description: "Sesame flower cookies glazed in honey", price: "£7" },
        { name: "Date & Walnut Cake", description: "Rose water cream, pomegranate", price: "£8" },
      ]
    },
    {
      title: "Beverages",
      subtitle: "Liquid Poetry",
      items: [
        { name: "Moroccan Mint Tea", description: "Gunpowder green tea, fresh spearmint", price: "£5" },
        { name: "Fresh Orange Juice", description: "Hand-pressed Valencia oranges", price: "£6" },
        { name: "Arabic Coffee", description: "Dark roast with cardamom essence", price: "£4" },
        { name: "Almond Milk", description: "House-made, orange blossom infusion", price: "£6" },
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1601831753677-01f960be19eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NhbiUyMHRlYSUyMGNlcmVtb255fGVufDF8fHx8MTc2MDYzMzg5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Tea ceremony"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-secondary/80 to-primary/90"></div>
          <MoroccanPattern className="absolute inset-0 w-full h-full text-accent opacity-20" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Sparkles className="text-accent mx-auto mb-8" size={48} />
          </motion.div>
          <h1 className="text-6xl md:text-8xl tracking-[0.4em] text-accent mb-6">MENU</h1>
          <OrnamentalDivider className="w-80 h-12 mx-auto text-accent" />
          <p className="mt-6 text-xl text-background/80 tracking-widest italic">Culinary Heritage</p>
        </motion.div>
      </section>

      {/* Menu Content */}
      <section className="relative py-32 px-6 lg:px-12 bg-background overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <MoroccanPattern className="w-full h-full text-primary" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {menuSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
              className={sectionIndex !== 0 ? 'mt-32' : ''}
            >
              <div className="text-center mb-16">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-32 h-px bg-accent mx-auto mb-6"
                ></motion.div>
                
                <h2 className="text-5xl tracking-[0.3em] text-primary mb-3">{section.title}</h2>
                <p className="text-accent/70 tracking-widest italic">{section.subtitle}</p>
                
                <OrnamentalDivider className="w-48 h-8 mx-auto mt-6 text-accent" />
              </div>

              <div className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="group relative"
                  >
                    <div className="flex justify-between items-start gap-8 py-8 px-6 border-b border-border/30 hover:bg-accent/5 transition-all duration-300">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <h3 className="text-2xl tracking-wide text-primary group-hover:text-accent transition-colors duration-300">
                            {item.name}
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed pl-5">{item.description}</p>
                      </div>
                      <div className="text-2xl text-accent tracking-wider whitespace-nowrap pt-1">
                        {item.price}
                      </div>
                    </div>
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-primary via-secondary to-primary overflow-hidden">
        <div className="absolute inset-0">
          <MoroccanPattern className="w-full h-full text-accent opacity-10" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <OrnamentalDivider className="w-64 h-10 mx-auto mb-8 text-accent" />
          <p className="text-sm tracking-[0.3em] text-accent mb-4">SOURCED WITH CARE</p>
          <p className="text-xl text-background/90 leading-relaxed">
            Every ingredient is carefully selected from trusted suppliers across North Africa,
            ensuring authenticity and the highest quality in every dish we serve.
          </p>
          <OrnamentalDivider className="w-64 h-10 mx-auto mt-8 text-accent" />
        </motion.div>
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
