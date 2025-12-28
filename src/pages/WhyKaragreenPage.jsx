import React from 'react';
import { Shield, TrendingUp, Scale, Leaf, Users } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { whyKaragreen } from '../mock';

const WhyKaragreenPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Karagreen
            </h1>
            <p className="text-xl text-gray-600">
              Building trust through reliable operations and industrial focus
            </p>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {whyKaragreen.map((item, index) => {
                const icons = [Shield, TrendingUp, Scale, Leaf, Users];
                const IconComponent = icons[index];
                
                return (
                  <Card key={item.id} className="border-emerald-100 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0">
                          <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-7 w-7 text-emerald-700" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Factors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Approach to Industrial Partnerships
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Long-Term Focus</h3>
                  <p className="text-gray-600">
                    We build relationships based on consistent supply and quality. Industrial operations require reliability over time, not one-off transactions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Understanding</h3>
                  <p className="text-gray-600">
                    We speak the language of industrial operations. Our team understands combustion requirements, fuel specifications, and operational constraints.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Supply Chain Stability</h3>
                  <p className="text-gray-600">
                    Multiple sourcing regions and storage capacity help maintain consistent availability. We plan for continuity, not just current orders.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparent Communication</h3>
                  <p className="text-gray-600">
                    Clear information about specifications, availability, and delivery timelines. No surprises, no exaggerated claims.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Built for the Long Run
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Karagreen is not chasing short-term opportunities. We are building infrastructure and capabilities for sustained operations in the biomass pellet sector. This means investing in quality control systems, supply chain development, and technical knowledge.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our customers are making significant energy decisions. We aim to be a dependable partner in those decisions, providing fuel that works and relationships that last.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyKaragreenPage;