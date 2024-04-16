import React from 'react';
import { Link } from 'react-router-dom';
import Quote from './Quote';
import PieChart from './Piechart.js'; // Make sure the import path is correct
import "../App.css";

export default function Home(props) {
  console.log(props.data);
  return (
    <div className='home-body'>
      <Quote/>
      <div>
        <p className='home-p1'>
          🎉 Welcome to Your Financial Adventure with <i><b>Cash Control</b></i> 🚀
          Ready to embark on an exhilarating journey towards financial empowerment and success? Look no further than <i><b>Cash Control</b></i>! Whether you're dreaming of a secure future, chasing your passions, or simply aiming to take charge of your finances, you've landed in the perfect spot.
          Our innovative platform seamlessly merges cutting-edge technology with expert guidance to make navigating the world of personal finance a breeze. Dive into interactive learning experiences, uncover personalized insights, and receive actionable advice tailored just for you. Say goodbye to financial stress and hello to confidence and clarity!
          Join the thriving community of thousands of users who are already revolutionizing their financial lives with <i><b>Cash Control</b></i>. It's time to seize control, set ambitious goals, and unleash your full potential today.
          Let's embark on this exhilarating journey together! 💪💼✨
        </p>
        <div className='get'>
          <Link to="/profile" className='getsa'>
            <button className='gets'>Get Started</button>
          </Link>                       
        </div>
      </div>
    </div>
  );
}
