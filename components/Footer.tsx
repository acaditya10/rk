import { siteData } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-white/70">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-18 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Column 1 */}
          <div>
            <div className="mb-5">
              <p className="text-white text-[15px] font-semibold tracking-[0.12em]">
                RK INTERIORS
              </p>
              <p className="text-[10px] tracking-[0.22em] text-white/35 mt-1">
                {siteData.brand.tagline}
              </p>
            </div>
            <p className="text-[13px] leading-relaxed text-white/45 max-w-[280px]">
              Premium interior design and execution for homes and businesses
              in Patna.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-[12px] font-semibold tracking-[0.15em] uppercase text-white/50 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {siteData.quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[13px] text-white/45 hover:text-terracotta-light transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-[12px] font-semibold tracking-[0.15em] uppercase text-white/50 mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {siteData.footerServices.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-[13px] text-white/45 hover:text-terracotta-light transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-[12px] font-semibold tracking-[0.15em] uppercase text-white/50 mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteData.brand.phone}`}
                  className="text-[13px] text-white/45 hover:text-terracotta-light transition-colors"
                >
                  {siteData.brand.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteData.brand.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-white/45 hover:text-terracotta-light transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteData.brand.email}`}
                  className="text-[13px] text-white/45 hover:text-terracotta-light transition-colors"
                >
                  {siteData.brand.email}
                </a>
              </li>
              <li className="text-[13px] text-white/45">
                {siteData.brand.experienceCentreAddress}
              </li>
              <li className="text-[13px] text-white/45">
                {siteData.brand.workingHours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/35">
            © 2026 RK Interiors. All rights reserved.
          </p>
          <p className="text-[12px] text-white/35">
            Design &amp; Development by{" "}
            <a
              href="https://getvortexlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta-light/80 hover:text-terracotta transition-colors"
            >
              Vortex Labs
            </a>{" "}
            ·{" "}
            <a
              href="https://getvortexlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta-light/80 hover:text-terracotta transition-colors"
            >
              getvortexlabs.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
