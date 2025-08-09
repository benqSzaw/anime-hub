import { CSSProperties } from 'react';

const body: CSSProperties = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f4f4f4',
  color: '#000',
  paddingTop: '20px',
  margin: 'auto',
  maxWidth: '400px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
  textAlign: 'center',
};

const paragraph: CSSProperties = {
  fontSize: '16px',
  lineHeight: '1.5',
};

const heading: CSSProperties = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#000',
  marginBottom: '15px',
};

const mutedText: CSSProperties = {
  fontSize: '14px',
  color: '#999999',
  lineHeight: '1.5',
};

const link: CSSProperties = {
  textDecoration: 'underline',
  fontWeight: 'bold',
};

const footer: CSSProperties = {
  fontSize: '13px',
  color: '#999999',
};

const image: CSSProperties = {
  margin: '0 auto',
};

export const styles = {
  body,
  paragraph,
  heading,
  mutedText,
  link,
  image,
  footer,
};
