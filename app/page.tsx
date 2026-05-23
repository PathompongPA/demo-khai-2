import { BlogList, CategoryList, Navbar, Slide } from "@/components";
export default async function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full  h-full bg-gray-100">
      <Navbar fixed={true} />
      <Slide>
        <div className=" bg-gray-2  w-full h-full flex justify-center items-center text-black flex-col gap-8 p-16 ">
          <h1>Slide 1</h1>
          <h2 className=" max-w-7xl p-8 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, ipsa. Facilis, alias id. Quos veritatis, dicta esse cum perferendis a asperiores maxime aperiam pariatur excepturi nesciunt perspiciatis cupiditate! Praesentium, blanditiis?
          </h2>
        </div>
        <div className=" bg-gray-2 w-full h-full flex justify-center items-center text-black flex-col gap-8 p-16">
          <h1>Slide 2</h1>
          <h2 className=" max-w-7xl p-8 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ut repellat maxime ab reiciendis, veritatis deserunt. Eum consequatur ex, atque maiores sapiente quam excepturi in officiis nemo culpa, quaerat laudantium.
          </h2>
        </div>
      </Slide>
      <CategoryList />
      <BlogList />
    </div>
  );
}