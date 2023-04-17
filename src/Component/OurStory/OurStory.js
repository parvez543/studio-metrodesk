import React from 'react';
import "./OurStory.css"
import dosir from "../../assets/images/about-story.jpg"

const OurStory = () => {
    return (
        <div className='container mx-auto px-10 lg:px-20 2xl:px-56 py-20'>
            <div>
                <div className='grid lg:grid-cols-2 justify-start gap-12'>
                    <div className='text-left text-lg lg:w-[500px] text-gray-700'>
                        <h2 className='mb-6 text-3xl sm:text-4xl md:text-5xl font-semibold text-left text-[#7A80BD]'>Our Story</h2>
                        <p className='mb-3'>My name is Md. Abdul Hashib (Bipu), founder of STUDIO METRODESK. I'll start by saying this: I never thought I would be a creative graphic designer, let alone own a 24/7/365 operated image editing company with 100+ people working full-time. But as a kid, I was a visual and creative little person.</p>
                        <p>I grew up in Shajadpur, a beautiful countryside neighborhood in Bangladesh. Like any other middle-class family in the 80's - the pre-internet and pre-technology days - where we were actually forced to be imaginative. We'd spend hours in the sunshine, drawing fun things on the chalkboard, walking around the neighborhood and playing with other kids. I think that's where my obsession with creativity and design began.</p>
                    </div>
                    <div>
                        <img src={dosir} className="lg:w-[450px] flex mx-auto" alt="Founder And CEO of Studio MetroDesk" />
                    </div>
                </div>
                <div className='text-left mt-5 text-lg text-gray-700'>
                    <p className='mb-6'>Throughout my schooling, I found myself obsessing over creativity and finding a new love for design through assigned school projects. Whether it was the science fair, a paper, or some other assignment - I got myself through the actual work of the project by the excitement of the design portion of it. Pairing cute fonts for a written assignment, cutting out interesting pictures from magazines for a poster - you name it, if it required something visually appealing, I loved working on it. Over time, I realized I really found joy in creating and designing which is why I decided to study Graphic Design in college — where I excelled in both creative thinking and graphics design.</p>
                    <p>I landed a job out of college with the #1 printing and publishing company, Azad Products, as a Visual Designer. It was the perfect opportunity to combine the creative thinking and design skills I had learned and perfected before and throughout college with my love of making things look beautiful.</p>
                    <p className='mb-6'>After working over two years at Azad Products and four years at Right Brain Solution as an Interface Architect Designer, I truly started thinking about setting up an image editing company where I can help more people in my community by creating more jobs. Back then, working with global companies by setting up an outsourcing company concept has been booming in Bangladesh. So I got lucky becoming one of the early adopters of the global outsourcing concept, leveraging my creative and design skills.</p>
                </div>
            </div>
        </div>
    );
};

export default OurStory;