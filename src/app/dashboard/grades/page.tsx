'use client'

import Subject from "@/components/grades/subject";

const gradesData = [
	{
		subject: "Matematyka",
		grades: [
			{ value: 5, description: "Sprawdzian 1" },
			{ value: 4, description: "Kartkówka" },
			{ value: 3, description: "Praca domowa" },
			{ value: 5, description: "Sprawdzian 2" },
		],
	},
	{
		subject: "Fizyka",
		grades: [
			{ value: 4, description: "Laboratorium" },
			{ value: 4, description: "Kartkówka" },
			{ value: 5, description: "Sprawdzian" },
		],
	},
	{
		subject: "Język polski",
		grades: [
			{ value: 3, description: "Wypracowanie" },
			{ value: 4, description: "Czytanie ze zrozumieniem" },
			{ value: 4, description: "Kartkówka" },
			{ value: 5, description: "Prezentacja" },
			{ value: 5, description: "Sprawdzian" },
		],
	},
	{
		subject: "Biologia",
		grades: [
			{ value: 5, description: "Sprawdzian" },
			{ value: 4, description: "Projekt" },
			{ value: 3, description: "Kartkówka" },
		],
	},
	{
		subject: "Chemia",
		grades: [
			{ value: 4, description: "Laboratorium" },
			{ value: 5, description: "Sprawdzian" },
		],
	},
	{
		subject: "Historia",
		grades: [
			{ value: 5, description: "Prezentacja" },
			{ value: 4, description: "Kartkówka" },
			{ value: 3, description: "Wypracowanie" },
		],
	},
	{
		subject: "Informatyka",
		grades: [
			{ value: 5, description: "Projekt" },
			{ value: 5, description: "Sprawdzian" },
			{ value: 4, description: "Zadanie domowe" },
		],
	},
];

export default function Home() {
	return (
		<div className='m-4 '>
			{gradesData.map((item, idx) => (
        <Subject item={item} idx={idx} key={idx}/>
			))}
		</div>
	);
}