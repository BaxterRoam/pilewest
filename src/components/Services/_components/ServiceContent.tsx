import { CTA, TextCardProps, TextCard } from "@/components";

type ServiceContentProps = {
  service: {
    name: string;
    background: string;
    description: string[];
    images: string[];
    benefits: TextCardProps[];
  };
  isActive: boolean;
};

export function ServiceContent({ service, isActive }: ServiceContentProps) {
  return (
    <div className={`service-content ${isActive ? "service-content--active" : ""}`}>
      <h1>{service.name}</h1>
      <div className="service-content__description">
        {service.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="services-content__benefits">
        {service.benefits?.map((benefit, index) => <TextCard key={index} {...benefit} theme="light" />)}
      </div>
      <CTA href="/contact" label="Get In Touch" />
    </div>
  );
}
