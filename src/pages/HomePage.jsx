import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Recycle, TrendingDown, Factory, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { heroContent, impactPoints } from '../mock';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {heroContent.headline}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              {heroContent.subheadline}
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              {heroContent.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-white px-8">
                  Talk to Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/biomass-pellets">
                <Button size="lg" variant="outline" className="border-emerald-700 text-emerald-700 hover:bg-emerald-50 px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Points */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactPoints.map((point, index) => {
              const icons = [Recycle, TrendingDown, Factory];
              const IconComponent = icons[index];
              
              return (
                <Card key={point.id} className="border-emerald-100 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-emerald-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{point.value}</h3>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{point.title}</h4>
                    <p className="text-gray-600">{point.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Supporting India's Energy Transition
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Biomass pellets offer a practical path for industrial facilities to reduce their carbon footprint while maintaining operational reliability. Our approach focuses on converting agricultural waste into a dependable fuel source.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Waste Utilization</h3>
                <p className="text-gray-600">
                  Agricultural residue that would otherwise be burned in fields is transformed into industrial-grade fuel, addressing both waste management and energy needs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Emission Reduction</h3>
                <p className="text-gray-600">
                  Biomass pellets provide a lower-carbon alternative to coal, helping industries meet environmental compliance requirements.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Operational Compatibility</h3>
                <p className="text-gray-600">
                  Designed to work with existing boiler systems, enabling fuel substitution without major infrastructure changes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Consistency</h3>
                <p className="text-gray-600">
                  Systematic processing ensures uniform pellet characteristics, providing predictable combustion performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Explore Our Offering
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Link to="/biomass-pellets" className="group">
              <Card className="h-full border-gray-200 hover:border-emerald-700 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    What Are Biomass Pellets?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn about the properties, benefits, and technical specifications of biomass pellets.
                  </p>
                  <div className="flex items-center text-emerald-700 font-medium">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/process" className="group">
              <Card className="h-full border-gray-200 hover:border-emerald-700 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    Our Manufacturing Process
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Understand how we transform raw agricultural waste into quality fuel pellets.
                  </p>
                  <div className="flex items-center text-emerald-700 font-medium">
                    View Process
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/buyers" className="group">
              <Card className="h-full border-gray-200 hover:border-emerald-700 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    For Industrial Buyers
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Specifications, supply options, and inquiry details for procurement teams.
                  </p>
                  <div className="flex items-center text-emerald-700 font-medium">
                    Get Details
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transition to Cleaner Fuel?
          </h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Connect with our team to discuss your requirements and explore how biomass pellets can work for your operations.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 px-8">
              Request Information
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;