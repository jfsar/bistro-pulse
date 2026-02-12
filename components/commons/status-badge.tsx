import { cn } from '@/lib/utils';
import { Status } from '@/types';

interface StatusBadgeProps {
  status: Status;
}

const STATUS_CONFIG: Record<Status, { text: string; textColor: string }> = {
  failed: { text: 'Failed', textColor: 'text-red-400' },
  pending: { text: 'Pending', textColor: 'text-orange-400' },
  processing: { text: 'Processing', textColor: 'text-teal-400' },
  success: { text: 'Success', textColor: 'text-green-400' },
} as const;

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const config = STATUS_CONFIG[status] ?? {
    text: 'Unknown',
    textColor: 'text-gray-400',
  };

  return <p className={cn(config.textColor)}>{config.text}</p>;
};

export default StatusBadge;