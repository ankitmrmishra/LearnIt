import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

interface FAQprops {
  Question: string;
  Answer: string;
}

export function FAQs({ Question, Answer }: FAQprops) {
  return (
    <Accordion type="single" collapsible className="">
      <AccordionItem value={Question}>
        <AccordionTrigger className="text-lg text-start">
          {Question}
        </AccordionTrigger>
        <AccordionContent className="text-lg">{Answer}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
