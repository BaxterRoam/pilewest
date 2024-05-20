import Image from "next/image";

type ServiceItemProps = {
  service: {
    name: string;
    background: string;
  };
  onClick: () => void;
};

export function ServiceItem({ service, onClick }: ServiceItemProps) {
  return (
    <div className="services__item" onClick={onClick} role="button">
      <p>{service.name}</p>
      <Image src={service.background} alt={service.name} width={1920} height={1920} />
    </div>
  );
}
