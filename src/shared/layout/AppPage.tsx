import React from 'react';

interface AppPageProps { 
    children: React.ReactNode; 
    name: string; 
    description: string 
}

export default function AppPage({ children, name, description }: AppPageProps) {
    return (
        <html lang="pt-BR">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
            <title>{name}</title>
            <meta name="description" content={description} />
        
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Playfair+Display&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Playfair+Display&display=swap" />
        </head>
        
        {children}
        
        </html>
    );
}
