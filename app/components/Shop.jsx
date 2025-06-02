import Image from "next/image";

export default function Shop({ store, items, characterPosition, onClick }) {
  // Calculate if character is near the shop (within a certain range)
  const isNearShop = Math.abs(characterPosition - store.position) < 20;

  return (
    <div
      key={store.id}
      className="absolute bottom-[20vh] left-[60vw] cursor-pointer"
      style={{
        transform: `translateX(${store.position}vw)`,
      }}
      onClick={onClick}
    >
      <div className="relative">
        <Image
          src="/images/shop.png"
          alt="Shop"
          width={350}
          height={350}
          className="object-contain"
          priority
        />
        <div className="absolute top-0 left-52 -translate-x-1/2 text-center py-1">
          <h3 className="text-2xl font-bold text-white">
            {store.name}
          </h3>
          <p className="text-sm text-white">
            {store.description}
          </p>
        </div>
        
        {/* Product Bubbles - only show when character is near */}
        {isNearShop && (
          <>
            <div className="absolute -left-8 top-40 w-22 h-22 bg-white/40 rounded-full backdrop-blur-sm shadow-lg transition-all hover:scale-110 duration-300">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-[90%] h-[90%] flex items-center justify-center rounded-full overflow-hidden">
                  <Image
                    src={items[0].image}
                    alt="Item 1"
                    width={350}
                    height={350}
                    className="object-contain" />
                </div>
              </div>
            </div>
            <div className="absolute -right-12 top-24 w-26 h-26 bg-white/40 rounded-full backdrop-blur-sm shadow-lg transition-all hover:scale-110 duration-300">
            <div className="w-full h-full flex items-center justify-center">
                <div className="w-[90%] h-[90%] flex items-center justify-center rounded-full overflow-hidden">
                  <Image
                    src={items[1].image}
                    alt="Item 2"
                    width={350}
                    height={350}
                    className="object-contain" />
                </div>
              </div></div>
            <div className="absolute right-6 top-66 w-20 h-20 bg-white/40 rounded-full backdrop-blur-sm shadow-lg transition-all hover:scale-110 duration-300">
            <div className="w-full h-full flex items-center justify-center">
                <div className="w-[90%] h-[90%] flex items-center justify-center rounded-full overflow-hidden">
                  <Image
                    src={items[2].image}
                    alt="Item 3"
                    width={350}
                    height={350}
                    className="object-contain" />
                </div>
              </div></div>
          </>
        )}
      </div>
    </div>
  )
}