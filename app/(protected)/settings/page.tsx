'use client'

import { useTransition } from "react";
import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Button } from "@/components/ui/button";
import { settings } from "@/actions/settings";
import { useSession } from "next-auth/react";

import { Card,
    CardHeader,
    CardContent,
 } from "@/components/ui/card";


const SettingsPage = () => {
    const{update} = useSession()
    const[isPending, startTransition] = useTransition()
    
    const onclick = () => {
        startTransition(() => {
        settings({
            name: "New Name!"
        })
        .then(()=>{
            update();
        })
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
                <Button disabled={isPending} onClick={onclick}>
                    Update name
                </Button>
            </CardContent>
        </Card>
     );
}
 
export default SettingsPage;

