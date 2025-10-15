import { Button } from '@/components/ui/button'
import { Heart, Package, CheckCircle } from 'lucide-react'

export const HospitalBasketHero = () => {
  const scrollToEssentials = () => {
    const essentialsSection = document.getElementById('essentials-section')
    if (essentialsSection) {
      essentialsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative overflow-hidden gradient-baby-soft py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-primary">
              <Heart className="h-4 w-4 fill-current" />
              <span>Trusted by 10,000+ New Parents</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Everything Ready for
              <span className="block text-gradient-baby">Your Hospital Stay</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Carefully curated hospital bags and postpartum essentials. 
              Everything you need for baby's arrival, all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg"
                onClick={scrollToEssentials}
              >
                <Package className="mr-2 h-5 w-5" />
                See Essentials
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2"
                onClick={() => {
                  const checklistSection = document.getElementById('checklist-section')
                  if (checklistSection) {
                    checklistSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                View Checklist
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Hospital Approved</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Mom Tested</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Fast Shipping</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-float">
              <img 
                src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&h=800&fit=crop"
                alt="Hospital essentials basket"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-start gap-4">
                <div className="bg-baby-pink rounded-full p-3">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Complete Bundle</p>
                  <p className="text-sm text-muted-foreground">Everything you need in one bag</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}