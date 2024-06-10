import React, { useState } from "react";

const ProductDescription = () => {
  const [btnValue, setbtnValue] = useState("description");
  const [text, setText] = useState({
    description:
      "Description loremLorem ipsum dolor sit amet consectetur adipisicing elit. Amet tenetur mollitia dolores asperiores, dignissimos voluptatibus, est adipisci aut consequuntur optio nihil doloribus consectetur laboriosam id laudantium? Temporibus tenetur odio expedita!",
    careguide:
      "Care Guide Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tenetur mollitia dolores asperiores, dignissimos voluptatibus, est adipisci aut consequuntur optio nihil doloribus consectetur laboriosam id laudantium? Temporibus tenetur odio expedita!",
    sizeguide:
      "Size Guide Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tenetur mollitia dolores asperiores, dignissimos voluptatibus, est adipisci aut consequuntur optio nihil doloribus consectetur laboriosam id laudantium? Temporibus tenetur odio expedita!",
  });
  return (
    <div className="mt-20">
      <div className="flex gap-3 mb-4">
        <button
          onClick={() => setbtnValue("description")}
          
          className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36"
        >
          Description
        </button>
        <button
          onClick={() => setbtnValue("careguide")}
          className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36"
        >
          Care Guide
        </button>
        <button
          onClick={() => setbtnValue("sizeguide")}
          className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36"
        >
          Size Guide
        </button>
      </div>
      <div className="flex flex-col pb-16">
        <p className="text-sm">{btnValue==="description" ? text.description : btnValue==="careguide" ? text.careguide : btnValue==="sizeguide" ? text.sizeguide : ""}</p>

      </div>
    </div>
  );
};

export default ProductDescription;
