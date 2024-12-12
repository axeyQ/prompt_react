import React, { useEffect, useState } from 'react';

const Menu = ({ open, children }) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const styles = {
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: isOpen ? '100vh' : 0,
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      background: '#fafafa',
      opacity: 0.95,
      color: '#000',
      transition: 'height 0.3s ease',
      zIndex: 2,
    },
    menuList: {
      paddingTop: '3rem',
    },
  };

  return <div style={styles.container}>{isOpen && <div style={styles.menuList}>{children}</div>}</div>;
};

export default Menu;
