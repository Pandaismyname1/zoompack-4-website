export default function Footer() {
    return (
        <footer className="bg-background border-t border-border">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-12 lg:px-8">
                <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                    {[].map((item) => (
                        <div key={item} className="pb-6">
                            <a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                                {item}
                            </a>
                        </div>
                    ))}
                </nav>
                <p className="mt-10 text-center text leading-5 text-muted-foreground">
                    &copy; {new Date().getFullYear()} Zoomers Network. All rights reserved.
                </p>
                <p className="mt-10 text-center text-sm leading-5 text-muted-foreground">
                    Minecraft is a trademark of Mojang Studios. Curseforge is a trademark of Twitch Interactive, Inc.
                </p>
            </div>
        </footer>
    )
}

