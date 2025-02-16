import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const listOfAccordions = [
  {
    id: 'item-1',
    question: 'Is it accessible?',
    answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    id: 'item-2',
    question: 'Is it responsive?',
    answer: 'Yes. It is responsive by default.',
  },
  {
    id: 'item-3',
    question: 'Is it customizable?',
    answer: 'Yes. It is customizable.',
  },
];

export default function Page() {
  return (
    <div>
      <Accordion type='single' collapsible>
        {listOfAccordions.map((item) => {
          return (
            <AccordionItem value={item.id} key={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
