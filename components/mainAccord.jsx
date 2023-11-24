"use client";

import { Accordion,  AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel, } from "react-accessible-accordion";


const MyAccordion = ()=>{
    <div> 
     <Accordion className="my-10 py-20 px-20">
            <AccordionItem className="mb-10">
                <AccordionItemHeading className="border border-white bg-gray-300 px-10 py-5 rounded-lg">
                    <AccordionItemButton>
                        What harsh truths do you prefer to ignore?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="border border-white bg-gray-300 px-10 py-5 rounded-lg">
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className="border border-white bg-gray-300 px-10 py-5 rounded-lg">
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    </div>
}

export default MyAccordion;