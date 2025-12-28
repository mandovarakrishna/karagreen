import React from 'react';
import { BookOpen, CheckCircle2, FlaskConical } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { biomassPelletsInfo } from '../mock';

const BiomassPelletsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center bg-emerald-100 w-16 h-16 rounded-lg mb-6">
              <BookOpen className="h-8 w-8 text-emerald-700" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Are Biomass Pellets?
            </h1>
            <p className="text-xl text-gray-600">
              Understanding the fuel alternative for industrial thermal applications
            </p>
          </div>
        </div>
      </section>

      {/* Definition */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-emerald-100">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Definition</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {biomassPelletsInfo.definition}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center bg-emerald-100 w-16 h-16 rounded-lg mb-4">
                <CheckCircle2 className="h-8 w-8 text-emerald-700" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Key Benefits
              </h2>
              <p className="text-lg text-gray-600">
                Why industries choose biomass pellets over raw biomass
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {biomassPelletsInfo.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg border border-gray-200">
                  <CheckCircle2 className="h-5 w-5 text-emerald-700 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center bg-emerald-100 w-16 h-16 rounded-lg mb-4">
                <FlaskConical className="h-8 w-8 text-emerald-700" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Typical Specifications
              </h2>
              <p className="text-lg text-gray-600 mb-2">
                Standard characteristics of biomass pellets
              </p>
              <p className="text-sm text-gray-500">
                *Actual specifications may vary based on raw material and customer requirements
              </p>
            </div>

            <Card className="border-gray-200">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-emerald-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                          Parameter
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                          Typical Range
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {biomassPelletsInfo.specifications.map((spec, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-gray-900 font-medium">
                            {spec.parameter}
                          </td>
                          <td className="px-6 py-4 text-gray-700">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison with Coal */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Biomass Pellets vs Coal
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-gray-200 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Energy Content</h3>
                  <p className="text-gray-600">
                    Biomass pellets provide 3,800-4,200 kcal/kg, suitable for industrial applications requiring moderate to high heat values.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Emission Profile</h3>
                  <p className="text-gray-600">
                    Significantly lower sulfur and heavy metal content compared to coal, contributing to reduced air pollution.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Carbon Neutrality</h3>
                  <p className="text-gray-600">
                    CO2 released during combustion is part of the natural carbon cycle, offering lower net carbon impact.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Ash Disposal</h3>
                  <p className="text-gray-600">
                    Biomass ash is typically non-toxic and can be used as agricultural fertilizer, unlike coal ash.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BiomassPelletsPage;