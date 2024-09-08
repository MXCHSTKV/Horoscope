import { useEffect } from 'react'

const TgBackButton = () => {
  useEffect(() => {
    const tg = window.Telegram.WebApp

    tg.BackButton.show()

    const handleBackButtonClick = () => {
      window.history.back()
    }

    tg.BackButton.onClick(handleBackButtonClick)

    return () => {
      tg.BackButton.offClick(handleBackButtonClick)
      tg.BackButton.hide()
    };
  }, [])

  return null
};

export default TgBackButton