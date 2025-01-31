import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t  p-8 bg-primary mt-8 h-auto">
      <div className=" grid grid-cols-4 gap-8 text-left font-semibold ">
        <div>
          <h4 className="mb-4">Locations</h4>
          <div className="font-normal text-">
            <p>
              Jakarta
              <br />
              Surabaya
              <br />
              Bandung
            </p>
          </div>
        </div>
        <div>
          <h4 className="mb-4">Quick Links</h4>
          <div className="font-normal">
            <a className="hover:text-gray-800 hover:underline" href={"/"}>
              Home
            </a>
            <br />
            <a className="hover:text-gray-800 hover:underline" href="#Menu">
              Menu
            </a>
            <br />
            <a className="hover:text-gray-800 hover:underline" href="#About">
              About
            </a>
            <br />
            <a className="hover:text-gray-800 hover:underline" href="#Review">
              Review
            </a>
          </div>
        </div>
        <div>
          <h4 className="mb-4">Contact Info</h4>
          <div className="font-normal">
            <p>
              +62-123-123-1234
              <br />
              +62-000-111-2223
            </p>
          </div>
        </div>
        <div>
          <h4 className="mb-4">Follow Us</h4>
          <div className="font-normal">
            <a
              className="hover:text-gray-800 hover:underline"
              href="https://www.facebook.com"
              target="_blank"
            >
              Facebook
            </a>
            <br />
            <a
              className="hover:text-gray-800 hover:underline"
              href="https://www.instagram.com"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <p className="mt-10 text-center font-semibold">@2025 Tahu Bulat</p>
    </footer>
  );
}
