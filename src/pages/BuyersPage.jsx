import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Package, Handshake, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { biomassPelletsInfo } from '../mock';

const BuyersPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              For Industrial Buyers
            </h1>
            <p className="text-xl text-gray-600">
              Specifications, supply models, and partnership approach
            </p>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center bg-emerald-100 w-16 h-16 rounded-lg mb-4">
                <FileText className="h-8 w-8 text-emerald-700" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Typical Pellet Specifications
              </h2>
              <p className="text-lg text-gray-600 mb-2">
                Reference ranges for procurement discussions
              </p>
              <p className="text-sm text-gray-500">
                *Final specifications customized based on your requirements
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

            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-amber-900">
                <strong>Note:</strong> Actual specifications vary based on raw material source and can be adjusted within feasible ranges to match customer requirements. Testing protocols and certification available upon request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Models */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center bg-emerald-100 w-16 h-16 rounded-lg mb-4">
                <Package className="h-8 w-8 text-emerald-700" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Supply Options
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Bulk Supply</h3>
                  <p className="text-gray-600 mb-4">
                    Loose pellets delivered in bulk transport for large-volume consumers with appropriate storage and handling infrastructure.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Suitable for continuous operations</li>
                    <li>• Lower per-unit cost</li>
                    <li>• Requires bulk storage facilities</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Bagged Supply</h3>
                  <p className="text-gray-600 mb-4">
                    Pellets packed in standardized bags for easier handling and storage, suitable for smaller volumes or trial orders.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Flexible for varying demand</li>
                    <li>• Simpler storage requirements</li>
                    <li>• Good for testing and trials</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6 border-emerald-100 bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Customization</h3>
                <p className="text-gray-600">
                  We can work within feasible parameters to adjust specifications based on your combustion equipment and operational requirements. This includes variations in raw material mix, size specifications, and moisture content within achievable ranges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center bg-emerald-100 w-16 h-16 rounded-lg mb-4">
                <Handshake className="h-8 w-8 text-emerald-700" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Long-Term Partnerships
              </h2>
            </div>

            <Card className="border-emerald-100">
              <CardContent className="p-8">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We focus on building lasting relationships with industrial buyers. Fuel supply is critical to your operations, and we take that responsibility seriously.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-100 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-emerald-700 rounded-full" />
                    </div>
                    <p className="text-gray-700">Consistent quality through systematic production</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-100 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-emerald-700 rounded-full" />
                    </div>
                    <p className="text-gray-700">Regular communication on supply schedules</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-100 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-emerald-700 rounded-full" />
                    </div>
                    <p className="text-gray-700">Technical support during transition phase</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-100 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-emerald-700 rounded-full" />
                    </div>
                    <p className="text-gray-700">Transparent pricing and contract terms</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discuss Your Requirements
          </h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Connect with our team to explore specifications, conduct trial orders, or discuss long-term supply arrangements.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 px-8">
              Submit Inquiry
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BuyersPage;