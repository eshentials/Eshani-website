"use client";

export function ExperienceSection() {
  return (
    <section className="py-20" style={{backgroundColor: '#f7f6f0'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-serif">PROFESSIONAL EXPERIENCE</h2>
          <div className="w-16 h-1 bg-black mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-serif">
            Industry experience and technical achievements
          </p>
        </div>

        {/* Experience Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* EY Internship Article */}
          <article className="p-6" style={{backgroundColor: '#f7f6f0'}}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-black font-serif">SUMMER INTERN</h3>
                <p className="text-sm text-gray-600 font-serif">Ernst & Young LLP</p>
              </div>
              <div className="text-right text-sm font-serif">
                <p className="font-bold">MAY 2025 – JULY 2025</p>
                <p className="text-gray-600">3 MONTHS</p>
              </div>
            </div>
            
            <div className="w-full h-px bg-black mb-4"></div>
            
            <div className="space-y-4 text-sm font-serif">
              <div className="p-4" style={{backgroundColor: '#f7f6f0'}}>
                <h4 className="font-bold text-black mb-2">AUTOMATION & COMPLIANCE</h4>
                <p className="text-gray-700">
                  Automated regulatory change tracking by scraping regulatory body websites using Selenium Webdriver and NLP pipelines, enabling compliance teams to receive actionable summarized reports with reduced manual effort.
                </p>
              </div>
              
              <div className="p-4" style={{backgroundColor: '#f7f6f0'}}>
                <h4 className="font-bold text-black mb-2">ML CONSUMER PROTECTION</h4>
                <p className="text-gray-700">
                  Developed an ML tool to detect and flag false urgency patterns on e-commerce sites using real-time anomaly detection models, strengthening consumer protection audits.
                </p>
              </div>
            </div>
            
            <div className="mt-4 text-xs text-gray-500 font-serif">
              <p><span className="font-bold">Technologies:</span> Selenium, NLP, Machine Learning, Python</p>
              <p><span className="font-bold">Impact:</span> Streamlined compliance processes, enhanced consumer protection</p>
            </div>
          </article>

          {/* Dixon IoT Lab Article */}
          <article className="p-6" style={{backgroundColor: '#f7f6f0'}}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-black font-serif">DEVOPS INTERN</h3>
                <p className="text-sm text-gray-600 font-serif">Dixon IoT Lab, Plaksha University</p>
              </div>
              <div className="text-right text-sm font-serif">
                <p className="font-bold">SEPT 2024 – NOV 2024</p>
                <p className="text-gray-600">3 MONTHS</p>
              </div>
            </div>
            
            <div className="w-full h-px bg-black mb-4"></div>
            
            <div className="space-y-4 text-sm font-serif">
              <div className="p-4" style={{backgroundColor: '#f7f6f0'}}>
                <h4 className="font-bold text-black mb-2">ETL PIPELINE DEVELOPMENT</h4>
                <p className="text-gray-700">
                  Implemented ETL pipelines to convert batch smart socket data using Apache NiFi, streamlining ingestion for downstream analysis.
                </p>
              </div>
              
              <div className="p-4" style={{backgroundColor: '#f7f6f0'}}>
                <h4 className="font-bold text-black mb-2">DATA EXTRACTION & MONITORING</h4>
                <p className="text-gray-700">
                  Created query-based data extraction scripts in Python and configured Kafka monitoring stack with JMX Exporter, Prometheus, and Grafana for real-time IoT metrics visualization.
                </p>
              </div>
            </div>
            
            <div className="mt-4 text-xs text-gray-500 font-serif">
              <p><span className="font-bold">Technologies:</span> Apache NiFi, Kafka, Python, Prometheus, Grafana</p>
              <p><span className="font-bold">Impact:</span> Improved researcher productivity and system reliability</p>
            </div>
          </article>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-black pt-6">
          <div className="text-center">
            <h4 className="text-sm font-bold text-black mb-2 font-serif uppercase">TOTAL EXPERIENCE</h4>
            <p className="text-sm text-black font-serif">6+ Months</p>
          </div>
          <div className="text-center">
            <h4 className="text-sm font-bold text-black mb-2 font-serif uppercase">COMPANIES</h4>
            <p className="text-sm text-black font-serif">EY, Plaksha University</p>
          </div>
          <div className="text-center">
            <h4 className="text-sm font-bold text-black mb-2 font-serif uppercase">FOCUS AREAS</h4>
            <p className="text-sm text-black font-serif">ML, DevOps, Automation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
