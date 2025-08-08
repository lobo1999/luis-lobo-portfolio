import './App.css'
import { Badge } from "./components/ui/badge"
import { Button } from "./components/ui/button"
import { Separator } from "./components/ui/separator"
import microsoftAILogo from "./assets/MicrosoftAI.png"
import microsoftDataLogo from "./assets/MicrosoftData.png"
import celonisProcessLogo from "./assets/ProcessMining.png"
import DockerLogo from "./assets/Docker.png"
import EFSetLogo from "./assets/EFSet.png"
import GCPCloudDeveloperLogo from "./assets/GCPCloudDeveloper.png"
import UiPathAcademyLogo from "./assets/UiPathAcademy.png"
import { MdPhoneInTalk } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import yo from "./assets/yo.jpeg"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion"
import { Label } from "./components/ui/label"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./components/ui/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./components/ui/hover-card"
import { CalendarDays } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400 p-4 md:p-8">
      <div className="max-w-3xl mx-auto bg-white/70 rounded-2xl shadow-xl p-6 md:p-12 flex flex-col gap-6
        backdrop-blur-md border border-blue-200">
        <div className="flex flex-col items-center space-y-3">
          <Avatar className="w-28 h-28 shadow-md border-4 border-blue-400">
            <AvatarImage src={yo} alt="Luis Lobo Portfolio" />
            <AvatarFallback>LL</AvatarFallback>
          </Avatar>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight text-center">
            Luis Lobo Zamora
          </h1>
          <span className="text-blue-700 text-lg font-medium text-center">
            Software Engineer & RPA Developer
          </span>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <span className="flex items-center gap-2 text-blue-900 bg-blue-100 px-3 py-1 rounded-lg shadow">
              <MdPhoneInTalk /> +(506) 8542-7529
            </span>
            <span className="flex items-center gap-2 text-blue-900 bg-blue-100 px-3 py-1 rounded-lg shadow">
              <HiOutlineMail />llobozamora@gmail.com
            </span>
            <a href="https://github.com/lobo1999" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-900 bg-blue-100 px-3 py-1 rounded-lg shadow hover:bg-blue-200 transition">
              <FaGithub />lobo1999
            </a>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl text-blue-900">Projects</AccordionTrigger>
            <AccordionContent className="flex flex-wrap gap-3 justify-center">
              <DialogProjectAbstracciones />
              <DialogProjectEsencia />
              <DialogProjectTimesheets />
              <DialogProjectCancellations />
              <DialogProjectReports />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl text-blue-900">Certifications</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <HoverCardCertifications />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl text-blue-900">Skills</AccordionTrigger>
            <AccordionContent>
              <SeparatorDemo />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <footer className="text-center mt-10 text-blue-100 font-medium">
        © {new Date().getFullYear()} Luis Lobo Zamora
      </footer>
    </div>
  )
}

export default App

