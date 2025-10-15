import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, Star } from 'lucide-react'
import { useSettings } from '@/contexts/SettingsContext'

const hospitalPacks = [
  {
    name: 'Essential Pack',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop',
    features: [
      'Hospital bag essentials',
      'Newborn basics',
      'Mom comfort items',
      'Going home outfit'
    ],
    popular: false
  },
  {
    name: 'Complete Care Pack',
    price: 159.99,
    originalPrice: 219.99,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop',
    features: [
      'Everything in Essential',
      'Nursing essentials',
      'Diaper station setup',
      'Postpartum recovery kit',
      'Premium swaddles'
    ],
    popular: true
  },
  {
    name: 'Deluxe Bundle',
    price: 249.99,
    originalPrice: 349.99,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop',
    features: [
      'Everything in Complete',
      'Electric breast pump',
      'Organic bedding set',
      'Premium comfort wear',
      'Extended care items',
      'Gift packaging'
    ],
    popular: false
  }
]

export const HospitalPacksSection = () => {
  const { formatMoney } = useSettings()

  return (
    <section className="py-16 gradient-baby-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready-to-Go Hospital Packs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need, perfectly bundled. Save time and money with our curated packs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {hospitalPacks.map((pack, idx) => (
            <Card 
              key={idx} 
              className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                pack.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {pack.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-primary text-white gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="relative h-48 overflow-hidden">
                <img 
                  src={pack.image}
                  alt={pack.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {pack.name}
                </h3>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-primary">
                    {formatMoney(pack.price)}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    {formatMoney(pack.originalPrice)}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  {pack.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full ${
                    pack.popular 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                  }`}
                  size="lg"
                >
                  Choose This Pack
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}