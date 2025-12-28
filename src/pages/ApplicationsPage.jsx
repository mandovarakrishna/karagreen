import React from 'react';
import { Factory, Flame, Building2, Zap } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { applications } from '../mock';

const ApplicationsPage = () => {
  const icons = [Factory, Flame, Building2, Zap];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industrial Applications
            </h1>
            <p className="text-xl text-gray-600">
              Where biomass pellets provide dependable thermal energy
            </p>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {applications.map((app, index) => {
                const IconComponent = icons[index];
                return (
                  <Card key={app.id} className="border-emerald-100 hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="h-7 w-7 text-emerald-700" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {app.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {app.description}
                      </p>
                      <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-700">
                        <p className="text-sm font-semibold text-emerald-900 mb-1">Key Benefit</p>
                        <p className="text-sm text-emerald-800">{app.benefit}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Fuel Substitution Approach
            </h2>
            
            <div className="space-y-6">
              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Direct Replacement</h3>
                  <p className="text-gray-600">
                    Biomass pellets can replace coal in boilers with minor adjustments to feeding systems and combustion parameters. Many facilities achieve successful co-firing without major capital investment.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Emission Compliance</h3>
                  <p className="text-gray-600">
                    Industries facing stricter environmental regulations find biomass pellets help meet emission norms while maintaining operational continuity. Lower sulfur and particulate matter contribute to improved air quality.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Energy Security</h3>
                  <p className="text-gray-600">
                    Diversifying fuel sources reduces dependence on single supply chains. Biomass pellets offer a domestically available alternative that can be sourced from multiple agricultural regions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Operational Flexibility</h3>
                  <p className="text-gray-600">
                    The consistent form factor and combustion characteristics of pellets allow for predictable operation. Storage is simpler than loose biomass, and handling equipment can be adapted from existing systems.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Considerations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Implementation Considerations
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Transitioning to biomass pellets requires understanding of combustion characteristics, storage requirements, and feed system compatibility. We work with customers to address technical aspects and support smooth integration into existing operations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Each industrial facility has unique requirements. Our approach involves understanding your operational parameters and providing pellets that match your specifications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationsPage;