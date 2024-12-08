import React from 'react'
import PortfolioGrid from './components/PortfolioGrid'
import PortfolioFilters from './components/PortfolioFilters'

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = React.useState('All')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Portofolio</h1>
      <PortfolioFilters
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <PortfolioGrid />
    </div>
  )
}

export default PortfolioPage
