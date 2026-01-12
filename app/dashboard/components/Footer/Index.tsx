import Image from "next/image";
import YoutubeIcon from "@/components/icons/social/YoutubeIcon";
import LinkedInIcon from "@/components/icons/social/LinkedInIcon";
import InstagramIcon from "@/components/icons/social/InstagramIcon";
import FacebookIcon from "@/components/icons/social/FacebookIcon";
import TikTokIcon from "@/components/icons/social/TikTokIcon";
import XIcon from "@/components/icons/social/XIcon";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] pt-8 pb-6">
      <div className="container mx-auto">
        <hr className="border-[#3D3D3F] mb-8" />

        <div className="flex justify-between gap-8 mb-8">
          <div className="flex-1">
            <p className="text-[#8A8A8A] text-xs leading-relaxed">
              heck the Parental Guidance Rating © 2024 WarnerMedia Direct Latin America, LLC. All rights reserved. Max is used under license.
              <br />
              © 2024 Globo Comunicação e Participações S.A. All rights reserved. Big Brother Brasil is used under license. The trademarks GLOBO®, TV GLOBO®, GLOBO NEWS®, CANAL BRASIL®, SPORTV®, MULTISHOW®, OFF®, GNT®, BIS®, GLOOBINHO®, GLOOB®, VIVA®, MODO VIAGEM®, PREMIERE®, and COMBATE® are properties of Globo Comunicação e Participações S.A.
              <br />
              © 2024 NBCUniversal. All rights reserved. The Universal, Studio Universal, and USA Network trademarks are properties of NBCUniversal.
              <br />
              © 2024 Telecine Programação De Filmes Ltda. All rights reserved. The registered trademarks TELECINE® and MEGAPIX® are properties of Telecine Programação De Filmes Ltda.
              <br />
              Paramount+ © 2024 Paramount. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Image
              src="/assets/dashboard/logo/watch-festival.svg"
              alt="Watch Festival"
              width={120}
              height={40}
            />
            <p className="text-[#8A8A8A] text-xs">© 2024 Watch Brasil. All rights reserved</p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-8">
          <ul className="flex gap-4">
            <li>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <YoutubeIcon width={24} height={24} />
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <LinkedInIcon width={24} height={24} />
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <InstagramIcon width={24} height={24} />
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FacebookIcon width={24} height={24} />
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <TikTokIcon width={24} height={24} />
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <XIcon width={24} height={24} />
              </a>
            </li>
          </ul>

          <div className="flex gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/dashboard/common/download-playstore.png"
                alt="Download on Google Play"
                width={135}
                height={40}
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/dashboard/common/download-apple.png"
                alt="Download on App Store"
                width={135}
                height={40}
              />
            </a>
          </div>
        </div>

        <ul className="flex gap-8">
          <li>
            <a href="#" className="text-white text-sm hover:underline">
              About Labs Festival
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-sm hover:underline">
              Terms of use and privacy
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-sm hover:underline">
              Send feedback
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
