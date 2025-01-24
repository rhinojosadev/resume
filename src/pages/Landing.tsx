import type { Component } from 'solid-js';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';

const Landing: Component = () => {
  return (
    <div class="bg-gray-700 h-screen">
      <Header />
      <Hero/>
      <Skills/>
      <Projects/>
    </div>
  );
};

export default Landing;
