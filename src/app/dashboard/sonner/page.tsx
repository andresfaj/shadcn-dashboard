'use client';

import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function Page() {
  return (
    <div className='grid grid-cols-4 gap-4'>
      <Button
        variant='outline'
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            position: 'top-right', //the position of the toast in the screen
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Toast
      </Button>

      <Button
        variant='outline'
        onClick={() =>
          toast.success('Event has been created', {
            className: 'bg-green-500 text-white',
            duration: 5000,
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            position: 'top-right', //the position of the toast in the screen
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show custom colors
      </Button>
    </div>
  );
}
