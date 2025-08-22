import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Star, Heart, Scissors, Palette, Sparkles, Instagram, Facebook, Mail, Phone } from "lucide-react"

export default function FashionPortfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-heading text-primary">रू & रा by Pooja</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">
                Portfolio
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">Get Quote</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-heading text-foreground mb-6">
            Welcome to <span className="text-primary">रू & रा</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Hi, welcome to रू & रा by Pooja. Our customers matter the most to us. We deal in services like customisation
            of outfits, Digital Illustrations, Embroidery, Fashion Styling and many more services. Get your Pinteresty
            and Trendy designs now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Explore Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-heading text-center mb-16">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Scissors className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading">Outfit Customization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Transform your wardrobe with personalized outfit designs tailored to your style and preferences.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-secondary/10 rounded-full w-fit">
                  <Palette className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-heading">Digital Illustrations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Beautiful digital artwork and fashion illustrations that bring your creative visions to life.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading">Embroidery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Exquisite hand-crafted embroidery work that adds elegance and tradition to your garments.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-secondary/10 rounded-full w-fit">
                  <Sparkles className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-heading">Fashion Styling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Professional styling services to help you look and feel your absolute best for any occasion.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-heading text-center mb-16">Our Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Portfolio Grid - Pinterest Style */}
            <div className="space-y-6">
              <Card className="overflow-hidden group cursor-pointer">
                <div className="relative">
                  <img
                    src="/elegant-indian-outfit-customization.png"
                    alt="Custom Outfit Design"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Badge className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-primary-foreground">
                      Outfit Customization
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-heading text-lg mb-2">Elegant Lehenga Design</h4>
                  <p className="text-muted-foreground text-sm">Custom embroidered lehenga with traditional motifs</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden group cursor-pointer">
                <div className="relative">
                  <img
                    src="/fashion-illustration-sketch.png"
                    alt="Digital Illustration"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Badge className="opacity-0 group-hover:opacity-100 transition-opacity bg-secondary text-secondary-foreground">
                      Digital Art
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-heading text-lg mb-2">Fashion Sketch</h4>
                  <p className="text-muted-foreground text-sm">Digital illustration for client's dream outfit</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="overflow-hidden group cursor-pointer">
                <div className="relative">
                  <img
                    src="/placeholder-klpjq.png"
                    alt="Embroidery Work"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Badge className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-primary-foreground">
                      Embroidery
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-heading text-lg mb-2">Golden Thread Work</h4>
                  <p className="text-muted-foreground text-sm">Intricate hand embroidery with gold threads</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden group cursor-pointer">
                <div className="relative">
                  <img
                    src="/fashion-styling-coordination.png"
                    alt="Fashion Styling"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Badge className="opacity-0 group-hover:opacity-100 transition-opacity bg-secondary text-secondary-foreground">
                      Styling
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-heading text-lg mb-2">Complete Look Styling</h4>
                  <p className="text-muted-foreground text-sm">Professional styling for special occasions</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="overflow-hidden group cursor-pointer">
                <div className="relative">
                  <img
                    src="/indian-fusion-wear.png"
                    alt="Fusion Wear"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Badge className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-primary-foreground">
                      Fusion Design
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-heading text-lg mb-2">Indo-Western Fusion</h4>
                  <p className="text-muted-foreground text-sm">Modern twist on traditional Indian wear</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden group cursor-pointer">
                <div className="relative">
                  <img
                    src="/colorful-textile-patterns.png"
                    alt="Textile Design"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Badge className="opacity-0 group-hover:opacity-100 transition-opacity bg-secondary text-secondary-foreground">
                      Textile Design
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-heading text-lg mb-2">Pattern Creation</h4>
                  <p className="text-muted-foreground text-sm">Custom textile patterns and prints</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-heading text-center mb-16">What Our Customers Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Pooja's work is absolutely stunning! She transformed my simple saree into a masterpiece with her
                  embroidery skills."
                </p>
                <h4 className="font-heading text-lg">Priya Sharma</h4>
                <p className="text-sm text-muted-foreground">Mumbai</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "The digital illustrations were exactly what I envisioned. Pooja has an incredible eye for detail and
                  style."
                </p>
                <h4 className="font-heading text-lg">Anita Desai</h4>
                <p className="text-sm text-muted-foreground">Delhi</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Professional styling service that made me feel confident and beautiful. Highly recommend रू & रा!"
                </p>
                <h4 className="font-heading text-lg">chennai</h4>
                <p className="text-sm text-muted-foreground">India </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-heading text-center mb-16">Get In Touch</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-heading mb-6">Let's Create Something Beautiful Together</h4>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ready to transform your style? Whether you need custom outfits, digital illustrations, or professional
                styling, we're here to bring your fashion dreams to life. Get in touch for a personalized consultation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>roohnraahbypooja@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>8925344681</span>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                  <Instagram className="h-6 w-6 text-primary cursor-pointer hover:text-primary/80" />
                  <Facebook className="h-6 w-6 text-primary cursor-pointer hover:text-primary/80" />
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Send us a message</CardTitle>
                <CardDescription>We'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Your Email" type="email" />
                </div>
                <Input placeholder="Subject" />
                <Textarea placeholder="Tell us about your project..." className="min-h-[120px]" />
                <Button className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-heading text-primary">रू & रा by Pooja</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Creating beautiful, trendy designs that celebrate your unique style
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 रू & रा by Pooja. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
