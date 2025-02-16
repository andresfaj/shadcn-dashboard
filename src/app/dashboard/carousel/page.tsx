'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function Page() {
  return (
    <div className='w-full flex justify-center flex-col items-center space-y-4'>
      <Carousel
        opts={{
          // dragFree: true, //This is for the drag free option, in other words, the carousel will not snap to the next item, snap means that the carousel will move to the next item when the user stops dragging, draggin is when the user is moving the carousel with the mouse or touch
          loop: true, //This is for the loop option, in other words, the carousel will loop back to the first item when the last item is reached
        }}
        className='w-full max-w-sm'
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className='md:basis-1/2'>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-3xl font-semibold'>{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='hidden sm:flex justify-center items-center' />
        <CarouselNext className='hidden sm:flex justify-center items-center' />
      </Carousel>

      <Carousel
        opts={{
          // dragFree: true, //This is for the drag free option, in other words, the carousel will not snap to the next item, snap means that the carousel will move to the next item when the user stops dragging, draggin is when the user is moving the carousel with the mouse or touch
          loop: true, //This is for the loop option, in other words, the carousel will loop back to the first item when the last item is reached
        }}
        className='w-full max-w-sm'
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-3xl font-semibold'>{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='hidden sm:flex justify-center items-center' />
        <CarouselNext className='hidden sm:flex justify-center items-center' />
      </Carousel>

      <p>Carousel auto-play</p>

      <Carousel
        opts={{
          // dragFree: true, //This is for the drag free option, in other words, the carousel will not snap to the next item, snap means that the carousel will move to the next item when the user stops dragging, draggin is when the user is moving the carousel with the mouse or touch
          loop: true, //This is for the loop option, in other words, the carousel will loop back to the first item when the last item is reached
        }}
        className='w-full max-w-sm'
        plugins={[
          Autoplay({
            delay: 1000, //Time in milliseconds for the auto-play to change the slide
          }),
        ]}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-3xl font-semibold'>{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='hidden sm:flex justify-center items-center' />
        <CarouselNext className='hidden sm:flex justify-center items-center' />
      </Carousel>
    </div>
  );
}
