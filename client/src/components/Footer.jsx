import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full md:w-1/3 space-y-4">
            <a href="https://quizizz.com/?lng=en" className="inline-block">
              <img
                src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/62fa6419161d3a641f681ceb_Logo.svg"
                alt="Quizizz Logo"
                className="h-10"
              />
            </a>
            <a
              href="https://support.quizizz.com/hc/en-us/articles/360055566272-Quizizz-Accessibility-and-Inclusion-Statement"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm"
            >
              <img
                src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/64a3c543f0df3bde4580f844_Accessibility_Icon.webp"
                alt="Accessibility Icon"
                className="h-6"
              />
              <span>Accessibility & Inclusion</span>
            </a>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <a href="https://quizizz.com/blog?lng=en" className="block hover:underline">The Quizizz Blog</a>
              <a href="https://quizizz.com/resources?lng=en" className="block hover:underline">Teacher Resources</a>
              <a href="https://quizizz.com/home/state-test-prep?lng=en" className="block hover:underline">State Test Prep</a>
              <a href="https://quizizz.com/quizizzforwork?source=home_footer&amp;lng=en" className="block hover:underline">Quizizz for Work</a>
              <a href="https://quizizz.zendesk.com/hc/en-us" className="block hover:underline">Help Center</a>
            </div>

            <div className="space-y-2">
              <a href="https://quizizz.com/en/worksheets?lng=en" className="block hover:underline">Worksheets</a>
              <a href="https://quizizz.com/home/reseller-program?source=footer&amp;lng=en" className="block hover:underline">Reseller Program</a>
              <a href="https://quizizz.com/privacy?lng=en" className="block hover:underline">Privacy Policy</a>
              <a href="https://quizizz.com/home/privacy-center?lng=en" className="block hover:underline">Privacy Center</a>
              <a href="https://quizizz.com/home/careers?lng=en" className="block hover:underline">Careers</a>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Download Quizizz Apps</h3>
              <div className="flex space-x-4">
                <a
                  href="https://share.quizizz.com/EBAH8OlhCM"
                  target="_blank"
                  className="inline-block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/62fa641a161d3a2982681d00_Google%20Play.svg"
                    alt="Google Play"
                    className="h-10"
                  />
                </a>
                <a
                  href="https://share.quizizz.com/nz4P08MhCM"
                  target="_blank"
                  className="inline-block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/62fa6419161d3a1ad0681cbf_App%20Store.svg"
                    alt="App Store"
                    className="h-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 pt-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-sm">1. 2021 survey of 800+ teachers conducted by Quizizz</p>
            <p className="text-sm">
              2. Journal of Education and e-Learning Research
              <a
                href="https://files.eric.ed.gov/fulltext/EJ1300463.pdf"
                target="_blank"
                className="text-blue-500 hover:underline"
              >(Source)</a
              >
            </p>
            <p className="text-sm">
              3. International Online Journal of Education and Teaching
              <a
                href="https://eric.ed.gov/?q=quizizz&amp;pr=on&amp;id=EJ1246683"
                target="_blank"
                className="text-blue-500 hover:underline"
              >(Source)</a
              >
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-4">
            <a href="https://twitter.com/quizizz" target="_blank">
              <img
                src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/62fa6419161d3a49b9681ca7_Twitter%20Icon.svg"
                alt="Twitter"
                className="h-6"
              />
            </a>
            <a href="https://facebook.com/quizizz" target="_blank">
              <img
                src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/62fa6419161d3a2ade681ca6_Facebook%20Icon.svg"
                alt="Facebook"
                className="h-6"
              />
            </a>
            <a href="https://instagram.com/quizizz" target="_blank">
              <img
                src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/62fa6419161d3a69fc681c8d_Instagram%20Icon.svg"
                alt="Instagram"
                className="h-6"
              />
            </a>
          </div>
          <p className="text-sm mt-4 sm:mt-0">© 2024 Byteslahers Inc.</p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
