import { Tabs } from "flowbite-react";
import { Carousel } from "flowbite-react";
import ProductCard from "./ProductCard";

export default function Home() {
  const imageURL = {
    mobile:
      "https://cdn.tgdd.vn/Products/Images/42/250728/TimerThumb/iphone-13-pro-max-1tb-(36).jpg",
    laptop:
      "https://cdn.tgdd.vn/Products/Images/44/283464/apple-macbook-pro-m2-2022-16gb-600x600.jpg",
    tablet:
      "https://cdn.tgdd.vn/Products/Images/522/294104/ipad-pro-m2-11-wifi-xam-thumb-600x600.jpg",
  };

  return (
    <div className="py-3 px-0 bg-white my-4 rounded-lg ">
      <div>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <img
              src="https://salt.tikicdn.com/cache/w1080/ts/tikimsp/07/80/b5/f1416c194a980daa3096115404008b55.png"
              alt="..."
            />
            <img
              src="https://salt.tikicdn.com/cache/w1080/ts/tka/b6/85/d8/f5cfdd6c0d034ac923ab47c246c027eb.png"
              alt="..."
            />
            <img
              src="https://salt.tikicdn.com/cache/w1080/ts/tikimsp/94/6d/e5/ae6fe3e421476e078ad8bde0b231c627.png"
              alt="..."
            />
          </Carousel>
        </div>
      </div>

      <div className="mt-4">
        <Tabs.Group
          aria-label="Tabs with icons"
          className="hover:text-blue-900 flex items-center"
        >
          <Tabs.Item title="Mobile" active={true}>
            <div>
              <div className="grid grid-cols-4">
                <div className="p-2">
                  <ProductCard link={imageURL.mobile} />
                </div>
                <div className="p-2">
                  <ProductCard link={imageURL.mobile} />
                </div>
                <div className="p-2">
                  <ProductCard link={imageURL.mobile} />
                </div>
                <div className="p-2">
                  <ProductCard link={imageURL.mobile} />
                </div>
              </div>
              <div className="grid grid-cols-4">
                <div className="p-2">
                  <ProductCard link={imageURL.mobile} />
                </div>
                <div className="p-2">
                  <ProductCard link={imageURL.mobile} />
                </div>
                <div className="p-2">
                  <ProductCard link={imageURL.mobile} />
                </div>
                <div className="p-2">
                  <ProductCard link={imageURL.mobile} />
                </div>
              </div>
              <div className="grid grid-cols-4">
                <div className="p-2">
                  <ProductCard link={imageURL.mobile} />
                </div>
                <div className="p-2">
                  <ProductCard link={imageURL.mobile} />
                </div>
                <div className="p-2">
                  <ProductCard link={imageURL.mobile} />
                </div>
                <div className="p-2">
                  <ProductCard link={imageURL.mobile} />
                </div>
              </div>
            </div>
          </Tabs.Item>

          <Tabs.Item title="Laptop">
            <div>
              <div className="grid grid-cols-4">
                <div className="p-2">
                  <ProductCard link={imageURL.laptop} />
                </div>
                <div className="p-2">
                  <ProductCard link={imageURL.laptop} />
                </div>
                <div className="p-2">
                  <ProductCard link={imageURL.laptop} />
                </div>
                <div className="p-2">
                  <ProductCard link={imageURL.laptop} />
                </div>
              </div>
              <div className="grid grid-cols-4">
                <div className="p-2">
                  <ProductCard link={imageURL.laptop} />
                </div>
                <div className="p-2">
                  <ProductCard link={imageURL.laptop} />
                </div>
                <div className="p-2">
                  <ProductCard link={imageURL.laptop} />
                </div>
                <div className="p-2">
                  <ProductCard link={imageURL.laptop} />
                </div>
              </div>
            </div>
          </Tabs.Item>

          <Tabs.Item title="Tablet">
            <div>
              <div className="grid grid-cols-4">
                <div className="p-2">
                  <ProductCard link={imageURL.tablet} />
                </div>
                <div className="p-2">
                  <ProductCard link={imageURL.tablet} />
                </div>
                <div className="p-2">
                  <ProductCard link={imageURL.tablet} />
                </div>
                <div className="p-2">
                  <ProductCard link={imageURL.tablet} />
                </div>
              </div>
              <div className="grid grid-cols-4">
                <div className="p-2">
                  <ProductCard link={imageURL.tablet} />
                </div>
                <div className="p-2">
                  <ProductCard link={imageURL.tablet} />
                </div>
                <div className="p-2">
                  <ProductCard link={imageURL.tablet} />
                </div>
                <div className="p-2">
                  <ProductCard link={imageURL.tablet} />
                </div>
              </div>
            </div>
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </div>
  );
}
