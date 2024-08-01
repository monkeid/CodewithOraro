import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-lg font-bold">Logo</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="#services" className="hover:text-blue-500">
                Services
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="hover:text-blue-500">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
