import { Button } from "@heroui/button";
import Image from "next/image";

import { Facebook, Github, Youtube, Instagram } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    icon: <Facebook className="size-4" />,
    href: "#",
  },
  {
    icon: <Github className="size-4" />,
    href: "",
  },
  {
    icon: <Youtube className="size-4" />,
    href: "#",
  },
  {
    icon: <Instagram className="size-4" />,
    href: "#",
  },
];

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="64" viewBox="0 0 32 32" width="64">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Welcome() {
  return (
    <div>
      <section className="">
        <Image
          src={
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          }
          width={1000}
          height={1000}
          className="w-full max-h-[650px]"
          priority
          alt="welcome banner"
        />
      </section>
      <section className="max-w-screen-xl mx-auto py-6">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <AcmeLogo />
            <h1>My Company</h1>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Button color="primary" as={Link} href="/home">
              เข้าสู่เว็บไซต์
            </Button>

            <div className="flex items-center gap-2">
              <span>ติดตามเรา :</span>
              {socials.map(
                (social, index) =>
                  social.href && (
                    <Button
                      as={Link}
                      key={index}
                      href={social.href}
                      size="sm"
                      variant="light"
                      isIconOnly
                    >
                      {social.icon}
                    </Button>
                  )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
