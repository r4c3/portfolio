import { useState } from 'react';

const ContactLink = ({where, text}) => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  }
  const handleMouseLeave = () => {
    setIsHover(false);
  }

  const styles = {
    link: {
      borderRadius: '1em',
      padding: '0.7em 1.9em'
    },
    text: {
      textDecoration: 'underline',
      textDecorationColor: isHover ? 'var(--ac)' : 'transparent',
      color: isHover ? 'var(--tx)' : 'var(--ac)',
      transition: 'all 0.3s ease'
    }
  };

  return (
    <a style={styles.link} href={where} target="_blank" rel="noreferrer"><h2 style={styles.text} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{text}</h2></a>
  );
}

export default ContactLink;