export function HoverCardCertifications() {
  const certs = [
    {
      img: microsoftAILogo,
      title: "Microsoft Azure AI Fundamentals",
      desc: "Foundational knowledge of machine learning (ML) and AI concepts and related Azure services.",
      date: "Obtained May 25, 2022",
      badge: "https://www.credly.com/badges/193ad71c-a49e-4ec4-8087-bc02f7d2fde1"
    },
    {
      img: microsoftDataLogo,
      title: "Microsoft Azure Data Fundamentals",
      desc: "Foundational knowledge of core data concepts and implementation using Azure data services.",
      date: "Obtained April 08, 2022",
      badge: "https://www.credly.com/badges/9fa6fb02-ed08-45de-b542-9fa42ae2a622?source=linked_in_profile"
    },
    {
      img: celonisProcessLogo,
      title: "Celonis Process Mining",
      desc: "Able to describe and apply the science of Process Mining and value opportunities.",
      date: "Obtained October 07, 2021",
      badge: "https://www.credly.com/badges/87cb0403-9462-4ece-bfc0-c4c0a3e2ebd5?source=linked_in_profile"
    },
    {
      img: DockerLogo,
      title: "Docker & Docker Compose",
      desc: "Using Docker for DevOps: Introduction to Docker and Docker compose.",
      date: "Obtained December 15, 2022",
      badge: "https://skillsoft.digitalbadges.skillsoft.com/711aa19d-0893-4d24-9811-c49dcae71699"
    },
    {
      img: GCPCloudDeveloperLogo,
      title: "GCP Cloud Developer",
      desc: "Cloud Applications & APIs. Deploy and secure application programming interfaces.",
      date: "Obtained March 19, 2023",
      badge: "https://skillsoft.digitalbadges.skillsoft.com/7030f79a-0384-4e3b-b72b-b3811f3650ca"
    },
    {
      img: EFSetLogo,
      title: "EF English C2 Proficient",
      desc: "EF SET score scale C2 Proficient (75/100) according to CEFR.",
      date: "Obtained December 27, 2023",
      badge: "https://cert.efset.org/fUF2G3"
    },
    {
      img: UiPathAcademyLogo,
      title: "UiPath Automation Explorer",
      desc: "UiPath Academy Automation Explorer Training for automation development.",
      date: "Obtained February 03, 2024",
      badge: "https://credentials.uipath.com/0e19648a-ce2c-45eb-97cd-92f36fd56ea9"
    },
  ];
  return certs.map(cert => (
    <HoverCard key={cert.title}>
      <HoverCardTrigger asChild>
        <div className="bg-white/90 shadow-md rounded-xl cursor-pointer p-2 flex justify-center items-center hover:scale-105 transition">
          <Avatar>
            <AvatarImage src={cert.img} />
            <AvatarFallback>{cert.title.slice(0,2)}</AvatarFallback>
          </Avatar>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-72 bg-blue-50/95 border border-blue-200 shadow-xl rounded-xl">
        <div className="flex gap-4">
          <Avatar className="w-14 h-14 border-blue-300 border-2">
            <AvatarImage src={cert.img} />
            <AvatarFallback>{cert.title.slice(0,2)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-blue-900 font-bold text-base">{cert.title}</h3>
            <p className="text-sm text-blue-700">{cert.desc}</p>
            <a className="text-blue-500 underline text-xs mt-1 inline-block" href={cert.badge} target="_blank" rel="noopener noreferrer">Ver Credencial</a>
            <div className="flex items-center text-xs text-blue-400 mt-2">
              <CalendarDays className="mr-1 h-4 w-4 opacity-70" />{cert.date}
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ))
}

export function DialogProjectAbstracciones() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-blue-50 text-blue-900 border-blue-200 shadow hover:bg-blue-100">
          Abstracciones Literarias
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white rounded-xl border-blue-200">
        <DialogHeader>
          <DialogTitle className="text-blue-800">Abstracciones Literarias</DialogTitle>
          <DialogDescription className="text-blue-700">
            Online magazine project for Museo Regional de San Ramón and "La Salita del Museo", using React, Next.JS, Tailwind, GraphQL.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 py-2">
          <div className="flex gap-2">
            <Label className="text-blue-900">GitHub:</Label>
            <a href="https://github.com/lobo1999/AbstraccionesLiterarias_Blog" className="text-blue-600 underline">Repo</a>
          </div>
          <div className="flex gap-2">
            <Label className="text-blue-900">Web:</Label>
            <a href="https://abstracciones-literarias.vercel.app/" className="text-blue-600 underline">Demo</a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function DialogProjectEsencia() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-blue-50 text-blue-900 border-blue-200 shadow hover:bg-blue-100">
          Esencia Namu
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white rounded-xl border-blue-200">
        <DialogHeader>
          <DialogTitle className="text-blue-800">Esencia Namu</DialogTitle>
          <DialogDescription className="text-blue-700">
            Informative tourism site for Costa Rica beaches and resources. React, Bootstrap, Heroku, Google Maps.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 py-2">
          <div className="flex gap-2">
            <Label className="text-blue-900">GitHub:</Label>
            <a href="https://github.com/lobo1999/esencia-namu" className="text-blue-600 underline">Repo</a>
          </div>
          <div className="flex gap-2">
            <Label className="text-blue-900">Web:</Label>
            <a href="https://esencia-namu.vercel.app/" className="text-blue-600 underline">Demo</a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function DialogProjectTimesheets() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-blue-50 text-blue-900 border-blue-200 shadow hover:bg-blue-100">
          Massive Timesheets
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white rounded-xl border-blue-200">
        <DialogHeader>
          <DialogTitle className="text-blue-800">Massive Timesheets</DialogTitle>
          <DialogDescription className="text-blue-700">
            RPA for a multinational credit reporting agency: accurate tracking of work hours, boosting productivity and compliance.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export function DialogProjectCancellations() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-blue-50 text-blue-900 border-blue-200 shadow hover:bg-blue-100">
          Massive Cancellations
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white rounded-xl border-blue-200">
        <DialogHeader>
          <DialogTitle className="text-blue-800">Massive Cancellations</DialogTitle>
          <DialogDescription className="text-blue-700">
            RPA for managing daily contract cancellations via Salesforce APIs for a multinational credit reporting agency.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export function DialogProjectReports() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-blue-50 text-blue-900 border-blue-200 shadow hover:bg-blue-100">
          Financial Reporting
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white rounded-xl border-blue-200">
        <DialogHeader>
          <DialogTitle className="text-blue-800">Financial Reporting Solution</DialogTitle>
          <DialogDescription className="text-blue-700">
            RPA that automates report generation across 4+ workflows for a multinational credit firm; supports different timing/formats.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export function SeparatorDemo() {
  const techSkills = [
    "UiPath", "JavaScript", "React.JS", "GCP", "C#", "Git", "Salesforce", "Java", "SQL", "Next.JS", "GraphQL", "MVC", "Azure", "BigQuery", "Kubernetes"
  ];
  const softSkills = [
    "Creativity", "Leadership", "Teamwork", "Adaptability", "Innovation Management", "Crisis Management", "Communication", "Growth strategies", "Resilience"
  ];

  return (
    <div>
      <Separator className="my-3" />
      <div>
        <h3 className="text-blue-900 font-semibold mb-2">Technical Skills</h3>
        <div className="flex flex-wrap gap-2">
          {techSkills.map(skill =>
            <Badge key={skill}
              className="bg-blue-600/90 text-white px-3 py-1 rounded-lg shadow hover:bg-blue-700 transition">{skill}</Badge>
          )}
        </div>
      </div>
      <Separator className="my-3" />
      <div>
        <h3 className="text-blue-900 font-semibold mb-2">Soft Skills</h3>
        <div className="flex flex-wrap gap-2">
          {softSkills.map(skill =>
            <Badge key={skill}
              className="bg-blue-200 text-blue-900 px-3 py-1 rounded-lg shadow hover:bg-blue-300 transition">{skill}</Badge>
          )}
        </div>
      </div>
    </div>
  )
}