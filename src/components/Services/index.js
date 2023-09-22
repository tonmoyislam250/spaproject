import React from 'react';
import Icon1 from '../../images/pic1.jpg';
import Icon2 from '../../images/pic2.jpg';
import Icon3 from '../../images/pic3.jpg';
import { ServicesContainer,
        ServicesH1,
        ServicesWrapper,
        ServicesCard,
        ServicesIcon,
        ServicesH2,
        ServicesP 
        } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Culinary Enthusiast</ServicesH2>
                    <ServicesP> Food vloggers are typically passionate about all things food. They may have a deep love for cooking, baking, eating, or exploring different cuisines and flavors.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Video Content Creator</ServicesH2>
                    <ServicesP>Food vloggers use their video production skills to capture and showcase their culinary adventures.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Waiter Services</ServicesH2>
                    <ServicesP>Waiter services typically refer to the services provided by waitstaff or servers in restaurants, cafes, bars, and other food service establishments.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
