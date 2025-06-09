import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Hero.jsx'
import LogoCloud from './logocloud.jsx'
import Feature from './feature.jsx'
import Cta from './Cta.jsx'
import Faqs1 from './faq.jsx';
import Footer from './Footer.jsx'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero/>
    <LogoCloud />
    <Feature />
    <Cta />
    <Faqs1 />
    <Footer />
  </StrictMode>,
)
