import React from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

export const FaqAccordion = () => {
  const [openAccordion, setOpenAccordion] = React.useState(null);

  const handleOpen = (value) => {
    setOpenAccordion(openAccordion === value ? null : value);
  };

  function Icon({ id, open }) {
    return (
      <>
      {id === open ? <div className="h-[30px] w-[30px] bg-[#646464] text-white rounded-full font-bold flex justify-center items-center"><div className="w-[14px] h-1 bg-white rounded-sm"></div></div> : <div className="h-[30px] w-[30px] bg-primary text-white rounded-full font-bold">+</div> }
      </>
    );
  }

  return (
    <>
      <Accordion open={openAccordion === 1} className="mb-3 rounded-[10px] bg-white accordion p-3" icon={<Icon id={1} open={openAccordion} />}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors text-[20px] font-bold text-black`}
        >
         How do I get paid once I accept the offer?
        </AccordionHeader>
        {openAccordion === 1 && (
          <AccordionBody className="pt-0 text-base font-normal transition-transform">
         We write a check on the spot or next day for vehicles owned free and clear only take a few more days for vehicles with a payoff.
          </AccordionBody>
        )}
      </Accordion>
      <Accordion open={openAccordion === 2} className="mb-3 rounded-[10px] bg-white accordion p-3" icon={<Icon id={2} open={openAccordion} />} >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors text-[20px] font-bold text-black`}
        >
          How long does it take to get paid?
        </AccordionHeader>
        {openAccordion === 2 && (
          <AccordionBody className="pt-0 text-base font-normal">
            We pay same day or next day.
          </AccordionBody>
        )}
      </Accordion>
      <Accordion open={openAccordion === 3} className=" mb-3 rounded-[10px] bg-white accordion p-3" icon={<Icon id={3} open={openAccordion} />}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors text-[20px] font-bold text-black`}
        >
          What is the vehicle transfer process like?
        </AccordionHeader>
        {openAccordion === 3 && (
          <AccordionBody className="pt-0 text-base font-normal">
            Paperwork takes about 15 minutes and you're on your way!
          </AccordionBody>
        )}
      </Accordion>
      <Accordion open={openAccordion === 4} className=" mb-3 rounded-[10px] bg-white accordion p-3" icon={<Icon id={4} open={openAccordion} />}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className={`border-b-0 transition-colors text-[20px] font-bold text-black`}
        >
          What if the vehicle is under lease or loan?
        </AccordionHeader>
        {openAccordion === 4 && (
          <AccordionBody className="pt-0 text-base font-normal">
            We pay off the lender and when we receive the title in a few days we pay the balance to the seller immediately.
          </AccordionBody>
        )}
      </Accordion>
      <Accordion open={openAccordion === 5} className=" mb-3 rounded-[10px] bg-white accordion p-3" icon={<Icon id={5} open={openAccordion} />}>
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className={`border-b-0 transition-colors text-[20px] font-bold text-black`}
        >
          How is transportation for my vehicle handled?
        </AccordionHeader>
        {openAccordion === 5 && (
          <AccordionBody className="pt-0 text-base font-normal">
            You drive it in for inspection to our Spokane location.
          </AccordionBody>
        )}
      </Accordion>
      <Accordion open={openAccordion === 6} className=" mb-3 rounded-[10px] bg-white accordion p-3" icon={<Icon id={6} open={openAccordion} />}>
        <AccordionHeader
          onClick={() => handleOpen(6)}
          className={`border-b-0 transition-colors text-[20px] font-bold text-black`}
        >
          How does the DMV transfer of title and sale work?
        </AccordionHeader>
        {openAccordion === 6 && (
          <AccordionBody className="pt-0 text-base font-normal">
            
Paperwork is seamless and smooth at the dealership only taking 15 minutes!
          </AccordionBody>
        )}
      </Accordion>
      <Accordion open={openAccordion === 7} className=" mb-3 rounded-[10px] bg-white accordion p-3" icon={<Icon id={7} open={openAccordion} />}>
        <AccordionHeader
          onClick={() => handleOpen(7)}
          className={`border-b-0 transition-colors text-[20px] font-bold text-black`}
        >
          What is consignment at MaxForMyRide?
        </AccordionHeader>
        {openAccordion === 7 && (
          <AccordionBody className="pt-0 text-base font-normal">
          
We agree on a consigned amount and sell the vehicle. Once its sold we pay off any balance and they upon receipt of title we pay the balance immediately
          </AccordionBody>
        )}
      </Accordion>
    </>
  );
};
