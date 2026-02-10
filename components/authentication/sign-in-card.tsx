import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Mail, LockKeyholeIcon } from 'lucide-react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import Image from 'next/image';

const SignInCard = () => {
  return (
     <Card className="w-full rounded-md bg-white shadow-xs p-10 pt-5">
            <CardHeader>
               <div className="w-full flex items-center justify-center gap-2.5">
                 <Image src="/logo.svg" width={60} height={60} alt="Bistro Pulse Logo" />
                 <div className="text-brand-primary flex flex-col space-y-0">
                    <h1 className="text-[29px] leading-11 tracking-smallest font-bold">BistroPulse</h1>
                    <p className="text-[12px] leading-4.5 tracking-medium font-normal -mt-3.5">Food at your</p>
                    <p className="text-[12px] leading-4.5 tracking-medium font-normal">doorstep</p>
                 </div>
               </div>
            </CardHeader>
            <CardContent>
               <CardTitle className="font-medium text-[16px] tracking-medium mb-3">Sign in with ID and Password</CardTitle>
               <form action="#" className="w-full space-y-3">
                 <div className="relative w-full">
                    <Label className="sr-only" htmlFor="userId">User ID</Label>
                    <Input 
                      name="userId" 
                      id="userId" 
                      className="border border-neutral-400 text-neutral-400 font-medium rounded-xs px-8 py-4" 
                      defaultValue="B456679"
                    />
                    <Mail className="w-5 h-5 stroke-brand-primary left-2 top-2 absolute" />
                 </div>
                    <div className="relative w-full">
                    <Label className="sr-only" htmlFor="password">User ID</Label>
                    <Input 
                      name="password" 
                      id="password"
                      type="password"
                      className="border border-neutral-400 text-neutral-400 font-medium rounded-xs px-8 py-4" 
                      defaultValue="your-password"
                    />
                    <LockKeyholeIcon className="w-5 h-5 stroke-brand-primary left-2 top-2 absolute" />
                 </div>
               </form>
            </CardContent>
        </Card>
  )
}

export default SignInCard;