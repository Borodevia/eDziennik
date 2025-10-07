'use client'

import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";

import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";
import { Card } from "../ui/card";

function Subject(item, idx) {

  const [isOpen, setIsOpen] = useState<boolean>(false);



  return (
     <Collapsible open={isOpen} onOpenChange={setIsOpen} className='w-full' key={idx}>
          <CollapsibleTrigger asChild>
				<Card key={idx} className='mb-4 p-4 w-full'>
					<div className='font-semibold mb-2'>{item.item.subject}</div>

          {isOpen ? (
            <Table>
              <TableCaption>Twoje super oceny</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Ocena</TableHead>
                  <TableHead>Kategoria</TableHead>
                  <TableHead>Opis</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {item.item.grades.map((grade, gidx) => {
                  <TableRow key={gidx}>
                    <TableCell>{grade.value}</TableCell>
                    <TableCell>{grade.description}</TableCell>
                    <TableCell>2</TableCell>
                  </TableRow>
                })}
              </TableBody>
              <TableFooter></TableFooter>
            </Table>

          ) : (
            	<ul className='list-none flex gap-2.5'>
						{item.item.grades.map((grade, gidx) => (
							<li key={gidx} className=''>
								<Badge variant='outline'  className='font-semibold text-sm p-3 aspect-square rounded-lg hover:bg-gray-50'>
									{grade.value}
								</Badge>
							</li>
						))}
					</ul>
          )}

				</Card>
        </CollapsibleTrigger>
        </Collapsible>
  )
}

export default Subject
