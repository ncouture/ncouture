import React from 'react';

const StormvaultCV = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg my-8">
      {/* Header Section */}
      <div className="bg-gray-900 text-white p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold">NICOLAS COUTURE</h1>
            <h2 className="text-xl mt-2 text-gray-300">THE INFRASTRUCTURE WHISPERER</h2>
            <p className="text-gray-400 mt-1">Founder & CTO, Stormvault Networks</p>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <p className="text-gray-300">work@stormvault.net</p>
            <p className="text-gray-300">+1-514-688-7124</p>
            <p className="text-gray-300">linkedin.com/in/nicolascouture</p>
          </div>
        </div>
      </div>

      {/* Remarkable Positioning Statement */}
      <div className="p-8 border-b border-gray-200 bg-gray-50">
        <p className="text-lg text-gray-700 italic">
          "I don't fix servers, infrastructure, or outages. I fix the gap between what your technology does and what your business needs."
        </p>
      </div>

      {/* Professional Summary */}
      <div className="p-8 border-b border-gray-200">
        <p className="text-gray-700">
          For two decades, I've been the quiet force behind systems that don't just perform—they transform. The evidence? A business assistant platform I built in 2016 that ran without human intervention for six full years after I moved on. It didn't just work—it created freedom for the people who depended on it.
        </p>
        <p className="text-gray-700 mt-4">
          When you bring me in, you're not hiring technical expertise. You're investing in someone who builds systems that make your business more human, not less.
        </p>
      </div>

      {/* Philosophy Section */}
      <div className="p-8 border-b border-gray-200 bg-gradient-to-r from-gray-100 to-white">
        <h3 className="text-lg font-bold text-gray-800 mb-4">MY APPROACH: TURNING CHAOS INTO CLARITY</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">The Infrastructure Philosophy</h4>
            <p className="text-gray-600 text-sm">
              Stormvault Networks exists because organizations deserve infrastructure that turns chaos into clarity. The storm is what happens outside your vault. Inside, there's only possibilities. My journey began with a hacker's mindset: understanding vulnerabilities is the first step to creating security.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Beyond Technical Wizardry</h4>
            <p className="text-gray-600 text-sm">
              This isn't about technical wizardry. It's about seeing what others miss: infrastructure exists to create possibility, not just prevent problems. The most dangerous security posture isn't ignorance—it's false confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Strategic Impact */}
      <div className="p-8 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-700 mb-4">STRATEGIC IMPACT</h3>
        
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <h4 className="font-semibold text-gray-800">Ubisoft Canada</h4>
              <p className="text-gray-500 text-sm">Principal Senior Hybrid-Cloud Infrastructure Engineer</p>
            </div>
            <span className="text-gray-500 text-sm">2023-2024</span>
          </div>
          <ul className="list-disc pl-5 text-gray-600 mt-2 text-sm">
            <li>Led monolith-to-microservice transformation that revolutionized developer workflow</li>
            <li>Eliminated costly cloud environments through containerized local development architecture</li>
            <li>Achieved 100% increase in developer DevOps proficiency through strategic mentorship</li>
          </ul>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <h4 className="font-semibold text-gray-800">Invue Security Products</h4>
              <p className="text-gray-500 text-sm">Senior JavaScript Software Developer (DevOps & SRE)</p>
            </div>
            <span className="text-gray-500 text-sm">2021-2023</span>
          </div>
          <ul className="list-disc pl-5 text-gray-600 mt-2 text-sm">
            <li>Led monolith-to-microservice transformation that revolutionized developer workflow</li>
            <li>Eliminated costly cloud environments through containerized local development architecture</li>
            <li>Achieved 100% increase in developer DevOps proficiency through strategic mentorship</li>
          </ul>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <h4 className="font-semibold text-gray-800">Desjardins</h4>
              <p className="text-gray-500 text-sm">Senior Software Developer</p>
            </div>
            <span className="text-gray-500 text-sm">2020-2021</span>
          </div>
          <ul className="list-disc pl-5 text-gray-600 mt-2 text-sm">
            <li>Engineered enterprise-wide identity governance framework affecting thousands of users</li>
            <li>Eliminated security vulnerabilities through strategic account consolidation</li>
            <li>Pioneered Big Data solutions for marketing intelligence</li>
          </ul>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <h4 className="font-semibold text-gray-800">Decathlon</h4>
              <p className="text-gray-500 text-sm">E-commerce Infrastructure Director and Architect</p>
            </div>
            <span className="text-gray-500 text-sm">2019-2020</span>
          </div>
          <ul className="list-disc pl-5 text-gray-600 mt-2 text-sm">
            <li>Designed cross-cloud migration strategy preserving business continuity</li>
            <li>Created observability infrastructure revealing previously invisible performance insights</li>
            <li>Accelerated customer experience with 30% improvement in e-commerce content delivery</li>
          </ul>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <h4 className="font-semibold text-gray-800">Square-Enix</h4>
              <p className="text-gray-500 text-sm">Senior DevOps Engineer</p>
            </div>
            <span className="text-gray-500 text-sm">2018-2019</span>
          </div>
          <ul className="list-disc pl-5 text-gray-600 mt-2 text-sm">
            <li>Deployed multi-regional Kubernetes architecture with advanced service mesh capabilities</li>
            <li>Implemented sophisticated canary deployment system mitigating release risk</li>
          </ul>
        </div>
        
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <h4 className="font-semibold text-gray-800">Kisscalls</h4>
              <p className="text-gray-500 text-sm">Founding CEO (single-founder)</p>
            </div>
            <span className="text-gray-500 text-sm">2016-2018</span>
          </div>
          <ul className="list-disc pl-5 text-gray-600 mt-2 text-sm">
            <li>Bridged digital-physical gap writing a Next-Generation Business Assistant as a Service</li>
            <li>Created a platform that ran without human intervention for six years after I moved on</li>
          </ul>
        </div>
        
        <p className="text-gray-500 text-sm italic mt-6">Previous roles (2001-2015) include positions at Morgan Stanley, Hitachi ID Systems, Technidata Medical Software, Intelerad Medical Systems, and others.</p>
      </div>

      {/* Core Principles */}
      <div className="p-8 border-b border-gray-200 bg-gray-50">
        <h3 className="text-lg font-bold text-gray-700 mb-4">CORE PRINCIPLES</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow rounded">
            <h4 className="font-semibold text-gray-800 mb-2">Collaborative & Inclusive</h4>
            <p className="text-gray-600 text-sm">The myth of the lone technical genius has cost organizations billions in failed transformations. My approach marries deep technical expertise with the emotional intelligence to bring stakeholders along the journey. The most elegant infrastructure is invisible to those who benefit from it.</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h4 className="font-semibold text-gray-800 mb-2">Continuously Learning</h4>
            <p className="text-gray-600 text-sm">In our industry, those who stop learning start dying. I've deliberately reinvented my career at each technological inflection point. Your organization isn't hiring for what I know today. You're investing in my framework for discovering what none of us yet understand.</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h4 className="font-semibold text-gray-800 mb-2">Adaptive & Agile</h4>
            <p className="text-gray-600 text-sm">The only infrastructure that matters is the one that adapts faster than the market. My greatest contribution isn't the systems I build—it's how I build systems that evolve. The question isn't whether your technology works today—it's whether it's designed to thrive tomorrow.</p>
          </div>
        </div>
      </div>

      {/* Technical Arsenal */}
      <div className="p-8 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-700 mb-4">TECHNICAL ARSENAL</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Cloud & Infrastructure</h4>
            <ul className="list-disc pl-5 text-gray-600 text-sm">
              <li>Multi-cloud strategy (Azure, GCP, AWS, OCI, Alibaba)</li>
              <li>Infrastructure as Code (Terraform, ARM, Bicep, HCL)</li>
              <li>Advanced containerization architectures</li>
              <li>Deep Linux expertise</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Security & Identity</h4>
            <ul className="list-disc pl-5 text-gray-600 text-sm">
              <li>Enterprise IAM/PAM frameworks</li>
              <li>Zero-trust implementation</li>
              <li>RBAC implementation</li>
              <li>Federation services</li>
              <li>Secret management systems</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Engineering Excellence</h4>
            <ul className="list-disc pl-5 text-gray-600 text-sm">
              <li>CI/CD pipeline design</li>
              <li>Microservice architecture</li>
              <li>System resilience engineering</li>
              <li>DevOps transformation</li>
              <li>Kubernetes orchestration</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Certifications & Approach */}
      <div className="p-8 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-700 mb-4">CERTIFICATIONS</h3>
            <ul className="list-disc pl-5 text-gray-600 text-sm">
              <li>Microsoft Security Professional (2025)</li>
              <li>GitHub & Docker Professional Certification (2024)</li>
              <li>Google Cloud Architecture & SRE Specializations</li>
              <li>Y Combinator Startup School Alumni</li>
              <li>Various Linux and Cloud platform certifications</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-700 mb-4">INTERVIEW APPROACH</h3>
            <p className="text-gray-600 text-sm">
              I believe great technical interviews mirror real work environments. I deliver my best when solving substantive problems that demonstrate how I actually work—not performing syntax recall or whiteboard exercises.
            </p>
            <p className="text-gray-600 text-sm mt-2">
              My most successful partnerships begin with interview processes that prioritize depth over performance. I thrive when discussing system design, architectural trade-offs, and the business implications of technical decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Strategic Value Statement */}
      <div className="p-8 border-b border-gray-200 bg-gray-800 text-white">
        <p className="text-lg">
          I don't merely maintain systems—I transform them. My approach combines technical depth with business context to deliver solutions that create strategic advantage. I excel at identifying friction points in development workflows and infrastructure limitations that constrain business potential.
        </p>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white p-6 text-center">
        <p className="text-gray-300">
          "Technology should dissolve barriers, not create them. I ensure yours does."
        </p>
        <p className="text-gray-400 text-xs mt-2">
          In a world where technology constantly reinvents itself, the greatest value comes not from what I've done, but from how I approach what hasn't yet been attempted.
        </p>
      </div>
    </div>
  );
};

export default StormvaultCV;
