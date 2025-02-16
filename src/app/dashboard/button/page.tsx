'use client'; //This is for allowing the use of browser behavior

import { Button } from '@/components/ui/button';
import { ChevronRight, Loader2, MailOpen } from 'lucide-react';

export default function Page() {
  return (
    <div className='grid grid-col-5 gap-2'>
      <Button>default</Button>
      <Button variant={'destructive'}>destructive</Button>
      <Button variant={'ghost'}>ghost</Button>
      <Button variant={'link'}>link</Button>
      <Button variant={'outline'}>outline</Button>
      <Button variant={'secondary'}>secondary</Button>
      <Button disabled>disabled</Button>
      <Button onClick={() => console.log('Hello world')}>Click me</Button>
      <Button variant={'sucess'}>sucess</Button>
      <Button capitalize={false}>capitalize false</Button>
      <Button variant='outline' size='icon'>
        <ChevronRight />
      </Button>
      <Button>
        <MailOpen /> Login with Email
      </Button>
      <Button disabled>
        <Loader2 className='animate-spin' />
        Please wait
      </Button>
    </div>
  );
}
