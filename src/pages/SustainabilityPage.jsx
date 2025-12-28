import React from 'react';
import { Sprout, Wind, Recycle, Users } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { sustainabilityImpact } from '../mock';

const SustainabilityPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sustainability Impact
            </h1>
            <p className="text-xl text-gray-600">
              Environmental and social benefits of biomass pellet adoption
            </p>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {sustainabilityImpact.map((impact, index) => {
                const icons = [Wind, Sprout, Recycle, Users];
                const IconComponent = icons[index];
                
                return (
                  <Card key={impact.id} className="border-emerald-100 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0">
                          <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-7 w-7 text-emerald-700" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {impact.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {impact.description}
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

      {/* Environmental Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Environmental Considerations
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Air Quality Improvement</h3>
                  <p className="text-gray-600">
                    By preventing open burning of agricultural residue, biomass pellet production contributes to reduced particulate matter and smoke in rural areas, particularly during harvest seasons.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Lower Fossil Fuel Use</h3>
                  <p className="text-gray-600">
                    Each tonne of biomass pellets substituted for coal represents avoided fossil fuel extraction and consumption, contributing to resource conservation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Waste Stream Reduction</h3>
                  <p className="text-gray-600">
                    Agricultural residue becomes a valuable resource rather than a disposal problem, demonstrating practical circular economy principles.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Renewable Energy Source</h3>
                  <p className="text-gray-600">
                    Biomass is regenerated annually through agricultural cycles, making it a renewable alternative to finite fossil resources.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Rural Economic Value
            </h2>
            
            <Card className="border-emerald-100">
              <CardContent className="p-8">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  The biomass pellet supply chain creates economic opportunities in rural areas. Farmers and collection networks receive payment for agricultural residue that previously had no commercial value.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  This additional income stream, while modest per farmer, aggregates to meaningful value across farming communities. It also creates employment in collection, transportation, and processing activities.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Responsible sourcing practices ensure that this economic benefit flows sustainably, avoiding exploitation and building long-term relationships with rural suppliers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Policy Alignment */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Alignment with National Objectives
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              India's clean energy policies emphasize reducing dependence on imported fossil fuels and increasing the share of renewable energy in industrial consumption. Biomass pellets support these objectives by providing a domestic, renewable alternative.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Industrial decarbonization requires practical solutions that work within existing infrastructure and economic constraints. Biomass pellets offer one such solution, particularly for sectors where electrification is not immediately feasible.
            </p>
          </div>
        </div>
      </section>

      {/* Realistic Perspective */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-gray-200 bg-gray-50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  A Balanced View
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Biomass pellets are not a perfect solution, and we don't claim otherwise. They are one component of India's broader energy transition, suitable for specific applications where they offer practical advantages.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our focus is on making this option work reliably for industries that choose it, while being transparent about what biomass pellets can and cannot deliver.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityPage;