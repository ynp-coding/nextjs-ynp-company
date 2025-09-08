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
