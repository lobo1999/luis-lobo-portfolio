import './App.css'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import microsoftAILogo from "/MicrosoftAI.png"
import microsoftDataLogo from "/MicrosoftData.png"
import celonisProcessLogo from "/ProcessMining.png"
import DockerLogo from "/Docker.png"
import EFSetLogo from "/EFSet.png"
import GCPCloudDeveloperLogo from "/GCPCloudDeveloper.png"
import UiPathAcademyLogo from "/UiPathAcademy.png"
import { MdPhoneInTalk } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

import yo from "/yo.jpeg"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { CalendarDays } from "lucide-react"

function App() {

  return (
    <div>
      <Avatar>
        <AvatarImage src={yo} alt="@shadcn" />
        <AvatarFallback>Luis Lobo Portfolio</AvatarFallback>
      </Avatar>
      <div>
        <Label className="fontSize: 150px">Luis Lobo Zamora</Label>
        <br></br>
        <Label>Software Engineer and RPA Developer</Label>
        <h1 className="flex"><MdPhoneInTalk />+(506) 8542-7529</h1>
        <h2 className="flex"><HiOutlineMail />llobozamora@gmail.com</h2>
        <a href="https://github.com/lobo1999" className="flex"><FaGithub />lobo1999</a>

      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Projects</AccordionTrigger>
          <AccordionContent className="flex align-items-center">
            {DialogProjectAbstracciones()}
            {DialogProjectEsencia()}
            {DialogProjectTimesheets()}
            {DialogProjectCancellations()}
            {DialogProjectReports()}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Certifications</AccordionTrigger>
          <AccordionContent className="flex align-items-center">
            {HoverCardCertifications()}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Skills</AccordionTrigger>
          <AccordionContent>
            My Skills
            {SeparatorDemo()}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default App

export function HoverCardCertifications() {
  return (
    <div className="flex align-items-center">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Card>
            <Avatar>
              <AvatarImage src={microsoftAILogo} />
              <AvatarFallback>Microsoft Azure AI</AvatarFallback>
            </Avatar></Card>
        </HoverCardTrigger>
        <HoverCardContent className="w-90">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src={microsoftAILogo} />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm">
                Earners of the Azure AI Fundamentals certification have demonstrated foundational knowledge of machine learning (ML) and artificial intelligence (AI) concepts and related Microsoft Azure services.
              </p>
              <br></br>
              <a className="fcc-btn" href="https://www.credly.com/badges/193ad71c-a49e-4ec4-8087-bc02f7d2fde1">Online Badge</a>
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  Obtained May 25, 2022
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard >
      <HoverCard>
        <HoverCardTrigger asChild>
          <Card>
            <Avatar>
              <AvatarImage src={microsoftDataLogo} />
              <AvatarFallback>Microsoft Azure AI</AvatarFallback>
            </Avatar></Card>
        </HoverCardTrigger>
        <HoverCardContent className="w-90">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src={microsoftDataLogo} />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm">
                Earners of the Azure Data Fundamentals certification have demonstrated foundational knowledge of core data concepts and how they are implemented using Microsoft Azure data services.
              </p>
              <br></br>
              <a className="fcc-btn" href="https://www.credly.com/badges/9fa6fb02-ed08-45de-b542-9fa42ae2a622?source=linked_in_profile">Online Badge</a>
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  Obtained April 08, 2022
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard >
      <HoverCard>
        <HoverCardTrigger asChild>
          <Card>
            <Avatar>
              <AvatarImage src={celonisProcessLogo} />
              <AvatarFallback>Celonis Process Mining</AvatarFallback>
            </Avatar></Card>
        </HoverCardTrigger>
        <HoverCardContent className="w-90">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src={celonisProcessLogo} />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm">
                The badge earner is able to describe and apply the science of Process Mining inside of Celonis Analyses. They can use the Celonis to analyze process data and identify value opportunities.
              </p>
              <br></br>
              <a className="fcc-btn" href="https://www.credly.com/badges/87cb0403-9462-4ece-bfc0-c4c0a3e2ebd5?source=linked_in_profile">Online Badge</a>
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  Obtained October 07, 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard >
      <HoverCard>
        <HoverCardTrigger asChild>
          <Card>
            <Avatar>
              <AvatarImage src={DockerLogo} />
              <AvatarFallback>Docker Compose</AvatarFallback>
            </Avatar></Card>
        </HoverCardTrigger>
        <HoverCardContent className="w-90">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src={DockerLogo} />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm">
                Using Docker for DevOps: Introduction to Docker and Docker compose
              </p>
              <br></br>
              <a className="fcc-btn" href="https://skillsoft.digitalbadges.skillsoft.com/711aa19d-0893-4d24-9811-c49dcae71699">Online Badge</a>
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  Obtained December 15, 2022
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard >
      <HoverCard>
        <HoverCardTrigger asChild>
          <Card>
            <Avatar>
              <AvatarImage src={GCPCloudDeveloperLogo} />
              <AvatarFallback>GCP Cloud Developer</AvatarFallback>
            </Avatar></Card>
        </HoverCardTrigger>
        <HoverCardContent className="w-90">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src={GCPCloudDeveloperLogo} />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm">
                Google Professional Cloud Developer: Cloud Applications & APIs Learn how to set session lengths for Google Cloud services and how to deploy and secure application programming interfaces.
              </p>
              <br></br>
              <a className="fcc-btn" href="https://skillsoft.digitalbadges.skillsoft.com/7030f79a-0384-4e3b-b72b-b3811f3650ca">Online Badge</a>
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  Obtained March 19, 2023
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard >
      <HoverCard>
        <HoverCardTrigger asChild>
          <Card>
            <Avatar>
              <AvatarImage src={EFSetLogo} />
              <AvatarFallback>EF English Test</AvatarFallback>
            </Avatar></Card>
        </HoverCardTrigger>
        <HoverCardContent className="w-90">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src={EFSetLogo} />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm">
                The achieved level is 75/100 on the EF SET score scale and C2 Proficient according to the Common European Framework of Reference (CEFR).
              </p>
              <br></br>
              <a className="fcc-btn" href="https://cert.efset.org/fUF2G3">Online Badge</a>
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  Obtained December 27, 2023
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard >
      <HoverCard>
        <HoverCardTrigger asChild>
          <Card>
            <Avatar>
              <AvatarImage src={UiPathAcademyLogo} />
              <AvatarFallback>UiPath</AvatarFallback>
            </Avatar></Card>
        </HoverCardTrigger>
        <HoverCardContent className="w-90">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src={UiPathAcademyLogo} />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm">
                The UiPath Academy Automation Explorer Training is a collection of curated courses covering the most essential topics in automation development for aspiring automation developers.
              </p>
              <br></br>
              <a className="fcc-btn" href="https://credentials.uipath.com/0e19648a-ce2c-45eb-97cd-92f36fd56ea9">Online Badge</a>
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  Obtained February 03, 2024
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard >
    </div>
  )
}

export function CarouselSpacing() {
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent className="-ml-1">
        <CarouselItem key={1} className="pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                {HoverCardCertifications()}
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem key={2} className="pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-2xl font-semibold">Aaa</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export function DialogProjectAbstracciones() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Abstracciones Literarias</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Abstracciones Literarias: Online magazine project for Museo Regional de San Ramon and "La Salita del Museo", technologies used include: React, Next.JS, Tailwind, GraphQL.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              GitHub Repository:
            </Label>
            <a href="https://github.com/lobo1999/AbstraccionesLiterarias_Blog">Click Me</a>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left">
              Web Page
            </Label>
            <a href="https://abstracciones-literarias.vercel.app/">Take me there</a>
          </div>
        </div>
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function DialogProjectEsencia() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Esencia Namu</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Esencia Namu</DialogTitle>
          <DialogDescription>
            Online informative site specializing in tourism around natural beaches and resources within Costa Rica. Technologies used include React, Bootstrap, Heroku, and the Google Maps platform.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              GitHub Repository:
            </Label>
            <a href="https://github.com/lobo1999/esencia-namu">Click Me</a>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left">
              Web Page
            </Label>
            <a href="https://esencia-namu.vercel.app/">Take me there</a>
          </div>
        </div>
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function DialogProjectTimesheets() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Massive Timesheets</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Massive Timesheets</DialogTitle>
          <DialogDescription>
            Massive Timesheets: RPA solution for a multinational consumer credit reporting agency ensuring accurate tracking of work hours, boosts productivity and compliance effortlessly
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function DialogProjectCancellations() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Massive Cancellations</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Massive Timesheets</DialogTitle>
          <DialogDescription>
            Massive Cancellations: RPA solution that enables a multinational consumer credit reporting agency to access the Salesforce platform through APIs, managing daily contract cancellations efficiently.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function DialogProjectReports() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Financial Reporting Solution</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Financial Reporting Solution</DialogTitle>
          <DialogDescription>
            Financial Reporting Solution: RPA solution that empowers a multinational consumer credit firm to automate report generation across over 4 diverse workflows. Reports can vary in timing and format. 
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function SeparatorDemo() {
  return (
    <div className="align-items-center">
      <div className="space-y-1">
      </div>
      <Separator className="my-4 align-items-center" />
      <div className="flex h-5 align-items-center space-x-3">
        <div>Technical Skills</div>
        {BadgeDemo("UiPath")}
        {BadgeDemo("JavaScript")}
        {BadgeDemo("React.JS")}
        {BadgeDemo("GCP")}
        {BadgeDemo("C#")}
        {BadgeDemo("Git")}
        {BadgeDemo("Salesforce")}
        {BadgeDemo("Java")}
        {BadgeDemo("SQL")}
        {BadgeDemo("Next.JS")}
        {BadgeDemo("GraphQL")}
        {BadgeDemo("MVC")}
        {BadgeDemo("Azure")}
        {BadgeDemo("BigQuery")}
        {BadgeDemo("Kubernetes")}
        <br></br>
      </div>
      <Separator orientation="horizontal" />
      <div className="flex h-5 align-items-center space-x-3">
        <div>Soft Skills</div>
        {BadgeDemo("Creativity")}
        {BadgeDemo("Leadership")}
        {BadgeDemo("Teamwork")}
        {BadgeDemo("Adaptability")}
        {BadgeDemo("Innovation Management")}
        {BadgeDemo("Crisis Management")}
        {BadgeDemo("Communication")}
        {BadgeDemo("Growth strategies")}
        {BadgeDemo("Resilence")}
      </div>
    </div>
  )
}

export function BadgeDemo(textSKill: string) {
  return <Badge>{textSKill}</Badge>
}