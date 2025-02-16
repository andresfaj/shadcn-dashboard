import { Badge } from '@/components/ui/badge';

export default function Page() {
  return (
    <div className='grid grid-cols-4 gap-4'>
      <Badge>Default</Badge>
      <Badge variant={'destructive'}>destructuve</Badge>
      <Badge variant={'secondary'}>secondary</Badge>
      <Badge variant={'outline'}>success</Badge>
      <Badge capitalize variant={'info'}>
        info
      </Badge>
      <Badge capitalize variant={'success'}>
        success
      </Badge>
    </div>
  );
}
