import React from 'react'
import { Button } from '@/components/ui/button'

const categories = ['All', 'Residential', 'Commercial', 'Office', 'Retail']

interface PortfolioFiltersProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

const PortfolioFilters = ({ activeCategory, onCategoryChange }: PortfolioFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}

export default PortfolioFilters
