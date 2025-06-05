const useAnimation = (type = 'fade-up', delay = 0) => {
  return {
    type,
    delay,
    duration: 1000,
    easing: 'ease-in-out',
    once: true
  };
};

export default useAnimation; 