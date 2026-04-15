import Image from "next/image";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] text-white">
            <div className="flex flex-col items-center justify-center gap-6 py-12 px-6">


                <Image
                    src="/images/KeenKeeper.png"
                    alt="KeenKeeper Logo"
                    width={200}
                    height={48}
                    className="object-contain"
                />


                <p className="text-sm text-white/80 text-center max-w-md">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>


                <div className="flex flex-col items-center gap-3">
                    <p className="text-sm font-medium text-white">Social Links</p>
                    <div className="flex gap-3">
                        <a
                            href="#"
                            aria-label="Instagram"
                            className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-black/10 transition-colors"
                        >
                            <FaInstagram size={16} className="text-black" />

                        </a>
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-black/10 transition-colors"
                        >
                            <FaFacebookF size={16} className="text-black" />
                        </a>
                        <a
                            href="#"
                            aria-label="X (Twitter)"
                            className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-black/10 transition-colors"
                        >
                            <FaXTwitter size={16} className="text-black" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
                <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>
                <div className="flex gap-5">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Cookies</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;