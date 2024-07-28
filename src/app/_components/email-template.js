import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import * as React from 'react';

export const EmailTemplate = ({
    body,
}) => (
    <Html>
        <Head />
        <Preview>
            The Ecommerce Platform For Your Digital Products - Search now for your future
        </Preview>
        <Body style={main}>
            <Container style={container}>
                <Img
                    src='https://res.cloudinary.com/ddfzikgiz/image/upload/v1704687428/itelm_ryakt_f_50_dqyqh_e31f29dc71.png'
                    width="420"
                    height="300"
                    alt="Koala"
                    style={logo}
                />
                <Text style={paragraph}>Hi {body.fullName},</Text>
                <Text style={paragraph}>
                    Thank you for purchasing on Sleem Tech Ecommerce. Click the button below to download all the digital content.
                </Text>
                <Section style={btnContainer}>
                    <Button pX={12} pY={12}
                        style={button}
                        href="https://res.cloudinary.com/ddfzikgiz/image/upload/v1704313420/Nextpreview_564bd5e6fd.png">
                        Download
                    </Button>
                </Section>
                <Text style={paragraph}>
                    Best,
                    <br />
                    The Sleem Tech team
                </Text>
                <Hr style={hr} />
                <Text style={footer}>Subscribe to Ali Sleem</Text>
            </Container>
        </Body>
    </Html>
);

const main = {
    backgroundColor: '#181818',
    color: '#ffffff',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
};

const logo = {
    margin: '0 auto',
};

const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
    color: '#ffffff',
};

const btnContainer = {
    textAlign: 'center',
};

const button = {
    backgroundColor: '#5F51E8',
    borderRadius: '3px',
    color: '#ffffff',
    fontSize: '16px',
    textDecoration: 'none',
    textAlign: 'center',
    display: 'block',
};

const hr = {
    borderColor: '#444444',
    margin: '20px 0',
};

const footer = {
    color: '#8898aa',
    fontSize: '12px',
};
