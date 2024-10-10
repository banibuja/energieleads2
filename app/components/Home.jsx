"use client";

import Stories from './Stories';
import StoriesMobile from './StoriesMobile';
import ScrollingProviders from './ScrollingProviders';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive'; 
import Image from 'next/image';
import useGeolocation from '../hooks/useGeolocation';
import translations from '../../public/translations.json';



export default function Home() {
    const country = useGeolocation();
    const [texts, setTexts] = useState(translations.EN);

    const [isClicked, setIsClicked] = useState(false);
    const [multiLeadPrice, setMultiLeadPrice] = useState(49); 
    const [exklusivLeadPrice, setExklusivLeadPrice] = useState(89); 
    const isMobile = useMediaQuery({ maxWidth: 768 }); 
    const [openIndex, setOpenIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    if (country === "DE") {
        setTexts(translations.DE);
    } else {
        setTexts(translations.EN);
    }
}, [country]);


  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const handleClick = () => {
    setIsClicked(!isClicked);
    
    if (!isClicked) {
      setMultiLeadPrice(39); 
      setExklusivLeadPrice(79); 
    } else {
      setMultiLeadPrice(49); 
      setExklusivLeadPrice(89); 
    }
  };

  const faqs = [
    {
      question: "Welche Leads bieten wir an?",
      answer: "Aktuell können wir Ihnen Leads für Photovoltaik (privat und gewerblich) anbieten. Hierbei unterscheiden wir zwischen Exklusivleads und Multileads. Exklusivleads werden nur an Sie verkauft und innerhalb von 4 Wochen nach Ihrem Kauf als Multilead freigegeben. Multileads werden nur an 1x weiteren Fachpartner verkauft."
    },
    {
      question: "Wie lange dauert die Einrichtung/Start?",
      answer: "Sie können Leads auch direkt kaufen, jedoch empfehlen wir, einen Termin zu buchen, um alle Details zu besprechen."
    },
    {
      question: "Werden die Leads mehrfach verkauft?",
      answer: "Exklusivleads werden nur einmal verkauft, während Multileads an mehrere Partner verkauft werden können."
    },
    {
      question: "Was kostet ein Lead?",
      answer: "Die Kosten für einen Lead variieren je nach Art des Leads und der Nachfrage. Bitte kontaktieren Sie uns für genauere Informationen."
    },
    {
      question: "Wie lange dauert die Einrichtung/Start?",
      answer: "Die Einrichtung dauert in der Regel zwischen 1-2 Wochen, abhängig von den spezifischen Anforderungen."
    },
    {
      question: "Erhalten Sie datenschutzkonforme Leads?",
      answer: "Ja, alle unsere Leads sind datenschutzkonform und erfüllen die geltenden Datenschutzgesetze."
    }
  ];


   
  return (
    <main className="relative bg-black overflow-hidden" style={{ fontFamily: "'Outfit', sans-serif" }}>
<div className="bg-black fixed top-0 w-full z-50">
      <header className="w-full max-w-[79rem] h-[5rem] py-1 mx-auto sm:h-[4.8rem] transition duration-300">
        <nav className="flex justify-between items-center h-full px-4">
        <div className="left-images">
                <a href="/">
                    <Image
                    src="https://framerusercontent.com/images/6wm2hJw0JcUgHfEryGifeXzTQ.png"
                    alt="Logo"
                    className="w-[150px] h-auto"
                    width="150"
                    height="200"
                    />
                </a>
                </div>

          <div className="right-images flex items-center">
            {/* Menu for larger screens */}
            <ul className="hidden md:flex cursor space-x-4 items-center text-[14px] text-[#fff] font-medium tracking-[-0.02em]">
              <li >  <a href="#leads">{texts.header.product}</a> </li>
              <li><a href="#integrations">{texts.header.features}</a></li>
              <li><a href="#preise">{texts.header.price}</a></li>
              <li>
                <button className="ml-4 px-4 py-2 bg-[#fbcf44] text-white rounded-[10px] hover:ring-4 hover:ring-[rgba(102,72,250,0.5)] transition duration-300 ease-in-out">
                <a href="#form">{texts.header.request}</a>

                </button>
              </li>
            </ul>

            {/* Hamburger Menu for mobile */}
            <div className="md:hidden">
              <button
                id="menu-btn"
                className="text-white focus:outline-none"
                onClick={() => setIsOpen(!isOpen)} // Toggle menu on click
              >
                {isOpen ? (
                  // "X" Icon when menu is open
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-9"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-9"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                

                  

                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile dropdown menu */}
        <div
          id="mobile-menu"
          className={`md:hidden absolute top-[5rem] right-0 w-full bg-black p-4 transition-transform transform ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col space-y-4 items-start text-[14px] text-[#fff] font-medium tracking-[-0.02em]">
              <li>  <a href="#leads">{texts.header.product}</a> </li>
              <li><a href="#integrations">{texts.header.features}</a></li>
              <li><a href="#preise">{texts.header.price}</a></li>
            <li>
              <button className="w-[25rem] md:w-auto px-4 py-2 bg-[#fbcf44] text-white rounded-[10px] hover:ring-4 hover:ring-[rgba(102,72,250,0.5)] transition duration-300 ease-in-out">
              <a href="#form">{texts.header.request}</a>
              </button>
            </li>
          </ul>
        </div>
      </header>
    </div>   <a href="#form">

      <button className="mt-[1.5rem] z-[1001] fixed right-0 top-[38rem] lg:top-[48rem] mr-3 px-6 py-2 bg-[#fbcf44] text-white rounded-[12px] hover:ring-4 hover:ring-[rgba(102,72,250,0.5)] transition duration-300 ease-in-out sm:px-4 sm:py-2 flex items-center">
  Jetzt Testen
  <svg className="w-6 h-6 text-[#fff] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
</svg>


</button>

</a>


    


      <div className="w-full mx-auto relative z-[30] flex flex-col items-center justify-center lg:mt-[5rem] mt-[6rem] sm:mt-1">
  <div className="text-[12px] text-white font-bold bg-[#0d0d0d66] py-[7px] rounded-3xl px-3 flex items-center mt-[1rem] fadeInUp border border-white border-opacity-10">
    <span className="online h-2 w-2 bg-green-500 rounded-full mr-2 animate-pulseShrinkGrow"></span>
    Ab sofort: Direkte CRM Anbindung
  </div>

  <h1 className="title-top text-center text-white text-[34px] sm:text-[32px] font-[500] tracking-[-0.04em] leading-[1.1em] mt-6 sm:leading-[1.1] md:text-[48px] lg:text-[72px] fadeInUp">
    Ihre zuverlässige
    <br />
    Photovoltaik
    <span className="text-[34px] sm:text-[48px] md:text-[72px] font-[400] tracking-[0em] italic font-serif ml-3">
  Lead Quelle.
</span>

  </h1>

  <div
    className="desc1 text-center text-[#ababab] text-[18px] sm:text-[16px] md:text-[18px] mt-[1.5rem]"
    style={{ animationDelay: "0.4s" }}
  >
    Wir vermitteln täglich Tausende hochqualitative Aufträge von <br />
    Eigenheimbesitzer/innen an Fachfirmen.
  </div>

  <a href="#form">
  <button className="mt-[1.5rem] ml-4 px-5 py-2 bg-[#fbcf44] text-white rounded-[12px] hover:ring-4 hover:ring-[rgba(102,72,250,0.5)] transition duration-300 ease-in-out sm:px-4 sm:py-2">
    Unverbindlich testen
  </button>
</a>


 
</div>


      <div className="flex justify-center mt-[2rem] lg:mt-[3rem]">
  <div className="prov-cont w-[55rem]">
    <div className="providers flex justify-center flex-col items-center w-[90%] mx-auto"> 
      <p className='text-[#ababab] text-center text-[12px]'>Solaranbieter, die uns bereits vertrauen:</p> 
      <ScrollingProviders />
    </div>
  </div>
</div>





      <div className="relative z-[20] flex flex-col items-center justify-center w-full">
      <div className="z-30">
      {isMobile ? (
        <Image
          src="https://framerusercontent.com/images/6uLTtWZEBfrKKmeWmWvlN7r4qiU.png?scale-down-to=512"
          alt="Dashboard"
          className="w-[23rem] h-auto mt-[2.3rem]" 
           width="300"
          height="200"
        />
        
      ) : (
        <div className="text-center z-[1000] text-white text-2xl mb-4">
        <div className="mask dashboard bg-[#0d0d0d80] backdrop-blur-[24px] border-t border-r border-l border-[rgba(255,255,255,0.1)] w-[55rem] h-auto rounded-[24px] mt-[3rem] relative z-[1001]">
        <div className="cards-top flex justify-between gap-4 p-4">
        {/* Karta e parë */}
        <div className="bg-[#14141480] w-1/3 h-[6rem] rounded-lg shadow-lg px-4 py-3 border border-[rgba(255,255,255,0.1)]">
        <div className="flex justify-between items-start text-[12px] text-[#000]">
        <span className='text-[#f5f5f8] mt-[-7px]'>Verkaufte Leads</span>
        <span className='bg-[#19ff7533] text-[#1aff75] text-[8px] rounded-[30px] leading-[5.95px] px-2 py-[5px] text-center'>+84%</span>
        </div>
        <h3 className="text-[32px] text-[#f5f5f8] text-left flex items-center pt-1">500.000+</h3>
        </div>
        
        {/* Karta e dytë */}
        <div className="bg-[#14141480] w-1/3 h-[6rem] rounded-lg shadow-lg px-4 py-3 border border-[rgba(255,255,255,0.1)]">
        <div className="flex justify-between items-start text-[12px] text-[#000]">
        <span className='text-[#f5f5f8] mt-[-7px]'>Verkaufte Anlange</span>
        <span className='bg-[#19ff7533] text-[#1aff75] text-[8px] rounded-[30px] leading-[5.95px] px-2 py-[5px] text-center'>+47%</span>
        </div>
        <h3 className="text-[32px] text-[#f5f5f8] text-left flex items-center pt-1">2.439</h3>
        </div>
        
        {/* Karta e tretë */}
        <div className="bg-[#14141480] w-1/3 h-[6rem] rounded-lg shadow-lg px-4 py-3 border border-[rgba(255,255,255,0.1)]">
        <div className="flex justify-between items-start text-[12px] text-[#000]">
        <span className='text-[#f5f5f8] mt-[-7px]'>Generierter Umsatz</span>
        <span className='bg-[#19ff7533] text-[#1aff75] text-[8px] rounded-[30px] leading-[5.95px] px-2 py-[5px] text-center'>+24%</span>
        </div>
        <h3 className="text-[32px] text-[#f5f5f8] text-left flex items-center pt-1">50.000.000€</h3>
        </div>
        </div>
        <div className="cards-top flex justify-between gap-3 px-4">
        <div className="bg-[#14141480] w-40 h-[18rem] rounded-lg shadow-lg px-4 py-3 border-t border-r border-l border-[rgba(255,255,255,0.1)]">
        <div className="flex justify-between items-start text-[12px] text-[#000]">
          <span className='text-[10px] text-[#f5f5f8] mt-[-7px]'>Alle Leads</span>
        </div>
        <h3 className="text-[24px] text-[#f5f5f8] text-left flex items-center pt-0">281+</h3>
        <button className="px-10 py-[-10px] bg-[#fbcf44] text-[10px] text-white rounded-[10px] hover:ring-4 hover:ring-[rgba(102,72,250,0.5)] transition duration-300 ease-in-out">
          Importieren
        </button>
        
        <div className="border-b border-black my-3"></div>
        
        <div className="flex justify-between text-[#f5f5f8]">
          <span className="text-[10px]">Generierter Umstaz</span>
          <span className="text-[10px]">92%</span>
          
        </div>
        <h3 className="text-[24px] text-[#f5f5f8] text-left flex items-center pt-0">1.12M€</h3>
        
        <div className="border-b border-black my-3"></div>
        <div className="flex justify-between text-[#f5f5f8]">
          <span className="text-[10px]">Leadkosten</span>
          <span className="text-[10px]">92%</span>
        
          
        </div>
        <h3 className="text-[24px] text-[#f5f5f8] text-left flex items-center pt-0">13.769€</h3>
        
        
        
        </div>
        <div className="bg-[#14141480] w-[60%] h-[18rem] rounded-lg shadow-lg px-4 py-3 border-t border-r border-l border-[rgba(255,255,255,0.1)]">
        
        <div className="flex justify-between items-center text-[12px]">
        <div className="revenue">
        <span>Revenue Overview</span>
        </div>
        <div className="raport flex gap-4 text-[8px]">
        <span>Daily</span>
        <span>Weakly</span>
        <span>Monthly</span>
        <span>Yearly</span>
        </div>
        </div>
        <div className="flex">
        <div className="number flex flex-col items-start mt-[3rem] text-[6px] text-[#ababab]">
        <span>6,000</span>
        <span>6,000</span>
        <span>6,000</span>
        <span>6,000</span>
        <span>6,000</span>
        <span>6,000</span>
        </div>
        
        <div className="img relative">
          <Image 
            className="mt-[2rem]" 
            src="/images/diagrame.png"  // Make sure to use the correct path
            alt="aa" 
            width="500"
            height="100"
        
          />
          <Image
            className="absolute top-[3rem] left-0" 
            src="/images/graph.svg"  // Ensure the correct path
            alt="aa" 
            width="500"
            height="100"
         
          />
        </div>
        
        </div>
        
        
        
        </div>
        <div className="w-40 h-[18rem] rounded-lg shadow-lg px-4 py-3">
        <div className="flex flex-col items-start text-[12px] text-[#000]">
          <span className='text-[10px] text-[#f5f5f8] mt-[-7px]'>Vertriebsteam Markus</span>
          <span className="bg-[#14141480] h-[8px] w-[79px] rounded-[4px] mt-[5px]"></span>
          <span className="bg-[#14141480] h-[8px] w-[132px] rounded-[4px] mt-[5px]"></span>
        
        </div>
        
        
        
        <div className="flex flex-col items-start text-[12px] text-[#000] mt-[20px]">
          <span className='text-[10px] text-[#f5f5f8] mt-[-7px]'>Vertriebsteam Markus</span>
          <span className="bg-[#14141480] h-[8px] w-[79px] rounded-[4px] mt-[5px]"></span>
          <span className="bg-[#14141480] h-[8px] w-[132px] rounded-[4px] mt-[5px]"></span>
        
        </div>
        
        <div className="flex flex-col items-start text-[12px] text-[#000] mt-[20px]">
          <span className='text-[10px] text-[#f5f5f8] mt-[-7px]'>Vertriebsteam Markus</span>
          <span className="bg-[#14141480] h-[8px] w-[79px] rounded-[4px] mt-[5px]"></span>
          <span className="bg-[#14141480] h-[8px] w-[132px] rounded-[4px] mt-[5px]"></span>
        
        </div>
        
        <div className="flex flex-col items-start text-[12px] text-[#000] mt-[20px]">
          <span className='text-[10px] text-[#f5f5f8] mt-[-7px]'>Vertriebsteam Markus</span>
          <span className="bg-[#14141480] h-[8px] w-[79px] rounded-[4px] mt-[5px]"></span>
          <span className="bg-[#14141480] h-[8px] w-[132px] rounded-[4px] mt-[5px]"></span>
        
        </div>
        
        
        
        </div>
        </div>
        
        
        
        </div>
        
            </div>      )}
    </div>      
     
    <div className="video-background w-full h-full absolute top-0 left-0">
  <video 
    className="background-video w-full h-full object-cover" 
    loop 
    autoPlay 
    muted 
    playsInline 
    preload="auto"
  >
    <source src="./videos/background-video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="video-blur-overlay"></div>
</div>

</div>


<div id="leads" className="leads mt-[5rem] h-auto flex flex-col items-center"> 
    <div className="text-[#f5f5f8] border border-[rgba(255,255,255,0.1)] text-[14px] bg-[#0d0d0d66] px-[12px] py-[5px] rounded-[60px] mb-4"> 
      Unsere Leads
    </div>
    
    <div className="flex flex-col items-center text-[34px] sm:text-[52px] text-[#f5f5f8] font-[500] tracking-[-0.04em] leading-[1.1em]"> 
      <h1 className="text-center">Erhalte die wichtigsten</h1> 
      <span className="text-center font-serif italic tracking-[0em] font-[400]">
        Lead Informationen
      </span>
    </div>
  
    <div className="text-[16px] sm:text-[18px] text-[#ababab] mt-[2rem] text-center">
      Unser Versprechen: Das letzte Mal, dass du
    </div>
    <div className="text-[16px] sm:text-[18px] text-[#ababab] text-center">
      deinen Lead Anbieter wechselst!
    </div>
  
    {/* Columns 1 Content */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
    <div className="flex ">
    <div className="relative border border-[rgba(255,255,255,0.1)] bg-[#0d0d0dcc] text-[#f5f5f8] p-0 rounded-[30px] w-[37rem] h-[22rem] lg:w-[37rem] lg:h-[24rem] backdrop-blur-[24px] mx-4 md:mx-0 overflow-hidden">
    <Image width="100" height="100" className="w-full h-full object-cover" src="/images/blur.png" alt="blur" />

        {/* Overlay Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-start p-4">
          <h3 className="text-center text-[#f5f5f8] text-[24px] bg-[#0d0d0dcc] p-2 rounded-md">
            Einfach Analytics
          </h3>
          <p className="w-[20rem] text-center mt-2 text-[16px] text-[#ababab]">
            Sehe auf einen Blick wie viele Leads du erhalten hast und wie viele noch kommen.
          </p>
        </div>

        {/* Column 1 Content */}
        <div className="bg-[#14141480] mask8 rounded-[10px] left-[2rem] sm:left-[6rem] absolute inset-0 top-[10rem] w-[93%] h-[16rem] sm:w-[80%] sm:h-[18rem] px-4 py-3 border-t border-r border-l border-[rgba(255,255,255,0.1)]">
          <div className="flex justify-between items-center text-[12px]">
            <div className="revenue ">
              <span>Revenue Overview</span>
            </div>
            <div className="raport flex gap-4 text-[8px]">
              <span>Daily</span>
              <span>Weakly</span>
              <span>Monthly</span>
              <span>Yearly</span>
            </div>
          </div>
          <div className="flex ">
            <div className="number flex flex-col items-start mt-[2.7rem] lg:mt-[3rem] text-[6px] gap-4 text-[#ababab]">
              <span>6,000</span>
              <span>5,000</span>
              <span>4,000</span>
              <span>3,000</span>
              <span>2,000</span>
              <span>1,000</span>
            </div>

            <div className="img relative mask5 ">
              <Image width="500" height="100" className="mt-[2rem] lg:mt-[2rem]" src="/images/diagrame.png" alt="aa" />
              <Image width="500" height="100" className="absolute top-[3rem] left-0" src="images/graph.svg" alt="aa" />
            </div>
          </div>
        </div>
      </div>
    </div>
  
  
  
        {/* Column 2 Content */}
        <div className="flex">

  <div className="relative border border-[rgba(255,255,255,0.1)] bg-[#0d0d0dcc] text-[#f5f5f8] p-0 rounded-[30px] w-[37rem] h-[22rem] lg:w-[37rem] lg:h-[24rem] backdrop-blur-[24px] mx-4 md:mx-0 overflow-hidden">
  <Image width="100" height="100" className="w-full h-full object-cover" src="/images/blur.png" alt="blur" />
    
    <div className="download mask2 mask6 mt-[-3rem] lg:mt-0 border-b border-r border-l border-[rgba(255,255,255,0.1)] rounded-b-[13px] w-[18rem] h-[14rem]  ml-[3.5rem] lg:ml-0 lg:w-[18rem] lg:h-[14rem] absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-start p-4 bg-[#14141480]">
    <div className="flex items-center">
    {/* Download SVG Icon */}
    <div className="text-white text-xl font-bold bg-[#fcbf44] py-3 px-1 w-[44px] rounded-full flex items-center justify-center">
      {/* SVG for download icon */}
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        
      >
        <path d="M6 20h12M12 4v12m0 0l3.5-3.5M12 16l-3.5-3.5" />
      </svg>
    </div>
    <div className="flex flex-col">
    <span className="text-white text-[14px] ml-2 font-sans">November.pdf</span>  
    <span className="bg-[#333] h-[8px] w-[148px] rounded-[4px] mt-[5px] ml-2"></span>
    </div>
  </div>
  <div className="flex items-center mt-5">
    {/* Download SVG Icon */}
    <div className="text-white text-xl font-bold bg-[#fcbf44] py-3 px-1 w-[44px] rounded-full flex items-center justify-center">
      {/* SVG for download icon */}
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        
      >
        <path d="M6 20h12M12 4v12m0 0l3.5-3.5M12 16l-3.5-3.5" />
      </svg>
    </div>
    <div className="flex flex-col">
    <span className="text-white text-[14px] ml-2 font-sans">Dezember.pdf</span>
    <span className="bg-[#333] h-[8px] w-[100px] rounded-[4px] mt-[5px] ml-2"></span>
    </div>
  </div>
  <div className="flex items-center mt-5">
    {/* Download SVG Icon */}
    <div className="text-white text-xl font-bold bg-[#fcbf44] py-3 px-1 w-[44px] rounded-full flex items-center justify-center">
      {/* SVG for download icon */}
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        
      >
        <path d="M6 20h12M12 4v12m0 0l3.5-3.5M12 16l-3.5-3.5" />
      </svg>
    </div>
    <div className="flex flex-col">
    <span className="text-white text-[14px] ml-2 font-sans">2024_EnergieLeads.pdf</span>
    <span className="bg-[#333] h-[8px] w-[148px] rounded-[4px] mt-[6px] ml-2"></span>
    </div>
  </div>
  
    </div>
  
    <div className="absolute mb-[1rem] inset-0 flex flex-col items-center justify-end p-4">
    <h3 className="text-center text-[#f5f5f8] text-[24px] p-2 rounded-md">
    Erhalte monatliche Reports
    </h3>
    <p className=" w-[20rem] text-center mt-2 text-[16px] text-[#ababab]">
    Erhalte auf Wunsch monatliche Reports deiner Lead Bestellungen.
  </p>
   
  </div>
  
  
  </div>
  </div>
  
  
  
  
  
  
        {/* Column 3 Content */}
        <div  className="flex ">

  
        <div className="relative  border border-[rgba(255,255,255,0.1)] bg-[#0d0d0dcc] text-[#f5f5f8] p-0 rounded-[30px] w-[37rem] h-[21rem] lg:w-[37rem] lg:h-[24rem] backdrop-blur-[24px] mx-4 md:mx-0 overflow-hidden">
        <Image width="100" height="100" className="w-full h-full object-cover" src="/images/blur.png" alt="blur" />
    
    <div className="download mt-[-3.7rem] lg:mt-0 mask2 mask6 gap-[15px] border-b border-r border-l border-[rgba(255,255,255,0.1)] rounded-b-[13px] w-[18rem] h-[15rem] absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-start p-4 bg-[#14141480]">
    <div className="flex items-start justify-between w-full"> {/* Changed to items-start */}
    <div className="text-white text-xl font-bold w-[50px] h-auto rounded-full flex items-center justify-center">
     <Image width="100" height="100" className="w-[100%] h-[100%]" src="https://framerusercontent.com/images/5pqVHwaFYm2c08PvLLkPHKSo.png" alt="" />
    </div>
    <div className="online bg-green-400 rounded-[100%] h-[10px] w-[10px] absolute top-[2.9rem] border border-black left-[2.9rem]"></div>
    <div className="flex justify-between items-start w-full"> 
    <div className="flex flex-col"> 
      <span className="text-white text-[14px] ml-2 font-sans">Google Sheet</span>  
      <span className="text-[#ababab] text-[12px] ml-2 font-sans">Neu</span>
    </div>
    
    <span className="bg-[#043320] text-[#75dfa6] text-[12px] rounded-full leading-[5.95px] px-3 py-[8px] self-end mb-[8px]">2024</span> {/* Keep 2024 on the right */}
  </div>
  </div>
  <div className="flex items-start justify-between w-full"> {/* Changed to items-start */}
  <div className="text-white text-xl font-bold rounded-full w-[50px] flex items-center justify-center overflow-hidden"> {/* Updated to ensure round container */}
     <Image width="100" height="100" className="w-[100%] h-[100%] object-cover rounded-full" src="https://framerusercontent.com/images/Po7pwRND9tPqmbLKPXlbd3ShCA.png?scale-down-to=512" alt="" /> {/* Rounded the image */}
  </div>
  
    <div className="online bg-green-400 rounded-[100%] h-[10px] w-[10px] absolute top-[6.7rem] border border-black left-[2.9rem]"></div>
    <div className="flex justify-between items-start w-full"> 
    <div className="flex flex-col"> 
      <span className="text-white text-[14px] ml-2 font-sans">Make.com</span>  
      <span className="text-[#ababab] text-[12px] ml-2 font-sans">Neu</span>
    </div>
    
    <span className="bg-[#043320] text-[#75dfa6] text-[12px] rounded-full leading-[5.95px] px-3 py-[8px] self-end mb-[8px]">2024</span> {/* Keep 2024 on the right */}
  </div>
  
  
  </div>
  <div className="flex items-start justify-between w-full"> {/* Changed to items-start */}
    <div className="text-white text-xl font-bold w-[50px] h-auto rounded-full flex items-center justify-center">
     <Image width="100" height="100" className="w-[100%] h-[100%]" src="https://framerusercontent.com/images/R6X5g2WhpBbhCOUbcP9Cml5Rvv8.png" alt="" />
    </div>
    <div className="online bg-green-400 rounded-[100%] h-[10px] w-[10px] absolute top-[9.9rem] border border-black left-[2.9rem]"></div>
    <div className="flex justify-between items-start w-full"> 
    <div className="flex flex-col"> 
      <span className="text-white text-[14px] ml-2 font-sans">Zapier</span>  
      <span className="text-[#ababab] text-[12px] ml-2 font-sans">Neu</span>
    </div>
    
    <span className="bg-[#043320] text-[#75dfa6] text-[12px] rounded-full leading-[5.95px] px-3 py-[8px] self-end mb-[8px]">2024</span> {/* Keep 2024 on the right */}
  </div>
  
  
  </div>
  <div className="flex items-start justify-between w-full"> {/* Changed to items-start */}
    <div className="text-white text-xl font-bold w-[50px] h-auto rounded-full flex items-center justify-center">
     <Image width="100" height="100" className="w-[100%] h-[100%]" src="https://framerusercontent.com/images/3PgDzunDOiDqk6KV5WLjy3Ojkk.png" alt="" />
    </div>
    <div className="online bg-green-400 rounded-[100%] h-[10px] w-[10px] absolute top-[13.6rem] border border-black left-[2.9rem]"></div>
    <div className="flex justify-between items-start w-full"> 
    <div className="flex flex-col"> 
      <span className="text-white text-[14px] ml-2 font-sans">Hubspot</span>  
      <span className="text-[#ababab] text-[12px] ml-2 font-sans">Neu</span>
    </div>
    
    <span className="bg-[#043320] text-[#75dfa6] text-[12px] rounded-full leading-[5.95px] px-3 py-[8px] self-end mb-[8px]">2024</span> {/* Keep 2024 on the right */}
  </div>
  
  
  </div>
  
  
  
    </div>
  
    <div className="absolute inset-0 flex flex-col items-center justify-end p-4 mt-[20px]">
    <h3 className="text-center text-[#f5f5f8] text-[24px] bg-[#0d0d0dcc] p-2 rounded-md ">
    Integrationen    </h3>
    <p className=" w-[20rem] text-center mt-2 text-[16px] text-[#ababab]">
    Verbinde EnergieLeads mit fast allen CRMs und Schnittstellen

</p>
   
  </div>
  
  
  </div>
  </div>
  
  
  
  
  
  
  
  
  
        {/* Column 4 Content */}
        <div className="flex">

        <div className="relative  border border-[rgba(255,255,255,0.1)] bg-[#0d0d0dcc] text-[#f5f5f8] p-0 rounded-[30px] w-[37rem] h-[21rem] lg:w-[37rem] lg:h-[24rem] backdrop-blur-[24px] mx-4 md:mx-0 overflow-hidden">
        <Image width="100" height="100" className="w-full h-full object-cover" src="/images/blur.png" alt="blur" />
  
    <div className="absolute inset-0 flex flex-col items-center justify-start p-4">
      <h3 className="text-center text-[#f5f5f8] text-[24px] bg-[#0d0d0dcc] p-2 rounded-md">
        Lade dein Team zu Slack ein
      </h3>
      <p className="w-[20rem] text-center mt-3 text-[16px] text-[#ababab]">
        In deinem persönlichen Slack Channel erhältst du 24/7 Support von uns.
      </p>
    </div>
  
    <div className="max mask7 mask1 w-[25rem] h-[10rem] lg:w-[25rem] lg:h-[14rem] ml-[6.5rem] lg:mt-10  absolute inset-x-0 bottom-0 mx-auto flex flex-col rounded-[12px] items-start justify-start border border-[rgba(255,255,255,0.1)] bg-[#14141480] p-4">
    <div className="text-white">Offene Einlaungen</div>
  
      <div className="flex items-start justify-between w-[23rem] mt-3 py-4 rounded-[12px] px-3 border border-[rgba(255,255,255,0.1)]">
    <div className="text-white text-xl font-bold w-[50px] h-auto rounded-full flex items-center justify-center">
      <Image width="100" height="100" className="w-[100%] h-[100%]" src="https://framerusercontent.com/images/5pqVHwaFYm2c08PvLLkPHKSo.png" alt="" />
    </div>
  
    <div className="flex justify-between items-start w-full">
      <div className="flex flex-col w-full">
        <span className="text-white text-[14px] ml-2 font-sans">Max A.</span>  
        <span className="text-[#ababab] text-[12px] self-end mt-[-1rem]">
        01 August 2024
      </span>
        <span className="text-[#ababab] text-[12px] ml-2 font-sans">max.a@energieleads.com</span>
        {/* Updated span width to w-full */}
        <span className="bg-[#333] h-[8px] w-full rounded-[4px] mt-[5px]"></span>
        <span className="bg-[#333] h-[8px] w-[17rem] rounded-[4px] mt-[9px]"></span>
  
      </div>
  
      
    </div>
  </div>
  
  <div className="flex items-start justify-between w-[23rem] mt-3 py-4 rounded-[12px] px-3 border border-[rgba(255,255,255,0.1)]">
    <div className="text-white text-xl font-bold w-[50px] h-auto rounded-full flex items-center justify-center">
      <Image width="100" height="100" className="w-[100%] h-[100%]" src="https://framerusercontent.com/images/5pqVHwaFYm2c08PvLLkPHKSo.png" alt="" />
    </div>
  
    <div className="flex justify-between items-start w-full">
      <div className="flex flex-col w-full">
        <span className="text-white text-[14px] ml-2 font-sans">Max A.</span>  
        <span className="text-[#ababab] text-[12px] self-end mt-[-1rem]">
        01 August 2024
      </span>
        <span className="text-[#ababab] text-[12px] ml-2 font-sans">max.a@energieleads.com</span>
        {/* Updated span width to w-full */}
        <span className="bg-[#333] h-[8px] w-full rounded-[4px] mt-[5px]"></span>
        <span className="bg-[#333] h-[8px] w-[17rem] rounded-[4px] mt-[9px]"></span>
  
      </div>
  
      
    </div>
  </div>
  
    </div>
  </div>
  </div>
  
  
  
  
  
  
  
  </div>
  </div>

<div className="leads mt-[7rem] h-auto flex flex-col items-center"> 
    <div className="text-[#f5f5f8] border border-[rgba(255,255,255,0.1)] text-[14px] bg-[#0d0d0d66] px-[12px] py-[5px] rounded-[60px] shadow-custom mb-4"> 
    Customer Stories

</div>
    
    <div className="flex items-center text-[36px] lg:text-[52px] text-[#f5f5f8] font-[500] tracking-[-0.04em] leading-[1.1em]"> 
      <h1 className="text-center">100% 
      </h1> 
      <span className="text-center  font-serif italic tracking-[0em] font-[400] ml-[7px]">
      Vertrauen.
      </span>
    </div>
  
    <div className="text-[16px] lg:text-[18px] text-[#ababab] mt-[2rem] text-center">
    Hunderte Solaranbieter vertrauen bereits 

</div>
    <div className="text-[16px] lg:text-[18px] text-[#ababab] text-center">
    Energieleads!
    </div>
    </div>


    <div className="mt-[4rem]">
  <div className="block md:hidden">
    <StoriesMobile />
  </div>

  <div className="hidden md:block">
    <Stories />
  </div>
</div>




<div id="integrations" className="flex flex-col lg:flex-row items-start justify-center w-full lg:w-[80rem] mx-auto px-4">


<div className="integrations mt-[3rem] lg:mt-[7rem] h-auto flex flex-col items-start w-full lg:w-[50%]">
          <div className="text-[#f5f5f8] border border-[rgba(255,255,255,0.1)] text-[14px] bg-[#0d0d0d66] px-[12px] py-[5px] rounded-[60px] shadow-custom mb-4">
            Integrations
          </div>
          <div className="flex lg:flex-row items-center text-[32px] lg:text-[52px] text-[#f5f5f8] font-[500] tracking-[-0.04em] leading-[1.1em]">
            <h1 className="text-left">Alle Art von</h1>
            <span className="text-center font-serif italic tracking-[0em] ml-3 font-[400] lg:ml-[10px]">
              Integrationen.
            </span>
          </div>
          <div className="text-left text-[16px] lg:text-[18px] text-[#ababab] mt-[1.5rem] lg:mt-[2rem] w-full lg:w-[30rem]">
            Mit Energieleads kannst du alle Schnittstellen und Integrationen verbinden. Unser Team hilft dir 24/7 den besten Weg zu finden, wie du deine Leads erhältst!
          </div>
          <button className="mt-[1.5rem] px-4 py-2 bg-[#fbcf44] text-white rounded-[12px] hover:ring-4 hover:ring-[rgba(102,72,250,0.5)] transition duration-300 ease-in-out">
            Demo Anfragen
          </button>
        </div>

        <div className="relative w-full lg:w-[33rem] h-[20rem] mt-[3rem] lg:mt-[7rem] bg-[#14141480] rounded-[15px] text-white border border-[rgba(255,255,255,0.1)]">
              <Image className="w-full h-full object-cover rounded-[15px]" src="/images/blur.png" alt="blur" width="100" height="100" />

              <div className="mask1 absolute lg:ml-[4rem] inset-0 mt-[3rem] gap-2 flex flex-col mx-auto items-start py-4 justify-start px-5 text-[16px] w-[19.9rem] h-[15.5rem] lg:w-[25rem] lg:h-[15.rem] bg-[#14141480] border-t border-r border-l border-[rgba(255,255,255,0.1)] rounded-t-[15px] opacity-80 font-[500] tracking-[-0.02em] leading-[18px]">
                  <span>Integrations</span>
                  <div className="flex items-start justify-between w-[23rem] mt-2 py-4 rounded-[12px] px-3">
                      <div className="flex items-center justify-center w-[25px] mt-[0.5rem] h-[20px] bg-[#fbcf44] rounded-[6px] mr-2">
                      <span className="text-[16px] !text-white">
                                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                width="20"
                                height="16"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="17" 
                                className="text-[#fff]"
                            >
                                <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                            </svg>

                      </span>
                      </div>

                      <div className="text-white text-xl font-bold w-[50px] h-auto rounded-full flex items-center justify-center">
                          <Image width="100" height="100" className="w-[100%] h-[100%] rounded-full" src="https://framerusercontent.com/images/pFRxDlwIVvMxx4FoShIvjaWQQw.png" alt="aa" />
                      </div>

                      <div className="flex justify-between items-start w-full">
                          <div className="flex flex-col w-full">
                              <span className="text-white text-[14px] ml-2 font-sans">Zapier</span>
                              <span className="bg-[#333] h-[8px] ml-2 w-[10rem] rounded-[4px] mt-[5px]"></span>
                              <span className="bg-[#333] h-[8px] ml-2 w-[15rem] rounded-[4px] mt-[6px]"></span>
                          </div>
                      </div>
                  </div>

                  <div className="flex items-start justify-between w-[23rem] rounded-[12px] px-3">
                      <div className="flex items-center justify-center w-[25px] mt-[0.5rem] h-[20px] bg-[#fbcf44] rounded-[6px] mr-2">
                      <span className="text-[16px] !text-white">  <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                width="20"
                                height="16"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="17" 
                                className="text-[#fff]"
                            >
                                <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                            </svg></span>
                      </div>

                      <div className="text-white text-xl font-bold w-[50px] h-auto rounded-full flex items-center justify-center">
                          <Image width="100" height="100" className="w-[100%] h-[100%] rounded-full" src="https://framerusercontent.com/images/WqM76vNUZ8abt4PHVPdN8kt1iUg.png" alt="" />
                      </div>

                      <div className="flex justify-between items-start w-full">
                          <div className="flex flex-col w-full">
                              <span className="text-white text-[14px] ml-2 font-sans">Pipedrive</span>
                              <span className="bg-[#333] h-[8px] ml-2 w-[15rem] rounded-[4px] mt-[6px]"></span>
                              <span className="bg-[#333] h-[8px] ml-2 w-[10rem] rounded-[4px] mt-[5px]"></span>

                          </div>
                      </div>
                  </div>
                  <div className="flex items-start justify-between w-[23rem] py-4 rounded-[12px] px-3">
                      <div className="flex items-center justify-center w-[25px] mt-[0.5rem] h-[20px] bg-[#fbcf44] rounded-[6px] mr-2">
                      <span className="text-[16px] !text-white">  <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                width="20"
                                height="16"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="17" 
                                className="text-[#fff]"
                            >
                                <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                            </svg></span>
                      </div>

                      <div className="text-white text-xl font-bold w-[50px] h-auto rounded-full flex items-center justify-center">
                          <Image width="100" height="100" className="w-[100%] h-[100%] rounded-full" src="https://framerusercontent.com/images/9Bg9KcVkixDWxkVGmePXYCB4Sbg.png?scale-down-to=512" alt="" />
                      </div>

                      <div className="flex justify-between items-start w-full">
                          <div className="flex flex-col w-full">
                              <span className="text-white text-[14px] ml-2 font-sans">Mailchimp</span>
                              <span className="bg-[#333] h-[8px] ml-2 w-[10rem] rounded-[4px] mt-[5px]"></span>
                              <span className="bg-[#333] h-[8px] ml-2 w-[15rem] rounded-[4px] mt-[6px]"></span>
                          </div>
                      </div>
                  </div>


              </div>


          </div>


      </div>
      <div className="flex flex-col lg:flex-row items-start justify-between w-full lg:w-[73rem] mx-auto px-4">
      <div className="block md:hidden">
      <div className="integrations mt-[3rem] lg:mt-[7rem] h-auto flex flex-col items-start w-full lg:w-[45%]">
              <div className="text-[#f5f5f8] border border-[rgba(255,255,255,0.1)] text-[14px] bg-[#0d0d0d66] px-[12px] py-[5px] rounded-[60px] shadow-custom mb-4">
                      Real-Time Data
                  </div>
                  <div className="flex lg:flex-row items-center text-[32px] lg:text-[52px] text-[#f5f5f8] font-[500] tracking-[-0.04em] leading-[1.1em]">
                  <h1 className="text-center">Date in </h1>
                      <span className="text-center font-serif italic tracking-[0em] font-[400] ml-[10px]">Echtzeit..</span>
                  </div>
                  <div className="text-left text-[16px] lg:text-[18px] text-[#ababab] mt-[1.5rem] lg:mt-[2rem] w-full lg:w-[30rem]">
            Mit Energieleads kannst du alle Schnittstellen und Integrationen verbinden. Unser Team hilft dir 24/7 den besten Weg zu finden, wie du deine Leads erhältst!
          </div>
                  <button className="mt-[1.5rem] px-5 py-2 bg-[#fbcf44] text-white rounded-[12px] hover:ring-4 hover:ring-[rgba(102,72,250,0.5)] transition duration-300 ease-in-out sm:px-4 sm:py-2">
                      Unverbindlich anfragen
                  </button>
              </div>
              </div>
              {/* max container */}
              <div className="relative w-full lg:w-[33rem] h-[20rem] mt-[3rem] lg:mt-[7rem] bg-[#14141480] rounded-[15px] text-white border border-[rgba(255,255,255,0.1)]">
              {/* Background image */}
                  <Image width="100" height="100" className="w-full h-full object-cover rounded-[15px]" src="/images/blur.png" alt="blur" />

                  <div className="pozicioni mask1 absolute lg:ml-[4rem] inset-0 mt-[3rem] gap-2 flex flex-col mx-auto items-start py-4 justify-start px-5 text-[16px] w-[19.9rem] h-[15.5rem] lg:w-[25rem] lg:h-[15.rem] bg-[#14141480] border-t border-r border-l border-[rgba(255,255,255,0.1)] rounded-t-[15px] opacity-80 font-[500] tracking-[-0.02em] leading-[18px]">
                  <span>Live Daten</span>

                      <div className="bg-[#14141480] mt-[1rem] w-full h-[6rem] rounded-lg px-4 py-5 border border-[rgba(255,255,255,0.1)]">
                          <div className="flex justify-between items-start text-[12px] text-[#000]">
                             
                         <span className='text-[#f5f5f8] font-[500] mt-[-7px] tracking-[-0.02em]'>Leads erhalten (24 Stunden)</span>
                         <div className="hidden md:block">

                              <span className='bg-[#19ff7533] text-[#1aff75] text-[10px] rounded-[30px] leading-[5.95px] px-2 py-[5px] text-center'> Vor 1 Minute</span>              
                              
                                        </div>

                                          </div>
                          
                          
                          <h3 className="text-[32px] text-[#f5f5f8] text-left flex items-center pt-4">53</h3>
                      </div>

                      <div className="bg-[#14141480] w-full h-[6rem] rounded-lg px-4 py-5 border-t border-r border-l border-[rgba(255,255,255,0.1)]">
                          <div className="flex justify-between items-start text-[12px] text-[#000]">
                              <span className='text-[#f5f5f8] font-[500] mt-[-7px] tracking-[-0.02em]'>Leads erhalten (7 Tage)</span>
                              <div className="hidden md:block">

                    <span className='bg-[#19ff7533] text-[#1aff75] text-[10px] rounded-[30px] leading-[5.95px] px-2 py-[5px] text-center'> Vor 1 Minute</span>              

                             </div>                          
                             </div>
                          <h3 className="text-[32px] text-[#f5f5f8] text-left flex items-center pt-4">403</h3>
                      </div>


                  </div>
              </div>

              {/* integrations container */}
              <div className="integrations mt-[3rem] lg:mt-[7rem] h-auto flex-col items-start w-full lg:w-[45%] hidden lg:flex">
  <div className="text-[#f5f5f8] border border-[rgba(255,255,255,0.1)] text-[14px] bg-[#0d0d0d66] px-[12px] py-[5px] rounded-[60px] shadow-custom mb-4">
    Real-Time Data
  </div>
  <div className="flex lg:flex-row items-center text-[32px] lg:text-[52px] text-[#f5f5f8] font-[500] tracking-[-0.04em] leading-[1.1em]">
    <h1 className="text-center">Date in</h1>
    <span className="text-center font-serif italic tracking-[0em] font-[400] ml-[10px]">Echtzeit.</span>
  </div>
  <div className="text-left text-[16px] lg:text-[18px] text-[#ababab] mt-[1.5rem] lg:mt-[2rem] w-full lg:w-[30rem]">
    Mit Energieleads kannst du alle Schnittstellen und Integrationen verbinden. Unser Team hilft dir 24/7 den besten Weg zu finden, wie du deine Leads erhältst!
  </div>
  <button className="mt-[1.5rem] px-5 py-2 bg-[#fbcf44] text-white rounded-[12px] hover:ring-4 hover:ring-[rgba(102,72,250,0.5)] transition duration-300 ease-in-out sm:px-4 sm:py-2">
    Unverbindlich anfragen
  </button>
</div>


              </div>
          <div className="flex flex-col lg:flex-row items-start justify-between w-full lg:w-[73rem] mx-auto px-4">

          <div className="integrations mt-[3rem] lg:mt-[7rem] h-auto flex flex-col items-start w-full lg:w-[45%]">
          <div className="text-[#f5f5f8] border border-[rgba(255,255,255,0.1)] text-[14px] bg-[#0d0d0d66] px-[12px] py-[5px] rounded-[60px] shadow-custom mb-4">
                      Umsatz
                  </div>
            
                  <div className="flex flex-col items-start text-[36px] lg:text-[52px] text-[#f5f5f8] font-[500] tracking-[-0.04em] leading-[1.1em]"> 
      <h1 className="text-center">Ein Leadanbieter      </h1> 
      <span className="text-start font-serif italic tracking-[0em] font-[400]">8-Stellige Umsätze.      </span>
    </div>


                  <div className="text-left text-[16px] lg:text-[18px] text-[#ababab] mt-[1.5rem] lg:mt-[2rem] w-full lg:w-[30rem]">
            Mit Energieleads kannst du alle Schnittstellen und Integrationen verbinden. Unser Team hilft dir 24/7 den besten Weg zu finden, wie du deine Leads erhältst!
          </div>
                  <button className="mt-[1.5rem] px-5 py-2 bg-[#fbcf44] text-white rounded-[12px] hover:ring-4 hover:ring-[rgba(102,72,250,0.5)] transition duration-300 ease-in-out sm:px-4 sm:py-2">
                      Demo Anfragen
                  </button>
              </div>

              <div className=" relative w-full lg:w-[33rem] h-[20rem] mt-[3rem] lg:mt-[7rem] bg-[#14141480] rounded-[15px] text-white border border-[rgba(255,255,255,0.1)]">
              <Image width="100" height="100" className="w-full h-full object-cover rounded-[15px]" src="/images/blur.png" alt="blur" />

                  <div className="mask9 absolute inset-0 mt-[3rem] gap-2 flex rounded-[15px] flex-col mx-auto items-start justify-start text-[16px] w-[25rem] h-[16.8rem] bg-[#14141480] border-t border-r border-l border-[rgba(255,255,255,0.1)] rounded-t-[15px] opacity-80 font-[500] tracking-[-0.02em] leading-[18px]">
                      <Image width="500" height="100" className="w-full h-full rounded-[15px]" src="https://framerusercontent.com/images/aaTHWIWmw3TahVa6wrBAorADMs.jpg" alt="" />





                  </div>


              </div>


          </div>


          <div className="features mt-[5rem] h-auto flex flex-col items-center"> 
    <div className="text-[#f5f5f8] border border-[rgba(255,255,255,0.1)] text-[14px] bg-[#0d0d0d66] px-[12px] py-[5px] rounded-[60px] shadow-custom mb-4"> 
      Features
    </div>
    
    <div className="flex flex-col items-center text-[36px] lg:text-[52px] text-[#f5f5f8] font-[500] tracking-[-0.04em] leading-[1.1em]"> 
      <h1 className="text-center">Features, die den</h1> 
      <span className="text-center font-serif italic tracking-[0em] font-[400]">Unterschied ausmachen.</span>
    </div>
  
    <div className="text-[16px] lg:text-[18px] text-[#ababab] mt-[2rem] text-center">
      Wir haben Funktionen entwickelt, die Ihrem 
    </div>
    
    <div className="text-[16px] lg:text-[18px] text-[#ababab] text-center">
      Unternehmen tatsächlich einen Mehrwert bieten.   
    </div>
  
    {/* Seksioni i kolonave */}
    <div className="kolonat grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-[3rem] w-full max-w-[72rem] px-4">
    <div className="col-span-1 w-full sm:w-[23rem] h-auto bg-[#14141480] rounded-[15px] text-white border border-[rgba(255,255,255,0.1)] p-5 flex flex-col items-start gap-[20px]">
    <svg className="w-[33px] h-[33px] mb-2 ml-1" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <path d="M192,24H64A16,16,0,0,0,48,40V216a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V40A16,16,0,0,0,192,24ZM128,192a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm32-80H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"></path>
    </svg>
    <h3 className="font-[500] text-left text-[20px]">Echtzeit</h3>
    <p className="text-left font-[500] tracking-[-0.02em] text-[16px] text-[#ababab] leading-[1.4em]">Wir übertragen die Leads direkt live in euer System.</p>
  </div>
  
    
  <div className="col-span-1 w-full sm:w-[23rem] h-auto bg-[#14141480] rounded-[15px] text-white border border-[rgba(255,255,255,0.1)] p-5 flex flex-col items-start gap-[20px]">
  <svg className="w-[33px] h-[33px] mb-2 ml-1" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a88,88,0,0,1,71.87,37.27L128,118.76Zm0,176a88,88,0,0,1-71.87-37.27L207.89,91.12A88,88,0,0,1,128,216Z"></path>
    </svg>
    <h3 className="font-[500] text-left text-[20px]">Flexibel & Skalierbar  </h3>
    <p className="text-left font-[500] tracking-[-0.02em] text-[16px] text-[#ababab] leading-[1.4em]">Egal ob 10 oder 5000 Leads, bei uns kannst du alles anfragen.
  
  
    </p>
  </div>
    
  <div className="col-span-1 w-full sm:w-[23rem] h-auto bg-[#14141480] rounded-[15px] text-white border border-[rgba(255,255,255,0.1)] p-5 flex flex-col items-start gap-[20px]">
  <svg className="w-[33px] h-[33px] mb-2 ml-1" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM136,176H120a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm64,0H168a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16ZM32,88V64H224V88Z"></path>
    </svg>
    <h3 className="font-[500] text-left text-[20px]">Einmalig/Monatlich
    </h3>
    <p className="text-left font-[500] tracking-[-0.02em] text-[16px] text-[#ababab] leading-[1.4em]">Du möchtest Leads auf monatlicher Basis? Kein Problem!
  
  </p>
  </div>
  
  <div className="col-span-1 w-full sm:w-[23rem] h-auto bg-[#14141480] rounded-[15px] text-white border border-[rgba(255,255,255,0.1)] p-5 flex flex-col items-start gap-[20px]">
  <svg className="w-[33px] h-[33px] mb-2 ml-1" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <path d="M239.43,133l-32-80A8,8,0,0,0,200,48a8.27,8.27,0,0,0-1.73.21L136,62V40a8,8,0,0,0-16,0V65.58L54.27,80.21A8,8,0,0,0,48.57,85l-32,80a7.92,7.92,0,0,0-.57,3c0,23.31,24.54,32,40,32s40-8.69,40-32a7.92,7.92,0,0,0-.57-3L66.92,93.77,120,82V208H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16H136V78.42L187,67.1,160.57,133a7.92,7.92,0,0,0-.57,3c0,23.31,24.54,32,40,32s40-8.69,40-32A7.92,7.92,0,0,0,239.43,133Zm-160,35H32.62L56,109.54Zm97.24-32L200,77.54,223.38,136Z"></path>
    </svg>
    <h3 className="font-[500] text-left text-[20px]">DSGVO Konform
    </h3>
    <p className="text-left font-[500] tracking-[-0.02em] text-[16px] text-[#ababab] leading-[1.4em]">Dank anwaltlich geprüfter Funnel sind alle Leads DSGVO konform.
  
  </p>
  </div>
    
  <div className="col-span-1 w-full sm:w-[23rem] h-auto bg-[#14141480] rounded-[15px] text-white border border-[rgba(255,255,255,0.1)] p-5 flex flex-col items-start gap-[20px]">
  <svg className="w-[33px] h-[33px] mb-2 ml-1" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM68,96A12,12,0,1,1,80,84,12,12,0,0,1,68,96Zm40,0a12,12,0,1,1,12-12A12,12,0,0,1,108,96Z"></path>
    </svg>
    <h3 className="font-[500] text-left text-[20px]">CRM Integration
    </h3>
    <p className="text-left font-[500] tracking-[-0.02em] text-[16px] text-[#ababab] leading-[1.4em]">EnergieLeads kann die Leads an jedes CRM schicken.
  
  </p>
  </div>
    
  <div className="col-span-1 w-full sm:w-[23rem] h-auto bg-[#14141480] rounded-[15px] text-white border border-[rgba(255,255,255,0.1)] p-5 flex flex-col items-start gap-[20px]">
  <svg className="w-[33px] h-[33px] mb-2 ml-1" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <path d="M240,128a15.79,15.79,0,0,1-10.5,15l-63.44,23.07L143,229.5a16,16,0,0,1-30,0L89.94,166.06,26.5,143a16,16,0,0,1,0-30L89.94,89.94,113,26.5a16,16,0,0,1,30,0l23.07,63.44L229.5,113A15.79,15.79,0,0,1,240,128Z"></path>
    </svg>
    <h3 className="font-[500] text-left text-[20px]">Beste Qualität
    </h3>
    <p className="text-left font-[500] tracking-[-0.02em] text-[16px] text-[#ababab] leading-[1.4em]">Bei Energieleads steht Qualität im Mittelpunkt! 
  
  </p>
  </div>
  </div>
  
  
  </div>

  <div className="leads mt-[7rem] h-auto flex flex-col items-center">
      <div className="text-[#f5f5f8] border border-[rgba(255,255,255,0.1)] text-[14px] bg-[#0d0d0d66] px-[12px] py-[5px] rounded-[60px] shadow-custom mb-4">
        Preis
      </div>

      <div className="flex items-center text-[36px] lg:text-[52px] text-[#f5f5f8] font-[500] tracking-[-0.04em] leading-[1.1em]">
        <h1 className="text-center">Unsere</h1>
        <span className="text-center font-serif italic tracking-[0em] font-[400] ml-[10px]">Preise.</span>
      </div>

      <div className="text-[16px] lg:text-[18px] text-[#ababab] mt-[2rem] text-center">
        Unsere Preise unterliegen dem
      </div>
      <div className="text-[16px] lg:text-[18px] text-[#ababab] text-center">
        durchschnittlichen Marktpreis!
      </div>
    </div>

    <div id="preise" className="flex justify-center items-center space-x-3 bg-black p-4">
      <button className="py-2 px-2 text-white rounded-full text-[18px]">Einmalig</button>

      <div className="relative">
        <input type="checkbox" id="toggle" className="sr-only" />
        <label
          htmlFor="toggle"
          id="label"
          onClick={handleClick}
          className={`block w-[4rem] h-7 ${isClicked ? 'bg-[#fcbf44]' : 'bg-[#ffffff1a]'} border border-[rgba(255,255,255,0.1)] rounded-full cursor-pointer transition-colors`}
        ></label>
        <div
          className={`click dot absolute top-[0.1rem] bg-white w-6 h-6 rounded-full transition-transform cursor-pointer ${isClicked ? 'translate-x-9' : 'translate-x-0'}`}
          onClick={handleClick}
        ></div>
      </div>

      <button className="py-2 px-3 text-[18px] text-white rounded-full shadow-lg">Monatlich</button>
      <span className="text-white text-[12px] px-2 py-2 rounded-[20px] border border-[rgba(255,255,255,0.1)]">Spare 15%</span>
    </div>

    <div className="flex flex-col lg:flex-row justify-center px-4 space-x-0 lg:space-x-6 mt-8">
      {/* Kolona e majtë */}
      <div className="bg-[#0d0d0dcc] rounded-[24px] border border-[rgba(255,255,255,0.1)] p-8 text-white max-w-md shadow-lg mb-4 lg:mb-0">
        <h2 className="text-[18px] font-[500] mb-4">Multi Leads</h2>
        <p className="font-[500]">
          <span className="text-[48px]">{multiLeadPrice}€</span>
          <span className="text-[24px]">/Lead</span>
        </p>
        <p className="text-[18px] mt-2 text-[#ababab]">
          Unser Service bietet Ihnen Multi Leads im Bereich Photovoltaik-Anlagen im DACH Raum.
        </p>
        <button className="mt-[1.5rem] w-full px-5 py-2 bg-[#fbcf44] text-white rounded-[12px] hover:ring-4 hover:ring-[rgba(102,72,250,0.5)] transition duration-300 ease-in-out">
          Jetzt anfragen
        </button>
        <p className="mt-3 text-[14px] text-center text-[#ababab]">
          Wir melden uns in weniger als 12h!
        </p>
        <ul className="mt-6 space-y-2 text-[16px]">
          <div className="mb-3 font-semibold">Übersicht:</div>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="18" height="18" fill="currentColor" className="text-[#fff]">
              <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
            </svg>
            <span className="ml-2">DACH weite Leads</span>
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="18" height="18" fill="currentColor" className="text-[#fff]">
              <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
            </svg>
            <span className="ml-2">Regionale Leads (Preise können abweichen)</span>
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="18" height="18" fill="currentColor" className="text-[#fff]">
              <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
            </svg>
            <span className="ml-2">Beschränkt auf 1x Mehrverkauf</span>
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="18" height="18" fill="currentColor" className="text-[#fff]">
              <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
            </svg>
            <span className="ml-2">DSGVO Konform</span>
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="18" height="18" fill="currentColor" className="text-[#fff]">
              <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
            </svg>
            <span className="ml-2">Live Unterstützung</span>
          </li>
        </ul>
      </div>
      {/* Kolona e Djathte */}

              <div className="bg-[#0d0d0dcc] rounded-[24px] border border-[rgba(255,255,255,0.1)] text-white max-w-md shadow-lg relative backdrop-blur-[24px]">
                  <Image width="100" height="100"
                      className="w-full h-[12.56rem] z-[1] object-cover rounded-[24px] blur-[30px] backdrop-opacity-50 bg-[#0d0d0d]/50"
                      src="/images/blur1.png"
                      alt="Exklusiv Lead" />


                  <div className="absolute top-[2rem] left-[1.8rem]">
                      <h2 className="text-[18px] font-[500] mb-4">Exkluziv Leads</h2>
                      <p className="font-[500]">
                      <span className="text-[48px]">{exklusivLeadPrice}€</span>
                      <span className="text-[24px]">/Lead</span>
                      </p>
                      <p className="text-[18px] mt-2 text-[#ababab]">
                          Unser Service bietet Ihnen Multi Leads im Bere Photovoltaik-Anlagen im DACH Raum.

                      </p>
                  </div>

                  <button className="mt-[2rem] z-[2] w-[22rem] px-2 py-2 lg:w-[25rem] bg-[#fbcf44] ml-6 text-white rounded-[12px] hover:ring-4 hover:ring-[rgba(102,72,250,0.5)] transition duration-300 ease-in-out sm:px-4 sm:py-2">
                      Jetzt anfragen
                  </button>
                  <p className="mt-3 text-[14px] text-center text-[#ababab]">
                      Wir melden uns in weniger als 12h!
                  </p>
                  <ul className="mt-6 space-y-2 text-[16px] px-8">
                      <div className="mb-3 font-semibold">
                          Übersicht:
                      </div>

                      <li className="flex items-center">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              width="18"
                              height="18"
                              fill="currentColor"
                              className="text-[#fff]" 
                          >
                              <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                          </svg>
                          <span className="ml-2">DACH weite Leads</span>
                      </li>

                      <li className="flex items-center">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              width="18"
                              height="18"
                              fill="currentColor"
                              className="text-[#fff]"
                          >
                              <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                          </svg>
                          <span className="ml-2">Regionale Leads (Preise können abweichen)</span>
                      </li>

                      <li className="flex items-center">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              width="18"
                              height="18"
                              fill="currentColor"
                              className="text-[#fff]"
                          >
                              <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                          </svg>
                          <span className="ml-2">Beschränkt auf 1x Mehrverkauf</span>
                      </li>

                      <li className="flex items-center">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              width="18"
                              height="18"
                              fill="currentColor"
                              className="text-[#fff]"
                          >
                              <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                          </svg>
                          <span className="ml-2">DSGVO Konform</span>
                      </li>

                      <li className="flex items-center ">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              width="18"
                              height="18"
                              fill="currentColor"
                              className="text-[#fff] mb-3"
                          >
                              <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                          </svg>
                          <span className="ml-2 mb-3 ">CRM Integration</span>
                      </li>
                  </ul>
              </div>

          </div>


<div className="flex justify-center mt-[4rem]">
  <div className="prov-cont w-[55rem]">
    <div className="providers flex justify-center flex-col items-center w-[90%] mx-auto"> 
      <p className='text-[#ababab] text-center text-[12px]'>Solaranbieter, die uns bereits vertrauen:</p> 
      <ScrollingProviders />
    </div>
  </div>
</div>



<div id="form" className="form mt-[4rem] h-auto flex flex-col items-center">
      <div className="text-[#f5f5f8] border border-[rgba(255,255,255,0.1)] text-[14px] bg-[#0d0d0d66] px-[12px] py-[5px] rounded-[60px] shadow-custom mb-4">
        Preis
      </div>

      <div className="flex items-center text-[52px] text-[#f5f5f8] font-[500] tracking-[-0.04em] leading-[1.1em]">
        <h1 className="text-center">Jetzt</h1>
        <span className="text-center font-serif italic tracking-[0em] font-[400] ml-[12px]">
          Anfragen.
        </span>
      </div>

      <div className="text-[18px] text-[#ababab] mt-[2rem] text-center">
        Hier Kontakt mit uns aufnehmen und
      </div>
      <div className="text-[18px] text-[#ababab] text-center">
        alle Infos zur Partnerschaft erhalten
      </div>

      <form className="form mt-6 w-full max-w-[23rem] lg:max-w-[44rem] px-4">
        <div className="mb-4 form">
          <label className="block text-[#888888] text-[12px] mb-2" htmlFor="company">
            Firma
          </label>
          <input
            className="w-full bg-[rgba(227,227,227,.15)] rounded-[10px] text-[14px] text-[#fff] border border-[rgba(136,136,136,0.1)] focus:border-[#0099ff] focus:bg-[rgba(227,227,227,.15)] px-3 py-2"
            type="text"
            id="company"
            placeholder="Firma"
          />
        </div>

        <div className="mb-4">
          <label className="block text-[#888888] text-[12px] mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full bg-[rgba(227,227,227,.15)] rounded-[10px] text-[14px] text-[#888888] border border-[rgba(136,136,136,0.1)] focus:border-[#0099ff] focus:bg-[rgba(227,227,227,.15)] px-3 py-2"
            type="text"
            id="name"
            placeholder="Vor- und Nachname"
          />
        </div>

        <div className="mb-4">
          <label className="block text-[#888888] text-[12px] mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full bg-[rgba(227,227,227,.15)] rounded-[10px] text-[14px] text-[#888888] border border-[rgba(136,136,136,0.1)] focus:border-[#0099ff] focus:bg-[rgba(227,227,227,.15)] px-3 py-2"
            type="email"
            id="email"
            placeholder="Email Adresse"
          />
        </div>

        <div className="mb-4">
          <label className="block text-[#888888] text-[12px] mb-2" htmlFor="phone">
            Telefonnummer
          </label>
          <input
            className="w-full bg-[rgba(227,227,227,.15)] rounded-[10px] text-[14px] text-[#888888] border border-[rgba(136,136,136,0.1)] focus:border-[#0099ff] focus:bg-[rgba(227,227,227,.15)] px-3 py-2"
            type="tel"
            id="phone"
            placeholder="Telefonnummer"
          />
        </div>

        <div className="mb-4">
          <label className="block text-[#888888] text-[12px] mb-2" htmlFor="region">
            Region
          </label>
          <select
            className="w-full bg-[rgba(227,227,227,.15)] rounded-[10px] text-[14px] text-[#888888] border border-[rgba(136,136,136,0.1)] focus:border-[#0099ff] focus:bg-[rgba(227,227,227,.15)] px-3 py-2"
            id="region"
          >
            <option value="" disabled>Auswählen..</option>
            <option value="region1">Deutschland</option>
            <option value="region2">Österreich</option>
            <option value="region3">Schweiz</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-[#888888] text-[12px] mb-2" htmlFor="leadType">
            Art der Leads
          </label>
          <select
            className="w-full bg-[rgba(227,227,227,.15)] rounded-[10px] text-[14px] text-[#888888] border border-[rgba(136,136,136,0.1)] focus:border-[#0099ff] focus:bg-[rgba(227,227,227,.15)] px-3 py-2"
            id="leadType"
          >
            <option value="" disabled>Auswählen..</option>
            <option value="multi">Multi Leads</option>
            <option value="exklusiv">Exkluziv Leads</option>
          </select>
        </div>

        <button className="w-full mt-[0.3rem] px-5 py-2 bg-[#fbcf44] text-white rounded-[12px] hover:bg-[rgba(51,51,51,0.85)] transition duration-300 ease-in-out sm:px-4 sm:py-2">
          Abschicken
        </button>
      </form>
    </div>



    <div className="form mt-[7rem] h-auto flex flex-col items-center px-4">
      <div className="text-[#f5f5f8] border border-[rgba(255,255,255,0.1)] text-[14px] bg-[#0d0d0d66] px-[12px] py-[5px] rounded-[60px] shadow-custom mb-4">
        FAQs
      </div>

      <div className="flex items-center text-[40px] md:text-[52px] text-[#f5f5f8] font-[500] tracking-[-0.04em] leading-[1.1em]">
        <h1 className="text-center">Häufig gestellte</h1>
        <span className="text-center font-serif italic tracking-[0em] font-[400] ml-[12px]">
          Fragen.
        </span>
      </div>

      <div className="text-[16px] md:text-[18px] w-full max-w-[29rem] text-[#ababab] mt-[2rem] text-center">
        Für Ihre offenen Fragen steht Ihnen unser Team jederzeit zur Verfügung. Die häufigsten Fragen und Antworten haben wir hier schon einmal zusammengefasst:
      </div>

      <div className="mt-7 w-full max-w-[50rem]">
        <div className="columns-click w-full lg:w-[50rem] px-1">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-[#0d0d0d] mb-4 p-4 rounded-[15px] shadow-lg cursor-pointer border border-[rgba(255,255,255,0.1)]" 
              onClick={() => toggleAccordion(index)}  
            >
              <div className="flex justify-between items-center relative">
                <h2 className="text-sm lg:text-[15px] tracking-[.18px] p-1 text-[#fcfcfa] font-[600]">
                  {faq.question}
                </h2>
                <div className="container">
                  <input className="border border-[rgba(255,255,255,0.1)]" type="checkbox" checked={activeIndex === index} readOnly />
                  <div className="line"></div>
                  <div className={`line line-indicator ${activeIndex === index ? 'active' : ''}`}></div>
                </div>
              </div>

              {activeIndex === index && (
                <div className="mt-2 text-[#ababab] text-[16px] lg:text-[16px] p-2 leading-[160%]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

<div className="footer-overfloww mt-[3rem]">
  <div className="footer-wrapper">
    <div className="footer-container flex flex-col items-center justify-center text-center p-5">
      <div className="flex justify-center">
        <Image
          src="https://framerusercontent.com/images/6wm2hJw0JcUgHfEryGifeXzTQ.png"
          alt="Logo"
          className="w-[150px] h-auto"
          width="300"
          height="200"
          
        />
      </div>

      <div className="mt-[2rem] flex items-center text-[36px] md:text-[72px] text-[#f5f5f8] font-[500] tracking-[-0.04em] leading-[1.1em]">
        <h1 className="text-center">Jetzt Leads</h1>
        <span className="text-center font-serif italic tracking-[0em] font-[400] ml-2 md:ml-[12px]">
          anfragen.
        </span>
      </div>

      <h2 className="text-lg mt-5 text-center">
        Worauf wartest du? <br /> Jetzt mit Energieleads skalieren!
      </h2>

      <button className="test-button mt-6 px-5 py-2 bg-[#fbcf44] text-white rounded-lg hover:bg-[#e0b234] transition duration-300">
        Jetzt durchstarten
      </button>

      <div className="legal lg:mr-[30rem] w-full max-w-[50rem] px-4 text-[white] flex flex-col md:flex-row justify-between items-center p-4">
        <div className="left text-[14px] text-center md:text-left">
          ©2024 EnergieLeads
        </div>
        <div className="center flex justify-center space-x-4 text-[14px] text-[#ababab] mt-2 md:mt-0">
          <span>Impressum</span>
          <span>AGB & Widerruf</span>
          <span>Datenschutz</span>
        </div>
      </div>
    </div>

    <div className="video-backgrounde">
      <video className="backgrounde-video" loop autoPlay muted playsInline>
        <source src="./videos/Flowing+Neon+Curve+Lines_1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</div>


    </main>
  );
}
