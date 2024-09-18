'use client'

import { Card } from "@/components/ui/card";

interface CardWrapperProps{
    children: React.ReactNode;
    headerLabel: string;
    backButtonlabel: string;
    backButtonHref: string;
    showSocial?:boolean;
}

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonlabel,
    backButtonHref,
    showSocial,
}:CardWrapperProps) => {
    return(
        <Card className="w-[400px] shadow-md">
            {children}
        </Card>
    )
}