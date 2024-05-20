import Image from "next/image";
import { Slider } from "@/components";

type ServiceImageProps = {
  service: {
    images: string[];
  };
  isActive: boolean;
};

export function ServiceImage({ service, isActive }: ServiceImageProps) {
  return (
    <div className={`service-image ${isActive ? "service-image--active" : ""}`}>
      <Slider>
        {service.images.map((image, index) => (
          <Image key={index} src={image} alt="" width={1920} height={1080} />
        ))}
      </Slider>
    </div>
  );
}
