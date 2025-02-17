'use client';

import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';

export default function Page() {
  const [terms, setChecked] = useState<boolean>(false);
  return (
    <div>
      <div className='flex items-center space-x-2'>
        <Checkbox
          id='terms'
          checked={terms}
          onCheckedChange={(value: boolean) => setChecked(value)}
        />
        <label
          htmlFor='terms'
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          Accept terms and conditions
        </label>
        {terms ? (
          <Badge variant={'success'}>Accepted</Badge>
        ) : (
          <Badge variant={'destructive'}>Not Accepted</Badge>
        )}
      </div>
    </div>
  );
}
