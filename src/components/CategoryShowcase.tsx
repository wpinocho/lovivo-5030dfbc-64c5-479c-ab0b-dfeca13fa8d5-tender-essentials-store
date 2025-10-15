import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Baby, Heart, Package2, Sparkles } from 'lucide-react'
import type { Collection } from '@/lib/supabase'

interface CategoryShowcaseProps {
  collections: Collection[]
  onViewCollection: (collectionId: string) => void
}

const categoryIcons: Record<string, any> = {
  'nursing-essentials': Heart,
  'diaper-station': Package2,
  'mom-care': Sparkles,
  'hospital-essentials': Baby
}

const categoryColors: Record<string, string> = {
  'nursing-essentials': 'from-baby-pink to-baby-peach',
  'diaper-station': 'from-baby-blue to-baby-mint',
  'mom-care': 'from-baby-lavender to-baby-pink',
  'hospital-essentials': 'from-baby-peach to-baby-blue'
}

export const CategoryShowcase = ({ collections, onViewCollection }: CategoryShowcaseProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you need, organized by your journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => {
            const Icon = categoryIcons[collection.handle] || Baby
            const gradientClass = categoryColors[collection.handle] || 'from-baby-pink to-baby-blue'
            
            return (
              <Card 
                key={collection.id} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => onViewCollection(collection.id)}
              >
                <div className={`h-48 bg-gradient-to-br ${gradientClass} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="h-20 w-20 text-white/80 group-hover:scale-110 transition-transform" />
                  </div>
                  {collection.image && (
                    <img 
                      src={collection.image}
                      alt={collection.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                    />
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {collection.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {collection.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    Shop Now
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}