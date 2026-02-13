import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";

type OrderCountsCardProps = {
    imgUrl?: string;
    title: string;
    counts: number | string;
    cardClassName?: string;
    imgContainerClassName?: string;
    titleContainerClassName?: string;
    countsContainerClassName?: string;
    icon?: React.ReactNode;
};


const OrderCountsCard = ({
    imgUrl,
    title,
    counts,
    cardClassName,
    imgContainerClassName,
    titleContainerClassName,
    countsContainerClassName,
    icon
}: OrderCountsCardProps) => {
  return (
      <Card className={cn(`p-4 rounded-xs`, cardClassName)}>
          <CardContent className="flex items-center gap-4">
            { imgUrl && 
              <div className={cn('relative w-18.5 h-18.5', imgContainerClassName)}>
                <Image 
                    src={imgUrl} 
                    alt={`${title} image`} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
              </div>
             }
             <div>
                <p 
                  className={cn("text-[16px] text-brand-neutral-04 leading-5 font-normal", titleContainerClassName)}
                >
                  {title}
                </p>
                <h2 className={cn("text-[24px] font-bold leading-9.5", countsContainerClassName)}>{counts}</h2>
             </div>
             {
               icon && <div className="ml-auto"></div>
             }
          </CardContent>
       </Card>
  )
}

export default OrderCountsCard;