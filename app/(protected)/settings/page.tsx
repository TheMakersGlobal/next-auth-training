'use client'

import * as z from 'zod';
import {useForm} from 'react-hook-form';
import { useTransition, useState } from "react";
import { SettingsShema } from '@/schemas';
import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Button } from "@/components/ui/button";
import { settings } from "@/actions/settings";
import { useSession } from "next-auth/react";
import { Form, FormField, FormLabel, FormControl, FormItem, FormDescription, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { Card,
    CardHeader,
    CardContent,
 } from "@/components/ui/card";
import { zodResolver } from '@hookform/resolvers/zod';


const SettingsPage = () => {
    const user = useCurrentUser();
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const{update} = useSession()
    const[isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof SettingsShema>>({
        resolver: zodResolver(SettingsShema),
        defaultValues: {
            name: user?.name || undefined,
        }
    });
    
    const onclick = (values: z.infer<typeof SettingsShema>) => {
        startTransition(() => {
        settings(values)
        .then((data)=>{
            if (data.error) {
                setError(data.error)
            }
            if (data.success) {
                update();
                setSuccess(data.success)
            }
        })
        .catch(() => setError("something went wrong!"))
    })
    }
    return ( 
        <Card className="w-[600px]">
            <CardHeader>
                <p>
                    Settings
                </p>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form className='space-y-6'
                    onSubmit={form.handleSubmit(onclick)}
                    >
                        <div className='space-y-4'>
                            <FormField
                            control={form.control}
                            name='name'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        <FormControl>
                                            <Input
                                            {...field}
                                            placeholder='Jhon Doe'
                                            disabled={isPending}
                                            />
                                        </FormControl>
                                    </FormLabel>
                                </FormItem>
                            )}
                            >
                            </FormField>
                            <Button type='submit'>
                                Save
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
     );
}
 
export default SettingsPage;

