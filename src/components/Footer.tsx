import React from 'react'
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const shopLinks = [
    { label: 'All Products', href: '#' },
    { label: 'Household Bags', href: '#' },
    { label: 'Multi-Size Packs', href: '#' },
    { label: 'Family Sets', href: '#' },
    { label: 'Starter Packs', href: '#' },
  ]

  const businessLinks = [
    { label: 'Wholesale & Bulk Orders', href: '#' },
    { label: 'OEM / Private Label', href: '#' },
    { label: 'Custom Packaging', href: '#' },
    { label: 'Request a Quote', href: '#' },
    { label: 'Sample Service', href: '#' },
  ]

  const companyLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Technology', href: '#' },
    { label: 'Certifications', href: '#' },
    { label: 'Awards', href: '#' },
    { label: 'Contact Us', href: '#' },
  ]

  const supportLinks = [
    { label: 'FAQ', href: '#' },
    { label: 'Shipping Info', href: '#' },
    { label: 'Returns Policy', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ]

  return (
    <footer className="bg-neutral-cream border-t">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-fresh rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-bold text-gradient-fresh">
                EPXFresh
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Advanced fresh-keeping packaging solutions for produce businesses 
              and modern homes. Reducing food waste through innovative technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-fresh-primary" />
                <span>info@epxfresh.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-fresh-primary" />
                <span>+86 XXX XXXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-fresh-primary flex-shrink-0" />
                <span>1604, Building F, No. 98, Xiangxue Eight Road, Huangpu District, Guangzhou, China</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-fresh-primary/10 rounded-lg flex items-center justify-center hover:bg-fresh-primary hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-fresh-primary/10 rounded-lg flex items-center justify-center hover:bg-fresh-primary hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-fresh-primary/10 rounded-lg flex items-center justify-center hover:bg-fresh-primary hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Shop</h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-fresh-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Business Solutions</h3>
            <ul className="space-y-3">
              {businessLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-fresh-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-fresh-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company Links */}
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Guangzhou EPXFresh Technology Co., LTD. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              {companyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-fresh-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Badges */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg border">
              <div className="w-8 h-8 bg-eco-teal/20 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-eco-teal">FDA</span>
              </div>
              <span className="text-xs font-medium text-muted-foreground">FDA Approved</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg border">
              <div className="w-8 h-8 bg-fresh-primary/20 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-fresh-primary">EU</span>
              </div>
              <span className="text-xs font-medium text-muted-foreground">EU Certified</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg border">
              <div className="w-8 h-8 bg-warm-earth/20 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-warm-earth">CNAS</span>
              </div>
              <span className="text-xs font-medium text-muted-foreground">CNAS Accredited</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
