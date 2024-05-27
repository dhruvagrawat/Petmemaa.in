import React from "react";
import services1 from "../../../../Assets/Services/services1.webp";
import services2 from "../../../../Assets/Services/services2.webp";
import services3 from "../../../../Assets/Services/services3.webp";
import services4 from "../../../../Assets/Services/services4.webp";
import {
  Title,
  SubText,
  ServicesContainer,
  ServicesWrapper,
  ServicesRow,
  Column1,
  Column2,
  Column3,
  Column4,
  Column5,
  Column6,
  Column7,
  Column8,
  TitleServices,
  TitleContainer,
  StyledLink,
} from "./ServiceElements";

const Services = () => {
  return (
    <>
      <TitleContainer>
        <Title>Our Services</Title>
        <SubText>
          At Pet Me Maa, we pamper pets like royalty because even fur babies
          deserve a good hair day and a wagging tail time!
        </SubText>
      </TitleContainer>

      <ServicesContainer>
        <ServicesWrapper>
          <ServicesRow>
            <Column1>
              <img src={services1} style={{ width: "100%" }} alt="services1" />
            </Column1>
            <Column2>
              <TitleServices>Pet Boarding</TitleServices>
              <SubText>
                Planning a trip or need a safe place for your pet to stay while
                you're at work? Our boarding and daycare facilities provide a
                comfortable and secure environment where your pet can socialize,
                exercise, and relax under the supervision of our caring staff.
              </SubText>
              <StyledLink
                to="https://styled-components.com/docs/basics"
                target="_blank"
              >
                View Services ›
              </StyledLink>
            </Column2>

            <Column3>
              <TitleServices>Veterinary Consultation</TitleServices>
              <SubText>
                We provide top-tier veterinary consultations with a focus on
                your pet's well-being. Our team of dedicated and experienced
                veterinarians is committed to offering personalized care and
                expert advice to keep your furry family members happy and
                healthy.
              </SubText>
              <StyledLink
                to="https://styled-components.com/docs/basics"
                target="_blank"
              >
                View Services ›
              </StyledLink>
            </Column3>
            <Column4>
              <img src={services2} style={{ width: "100%" }} alt="services2" />
            </Column4>

            <Column5>
              <img src={services3} style={{ width: "100%" }} alt="services1" />
            </Column5>
            <Column6>
              <TitleServices>Pet Grooming</TitleServices>
              <SubText>
                Treat your pet to a day of pampering with our professional
                grooming services. From baths and brush-outs to breed-specific
                haircuts and nail trims, we'll help your pet look and feel their
                best.Indulge your pet with our luxurious spa treatments,
                including soothing massages, moisturizing paw treatments, and
                aromatherapy baths. Our spa services are designed to promote
                relaxation, rejuvenation, and overall well-being.
              </SubText>
              <StyledLink
                to="https://styled-components.com/docs/basics"
                target="_blank"
              >
                View Services ›
              </StyledLink>
            </Column6>

            <Column7>
              <TitleServices>Pet Schooling</TitleServices>
              <SubText>
                Training and playtime are not only fun for your pet but also
                essential for their overall health and well-being. Regular
                mental and physical stimulation can help prevent boredom, reduce
                stress and anxiety, and strengthen the bond between you and your
                pet.
              </SubText>
              <StyledLink
                to="https://styled-components.com/docs/basics"
                target="_blank"
              >
                View Services ›
              </StyledLink>
            </Column7>
            <Column8>
              <img src={services4} style={{ width: "100%" }} alt="services2" />
            </Column8>
          </ServicesRow>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
