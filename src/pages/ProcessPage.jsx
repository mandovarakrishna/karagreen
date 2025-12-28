import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { processSteps } from '../mock';

const ProcessPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Manufacturing Process
            </h1>
            <p className="text-xl text-gray-600">
              From agricultural residue to industrial-grade fuel pellets
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {processSteps.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute left-8 top-24 w-0.5 h-16 bg-emerald-200" />
                  )}
                  
                  <div className="flex flex-col md:flex-row gap-6 mb-8">
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div className="bg-emerald-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
                        {step.id}
                      </div>
                    </div>
                    
                    {/* Step Content */}
                    <Card className="flex-grow border-emerald-100 hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Focus */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Quality at Every Stage
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Raw Material Selection</h3>
                  <p className="text-gray-600">
                    Careful sourcing ensures consistent quality feedstock, establishing the foundation for reliable pellet characteristics.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Process Control</h3>
                  <p className="text-gray-600">
                    Monitoring at critical points maintains uniformity in moisture content, density, and pellet integrity.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Testing Protocol</h3>
                  <p className="text-gray-600">
                    Regular sampling and analysis verify that pellets meet specified parameters before dispatch.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Storage & Handling</h3>
                  <p className="text-gray-600">
                    Protected storage and careful handling preserve pellet quality during storage and transportation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Production Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Consistency Through Process Discipline
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Industrial operations require fuel that performs predictably. Our manufacturing approach focuses on maintaining consistent specifications through systematic process control. Each batch undergoes the same rigorous steps, ensuring that customers receive pellets that meet their operational requirements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;