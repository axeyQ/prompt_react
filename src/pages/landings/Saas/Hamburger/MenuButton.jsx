import React, { useEffect, useState } from 'react';

const MenuButton = ({ open, onClick, color = 'black' }) => {
  const [isOpen, setIsOpen] = useState(open);
  const [buttonColor, setButtonColor] = useState(color);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (onClick) onClick();
  };

  const styles = {
    container: {
      height: '32px',
      width: '32px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      padding: '4px',
    },
    line: {
      height: '2px',
      width: '20px',
      background: "black",
      transition: 'all 0.2s ease',
    },
    lineTop: {
      transform: isOpen ? 'rotate(45deg)' : 'none',
      transformOrigin: 'top left',
      marginBottom: '5px',
    },
    lineMiddle: {
      opacity: isOpen ? 0 : 1,
      transform: isOpen ? 'translateX(-16px)' : 'none',
    },
    lineBottom: {
      transform: isOpen ? 'translateX(-1px) rotate(-45deg)' : 'none',
      transformOrigin: 'top left',
      marginTop: '5px',
    },
  };

  return (
    <div style={styles.container} onClick={handleClick}>
      <div style={{ ...styles.line, ...styles.lineTop }} />
      <div style={{ ...styles.line, ...styles.lineMiddle }} />
      <div style={{ ...styles.line, ...styles.lineBottom }} />
    </div>
  );
};

export default MenuButton;
