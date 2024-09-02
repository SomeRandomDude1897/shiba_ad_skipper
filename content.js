function clickBackButton()
{
    history.back();
    skipprocess = false;
    clickMuteButton();
}

function clickNextButton() {
    const nextButton = document.querySelector('.ytp-next-button');
  
    // Если кнопка найдена и не отключена
    try  {
        nextButton.click();
    } catch (error) {
      console.error(error);
    }
  }
function clickMuteButton() {
    const muteButton = document.querySelector('.ytp-mute-button');
  
    // Если кнопка найдена и не отключена
    try  {
        muteButton.click();
    } catch (error) {
      console.error(error);
    }
}

  let currentVideoId = '';
  let skipprocess = false;
  
  function checkForVideoChange() {
    if (skipprocess === false)
    {
      document.querySelectorAll('.ytp-visit-advertiser-link__text').forEach((spanElement) => {
        if (spanElement.textContent.trim().length > 0) {
            skipprocess = true;
            clickMuteButton();
            setTimeout(() => {clickNextButton()}, 200);
            setTimeout(() => {clickBackButton()}, 600);
            
        }
    })
    }
  }

  // Проверка при загрузке страницы
  document.addEventListener('DOMContentLoaded', () => {
      currentVideoId = getCurrentVideoId();
      checkForVideoChange();
  });
  
  setInterval(checkForVideoChange, 100);