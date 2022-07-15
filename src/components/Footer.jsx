import { FaFacebook, FaTwitter, FaGoogle, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  const socials = [
    {
      id: 1,
      icon: <FaFacebook className="text-2xl" />,
      url: "https://facebook.com",
    },
    {
      id: 2,
      icon: <FaTwitter className="text-2xl" />,
      url: "https://twitter.com",
    },
    {
      id: 3,
      icon: <FaGoogle className="text-2xl" />,
      url: "https://google.com",
    },
    {
      id: 4,
      icon: <FaInstagram className="text-2xl" />,
      url: "https://instagram.com",
    },
  ];

  return (
    <footer className="w-full bg-neutral-600 flex items-center justify-center h-20">
      {socials.map(({ id, icon, url }) => (
        <div key={id} className="mx-8 text-center text-neutral-100">
          <a href={url} target="_blank" rel="noreferrer">
            {icon}
          </a>
        </div>
      ))}
    </footer>
  );
};
