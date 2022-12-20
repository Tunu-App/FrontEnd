import React from "react";
import Carousel, { consts } from "react-elastic-carousel";

function CardCarousel({ cardArray, showItems }) {
  const breakPoints = [
    { width: 100, itemsToShow: showItems, itemsToScroll: 1 },
    { width: 200, itemsToShow: showItems, itemsToScroll: 1, pagination: false },
    { width: 300, itemsToShow: showItems, itemsToScroll: 1 },
    { width: 400, itemsToShow: showItems, itemsToScroll: 1 },
    { width: 500, itemsToShow: showItems },
    { width: 600, itemsToShow: showItems },
    { width: 700, itemsToShow: showItems },
    { width: 900, itemsToShow: showItems },
    { width: 1000, itemsToShow: showItems },
    { width: 1200, itemsToShow: showItems },
  ];

  return (
    <div>
      <div className="flex  items-center justify-center  ">
        <Carousel
          itemsToScroll={3}
          showArrows={false}
          showEmptySlots={false}
          easing="ease"
          tiltEasing="ease"
          pagination={false}
          transitionMs={700}
          breakPoints={breakPoints}
          itemPadding={[4, 4]}
        >
          {cardArray.array}
        </Carousel>
      </div>
    </div>
  );
}

export default CardCarousel;
