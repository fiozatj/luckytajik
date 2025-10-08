document.addEventListener('DOMContentLoaded', () => {

    const getSignalBtn = document.getElementById('getSignalBtn');
    const signalTextElement = document.getElementById('signalText');
    
    let isGenerating = false;
    let cooldownInterval;

    function startCooldownTimer(duration) {
        let timeLeft = Math.ceil(duration / 1000);

        getSignalBtn.textContent = `Жди ${timeLeft}с`;

        cooldownInterval = setInterval(() => {
            timeLeft--;
            if (timeLeft > 0) {
                getSignalBtn.textContent = `Жди ${timeLeft}с`;
            } else {
                clearInterval(cooldownInterval);
                signalTextElement.textContent = 'Ждем...';
                getSignalBtn.textContent = 'Получить Сигнал';
                getSignalBtn.disabled = false;
                isGenerating = false;
            }
        }, 1000);
    }

    function generateSignal() {
        if (isGenerating) {
            return;
        }

        isGenerating = true;
        getSignalBtn.disabled = true;
        getSignalBtn.textContent = 'Анализ...';
        signalTextElement.textContent = 'Ждем...';

        const analysisDelay = Math.random() * 2000 + 2000;

        setTimeout(() => {
            const randomMultiplier = (Math.random() * (5.0 - 1.1) + 1.1).toFixed(2);
            const displayText = `${randomMultiplier}x`;
            signalTextElement.textContent = displayText;

            const cooldownTime = 10000;
            startCooldownTimer(cooldownTime);

        }, analysisDelay);
    }

    if (getSignalBtn) {
        getSignalBtn.addEventListener('click', generateSignal);
    } else {
        console.error("Кнопка с ID 'getSignalBtn' не найдена.");
    }
});