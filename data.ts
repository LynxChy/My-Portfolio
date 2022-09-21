import { RiComputerLine } from 'react-icons/ri'
import { IService, ISkill } from './type'
import { BsCircleFill } from "react-icons/bs";
import { BiCodeBlock } from "react-icons/bi";
import { FaUserGraduate, FaServer } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'



export const services:IService[] = [
    {
        Icon: RiComputerLine,
        title: "Frontend Development",
        about:"Have knowledge in using <b> HTML</b>,<b>CSS</b> and <b>React.js</b> ",
    },
    {
        Icon: FaServer,
        title: "Backend  Development",
        about: "Handle database, server, api using <b>SQL Tools & SQL Developer </b> & other popular frameworks",
    },
    {
        Icon: BiCodeBlock,
        title: "Language Skills",
        about: "Have knowledge towards programming language in <b> C, C++, C#, Java, JavaScript, HTML, ASP.NET & Kotlin</b> ",
    },
    {
      Icon: AiFillStar,
      title:"Interest",
      about:"Artificial Intelligence, Mobile Development, Web Development and SQL database. ",
  },
    
];

export const languages: ISkill[] = [
    {
      Icon: BsCircleFill,
      name: "HTML",
      level: "80",
    },
    {
      Icon: BsCircleFill,
      name: "Java Script",
      level: "55",
    },
    {
        Icon: BsCircleFill,
        name: "Java",
        level: "45",
      },
    {
      Icon: BsCircleFill,
      name: "C, C++, C#",
      level: "30",
    },
    {
      Icon: BsCircleFill,
      name: "React",
      level: "20",
    },
    {
        Icon: BsCircleFill,
        name: "Tailwindcss",
        level: "35",
      },
    {
      Icon: BsCircleFill,
      name: "SQL",
      level: "50",
    },
    {
        Icon: BsCircleFill,
        name: "Kotlin",
        level: "35",
      },
  ];

  export const tools: ISkill[] = [
    {
      Icon: BsCircleFill,
      name: "Microsoft Tools",
      level: "80",
    },
    {
      Icon: BsCircleFill,
      name: "Photoshop",
      level: "70",
    },
    {
      Icon: BsCircleFill,
      name: "Illustrator",
      level: "30",
    },
    {
      Icon: BsCircleFill,
      name: "Adobe Premiere Pro",
      level: "55",
    },
  ];
  