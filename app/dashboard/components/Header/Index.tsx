import { ArrowIcon, ExclusiveIcon, HomeIcon, LiveIcon, MusicalIcon, SettingsIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
        <header className="flex items-center h-16 header-gradient">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-10">
                    <div>
                        <Image alt="" src="/assets/dashboard/logo/watch-festival.svg" width={160} height={46} />
                    </div>
                    <div>
                        <ul className="flex gap-10">
                            <li>
                                <a className="flex items-center gap-1">
                                    <HomeIcon />
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center gap-1">
                                    <LiveIcon />
                                    Live
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center gap-1">
                                    <MusicalIcon />
                                    Musical Styles
                                    <ArrowIcon />
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center gap-1">
                                    <ExclusiveIcon />
                                    Exclusive Content
                                    <ArrowIcon />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                        <Image alt="" src="/assets/dashboard/placeholder/user.svg" width={32} height={32} />
                        <h3>Peter Parker</h3>
                        <Link href="/test">
                            <SettingsIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    </>
  );
}
