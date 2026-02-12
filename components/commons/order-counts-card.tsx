import Image from "next/image";
import { Card, CardContent } from "../ui/card";

type OrderCountsCardProps = {
    imgUrl: string;
    title: string;
    counts: number;
};


const OrderCountsCard = ({
    imgUrl,
    title,
    counts
}: OrderCountsCardProps) => {
  return (
      <Card className="p-4 rounded-xs">
          <CardContent className="flex items-center gap-4">
             <div>
               <Image className="rounded-full" src={imgUrl} alt={`${title} image`} width={75} height={75} />
             </div>
             <div>
                <p className="text-[16px] text-brand-neutral-04 leading-5 font-normal">{title}</p>
                <h2 className="text-[24px] font-bold leading-9.5">{counts}</h2>
             </div>
          </CardContent>
       </Card>
  )
}

export default OrderCountsCard;