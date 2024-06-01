import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar/Navbar'
import '../Services/services.css'

// asset imports 
import head from "../../Assets/Cafe/head.png"
import line from "../../Assets/Cafe/line.png"
import vector from "../../Assets/Feedback/Vector.webp";
import vector2 from "../../Assets/Feedback/Vector2.webp";
import cafer from '../../Assets/Pageservices/cafer.png'
import celdog from '../../Assets/Pageservices/celdog.png'
import fun1 from '../../Assets/Pageservices/fun1.png'
import fun2 from '../../Assets/Pageservices/fun2.png'
import fun3 from '../../Assets/Pageservices/fun3.png'
import fun4 from '../../Assets/Pageservices/fun4.png'
import groom from '../../Assets/Pageservices/groom.png'
import house from '../../Assets/Pageservices/house.png'
import mand from '../../Assets/Pageservices/mand.png'
import midassest from '../../Assets/Pageservices/midassest.png'
import top from '../../Assets/Pageservices/top.png'
import vet from '../../Assets/Pageservices/vet.png'



const Services = () => {
  return (
    <>
      <Navbar />
      <div className='body'>

        <div className='frame1'>

          <div>
            <p>Our Services</p>
            <p>We understand that pets are more than just companions, they're family.That's why we offer a complete suite of services designed to keep your furry friend happy, healthy, and entertained</p>
          </div>
          <div>
            <img src={top} alt="top" />
          </div>

        </div>
        <div className='frame2'>
          <div>
            <img src={house} alt='house' />
          </div>
          <div>
            <p>Pet Boarding🏠🐶🐾</p>
            <p>A place where pets have their own pawsome staycation! We're not
              just a pet boarding facility, we're a home away from home filled with
              fun, cuddles, and all the love your pet deserves.
              <br></br>

              Here's why your pet will love staying with us:
              <br></br>
              <br></br>


              <b>Playful Adventures:</b> Spacious play areas, both indoors and
              outdoors, for your pup to zoom around or your kitty to explore.
              <br></br>
              <br></br>


              <b>Cozy Comforts: </b>Comfy beds, personalized attention, and plenty of
              belly rubs to keep your pet feeling relaxed and loved.
              <br></br>
              <br></br>


              <b>Safe & Secure:</b> Peace of mind knowing your pet is in a
              safe, supervised environment. We have separate areas for dogs and
              cats, and our staff is trained in pet care and safety.
              <br></br>
              <br></br>


              <b>Fun & Games:</b> Enrichment activities like puzzle toys, playtime with
              other furry friends (upon approval), and even pool dips (for the pups
              who love to splash!)
              <br></br>
              <br></br>


              <b>Home Away From Home Touches:</b> We can personalize your pet's stay
              with familiar toys, treats you provide, and even video calls so you can
              check in on their wagging tails or purrfect naps!</p>
            <br></br>
            <br></br>
            <button className='btn'>Schedule an appointment</button>
          </div>
        </div>
        <div>
          <img className='head2' src={midassest} alt='mid' />
        </div>

        <div className='frame1'>
          
          <div>
          <p>Pet Grooming 🐩🐶🦮</p>
            <b>Tailored Services</b>: From a simple bath to a full-blown haircut, we offer a variety of
            services to suit your pet's needs and breed.
            <br></br>
            <br></br>


            <b>Gentle & Expert Care:</b> Our groomers are highly trained and passionate about animal
            care. They'll handle your pet with the utmost gentleness while achieving a flawless and
            stylish look.
            <br></br>
            <br></br>


            <b>Happy & Healthy Results:</b> We use top-of-the-line pet products to ensure a healthy and
            radiant coat. Your pet will leave feeling refreshed, pampered, and looking their absolute
            best!
            <br></br>
            <br></br>
            <button className='btn'>Schedule an appointment</button>

          </div>
          <div>
            <img src={groom} alt='groom' />

          </div>
        </div>
        <div className='frame3'>
          <div>
            <img className='vector' src={vector2} alt='vector' />
          </div>
          <div>
            <p><b>Unleash the Fun</b>
              <br></br>

              Playground and Pool</p>
            <br></br>
            <p>Does your furry friend deserve a day of epic play? Look no further than our
              Pawsome Playground & Pool! We've designed a space where your pet can
              run, jump, splash, and socialize in a safe and stimulating environment.</p>
          </div>
          <div>
            <img className='vector2' src={vector} alt='vector2' />
          </div>
        </div>

        <div className='funsl'>
          <div className='funb'>
            <div>
              <img src={fun1} alt='fun1' />
              <p>Spacious Playgrounds</p>
              <p>Spacious play areas, both indoors and outdoors</p>
              {/* img */}
            </div>
            <div>
              <img src={fun2} alt='fun12' />
              <p>Socialization Pool</p>
              <p>Designated Pools for a refreshing dip</p>
              {/* img */}
            </div>
          </div>
          <div className='funb'>
            <div>
              <img src={fun3} alt='fun13' />
              <p>Safe & Secure</p>
              <p>Keeping your pet feeling relaxed and loved</p>
              {/* img */}
            </div>
            <div>
              <img src={fun4} alt='fun14' />
              <p>Enrichment activities with other furry friends</p>
              <p>Fun & Games</p>
              {/* img */}
            </div>
          </div>
        </div>

        <div className='frame2'>
          <div>
            <img src={vet} alt='vet' />
          </div>
          <div>
            <p>
              Veterinary Consultation
            </p>
            <p>Here's why we're the purrfect choice for your pet's well-being:

              <b>Caring & Compassionate Team:</b> Our experienced veterinarians and staff are
              passionate about animal health and dedicated to providing top-notch care
              with a gentle touch.


              <b>Tailored Consultations:</b> We take the time to listen to your concerns and
              understand your pet's unique needs.


              <b>Modern Technology & Techniques:</b> We utilize advanced equipment and
              diagnostics to ensure accurate diagnoses and effective treatment plans.


              <b>Comfortable & Welcoming Environment:</b> We understand vet visits can be
              stressful for pets, so we've created a calm and friendly atmosphere to keep
              your furry friend relaxed.</p>
            <button className='btn'>Schedule an appointment</button>

          </div>
        </div>

        <div className='frame1'>
          <div>
            <p>Pet Schooling 🏫🐶🐾</p>
            <p>Does your furry friend have a thirst for knowledge
              (and maybe a few treats)? At The Wags & Whiskers Wisdom School, we
              believe every pet deserves a chance to learn and grow!

              <b>Tailored Training:</b> We offer a variety of classes designed for all
              ages, breeds, and skill levels. From basic obedience to fun tricks and
              socialization, we have something to help your pet shine!


              <b>Positive Reinforcement Techniques:</b> Our experienced trainers use gentle
              and positive methods to keep your pet motivated and engaged in learning.


              <b>Focus on Fun:</b> Learning should be enjoyable! Our classes are filled with
              games, activities, and positive reinforcement to make training a fun
              bonding experience for you and your pet.


              <b>Building Confidence:</b> Well-trained pets are happy pets! Our program helps
              your pet develop confidence,communication skills, and good manners.</p>
            <button className='btn'>Inquire Now</button>
          </div>
          <div>
            <img src={mand} alt='mandog' />
          </div>
        </div>

        <div>
          <img className='head2' src={cafer} alt='cafer' />
        </div>

        <div className='mainhead'>
          <img className='head' src={head} alt='head' />
          <img className='line' src={line} alt='line' />
        </div>

        <div className='center'>
          <p>
            Cafe Pooch is your pup's paw-some place to play and connect. We bring together pet lovers for fun
            meet-ups and cozy moments with their furry companions. Whether you're looking to make new furever friends or just relax with your pup,our cafe is the perfect spot for unforgettable memories.
          </p>
          <button className='btn'>Check out the Menu</button>
        </div>

        <div className='frame1'>
          <div>
            <img src={celdog} alt='celdog' />
          </div>
          <div>
            <p>
              Looking for a tail-wagging good time?🐾
            </p>
            <p>
              <b>Pupcake Parties:</b> Celebrate your pet's birthday in style! Book a private table for your pup
              and their pals. We'll provide adorable pupcakes, festive decorations, and even a birthday
              bandana for the guest of honor!


              <b>Pawsome Talks:</b> Looking to learn more about pet care, training, or fun activities? We'll
              be hosting regular talks with experts on a variety of topics to keep you and your furry
              friend happy and healthy.


              <b>Events and Parties:</b> Stay tuned for upcoming events and promotions by following us on
              social media or checking out our website. At Cafe Pooch, we believe in creating lasting
              memories for pets and their families. So come on down and let the pawty begin!
            </p>
            <button className='btn'>Book a Reservation Now</button>
          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default Services