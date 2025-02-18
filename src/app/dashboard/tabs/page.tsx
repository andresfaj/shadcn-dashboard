import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Tab1 from './ui/tab1';
import Tab2 from './ui/tab2';

export default function Page() {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <Tabs defaultValue='account' className='w-[400px]'>
        <TabsList>
          <TabsTrigger value='account'>Account</TabsTrigger>
          <TabsTrigger value='password'>Password</TabsTrigger>
        </TabsList>
        <TabsContent value='account'>
          Make changes to your account here.
        </TabsContent>
        <TabsContent value='password'>Change your password here.</TabsContent>
      </Tabs>

      <Tabs defaultValue='account' className='w-[400px]'>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='account'>Account</TabsTrigger>
          <TabsTrigger value='password'>Password</TabsTrigger>
        </TabsList>
        <TabsContent value='account'>
          <Tab2 />
        </TabsContent>
        <TabsContent value='password'>
          <Tab1 />
        </TabsContent>
      </Tabs>
    </div>
  );
}
