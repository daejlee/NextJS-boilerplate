import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Card() {
  return (
    <Link
      className='w-full min-h-32 flex flex-row items-center justify-center cursor-pointer 
      hover:bg-muted hover:underline transition-all duration-150 border rounded-lg p-4'
      href={`/`}
    >
      <Avatar className='size-20'>
        <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
        <AvatarFallback>Loading..</AvatarFallback>
      </Avatar>
      <div className='ml-4'>
        <h2 className='text-lg font-semibold'>Shad</h2>
        <p className='text-foreground'>Software Engineer</p>
      </div>
    </Link>
  );
}
