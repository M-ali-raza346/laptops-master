import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">ABOUT</h3>
          <ul className="space-y-2 text-md">
            <li><Link href="">About Us</Link></li>
            <li><Link href="">Orders</Link></li>
            <li><Link href="">Quality</Link></li>
            <li><Link href="">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">HELP</h3>
          <ul className="space-y-2 text-md">
            <li><Link href="#">My Account</Link></li>
            <li><Link href="">Customer Help</Link></li>
            <li><Link href="">Contact Us</Link></li>
            <li><Link href="">Terms and Conditions</Link></li>
            <li><Link href="">FAQ</Link></li>
          </ul>
        </div>

        {/* Follow Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">FOLLOW</h3>
          <ul className="space-y-2 text-md">
            <li><Link href="">Facebook</Link></li>
            <li><Link href="">TikTok</Link></li>
            <li><Link href="">Instagram</Link></li>
          </ul>
        </div>

        {/* Reviews Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">OVER 1,000 5-STAR REVIEWS</h3>
          <div className="flex mb-4">
  <Image src="/images/faizan.jpeg" alt="user1" width={40} height={30} className="rounded-full" />
  <Image src="/images/faizan.jpeg" alt="user2" width={40} height={30} className="rounded-full" />
  <Image src="/images/faizan.jpeg" alt="user3" width={40} height={30} className="rounded-full" />
  <Image src="/images/faizan.jpeg" alt="user4" width={40} height={30} className="rounded-full" />
</div>
          <p className="text-gray-400">
            ⭐⭐⭐⭐⭐ <br />
            “Amazing quality products for prices I didn’t think were possible.”
          </p>
          <p className="mt-2 font-bold">Matt P.</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-end items-end space-x-4 pb-0 px-4 pr-32 md:mt-0">
        <Image src="/images/faizan.jpeg" alt="Visa" width={45} height={30} />
        <Image src="/images/faizan.jpeg" alt="MasterCard" width={45} height={30} />
        <Image src="/images/faizan.jpeg" alt="Maestro" width={45} height={30} />
        <Image src="/images/faizan.jpeg" alt="PayPal" width={45} height={30} />
      </div>
    </footer>
  );
};

export default Footer;
