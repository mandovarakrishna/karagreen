import React from 'react';
import { Target, Eye, Award } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { aboutContent } from '../mock';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Karagreen
            </h1>
            <p className="text-xl text-gray-600">
              Building sustainable energy infrastructure for India's industrial sector
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-emerald-100">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-emerald-700" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {aboutContent.mission}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-emerald-100">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-emerald-700" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {aboutContent.vision}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center bg-emerald-100 w-16 h-16 rounded-lg mb-4">
                <Award className="h-8 w-8 text-emerald-700" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600">
                Principles that guide our operations and partnerships
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aboutContent.values.map((value) => (
                <Card key={value.id} className="bg-white border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Commitment
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Karagreen operates with a focus on long-term sustainability and industrial reliability. We understand that energy decisions are critical for manufacturing operations and carry implications for both economics and environment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our approach is straightforward: provide consistent quality biomass pellets that meet industrial specifications, support our customers' transition toward cleaner fuel, and build infrastructure that can scale with India's growing clean energy requirements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;