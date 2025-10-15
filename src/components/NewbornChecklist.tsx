import { CheckCircle2, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const checklistItems = [
  {
    category: 'For Baby',
    items: [
      'Onesies (6-8)',
      'Swaddle blankets (3-4)',
      'Newborn diapers',
      'Baby wipes',
      'Going home outfit',
      'Receiving blankets'
    ]
  },
  {
    category: 'For Mom',
    items: [
      'Nursing bras (2-3)',
      'Postpartum pads',
      'Comfortable robe',
      'Nursing pillow',
      'Nipple cream',
      'Comfortable slippers'
    ]
  },
  {
    category: 'Hospital Bag',
    items: [
      'Insurance cards',
      'Birth plan copies',
      'Phone charger',
      'Snacks',
      'Camera',
      'Toiletries'
    ]
  }
]

export const NewbornChecklist = () => {
  return (
    <section id="checklist-section" className="py-16 bg-gradient-to-b from-baby-blue to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Complete Newborn Checklist
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't forget anything! Our comprehensive checklist covers everything you need for baby's arrival.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {checklistItems.map((section, idx) => (
            <Card key={idx} className="p-6 bg-white hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                {section.category}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="gap-2">
            <Download className="h-5 w-5" />
            Download Full Checklist
          </Button>
        </div>
      </div>
    </section>
  )
}