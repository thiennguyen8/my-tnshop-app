import { Button } from "flowbite-react";
import { Avatar } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
export default function Cart() {
  return (
    <div className="flex items-center justify-between gap-3 px-2">
      <div className="text-xs">
        <Button>
          <HiShoppingCart className="mr-2 h-5 w-5" />
          Cart
          <span className="ml-3 py-1 px-2 bg-blue-500 rounded-full ">2</span>
        </Button>
      </div>

      <div>
        <Avatar
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded={true}
          status="online"
          statusPosition="top-right"
        />
      </div>
    </div>
  );
}
