import { ProductCard } from '@/components/ProductCard'
import { FloatingCart } from '@/components/FloatingCart'
import { NewsletterSection } from '@/components/NewsletterSection'
import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { HospitalBasketHero } from '@/components/HospitalBasketHero'
import { NewbornChecklist } from '@/components/NewbornChecklist'
import { CategoryShowcase } from '@/components/CategoryShowcase'
import { HospitalPacksSection } from '@/components/HospitalPacksSection'
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex'
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'

interface IndexUIProps {
  logic: UseIndexLogicReturn
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <HospitalBasketHero />

      {/* Newborn Checklist */}
      <NewbornChecklist />

      {/* Category Showcase */}
      {!loadingCollections && collections.length > 0 && (
        <CategoryShowcase 
          collections={collections}
          onViewCollection={handleViewCollectionProducts}
        />
      )}

      {/* Hospital Packs */}
      <HospitalPacksSection />

      {/* Featured Products Section */}
      <section id="essentials-section" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {selectedCollectionId 
                  ? `${collections.find(c => c.id === selectedCollectionId)?.name || 'Collection'}` 
                  : 'Featured Essentials'
                }
              </h2>
              <p className="text-muted-foreground">
                {selectedCollectionId
                  ? collections.find(c => c.id === selectedCollectionId)?.description
                  : 'Handpicked essentials for your journey'
                }
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
              >
                See All Products
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-muted rounded-lg h-80 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No products available in this collection.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gradient-to-b from-baby-lavender to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heart className="h-12 w-12 text-primary mx-auto mb-4 fill-current" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Made with Love for New Parents
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Every product is carefully selected and tested by real parents. 
              We understand what you need because we've been there too.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-muted-foreground">Happy Families</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.9★</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  )
}