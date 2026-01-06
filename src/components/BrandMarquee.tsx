const services = [
  'BRANDING',
  'FIBER INTERNET',
  'TV STREAMING',
  'SMART HOME',
  'GAMING',
  'CLOUD DVR',
  'WIFI 6',
  '4K ULTRA HD',
];

const BrandMarquee = () => {
  return (
    <div className="bg-primary py-4 overflow-hidden">
      <div className="flex animate-marquee-fast whitespace-nowrap">
        {[...services, ...services, ...services].map((service, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-8 mx-4 text-primary-foreground font-display font-bold text-lg"
          >
            {service}
            <span className="text-2xl">+</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default BrandMarquee;
