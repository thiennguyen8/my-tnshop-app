import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { HiClock } from "react-icons/hi";
import { Card } from "flowbite-react";
import { Rating } from "flowbite-react";
import { Button } from "flowbite-react";
import { Badge } from "flowbite-react";
import React, { useState } from "react";
import { Alert } from "flowbite-react";
import ProductCard2 from "./ProductCard2";

export default function ProductPage() {
  const imageURL = {
    img1: "https://salt.tikicdn.com/cache/280x280/ts/product/e0/c9/78/e028f9346e1922b0aadc750f272609c3.jpg",
    img2: "https://salt.tikicdn.com/cache/280x280/ts/product/0f/08/21/8995e74fd95c47c4ab9ef244a5559176.png",
    img3: "https://salt.tikicdn.com/cache/280x280/ts/product/ca/5d/be/0466fed7eaa6095baecd90f06419bc09.png",
    img4: "https://salt.tikicdn.com/cache/280x280/ts/product/a2/38/6c/ce008c63f4ac771550439da44f5f8ee8.png",
  };
  const [quantity, setQuantity] = useState(1);
  function handleIncrease() {
    setQuantity(quantity + 1);
  }

  function handleDecrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  return (
    <div className="p-3 bg-white my-4 rounded-lg ">
      {/* Status bar */}
      <div>
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="#" icon={HiHome}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Apple</Breadcrumb.Item>
          <Breadcrumb.Item>Mobile</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {/* Middle */}
      <div className="grid grid-cols-5 my-3">
        <div className="col-span-2">
          <div className="p-2 flex justify-center text-center items-center">
            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter">
              <a href="#">
                <img
                  className="rounded-lg"
                  src="https://salt.tikicdn.com/cache/750x750/ts/product/0c/dd/e7/e6431984901119a1f8166cc4e579da93.png"
                  alt="image description"
                />
              </a>
            </figure>
          </div>

          <div className="row m-0"></div>

          <div className="my-2 flex flex-wrap justify-center text-center items-center">
            <Button pill={true} color="success" size="xs">
              Sharing for discount
            </Button>
          </div>
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-10">
            <div className="col-span-5">
              <small className="my-2 font-semibold text-gray-900 underline dark:text-white decoration-blue-500 decoration-double">
                Thương hiệu Apple
              </small>

              <h4 className="text-2xl my-2 font-bold text-gray-900 dark:text-white">
                Apple iPhone 14 Pro Max
              </h4>
              <Rating>
                <Rating.Star />
                <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                  4.95
                </p>
                <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
                <a
                  href="#"
                  className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                >
                  73 reviews
                </a>
              </Rating>

              <h5 className="text-2xl my-2 font-bold text-red-600 dark:text-white">
                30.000.000 <sup> ₫</sup>
              </h5>

              <div className="grid grid-cols-10">
                <div className="col-span-5 border p-2 mx-1  rounded-md">
                  <Badge color="pink">NOW</Badge>
                  <div className="text-xs">Before 9:00 PM today</div>
                  <div className="text-xs">Shipping: 25.000đ</div>
                </div>

                <div className="col-span-5 border p-2 mx-1 rounded-md">
                  <Badge color="yellow">FAST</Badge>
                  <div className="text-xs">Sunday, 9 Apr</div>
                  <div className="text-xs">
                    Shipping: <span className="text-green-500">Free</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center my-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  defaultValue=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  [1 YEAR PACK] Screen Protect - Cashback to 5 millions{" "}
                </label>
              </div>

              <div className="flex items-center my-4">
                {/* <div>
                  <p>Số lượng: {quantity}</p>
                </div>
                <button onClick={handleIncrease}>Tăng số lượng</button>
                <button onClick={handleDecrease}>Giảm số lượng</button> */}
                <h6 className="font-bold mr-2 ">Số lượng</h6> <br />
                <form className="flex justify-left flex-grow">
                  <input
                    type="number"
                    id="number"
                    defaultValue="0"
                    min="0"
                    step="1"
                    className="text-center w-1/4 rounded-lg"
                  />
                </form>
              </div>

              <div className="flex items-center justify-center">
                <Button className="flex flex-grow" color="success">
                  Buy
                </Button>
              </div>
            </div>

            {/* Lastest buyer */}
            <div className="max-w-sm col-span-5 px-2">
              <Card>
                <div className="mb-4 flex items-center justify-between">
                  <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Latest Customers
                  </h5>
                  <a
                    href="#"
                    className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    View all
                  </a>
                </div>
                <div className="flow-root">
                  <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="shrink-0">
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                            alt="Neil image"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                            Neil Sims
                          </p>
                          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                            email@windster.com
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          <Badge color="gray" icon={HiClock}>
                            30 minutes ago
                          </Badge>
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="shrink-0">
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                            alt="Bonnie image"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                            Bonnie Green
                          </p>
                          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                            email@windster.com
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          <Badge color="gray" icon={HiClock}>
                            1 days ago
                          </Badge>
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="shrink-0">
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                            alt="Michael image"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                            Michael Gough
                          </p>
                          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                            email@windster.com
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          <Badge color="gray" icon={HiClock}>
                            3 days ago
                          </Badge>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Alert color="failure">
          <span>
            <span className="font-medium">HOT DEAL!</span> Buy it now.
          </span>
        </Alert>
        <div className="grid grid-cols-4">
          <div className="p-2">
            <ProductCard2 link={imageURL.img1} />
          </div>
          <div className="p-2">
            <ProductCard2 link={imageURL.img2} />
          </div>
          <div className="p-2">
            <ProductCard2 link={imageURL.img3} />
          </div>
          <div className="p-2">
            <ProductCard2 link={imageURL.img4} />
          </div>
        </div>
      </div>
    </div>
  );
}
