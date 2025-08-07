document.addEventListener('DOMContentLoaded', function() {
    
    const ticker = document.querySelector('.ticker');
    if (ticker) {
        const tickerContent = ticker.innerHTML;
        ticker.innerHTML = tickerContent + tickerContent;
    }

    const glitchElement = document.querySelector('.glitch');
    if (glitchElement) {
        setInterval(() => {
            glitchElement.style.animation = 'none';
            setTimeout(() => {
                glitchElement.style.animation = '';
            }, 100);
        }, 3000 + Math.random() * 7000);
    }

    const quotes = document.querySelectorAll('.quote');
    quotes.forEach((quote, index) => {
        quote.style.animationDelay = `${index * 0.1}s`;
        quote.style.animation = 'fadeIn 0.5s ease-in-out forwards';
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateX(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(style);

    const tokenValues = document.querySelectorAll('.token-value');
    tokenValues.forEach(value => {
        value.addEventListener('mouseenter', function() {
            const originalText = this.textContent;
            const alternatives = ['???', 'ERROR', 'NaN', '∞', 'SOON™', 'ASK CFO'];
            this.textContent = alternatives[Math.floor(Math.random() * alternatives.length)];
            
            setTimeout(() => {
                this.textContent = originalText;
            }, 1000);
        });
    });

    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('404: Feature not found. We\'re not rugging, we\'re restructuring.');
        });
    });

    const warningBox = document.querySelector('.warning-box h3');
    if (warningBox) {
        setInterval(() => {
            warningBox.style.transform = 'scale(1.1)';
            setTimeout(() => {
                warningBox.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    }

    console.log('%c$BS - BALANCE SHEET', 'font-size: 30px; font-weight: bold; color: #FFD700; text-shadow: 2px 2px 4px rgba(255, 59, 48, 0.5);');
    console.log('%cCFO: Literally a dog', 'font-size: 14px; color: #FF3B30;');
    console.log('%cRunway: Infinite (never took off)', 'font-size: 14px; color: #888;');
    console.log('%cNOT FINANCIAL ADVICE', 'font-size: 20px; font-weight: bold; color: #FF3B30; background: #FFD700; padding: 5px;');

    let chartAngle = -15;
    const chartBg = document.querySelector('.chart-bg::after');
    if (chartBg) {
        setInterval(() => {
            chartAngle += (Math.random() - 0.5) * 5;
            chartAngle = Math.max(-30, Math.min(-5, chartAngle));
            document.documentElement.style.setProperty('--chart-angle', `${chartAngle}deg`);
        }, 2000);
    }

});