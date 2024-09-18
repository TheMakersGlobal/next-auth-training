import {Poppins} from 'next/font/google'
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { LoginButton } from '@/components/auth/login-button';

const font = Poppins({
  subsets:['latin'],
  weight: ['600']
})

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100 to-blue-100">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl font-semibold text-slate-700 drop-shadow-md",font.className,)}>Auth</h1>
        <p className="text-slate-600 text-lg">A simple authentication service</p>
        <div className="">
          <LoginButton>
          <Button variant ='secondary' size='lg' className='font-lg text-slate-100 bg-slate-800 hover:text-slate-800'>
            Sign in
          </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
