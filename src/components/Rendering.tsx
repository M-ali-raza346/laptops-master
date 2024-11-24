import Image from 'next/image';

const brands = [
  { name: 'Apple', image: '/images/apple.png' },
  { name: 'Dell', image: '/images/dell.jpeg' },
  { name: 'HP', image: '/images/hp.png' },
  { name: 'Lenovo', image: '/images/lenovo.png' },
  { name: 'Microsoft', image: '/images/microsoft.jpeg' },
  { name: 'Samsung', image: '/images/samsung.png' },
];

const BrandsWeStock: React.FC = () => {
  return (
    <div className="bg-white py-8">
      <h1 className="text-center text-3xl font-bold mb-4">Brands we stock</h1>
          <p className="text-center text-gray-600 mb-8 mx-4 pt-2" >
        When it comes to technology, we ensure there no compromise—whether it performance,
        <br />
        user experience, or durability, you can trust us to deliver the very best.
      </p>
      

      <div className="flex flex-wrap justify-center items-center gap-28">
        {brands.map((brand) => (
          <div key={brand.name} className="text-center">
            <Image
              src={brand.image}
              alt={brand.name}
              width={80}
              height={80}
              className="mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsWeStock;
