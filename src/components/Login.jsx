import styled from 'styled-components';

export default function Login() {
    return (
        <Container>
            <Content>
                <CTA>
                    <FlavorTitle>Stream more of what you love 🚀</FlavorTitle>
                    <CTALogoOne src="src/assets/images/cta-logo-one.svg" />
                    <Pricing> Starting at <Price>$9.99</Price>/month </Pricing>
                    <SignUp> GET IT NOW </SignUp>
                    <Description>
                    Choose a Disney Plan to get started: With all the best Disney+ and Hulu titles, including epic sports from ESPN+
                    </Description>
                    <CTALogoTwo src='src\assets\images\cta-logo-two.png'/>
                    <Footer>
                    U.S. residents, 18+ only. Offer valid for eligible subscribers only. Select Hulu content available via Disney+ with valid Hulu and Disney+ subscriptions; additional content only available via Hulu app. © 2024 Disney and its related entities. Additional terms apply.

                    All of these and more now streaming on Disney+, Hulu, and ESPN+ with the Disney Bundle.
                    </Footer>
                </CTA>
                <BgImage />
            </Content>
        </Container>
    );
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("src/assets/images/login-background.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

const CTA = styled.div`
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const CTALogoOne = styled.img`
    margin-bottom:12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;

const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
`;

const Pricing = styled.span`
    color: grey;
    display: inline;
    font-size: 18px;
    padding: 0 0 20px;
`;
const Price = styled.span`
    color: #f9f9f9;
    display: inline;
    font-size: 18px;
    padding: 0 0 20px;
`;

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width:100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover {
        background-color: #0483ee;
    }
`;

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 15px;
    font-weight: bold;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: .5px;
`;

const FlavorTitle = styled.h2`
    color: #f9f9f9;
`;

const Footer = styled.p`
    color: grey;
    font-size: 11px;
`;