import { useEffect } from 'react'

const TgBackButton = () => {
  useEffect(() => {
    const tg = window.Telegram.WebApp
    tg.BackButton.show()
    const handleBackButtonClick = () => {
      window.history.back()
    }
    tg.BackButton.onClick(handleBackButtonClick)


    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchMove = (e) => {
      touchEndX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = () => {
      if (touchEndX > touchStartX + 50) {
        window.history.back();
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      tg.BackButton.offClick(handleBackButtonClick)
      tg.BackButton.hide();
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [])

  return null
};

export default TgBackButton