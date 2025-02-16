import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Page() {
  return (
    <div className='h-[500px] flex items-center justify-center'>
      <Avatar>
        <AvatarImage src='https://github.com/shadcn.png' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <p className='m-2'>@shadcn</p>
    </div>
  );
}
