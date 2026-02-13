import { ArrowUp } from "lucide-react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

interface BadgeWithIconProps {
    title: string;
    className?: string;
}


const BadgeWithIcon = ({ className, title}: BadgeWithIconProps) => {
  return (
    <Badge className={cn("rounded-sm", className)}>
      <ArrowUp data-icon="inline-start" />
       { title }
    </Badge>
  )
}

export default BadgeWithIcon;