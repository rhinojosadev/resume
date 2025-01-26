import type { Component } from 'solid-js';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';

const Landing: Component = () => {
  return (
    <div class="bg-gray-700 h-screen">
      <Header />
      <Hero/>
    </div>
  );
};

export default Landing;
